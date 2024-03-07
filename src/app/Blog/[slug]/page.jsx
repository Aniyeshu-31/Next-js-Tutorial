import PostUser from '@/component/PostUser/PostUser'
import { Suspense } from 'react'
import Image from 'next/image'
import styles from './singlepost.module.css'
import { getPost } from '@/lib/data'


// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if (!res.ok) {
//     throw new Error('Something went wrong')
//   }
//   return res.json()
// }


const SingleBlogPage = async ({params}) => {
 
  const {slug} = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.jpg" width={350} height={500} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.details}>
          <Image src="/avatar.png" width={70} height={70} alt="" />
         { post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId = {post?.userId}/>
          </Suspense>  }
          <span className={styles.date}>Published: 1/2/2024</span>
        </div>
        <div>
          <p className={styles.description}>{post?.body}</p>
        </div>
      </div>
    </div>
  )
}
export default SingleBlogPage
