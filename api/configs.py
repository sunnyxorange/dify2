import os

# 添加多租户相关的配置项
MULTI_TENANT_ENABLED = os.getenv('MULTI_TENANT_ENABLED', 'false').lower() == 'true'
TENANT_REGISTRATION_ENABLED = os.getenv('TENANT_REGISTRATION_ENABLED', 'false').lower() == 'true'
TENANT_SSO_ENABLED = os.getenv('TENANT_SSO_ENABLED', 'false').lower() == 'true'
TENANT_CUSTOM_DOMAIN_ENABLED = os.getenv('TENANT_CUSTOM_DOMAIN_ENABLED', 'false').lower() == 'true' 