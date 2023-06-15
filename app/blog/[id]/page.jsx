import React from 'react'
import styles from "./page.module.css";
const blogpost = () => {
  const article = `The Fox Lifestyle is a fascinating subject to explore. Foxes are known for their cunning and adaptability in various environments. Their lifestyle revolves around hunting, foraging, and establishing territories. These agile creatures display incredible intelligence and social behavior within their communities.

One interesting aspect of the Fox Lifestyle is their diet. Foxes are omnivorous, meaning they consume both plant-based and animal-based food. They have a diverse palate, feeding on small mammals, birds, insects, fruits, and even scavenging for leftovers. This adaptability enables them to survive in different habitats, from forests to urban areas.

The social dynamics among foxes are captivating. They often form family units consisting of a dominant male, a female, and their offspring. Foxes communicate through a variety of vocalizations, body postures, and scent markings. These behaviors help establish boundaries, convey information, and strengthen social bonds.

The Fox Lifestyle also includes unique reproductive patterns. Foxes typically breed once a year, during the winter months. The female fox, known as a vixen, gives birth to a litter of pups after a gestation period of around two months. The parents work together to raise and protect their young until they become independent.

Observing foxes in their natural habitat provides valuable insights into their lifestyle. They exhibit remarkable agility, stealth, and adaptability, making them successful predators. Their ability to navigate complex environments and solve problems showcases their intelligence.

In conclusion, the Fox Lifestyle is a captivating subject that showcases the fascinating behaviors and adaptations of these incredible creatures. Studying their diet, social interactions, reproductive patterns, and survival skills reveals the intricate web of life in which they thrive.`;
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <img
        src="https://images.pexels.com/photos/2786709/pexels-photo-2786709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Source"
        className={styles.sourceImage}
      />
    </div>
    <div className={styles.content}>
      <h1 className={styles.title}>Modern Blog Design</h1>
      <div className={styles.author}>
        <img
          src="https://images.pexels.com/photos/106686/pexels-photo-106686.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Author"
          className={styles.authorImage}
        />
        <p className={styles.authorName}>John Doe</p>
      </div>
      <p className={styles.story}>
   {article}
      </p>
    </div>
  </div>
  )
}

export default blogpost