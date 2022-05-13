import { client } from '../../libs/client'
import Link from 'next/link'
import Layout from '../../components/Layout'

const BlogId = ({ data }: any) => {
  console.log('data:', data)
  return (
    <Layout>
      <div className="m-2 flex flex-col items-center">
        <div>
          <div className="text-3xl font-bold">{data.title}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${data.content}`,
            }}
          ></div>
        </div>
        <div>
          <Link href={'/'}>Top</Link>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content: any) => `/blogs/${content.id}`)

  console.log(paths)
  return { paths, fallback: false }
}

// TODO: 型
export const getStaticProps = async (context: any) => {
  console.log('id:', context.params.id)
  const data = await client.get({
    endpoint: 'blogs',
    contentId: context.params.id,
  })
  return {
    props: {
      data,
    },
  }
}

export default BlogId
