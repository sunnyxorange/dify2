import useSWR from 'swr'
import type { SystemFeatures } from '@/types/feature'
import { get } from '@/service/base'

const fetcher = () => get<SystemFeatures>('/features/system')

export const useSystemFeatures = () => {
  return useSWR<SystemFeatures>('systemFeatures', fetcher)
} 