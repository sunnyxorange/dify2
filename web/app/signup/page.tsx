'use client'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSystemFeatures } from '@/hooks/use-system-features'
import SSOAuth from '../signin/components/sso-auth'
import { register } from '@/service/auth'
import Toast from '@/app/components/base/toast'

const SignUp = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { data: systemFeatures } = useSystemFeatures()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await register({ email, password, name })
      Toast.notify({
        type: 'success',
        message: t('login.registerSuccess'),
      })
      router.push('/signin')
    } catch (error: any) {
      Toast.notify({
        type: 'error',
        message: error.message || t('login.registerFailed'),
      })
    }
    setIsLoading(false)
  }

  return (
    <div className='flex flex-col gap-6'>
      <h1 className="text-3xl font-bold">{t('login.signUp')}</h1>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {t('login.name')}
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {t('login.email')}
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {t('login.password')}
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {t('login.signUp')}
        </button>
      </form>

      {/* SSO登录分隔线 */}
      {systemFeatures?.enable_web_sso_switch_component && (
        <>
          <div className='flex items-center gap-3'>
            <div className='h-[1px] bg-gray-200 flex-1' />
            <div className='text-gray-500'>{t('login.or')}</div>
            <div className='h-[1px] bg-gray-200 flex-1' />
          </div>
          <SSOAuth protocol={systemFeatures.sso_enforced_for_signin_protocol} />
        </>
      )}

      {/* 登录入口 */}
      <div className="text-center">
        <span className="text-gray-500">{t('login.haveAccount')} </span>
        <Link href="/signin" className="text-primary-600 hover:text-primary-700">
          {t('login.signIn')}
        </Link>
      </div>
    </div>
  )
}

export default SignUp 