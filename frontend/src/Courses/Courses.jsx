import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import list from '../../public/List'

const Courses = () => {
    console.log(list)
  return (
    
    <>
    <Navbar/>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-30 min-h-screen'>
        <h1 className='text-xl text-center mt-20 '>We Are Delighted to have you <span className='text-pink-500'>here! :)</span></h1>
        <p className='m-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat quae? Vitae deleniti nesciunt, libero ipsa reiciendis esse provident iste. Dolores sit iste quas animi architecto dicta repellendus tenetur itaque.</p>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
                {list.map((item)=>(
                    <div className="card bg-base-100 shadow-xl p-2">
                        <figure>
                            <img
                            src={item.image}
                            alt="Books"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className='card-title'>
                            {item.name}
                            <div className="badge badge-secondary mx-1">{item.category}</div>
                            </h2>
                            <p>{item.title}</p>
                            <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer badge badge-outline hover:bg-pink-500 hover:text-white ">Buy Now</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
    </div>
   
    <Footer/>
    </>
  )
}

export default Courses