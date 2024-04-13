import Linear from '@/components/Linear'
import React from 'react'

function page() {
  return (
    <>
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

      <h1 className=" text-center font-semibold text-3xl mt-10 noto">What I do ?</h1>

      <Linear></Linear>
      <h1 className=" text-center font-semibold text-3xl my-10 noto">PRICING</h1>
      <div className=' flex flex-wrap justify-evenly'>
        <div className="card flex flex-col flex-nowrap">
          <div className="icon">
            <dotlottie-player src="https://lottie.host/7cf4e896-5b1b-4334-a463-52ce005c4bc7/y7iZThveFm.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
          </div>
          <div className="textarea flex flex-col flex-nowrap">
            <h1 className=" text-center font-semibold text-2xl noto">BASIC</h1>
            <h1 className='text-center'>10<sup>rs</sup></h1>
            <h2><span class="green material-symbols-outlined">
              check_circle
            </span>2-3 Page Website</h2>
            <h2>
              <span class="green material-symbols-outlined">
                check_circle
              </span>1-2 Changes Allow</h2>
            <button className=" border-2 main px-4 py-1 rounded-lg font-medium mt-4">Contact Us</button>
          </div>
        </div>
        <div className="card extra">
          <div className="icon">
            <dotlottie-player src="https://lottie.host/5846d6c8-3ed3-477f-a968-e761ba283855/UqiiK9LOpi.json" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>          </div>
          <div className="textarea flex flex-col">
            <h1 className="diff text-center font-semibold text-2xl noto">STANDARD</h1>
            <h1 className=' text-center'>20<sup>rs</sup></h1>
            <h2><span class="green material-symbols-outlined">
              check_circle
            </span>4-5 Page Website</h2>
            <h2><span class="green material-symbols-outlined">
              check_circle
            </span>3 Changes Allow</h2>
            <h2><span class="green material-symbols-outlined">
              check_circle
            </span>React Framework</h2>
            <button className="btn border-2 main px-4 py-1 rounded-lg font-medium mt-4">Contact Us</button>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <dotlottie-player src="https://lottie.host/d4c34055-6c1e-49e3-848c-68a104067342/Qm1VzHUzmi.json" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>          </div>
          <div className="textarea flex flex-col">
            <h1 className=" text-center font-semibold text-2xl noto">PREMIUM</h1>
            <h1 className=' text-center'>30<sup>rs</sup></h1>
            <h2><span class="green material-symbols-outlined">
              check_circle
            </span>6-10 Page Website</h2>
            <h2><span class="green material-symbols-outlined">
              check_circle
            </span>5 Changes Allow</h2>
            <h2><span class="green material-symbols-outlined">
              check_circle
            </span>React,Next Framework</h2>
            <h2><span class="green material-symbols-outlined">
              check_circle
            </span>Backend server</h2>
            <button className=" border-2 main px-4 py-1 rounded-lg font-medium mt-4">Contact Us</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default page
