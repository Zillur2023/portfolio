import { ProjectsWrapper } from '@/components/WrapperByUser'
import React from 'react'

const ProjectsPage = () => {
  

  return (
 
    <div className="flex flex-1">
  <div className="p-2 md:p-2 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
      <div className="flex flex-col items-center">
<div className=" max-w-5xl w-full">
<section>
  <ProjectsWrapper />
</section>
</div>
</div>
  </div>
</div>

  )
}



export default ProjectsPage