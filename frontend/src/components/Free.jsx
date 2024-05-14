import React from 'react'
import list from "../../public/List.json"

const Free = () => {
    const filterData=list.filter((item)=>item.category==="free");
    console.log(filterData)
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
       <div className='space-y-4'>
       <h1 className='font-bold'>Free Offered Courses</h1>
        
        <p className='text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
       </div>

    </div>
    </>
    
  )
}

export default Free