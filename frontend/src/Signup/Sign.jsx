import React from 'react'

const Sign = () => {
  return (
    <>
    <div className='flex h-screen justify-center items-center '>
    <div className="border-shadow-md border-[2px] p-5 ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className='mt-5 '>
       
       <label className="email ">
            <p>Email</p>
            <br></br>
            <input className='w-100 height-90 px-2 py-1 rounded-md' type="email" placeholder="Enter Email address" />
        </label>
       
       
        <label className="password py-5">
                <p className='mt-6'>Password</p>
                <br></br>
                <input className=" w-90 px-2 py-1 rounded-md" type="password" placeholder="Enter Your Password" />
        </label>
       
       

    </div>
    <div className='flex justify-between '>
    <button className="btn btn-secondary mt-5">Login</button>
    <p className='mt-8 '>Don't have an account? <a href='/Signup' className='text-pink-500 underline'>Register</a></p>
    
    </div>
   
  </div>
    </div>
    </>
  )
}

export default Sign