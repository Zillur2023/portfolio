'use client'
import { Approach } from '@/components/Approach'
import { Contact } from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Service from '@/components/Service'
import { Sidebar } from '@/components/Sidebar'
import { Technology } from '@/components/Technology'
import { logout } from '@/lib'
import { useUser } from '@/lib/UserProvider'
import React from 'react'

const page = () => {
  const { user } = useUser()
  console.log('dashboard user', user)
  return (
    // <div>
    //     <Sidebar/>
    // </div>
    <div className="flex flex-col items-center">
    <div className="space-y-10 max-w-5xl w-full">
      <section>
        <button className=' border-2 bg-blue-500 py-1 px-2 text-center' onClick={() =>logout()}>logout</button>
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Technology />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <Approach />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  </div>
  )
}

export default page