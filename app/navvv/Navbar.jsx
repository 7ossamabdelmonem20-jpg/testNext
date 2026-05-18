import React from "react";
import Link from "next/link";
import { signOut } from "../auth";

export default function Navbar() {
  async function SIGNOUT(){
    "use server"
   await signOut({redirectTo:"/login"})
  }
  return (
    <nav>
      <ul className="flex gap-5 my-3.5 bg-blue-600  p-7 text-black  font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/products">Products</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>

        <li>
          <Link href="/login">Login</Link>
        </li>
        <form action={SIGNOUT}>
           <button className="btn cursor-pointer">Signout</button>
        </form>
        <li>
          <Link href="/updateuser">input User</Link>
        </li>
        <li>
          <Link href="/userPage">All User</Link>
        </li>
      </ul>
    </nav>
  );
}
