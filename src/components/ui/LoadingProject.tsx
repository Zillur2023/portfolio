import React from 'react'

const LoadingProject = () => {
  return (
    <>
        {
             [...new Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-80 h-72  border rounded-lg"
                >
                  <div className="animate-pulse  flex items-center justify-center w-80   h-32 mt-[-55px] mb-5 bg-gray-100 dark:bg-neutral-800 rounded-lg">
                    {/* Skeleton Image Placeholder */}
                  </div>
                  <div className="animate-pulse w-80  space-y-4 h-20 px-2 ">
                    <div className="animate-pulse  h-4 w-3/4 bg-gray-100 dark:bg-neutral-800 rounded-md"/>
                    <div className="animate-pulse  h-6 w-full bg-gray-100 dark:bg-neutral-800 rounded-md"/>
                    <div className=" flex items-center justify-between ">
                      <div className="flex -space-x-3">
                      <div className=" animate-pulse  h-8 w-8 bg-gray-100 dark:bg-neutral-800 rounded-full"/>
                      <div className=" animate-pulse  h-8 w-8 bg-gray-100 dark:bg-neutral-800 rounded-full"/>
                      <div className=" animate-pulse  h-8 w-8 bg-gray-100 dark:bg-neutral-800 rounded-full"/>
                      <div className=" animate-pulse  h-8 w-8 bg-gray-100 dark:bg-neutral-800 rounded-full"/>
                      <div className=" animate-pulse  h-8 w-8 bg-gray-100 dark:bg-neutral-800 rounded-full"/>
                      </div>
                      <div className=" flex items-center justify-between gap-2">
                        <div className="animate-pulse bg-gray-100 dark:bg-neutral-800  h-8 w-12 rounded-md" />
                        <div className="animate-pulse bg-gray-100 dark:bg-neutral-800  h-8 w-12 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
        }
    </>
  )
}

export default LoadingProject