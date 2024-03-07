import Links from "./Links/Links";
import styles from './navbar.module.css'
import Image from "next/image";
import Link from "next/link";
const Navbar = ()=>{
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>BlogHaven</Link>
            <div>
                <Links/>
            </div>
        </div>
    )
}
export default Navbar;