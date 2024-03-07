import styles from './blog.module.css'
import PostCard from '@/component/PostCard/PostCard'
import { getPost, getPosts } from '@/lib/data'
// FETCH DATA USING AN API
// const getData = async ()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:3600}});
//     if(!res.ok){
//        throw new Error("Something went wrong");
//     }
//     return res.json();
// }


const BlogPage = async () => {
   // const posts = await getData();
   const posts = await getPosts();
  return (
    <div className={styles.container}>
    {posts.map(item=>(
       <div className={styles.posts} key={item.id}>
          <PostCard post={item}/>
       </div>
    ))}
     
    </div>
  )
}

export default BlogPage
