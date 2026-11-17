import { docsLlms } from '@/lib/source'

export function GET() {
  return docsLlms.serve('/llms-full.txt')
}
