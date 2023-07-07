import Hero from '@/components/Hero'
import Image from 'next/image'
import { Metadata } from 'next'
 

export const metadata: Metadata = {
  title: 'Jason & JoLee Wedding',
  description: 'RSVP Here',
}
 

export default function Home() {
  return (
    <main className="">
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <Hero/>
    </main>
  )
}
