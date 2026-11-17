import { docsLlms } from '@/lib/source'

export async function GET(
  _req: Request,
  { params }: RouteContext<'/llms.mdx/[...slug]'>
) {
  const { slug } = await params
  return (
    (await docsLlms.serve(`/${slug.join('/')}`)) ??
    new Response(null, { status: 404 })
  )
}

export async function generateStaticParams() {
  const params: { path: string[] }[] = []
  for (const file of await docsLlms.files()) {
    if (!/^\/llms(?<opt>-full)?\.txt$/u.test(file))
      params.push({ path: decodeURI(file).slice(1).split('/') })
  }
  return params
}
