import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


const Login = () => {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => console.log(data)
    
      
  return (
    <>
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-5 '>
       
       <label className="email ">
            <p>Email</p>
            <br></br>
            <input {...register("email", { required: true })} className='w-100 height-90 px-2 py-1 rounded-md' type="email" placeholder="Enter Email address" />
        </label>
       
       
        <label className="password">
                <p className='mt-6'>Password</p>
                <br></br>
                <input {...register("password", { required: true })} className=" w-90 px-2 py-1 rounded-md" type="password" placeholder="Enter Your Password" />
        </label>
       
       

    </div>
    <div className='flex justify-between '>
    <button className="btn btn-secondary mt-5">Login</button>
    <p className='mt-8 '>Don't have an account? <a href='/Signup' className='text-pink-500 underline'>Register</a></p>
    
    </div>
   
  </div>
</dialog>
    </div>
    </>

  )
}

export default Login