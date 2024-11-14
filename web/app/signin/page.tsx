'use client'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSystemFeatures } from '@/hooks/use-system-features'
import SSOAuth from './components/sso-auth'
import { SSOProtocol } from '@/types/feature'
import Link from 'next/link'
import MailAndPasswordAuth from './components/mail-and-password-auth'

const SignIn = () => {
  const { t } = useTranslation()
  const { data: systemFeatures } = useSystemFeatures()
  const [ssoProtocol, setSsoProtocol] = useState<SSOProtocol | ''>('')
  
  useEffect(() => {
    if (systemFeatures?.sso_enforced_for_signin) {
      setSsoProtocol(systemFeatures.sso_enforced_for_signin_protocol as SSOProtocol)
    }
  }, [systemFeatures])

  return (
    <div className='flex flex-col gap-6'>
      <h1 className="text-3xl font-bold">{t('login.pageTitle')}</h1>
      <p className="text-gray-600">{t('login.welcome')}</p>

      {/* 邮箱密码登录 */}
      <MailAndPasswordAuth />

      {/* SSO登录分隔线 */}
      {(systemFeatures?.enable_web_sso_switch_component || ssoProtocol) && (
        <div className='flex items-center gap-3'>
          <div className='h-[1px] bg-gray-200 flex-1' />
          <div className='text-gray-500'>{t('login.or')}</div>
          <div className='h-[1px] bg-gray-200 flex-1' />
        </div>
      )}

      {/* SSO登录按钮 */}
      {(systemFeatures?.enable_web_sso_switch_component || ssoProtocol) && (
        <SSOAuth protocol={ssoProtocol} />
      )}

      {/* 注册入口 */}
      {systemFeatures?.is_allow_register && (
        <div className="text-center">
          <span className="text-gray-500">{t('login.noAccount')} </span>
          <Link href="/signup" className="text-primary-600 hover:text-primary-700">
            {t('login.signUp')}
          </Link>
        </div>
      )}
    </div>
  )
}

export default SignIn
