

import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button';
const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
        <Image src="/contact.png" alt='contact image' fill={true} className={styles.img} />

        </div>
        <div className={styles.form}>
        <input type='text' placeholder='name' className={styles.input} />
        <input type='text' placeholder='email' className={styles.input} />
        <textarea className={styles.textArea} cols="30" rows="10"></textarea>

        <Button url="#" text="Send"/>

        </div>
      </div>
    </div>
  )
}

export default contact