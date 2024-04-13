import React from 'react'
import Link from 'next/link'

function Join() {
    return (
        <>
            <div className="logos flex justify-center items-center gap-4 py-6 mt-4 bg-black">
                <Link href={"https://www.linkedin.com/in/maharshi-patel-9a9a29261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"} target="_blank">
                    <img className=' h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Wb7G67EcR44qT3KQLlLzI1Fna_L2lPXfTI1sx8_z2w&s" alt="" />
                </Link>
                <Link href={"https://github.com/MAHARSHI025/"} target="_blank">
                    <img className=' h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4UJP8NHuKjQ34J-SqrUsOkUn4LgI4TQwFA3vAtqkvw&s" alt="" />
                </Link>
                <h1 className=" text-center font-normal text-xl noto">Join us</h1>
                <img className=' h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s" alt="" />
                <Link href={"https://www.instagram.com/_maharshi_025?igsh=NmJ0ZXU3ZXlqNGgy&utm_source=qr"} target="_blank">
                    <img className=' h-8' src="https://i.pinimg.com/originals/f5/69/73/f5697354991d1dc325f9f85019d3ee0a.jpg" alt="" />
                </Link>

            </div>
        </>
    )
}

export default Join
