import os

# SSO配置
ENTERPRISE_ENABLED = os.getenv('ENTERPRISE_ENABLED', 'true').lower() == 'true'
SSO_ENABLED = os.getenv('SSO_ENABLED', 'true').lower() == 'true'
ALLOW_REGISTER = os.getenv('ALLOW_REGISTER', 'true').lower() == 'true'

# 多租户配置
MULTI_TENANT_ENABLED = os.getenv('MULTI_TENANT_ENABLED', 'true').lower() == 'true'
TENANT_REGISTRATION_ENABLED = os.getenv('TENANT_REGISTRATION_ENABLED', 'true').lower() == 'true'
TENANT_SSO_ENABLED = os.getenv('TENANT_SSO_ENABLED', 'true').lower() == 'true'
TENANT_CUSTOM_DOMAIN_ENABLED = os.getenv('TENANT_CUSTOM_DOMAIN_ENABLED', 'true').lower() == 'true'