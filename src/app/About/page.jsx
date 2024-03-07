// we use Next.js image <Image/>
import Image from 'next/image'
import styles from './img.module.css';
const AboutPage = ()=>{
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.text}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas <br /> that are bigger,bolder,
            <br />
            braver and better
          </h1>
          <p>
            We create digital ideas that are bigger, bolder, braver and better.{' '}
            <br />
            We believe in good ideas flexibility and precession. We're world's{' '}
            <br />
            Our Special Team best consulting & finance solution provider.
            <br /> Wide range of web and software development services.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box1}>
              <h2 className={styles.boxtitle}>10 K+</h2>
              <p className={styles.boxtext}>Years of Experience</p>
            </div>
            <div className={styles.box1}>
              <h2 className={styles.boxtitle}>250 K+</h2>
              <p className={styles.boxtext}>People reached</p>
            </div>
            <div className={styles.box1}>
              <h2 className={styles.boxtitle}>5 K+</h2>
              <p className={styles.boxtext}>Services and Plugins</p>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/about.png" alt="About Image" fill />
          </div>
        </div>
      </div>
    )
}
export default AboutPage;