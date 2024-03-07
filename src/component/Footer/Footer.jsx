import styles from './footer.module.css'
const Footer = ()=>{
    return(
        <div className={styles.container}>
           <div className={styles.logo}>BlogHaven</div>
           <div className={styles.text}>
             BlogHaven creative thoughts @All Rights Reserved!
           </div>
        </div>
    )
}

export default Footer;