"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {getCategories} from '@/services'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <section className="bg-[#a266cf] rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-[#f4ecfb] border-opacity-45 pb-2 text-[#f4ecfb]">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block mb-3 text-md font-bold text-[#f4ecfb] hover:text-[#351447] transition duration-200 ease-in-out">
            {category.name}
          </span>
        </Link>
      ))}
    </section>
  )
}

export default Categories