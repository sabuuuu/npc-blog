'use client'

import React from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Categories = [
    {name : 'React', slug : 'react'},
    {name : 'Next.js', slug : 'nextjs'},
    {name : 'Tailwind', slug : 'tailwind'},
    {name : 'GraphQL', slug : 'graphql'},
    {name : 'TypeScript', slug : 'typescript'},
    {name : 'Redux', slug : 'redux'},
]
const Navbar = () => {
    const currentPath = usePathname();

    const links = [
        { name: 'Dashboard', href: '/' },
        { name: 'Issues', href: '/issues' },
    ]
  return (
    <nav className='flex border-b border-opacity-35 border-[#a266cf]  mb-5 px-10 md:px-10 lg:px-16 h-20 items-center '>
        <div className='w-full inline-block py-8'>
            <div className='md:float-left block'> 
                <Link href='/'>
                    <Image
                    src='/logo.png'
                    alt='logo'
                    width={55}
                    height={55}
                    />
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {Categories.map((category) => (
                <Link key={category.slug} href='/' className='md:float-right text-[#a266cf] hover:text-[#be91e1] ml-4 font-semibold mt-4'>
                    {category.name}
                </Link>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default Navbar