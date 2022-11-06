import React, { useEffect } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const FourOFour = () => {

    const router = useRouter();
    useEffect(() => {
      setTimeout(()=>{
        router.push('/')
      }, 3000)
    
      return () => {
      }
    }, [])
    


  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Go back to the <Link href="/">Homepage</Link></p>
    </div>
  )
}

export default FourOFour