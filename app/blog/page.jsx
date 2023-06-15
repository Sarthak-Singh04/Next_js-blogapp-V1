import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
const blog = () => {
  return (
    <div className={styles.maincontainer}>
      <Link href="/testid" className={styles.container}>
        <div className={styles.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="image"
        width={400}
        height={250}
        className={styles.image}
        >

        </Image>

        </div>
        <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>

        </div>
      </Link>
      <Link href="/testid" className={styles.container}>
        <div className={styles.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="image"
        width={400}
        height={250}
        className={styles.image}
        >

        </Image>

        </div>
        <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>

        </div>
      </Link>
      <Link href="/testid" className={styles.container}>
        <div className={styles.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="image"
        width={400}
        height={250}
        className={styles.image}
        >

        </Image>

        </div>
        <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>

        </div>
      </Link>
    </div>
  
  )
}

export default blog