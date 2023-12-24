import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <>
        <header className='px-12 py-8'>
            <div className="logo">
                <img src="/assets/white_logo.png" width={120} alt="" />
            </div>
        </header>
        <div className="container py-10">
            <div className="bg-black py-10 text-center w-1/2 mx-auto">
                <h1 className="text-5xl my-12 font-semibold">Log in to Spotify</h1>
                <div className="border-b border-gray-400 w-3/4 mx-auto"></div>
                <form className="text-center mx-auto w-1/2">
                    <div className='w-full text-left py-4'>
                        <label htmlFor="email" className="font-semibold mb-2 inline-block">Email or username</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            placeholder="Email or username"
                            className="block w-full rounded-[4px] border-0 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-
                            focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-white bg-[#1a1919]"
                        />
                    </div>
                </form>
            </div>           
        </div>
    </>
  )
}

export default Login