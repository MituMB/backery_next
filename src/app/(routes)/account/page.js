
"use client"
// import React, { useMemo } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
const Account = () => {
    const session = useSession();
    const router = useRouter();
    
        if (session.status === "unauthenticated") {
          router?.push("/");
       }
    // useEffect(() => {
    // }, [])
    

  return (
    <div>Account

{session.status == "authenticated"?<>
      <h2>Welcome {session.data.user.name}</h2>
      </>:null}
    </div>
  )
}

export default Account