export enum SSOProtocol {
  SAML = 'saml',
  OIDC = 'oidc',
  OAuth2 = 'oauth2',
}

export interface SystemFeatures {
  sso_enforced_for_signin: boolean
  sso_enforced_for_signin_protocol: string
  sso_enforced_for_web: boolean
  sso_enforced_for_web_protocol: string
  enable_web_sso_switch_component: boolean
  enable_email_code_login: boolean
  enable_email_password_login: boolean
  enable_social_oauth_login: boolean
  is_allow_register: boolean
  is_allow_create_workspace: boolean
}

export const defaultSystemFeatures: SystemFeatures = {
  sso_enforced_for_signin: false,
  sso_enforced_for_signin_protocol: '',
  sso_enforced_for_web: false,
  sso_enforced_for_web_protocol: '',
  enable_web_sso_switch_component: false,
  enable_email_code_login: false,
  enable_email_password_login: false,
  enable_social_oauth_login: false,
  is_allow_register: false,
  is_allow_create_workspace: false,
}
