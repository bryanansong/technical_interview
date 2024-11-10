"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Image src="/colorstack_logo.png" width={400} height={200} alt="ColorStack Logo" className="mb-14"/>
      <h1 className="text-4xl font-bold mb-8 text-gray-800">LeetCode Questions</h1>
      <p className="text-2xl text-center mb-7">Select the year that corresponds to you</p>
      <div className="flex flex-col gap-3 w-1/3 min-w-[200px]">
        <Link href="/first-year">
          <Button className="w-full h-16 text-lg">Fisrt Year</Button>
        </Link>
        <Link href="/second-year">
          <Button className="w-full h-16 text-lg">Second Year</Button>
        </Link>
        <Link href="/third-year">
          <Button className="w-full h-16 text-lg">Third Year</Button>
        </Link>
        <Link href="/fourth-year">
          <Button className="w-full h-16 text-lg">Fourth Year</Button>
        </Link>
      </div>
    </div>
  )
}