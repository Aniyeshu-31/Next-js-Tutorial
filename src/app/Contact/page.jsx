import styles from './contact.module.css'
import Image from 'next/image'
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="name" placeholder="Name and Surname" />
          <input type="email" placeholder="Email address" />
          <input type="number" placeholder="Phone Number(Optional)" />
          <textarea name="Message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
          <button className={styles.bttn}>Send</button>
        </form>
      </div>
    </div>
  )
}
export default ContactPage
