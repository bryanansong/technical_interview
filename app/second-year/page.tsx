"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function TwoSum() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
  <Link href="/">
    <Button className="mb-4">Back to Home</Button>
  </Link>
  <h1 className="text-3xl font-bold mb-4">Delete Duplicates from Sorted Linked List</h1>
  <p className="mb-4">
    Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
    Return the linked list sorted as well.
  </p>
  
  <div className="mb-4">
    <h2 className="text-xl font-semibold">Example 1:</h2>
    <Image src="https://assets.leetcode.com/uploads/2021/01/04/list1.jpg" width={200} height={200} alt="Example 1" className="mb-4"/>
    <p>Input: head = [1,1,2]</p>
    <p>Output: [1,2]</p>
  </div>
  
  <div className="mb-4">
    <h2 className="text-xl font-semibold">Example 2:</h2>
    <Image src="https://assets.leetcode.com/uploads/2021/01/04/list2.jpg" width={200} height={200} alt="Example 1" className="mb-4"/>
    <p>Input: head = [1,1,2,3,3]</p>
    <p>Output: [1,2,3]</p>
  </div>
  
  <div className="mb-4">
    <h2 className="text-xl font-semibold">Constraints:</h2>
    <ul className="list-disc list-inside">
      <li>The number of nodes in the list is in the range [0, 300].</li>
      <li>-100 {"<= Node.val <= 100"}</li>
      <li>The list is guaranteed to be sorted in ascending order.</li>
    </ul>
  </div>
</div>

  )
}