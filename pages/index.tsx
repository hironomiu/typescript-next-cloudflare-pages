import { client } from '../libs/client'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
const Home = ({ blogs }: any) => {
  return (
    <Layout>
      <div>
        {blogs.map((blog: any) => (
          <div key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <a>
                <Image src={blog.eyecatch.url} height="200" width="300" />
                <div>{blog.title}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
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
