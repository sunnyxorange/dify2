import { get } from './base'

export const getUserSAMLSSOUrl = (invite_token?: string) => {
  const url = invite_token ? `/enterprise/sso/saml/login?invite_token=${invite_token}` : '/enterprise/sso/saml/login'
  return get<{ url: string }>(url)
}

export const getUserOIDCSSOUrl = (invite_token?: string) => {
  const url = invite_token ? `/enterprise/sso/oidc/login?invite_token=${invite_token}` : '/enterprise/sso/oidc/login'
  return get<{ url: string; state: string }>(url)
}

export const getUserOAuth2SSOUrl = (invite_token?: string) => {
  const url = invite_token ? `/enterprise/sso/oauth2/login?invite_token=${invite_token}` : '/enterprise/sso/oauth2/login'
  return get<{ url: string; state: string }>(url)
}

export const getTenantSAMLSSOUrl = (tenant_id: string, invite_token?: string) => {
  const url = invite_token 
    ? `/tenant/${tenant_id}/sso/saml/login?invite_token=${invite_token}` 
    : `/tenant/${tenant_id}/sso/saml/login`
  return get<{ url: string }>(url)
}

export const getTenantOIDCSSOUrl = (tenant_id: string, invite_token?: string) => {
  const url = invite_token
    ? `/tenant/${tenant_id}/sso/oidc/login?invite_token=${invite_token}`
    : `/tenant/${tenant_id}/sso/oidc/login`
  return get<{ url: string; state: string }>(url)
}

export const getTenantOAuth2SSOUrl = (tenant_id: string, invite_token?: string) => {
  const url = invite_token
    ? `/tenant/${tenant_id}/sso/oauth2/login?invite_token=${invite_token}`
    : `/tenant/${tenant_id}/sso/oauth2/login`
  return get<{ url: string; state: string }>(url)
}
