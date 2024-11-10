import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function TwoSum() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Link href="/">
        <Button className="mb-4">Back to Home</Button>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Majority Element</h1>
    <p className="mb-4">
      Given an array nums of size n, return the majority element.
      The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
    </p>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Example 1:</h2>
      <p>Input: nums = [3,2,3]</p>
      <p>Output: 3</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Example 2:</h2>
      <p>Input: nums = [2,2,1,1,1,2,2]</p>
      <p>Output: 2</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Constraints:</h2>
      <ul className="list-disc list-inside">
        <li>n == nums.length</li>
        <li>{"1 <= n <= 5 * 10"}<sup>4</sup></li>
        <li>-10<sup>9</sup>{" <= nums[i] <= 10"}<sup>9</sup></li>
      </ul>
    </div>
    </div>
  )
}