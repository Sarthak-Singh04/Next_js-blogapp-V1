import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button'

function about() {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src="https://images.pexels.com/photos/2205683/pexels-photo-2205683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} alt='cover image' className={styles.img}  />
        <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <p className={styles.imgdesc}>Handcrafting award winning digital experiences</p>


        </div>
      </div>
      <div>
        <div className={styles.textContainer}>
          <div className={styles.item}>
          <h1 className={styles.title}>Who are we</h1>
          <p className={styles.desc}>The door or or gaunt bird. That this croaking bird on of within beast chamber bore, he nepenthe whispered quaff gently morrow a that borrow, from thy or in ah.</p>
          <p className={styles.desc}>The door or or gaunt bird. That this croaking bird on of within beast chamber bore, he nepenthe whispered quaff gently morrow a that borrow, from thy or in ah.</p>

          </div>
          <div className={styles.item}>

          <h1 className={styles.title}>What we do?</h1>
          <p>At be name a that volume suddenly name, at mortals nothing <br></br> i be nights now thing i i. December tapping.</p>
          <p className={styles.desc}>The door or or gaunt bird. That this croaking bird on of within beast chamber bore, he nepenthe whispered quaff gently morrow a that borrow, from thy or in ah.</p>
          <Button url="/contact" text="Contact"/>

          </div>


      
        </div>
      </div>
    </div>
  )
}

export default about