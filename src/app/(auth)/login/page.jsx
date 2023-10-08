"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router.push("/account");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };
  return (
    <div className='flex justify-center items-center'>
      <form className='flex flex-col gap-5  w-1/3 border p-3' onSubmit={handleSubmit}>
      {/* <h3>Login</h3> */}
      <button onClick={() => signIn("google")}>Login with Google</button>
        {/* <input name="user" type="text" placeholder='username' className='border'/>
        <input name="password" type="text" placeholder='password' className='border'/>
        <button className='bg-slate-800 text-white'>Save</button>
        <p>dont have an account? <Link href="/register">signup</Link></p> */}
      </form>
    </div>
  )
}

export default Login