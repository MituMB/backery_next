'use client';
import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { usePathname } from 'next/navigation'

import React, { useEffect, useState } from 'react'

 const showPost = 6; // Number of articles to display initially
// const incrementInitialPostList = 4; // Number of articles to add each time the "load more" button is clicked
const blog = () => {
  // const [displayPosts, setDisplayPosts] = useState();
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(6)
  const initialPosts = posts.slice( 0, index)
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
      console.log(data);
    };

    fetchData();
  }, []);
  const loadMore = () => {
    setIndex(index + 6)
    console.log(index)
    if(posts.length >= index){
setFinished(false)
    }else{
      setFinished(true)
    }
    // if (index >= post.length) {
    //   setIsCompleted(true)
    // } else {
    //   setIsCompleted(false)
    // }
  }
  return (
    <div>
     
    
      <h3><b>totla posts:{posts.length} </b></h3>
      <div className='flex gap-5 justify-center flex-wrap'>
        
      {
        initialPosts.map((post)=>
        (
          <div className='card p-3 border w-80 shadow-md' key={post.id}>
          <Link href={`/blog/${post.id}`}> <b>{post.title}</b> </Link>
          <p className='mb-2'>{post.body}</p>
          <Link className='bg-slate-800 text-yellow-600   p-2 rounded-md' href={`/blog/${post.id}`}>Read more</Link>
        </div>
        )
        )
      }
      
      </div>
      <div className='flex justify-center flex-wrap my-5'>
          {finished?<button className='bg-red-400 text-black p-2 rounded-md' onClick={loadMore}>
            No more Posts available
            </button>:
            <button className='bg-orange-400 text-black p-2 rounded-md' onClick={loadMore}>
              Click here to read more
            </button>
          }
      </div>

    </div>
  )
}

export default blog