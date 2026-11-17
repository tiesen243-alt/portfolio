import { docsLlms } from '@/lib/source'

export async function GET() {
  return await docsLlms.serve('/llms.txt')
}
