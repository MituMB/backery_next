"use client"
import React from 'react'
// import { useSession } from 'next-auth/react';
// import { useRouter } from "next/navigation";
const write = () => {
//   const session = useSession();
//   const router = useRouter();
//   if (session.status === "unauthenticated") {
//     router?.push("/login");
//  }
  return (
    <div>
      write

      {/* {session.status == "authenticated"?<>
      <h2>Welcome {session.data.user.name}</h2>
      </>:<></>} */}
    </div>
  )
}

export default write