from flask_restful import Resource
from services.sso_service import SSOService

class EnterpriseSAMLSSOApi(Resource):
    def get(self):
        invite_token = request.args.get('invite_token')
        url = SSOService.get_saml_sso_url(None, invite_token)
        return {'url': url}

class EnterpriseOIDCSSOApi(Resource):
    def get(self):
        invite_token = request.args.get('invite_token')
        result = SSOService.get_oidc_sso_url(None, invite_token)
        return result

class EnterpriseOAuth2SSOApi(Resource):
    def get(self):
        invite_token = request.args.get('invite_token')
        result = SSOService.get_oauth2_sso_url(None, invite_token)
        return result

# 在 api/__init__.py 中添加路由
api.add_resource(EnterpriseSAMLSSOApi, '/enterprise/sso/saml/login')
api.add_resource(EnterpriseOIDCSSOApi, '/enterprise/sso/oidc/login') 
api.add_resource(EnterpriseOAuth2SSOApi, '/enterprise/sso/oauth2/login') 