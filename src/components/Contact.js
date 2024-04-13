import React from 'react'

function Contact() {
    return (
        <>
            <div className="follow" id='follow'>
                <h1 className=" text-center font-semibold text-3xl mt-10 mb-6 noto">CONTACT ME</h1>
                <div className="section flex flex-wrap flex-row justify-center items-center">
                    <div className="lootie">
                        {/* <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> */}
                        <dotlottie-player src="https://lottie.host/62d03e62-3c10-44dd-a7c1-7891c523717d/UdUXwGvmLo.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
                    </div>
                    <div className="part flex inputer flex-col gap-2">
                        <input placeholder='Enter your name' type="text" />
                        <input placeholder='Enter your email' type="email" name="email" id="email" />
                        <input placeholder='Enter your subject' type="text" />
                        <textarea name="" id="" cols="30" rows="5" maxLength={70} placeholder='Enter your message'></textarea>
                        <button type='submit' className=" border-2 border-black px-4 py-1 rounded-lg font-medium sendbtn">Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
