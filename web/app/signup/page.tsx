'use client'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSystemFeatures } from '@/hooks/use-system-features'
import SSOAuth from '../signin/components/sso-auth'
import { register } from '@/service/auth'
import Toast from '@/app/components/base/toast'
import Input from '@/app/components/base/input'
import Button from '@/app/components/base/button'

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
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t('login.namePlaceholder')}
            className="mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {t('login.email')}
          </label>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('login.emailPlaceholder')}
            className="mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {t('login.password')}
          </label>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={t('login.passwordPlaceholder')}
            className="mt-1"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className='w-full'
        >
          {t('login.signUp')}
        </Button>
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
          {t('login.signBtn')}
        </Link>
      </div>
    </div>
  )
}

export default SignUp 