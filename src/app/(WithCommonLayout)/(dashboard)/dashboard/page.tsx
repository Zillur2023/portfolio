import { Approach } from '@/components/Approach'
import { Contact } from '@/components/Contact'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import { ProjectsWrapper, TechnologyWrapper } from '@/components/WrapperByUser'
import React from 'react'

const DashboardPage = () => {
  
  return (
        <div className="flex flex-1">
      <div className="p-2 md:p-2 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex flex-col items-center">
   <div className="space-y-10 max-w-5xl w-full">
    <section>
      <Hero />
    </section>
    <section>
      <ProjectsWrapper/>
    </section>
    <section>
      <TechnologyWrapper />
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
   
  )
}

export default DashboardPage