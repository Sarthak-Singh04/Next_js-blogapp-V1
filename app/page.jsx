import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button'

export default function Home() {
  return (
   
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Let's Design something Innovative</h1>
      <p className={styles.desc}>Turng any idea into Reality.We bring together the teams from the the gloabal tech</p>
      <Button url="/portfolio" text="See our works" />
    </div>
    <div className={styles.item}>

    <Image src={Hero} className={styles.img}/>

    </div>
     
    </div>
     
 
  )
}
