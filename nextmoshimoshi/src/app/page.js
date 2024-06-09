import "../app/ui/home.module.css";
import Link from 'next/link';
import Image from "next/image";
import MoshimoshiLogo from "./ui/Moshimoshi-logo";

export default function Home() {
  return <div>
    <nav className="navbar flex justify-between text-white p-4">
    <div>
      <Link href={"/"}>
        Home
      </Link>  
    </div>
    <div className="rounded-full">
    </div> 
    <div className="">
      <Link href={"/"} className="mx-2">
        Sign Up
      </Link>
      <Link href={"/"} className="mx-2">
        Login
      </Link>
    </div>

  </nav>
  <div className="container mx-auto flex justify-center">
    <Image
        src="/Moshimoshilogo.png"
        width={100}
        height={100}
        alt="Logo"
        >
      </Image>
  </div>
</div>
}
