import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function TwoSum() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
  <Link href="/">
    <Button className="mb-4">Back to Home</Button>
  </Link>
  <h1 className="text-3xl font-bold mb-4">Group Anagrams</h1>
  <p className="mb-4">
    Given an array of strings <code>strs</code>, group the anagrams together. You can return the answer in any order.
  </p>

  <div className="mb-4">
    <h2 className="text-xl font-semibold">Example 1:</h2>
    <p>Input: strs = [&quot;eat&quot;,&quot;tea&quot;,&quot;tan&quot;,&quot;ate&quot;,&quot;nat&quot;,&quot;bat&quot;]</p>
    <p>Output: [[&quot;bat&quot;],[&quot;nat&quot;,&quot;tan&quot;],[&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;]]</p>
    <p>Explanation:</p>
    <ul className="list-disc list-inside ml-6">
      <li>There is no string in <code>strs</code> that can be rearranged to form &quot;bat&quot;.</li>
      <li>The strings &quot;nat&quot; and &quot ;tan&quot; are anagrams as they can be rearranged to form each other.</li>
      <li>The strings &quot;ate&quot;, &quot;eat&quot;, and &quot;tea&quot; are anagrams as they can be rearranged to form each other.</li>
    </ul>
  </div>
  
  <div className="mb-4">
    <h2 className="text-xl font-semibold">Example 2:</h2>
    <p>Input: strs = [&quot;&quot;]</p>
    <p>Output: [[&quot;&quot;]]</p>
  </div>
  
  <div className="mb-4">
    <h2 className="text-xl font-semibold">Example 3:</h2>
    <p>Input: strs = [&quot;a&quot;]</p>
    <p>Output: [[&quot;a&quot;]]</p>
  </div>
  
  <div className="mb-4">
    <h2 className="text-xl font-semibold">Constraints:</h2>
    <ul className="list-disc list-inside">
      <li>1 {"<="} strs.length {"<="} 10<sup>4</sup></li>
      <li>0 {"<="} strs[i].length {"<="} 100</li>
      <li><code>strs[i]</code> consists of lowercase English letters.</li>
    </ul>
  </div>
</div>

  )
}