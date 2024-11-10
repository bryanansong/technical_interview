import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function TwoSum() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Link href="/">
        <Button className="mb-4">Back to Home</Button>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Valid Anagram</h1>
      <p className="mb-4">
        Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an
        <strong> anagram </strong> of <code>s</code>, and <code>false</code> otherwise.
      </p>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Example 1:</h2>
        <p>Input: s = &quot;anagram&quot;, t = &quot;nagaram&quot;</p>
        <p>Output: true</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Example 2:</h2>
        <p>Input: s = &quot;rat&quot;, t = &quot;car&quot;</p>
        <p>Output: false</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Constraints:</h2>
        <ul className="list-disc list-inside">
          <li>1 {"<="} s.length, t.length {"<="} 5 * 10<sup>4</sup></li>
          <li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
        </ul>
      </div>
    </div>

  )
}