export default function about() {
    return (
        <>
            <div className="sector flex flex-row m-10 justify-center gap-40 flex-wrap">
                <div className="image">
                    <img src="/WhatsApp Image 2024-02-14 at 08.28.31_4c36af72.jpg" alt="" className="profile h-80 border-2 border-black rounded-full" />
                </div>
                <div className="text flex items-left flex-col justify-center">
                    <h1 className=" text-left font-semibold text-3xl">ABOUT ME</h1>
                    <h1>IT is a website to determine that how i am working to build web apps locally</h1>
                    <div className="textarea my-4 flex flex-col flex-wrap">
                        <div className="part flex contacter">
                            <h2 className=" w-40">Name</h2>
                            <h1>Patel Maharshi</h1>
                        </div>
                        <div className="part flex contacter">
                            <h2 className=" w-40">Date of Birth</h2>
                            <h1>18/08/2004</h1>
                        </div>
                        <div className="part flex contacter">
                            <h2 className=" w-40">Address</h2>
                            <h1>KP vidhyarthi bhavan, Ahmedabad</h1>
                        </div>
                        <div className="part flex contacter">
                            <h2 className=" w-40">Email</h2>
                            <h1>maharshipatel3851@gmail.com</h1>
                        </div>
                    </div>
                    <div className="cv">
                        <button className=" border-2 border-black px-4 py-1 rounded-lg font-medium"> <a href="">Download CV</a></button>
                    </div>
                </div>
            </div>

            <div className="title mt-8">
                <h1 className=" text-center font-semibold text-3xl mt-24">GALLARY</h1>
            </div>
            <div className="gallary flex justify-center gap-4 items-center">
                <div className="col1">
                    <img src="/IMG_0981.JPG" alt="" />
                    <img src="/IMG_1814.jpg" alt="" />
                    <img src="/IMG_2361.jpg" alt="" />
                </div>
                <div className="col1">
                    <img src="/IMG_2407.jpg" alt="" />
                    <img src="/IMG_3932.jpg" alt="" />
                </div>
                <div className="col1">
                    <img src="/IMG_3895.JPG" alt="" />
                    <img src="/IMG_2682.jpg" alt="" />
                    <img src="/WhatsApp Image 2024-02-14 at 08.28.31_4c36af72.jpg" alt="" />
                </div>
            </div>
        </>
    )
}