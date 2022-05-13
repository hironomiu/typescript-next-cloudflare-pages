import { client } from '../libs/client'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
const Home = ({ blogs }: any) => {
  return (
    <Layout>
      <main className="flex flex-wrap">
        {blogs.map((blog: any) => (
          <div
            className='className="flex flex-col m-4 w-full md:w-1/3 flex-grow flex-shrink"'
            key={blog.id}
          >
            <div className="flex-1 p-2 border-2 hover:shadow-2xl hover:bg-gray-300 rounded">
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
