import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'


// Runs at built time
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return {
    props:{ninjas: data}
  }
}

export default function Ninjas({ninjas}) {
  return (
    <div>
        <h1>All Ninjas</h1>
          
        {ninjas.map(ninja => (
        <Link  href={'/ninjas/' + ninja.id} key={ninja.id} className={styles.single}>
            <h3>{ ninja.name }</h3>
        </Link>
      ))}

    </div>
  )
}
