import { client } from '../libs/client'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
const Home = ({ blogs }: any) => {
  return (
    <Layout>
      <main>
        {blogs.map((blog: any) => (
          <div key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <a>
                <img
                  src={blog.eyecatch.url}
                  alt="eycatch"
                  height="300"
                  width="400"
                />
                <div>{blog.title}</div>
              </a>
            </Link>
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
