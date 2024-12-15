import React from 'react'
import { MovingBorder } from './ui/MovingBorder'
import { services } from '@/data'

const Service = () => {
  return (
    <div className="">
      <h1 className="heading"> My services </h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-10 place-items-center">
        {services.map((card) => (
          <MovingBorder
            key={card.title}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className=" flex items-center justify-between p-2  text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {/* <div className="flex md:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"> */}
              <img
                src={card.image}
                alt={card.image}
                className="lg:w-32 md:w-20 w-32 p-4"
              />
              <div className="">
                <h1 className="text-start title">
                  {card.title}
                </h1>
                <p className="text-start paragraph">
                  {card.description}
                </p>
              </div>
            {/* </div> */}
          </MovingBorder>
        ))}
      </div>
    </div>
  )
}

export default Service