import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center'>
      <form className='flex flex-col gap-5  w-1/3 border p-3'>
      <h3>Login</h3>
        <input name="user" type="text" placeholder='username' className='border'/>
        <input name="password" type="text" placeholder='password' className='border'/>
        <button className='bg-slate-800 text-white'>Save</button>
        <p>dont have an account? <Link href="/register">signup</Link></p>
      </form>
    </div>
  )
}

export default Login