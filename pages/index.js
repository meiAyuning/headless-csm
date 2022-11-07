import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import UserLayout from '../components/user/UserLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const data = [{id : "001", nama:'Lia'},{id:"002",nama:"Maman"}]
  return (
    <UserLayout>
      <div className="container">
        <h1>Home</h1>
        <hr />
        <ul>
        {data.map((dat,idx)=>
          (
            <>
                <li>
                    <Link href={`/user/${dat.nama}`}>
                      <a>{dat.nama}</a>
                    </Link>
                </li>
            </>
          )
        
        )}
        </ul>
      </div>
    </UserLayout>
  )
}
