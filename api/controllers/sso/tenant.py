from flask_restful import Resource
from services.sso_service import SSOService

class TenantSAMLSSOApi(Resource):
    def get(self, tenant_id):
        invite_token = request.args.get('invite_token')
        url = SSOService.get_saml_sso_url(tenant_id, invite_token)
        return {'url': url}

class TenantOIDCSSOApi(Resource):
    def get(self, tenant_id):
        invite_token = request.args.get('invite_token')
        result = SSOService.get_oidc_sso_url(tenant_id, invite_token)
        return result

class TenantOAuth2SSOApi(Resource):
    def get(self, tenant_id):
        invite_token = request.args.get('invite_token')
        result = SSOService.get_oauth2_sso_url(tenant_id, invite_token)
        return result

# 在 api/__init__.py 中添加路由
api.add_resource(TenantSAMLSSOApi, '/tenant/<string:tenant_id>/sso/saml/login')
api.add_resource(TenantOIDCSSOApi, '/tenant/<string:tenant_id>/sso/oidc/login')
api.add_resource(TenantOAuth2SSOApi, '/tenant/<string:tenant_id>/sso/oauth2/login') 