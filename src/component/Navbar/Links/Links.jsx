"use client"
import Image from "next/image";
import Navlink from "./navlink/navlink";
import styles from './links.module.css'
import { useState } from "react";
const Links =()=>{
   const links = [
       {
          title:'Home',
          path:'/'
       },
       {
          title:'About',
          path:'/About'
       },
       {
          title:'Contact',
          path:'/Contact'
       },
       {
          title:'Blog',
          path:'/Blog'
       },
   ];
    const [open,setOpen] = useState(false);
    const session = true;
    const isAdmin = true;
    return (
      <div className={styles.container}>
        <div className={styles.link}>
          {links.map((it) => (
            <Navlink item={it} key={it.title}></Navlink>
          ))}
          {session ? (
            <>
              {isAdmin && <Navlink item={{ title: 'Admin', path: '/Admin' }} />}
              <button className={styles.logout}>logout</button>
            </>
          ) : (
            <Navlink item={{ title: 'login', path: '/Login' }} />
          )}
        </div>
        <Image
        className={styles.menuButton}
          src="/menu.png"
          alt="menu"
          width={30}
          height={30}
          onClick={() => {
            setOpen((prev) => !prev)
          }}
        />
        {open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <Navlink item={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    )
}   
export default Links;