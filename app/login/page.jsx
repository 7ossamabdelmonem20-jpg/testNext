import { signIn } from '../auth';
import React from 'react'
export const metadata = {
  title: "Login",
};
export default function login() {
  async function LOGIN(){
    "use server"
      await signIn("google",{redirectTo:"/products"})
  }
  return (
    <div>
      <form action={LOGIN}>
        <button className='btn bg-amber-500'> Singin with google</button>
      </form>
    </div>
  )
}
