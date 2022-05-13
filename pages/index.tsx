import { client } from '../libs/client'
import Link from 'next/link'
const Home = ({ blogs }: any) => {
  return (
    <div>
      {blogs.map((blog: any) => (
        <div key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>
            <a>{blog.title}</a>
          </Link>
        </div>
      ))}
    </div>
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
