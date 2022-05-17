import { client } from '../../libs/client'
import Link from 'next/link'
import Layout from '../../components/Layout'

const BlogId = ({ data }: any) => {
  console.log('data:', data)
  return (
    <Layout>
      <div className="m-2 flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-3xl font-bold">{data.title}</span>
            <span className="text-sm">{`(投稿日:${new Date(
              data.createdAt
            ).getFullYear()}年${
              new Date(data.createdAt).getMonth() + 1
            }月${new Date(data.createdAt).getDate()}日)`}</span>
            <span className="text-sm">{`(更新日:${new Date(
              data.updatedAt
            ).getFullYear()}年${
              new Date(data.updatedAt).getMonth() + 1
            }月${new Date(data.updatedAt).getDate()}日)`}</span>
          </div>
          <div
            className="mt-2 blog"
            dangerouslySetInnerHTML={{
              __html: `${data.content}`,
            }}
          ></div>
        </div>
        <div className="flex justify-center my-4 text-xl ">
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
