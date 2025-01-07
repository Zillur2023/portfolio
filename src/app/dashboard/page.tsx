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

const DashboardPage = () => {
  
  return (
    <div>
        <Sidebar>
        <div className="flex flex-1">
      <div className="p-2 md:p-2 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex flex-col items-center">
   <div className="space-y-10 max-w-5xl w-full">
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
      </div>
    </div>
        </Sidebar>
    </div>
  )
}

export default DashboardPage