import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
           <nav className='bg-zinc-700 text-white flex justify-between px-14'>
          <div className="w-24 rotate-[4.5deg] py-1"><img src="Huzaifa logo.png" alt="Huzaifa logo" /></div>
        <ul className='flex gap-10 items-center font-medium cursor-pointer text-xl'>
          <Link href = '/'>Home</Link>
          <Link href = '/About'>About</Link>
          <Link href = '/Contact'>Contact</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header