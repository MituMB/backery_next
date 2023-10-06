"use client"
import useSWR from 'swr'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const fetcher = (...args) => fetch(...args).then(res => res.json())
const SingleBlog = () => {

  // const [data, setData] = useState(null);
  const params = useParams()
  console.log(params)
  const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts/${params.id}`, fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  //     const data = await response.json();
  //     setData(data);
  //     // console.log(data);
  //   };

  //   fetchData();
  // }, [`${params.id}`])
  
  return (
    <div className='flex justify-center flex-col'>
      <h1 className='capitalize'><b>{data?.title}</b></h1>
      <p>{data?.body}</p>
    </div>
  )
}

export default SingleBlog