"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const NavigationTest = () => {
   // CLIENT SIDE NAVIGATION
    const router = useRouter();
    const path = usePathname();
    const query = useSearchParams();
    const handleClick = ()=>{
        console.log("clicked!");
        router.push("/");
    } 
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTest
