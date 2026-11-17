import { docsLlms } from '@/lib/source'

export const revalidate = false

export function GET() {
  return docsLlms.serve('/llms-full.txt')
}
