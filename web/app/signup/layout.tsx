'use client'
import { useTranslation } from 'react-i18next'
import LogoSite from '@/app/components/base/logo/logo-site'

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <div className='flex items-center h-16 px-6 border-b border-gray-100 bg-white'>
        <LogoSite />
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <div className='w-[520px] p-6'>
          {children}
        </div>
      </div>
    </div>
  )
} 