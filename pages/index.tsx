import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="text-3xl font-bold underline">
      Hello World.
       <br/>
      <Link href="/about">About</Link>
      <br/>
      <Link href="/day">About</Link>
    </div>
  )
}
