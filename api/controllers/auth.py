from flask_restful import Resource
from services.account_service import AccountService

class RegisterApi(Resource):
    def post(self):
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        name = data.get('name')
        
        # 验证邮箱是否已注册
        if AccountService.check_email_exists(email):
            raise ValueError('Email already exists')
            
        # 创建账户
        account = AccountService.create_account(email, password, name)
        
        return {'result': 'success'}

api.add_resource(RegisterApi, '/auth/register') 