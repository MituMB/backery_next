import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center items-center'>
    <form className='flex flex-col gap-5  w-1/3 border p-3'>
        <h3>Signup</h3>
        <input name="user" type="text" placeholder='username' />
        <input name="password" type="text" placeholder='username' />
        <button className='bg-slate-700 text-white'>Sign up</button>
        <p>Already have an account? <Link href="/login">login</Link></p>
      </form>
    </div>
  )
}

export default Signup