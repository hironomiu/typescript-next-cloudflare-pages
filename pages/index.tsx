import { client } from "../libs/client"

const Home = ({blogs}:any) => {
  return (
    <div>{blogs.map((blog:any) => (
      <div key={blog.id}>
        <span>{blog.title}</span>
        <span>{blog.content}</span>
      </div>
    ))}</div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({endpoint:'blogs'})

  console.log(data.contents)
  return {
    props:{
      blogs:data.contents
    }
  }
}
export default Home