import React from 'react'

const Cards = ({item}) => {
    
  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card w-92 bg-base-100 shadow-xl p-2 hover:scale-105 duration-200">
          <figure>
            <img width="100%" height="200px"
              src={item.image}
              alt="Course"
            />
          </figure>
          <div className="card-body">
            <h2 className='card-title'>
            {item.name}
              <div className="badge badge-secondary ">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer badge badge-outline hover:bg-pink-500 hover:text-white ">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards