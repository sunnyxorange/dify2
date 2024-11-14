from flask import redirect, url_for
from flask_restful import Resource

class SSOLoginApi(Resource):
    @setup_required
    def get(self):
        # 重定向到SSO提供商的登录页面
        return redirect(sso_provider.get_authorization_url())

class SSOCallbackApi(Resource):
    @setup_required
    def get(self):
        # 处理SSO回调，验证用户，并创建或更新本地用户
        code = request.args.get('code')
        token = sso_provider.get_token(code)
        user_info = sso_provider.get_user_info(token)
        
        # 在这里处理用户信息，创建或更新本地用户
        account = AccountService.get_or_create_sso_user(user_info)
        
        # 登录用户
        token_pair = AccountService.login(account=account, ip_address=extract_remote_ip(request))
        return {"result": "success", "data": token_pair.model_dump()}

api.add_resource(SSOLoginApi, "/sso/login")
api.add_resource(SSOCallbackApi, "/sso/callback")