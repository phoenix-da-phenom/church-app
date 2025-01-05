import React from 'react'

export default function ChurchDescription() {
  return (
    <div className='container my-36'>
        <div className='flex flex-col gap-10 items-center text-center md:flex-row '>

            <div className=' h-80 rounded-full overflow-hidden md:w-full lg:w-full  '>
                <img src="/Image/papa.jpg" alt="" className='w-full h-full object-cover' />

            </div>

            <div>
                <h1 className='text-4xl font-bold pb-4'>Appointed by <span className=" text-accent-main font-extrabold shadow-2xl">God</span></h1>
               <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo sint repellendus iure porro enim totam nam natus praesentium alias ad odio incidunt error veritatis, minima ab temporibus eum dolorum.
               Rerum ea laborum dignissimos. Maiores voluptatum, magnam veritatis eaque hic mollitia doloremque accusamus, assumenda sunt tempore eligendi omnis. Sint esse quibusdam nihil, ea consectetur neque omnis corporis nisi natus aliquam!
               Unde, non accusamus earum voluptates ducimus excepturi ratione temporibus repellat aliquid eligendi quaerat? Excepturi reprehenderit, libero amet, sint quam necessitatibus est eveniet voluptatibus laboriosam sapiente ullam. A rerum temporibus maxime!</p>

            </div>


        </div>
       

        
        </div>
  )
}
