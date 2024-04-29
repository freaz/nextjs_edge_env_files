import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/edge">Edge runtime</Link>
      </li>
      <li>
        <Link href="/nodejs">Node.js runtime</Link>
      </li>
    </ul>
  )
}