import { client } from '../libs/client'
import Link from 'next/link'
import Layout from '../components/Layout'
const Home = ({ blogs }: any) => {
  return (
    <Layout>
      <main className="flex flex-wrap">
        {blogs.map((blog: any) => (
          <div
            className="flex flex-col w-full md:w-1/3 flex-grow flex-shrink"
            key={blog.id}
          >
            <div className="flex-1 m-4 p-2 pb-8 border-2 hover:shadow-2xl hover:bg-gray-300 rounded">
              <Link href={`/blogs/${blog.id}`}>
                <a>
                  <img
                    src={blog.eyecatch.url}
                    alt="eycatch"
                    className="w-full h-full"
                  />
                  <span className="text-xl">{blog.title}</span>
                </a>
              </Link>
            </div>
          </div>
        ))}
        {/* TODO: === 1のケース、md以下の時は表示しない */}
        {blogs.length % 3 === 2 ? (
          <div className="flex flex-col w-full md:w-1/3 flex-grow flex-shrink">
            <div className="flex-1 m-4 p-2 pb-8"></div>
          </div>
        ) : blogs.length % 3 === 1 ? (
          <>
            <div className="flex flex-col w-full md:w-1/3 flex-grow flex-shrink">
              <div className="flex-1 m-4 p-2 pb-8"></div>
            </div>
            <div className="flex flex-col w-full md:w-1/3 flex-grow flex-shrink">
              <div className="flex-1 m-4 p-2 pb-8"></div>
            </div>
          </>
        ) : null}
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  // console.log(data.contents)
  return {
    props: {
      blogs: data.contents,
    },
  }
}
export default Home
