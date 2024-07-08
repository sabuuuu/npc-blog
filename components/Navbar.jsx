'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import {getCategories} from '@/services'

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories));
    }, []);
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
                {categories.map((category ,index) => (
                <Link key={index} href={`/category/${category.slug}`} className='md:float-right text-[#a266cf] hover:text-[#be91e1] ml-4 font-semibold mt-4'>
                    {category.name}
                </Link>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default Navbar