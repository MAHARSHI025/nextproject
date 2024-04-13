import Link from "next/link";
import about from "./about/page";


export default function Home() {


  return (
    <>

      <div className="starter flex justify-evenly m-10 flex-wrap">
        <div className="left tilter">
          <img src="/Untitled design.jpg" alt="Profile" className="profile h-80 border-8 border-black rounded-full" />
        </div>
        <div className="right flex flex-col w-96 justify-center items-start gap-4">
          <h1>HELLO there...</h1>
          <h1 className=" font-bold text-5xl noto" id="typing">I am A <span ><h1 className="Kalnia font-bold text-5xl">Developer</h1></span></h1>
          <h6>As a web developer, I am a digital architect, shaping the virtual landscape of the internet. My expertise lies in crafting the virtual spaces where businesses, organizations, and individuals thrive online.</h6>
          <div className="button gap-4">

            <Link href={"#follow"} className="">
              <button className=" border-2 main px-4 py-1 rounded-lg font-medium hirebtn">Hire me</button>
            </Link>

            <Link href={"/about"}>
              <button className=" border-2 sub px-4 py-1 rounded-lg font-medium aboutbtn">about me</button>
            </Link>
          </div>

        </div>
      </div>

      <div className="skills mt-20">
        <div className="title">
          <h1 className=" text-center font-semibold text-3xl noto">My SKILLS</h1>
        </div>
        <div className="section flex flex-wrap gap-10 justify-evenly p-6 mt-4">
          <div data-aos="fade-right" data-aos-once="true" className="part flex flex-row gap-4 justify-center items-center">
            <div className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" className=" h-20" />
            </div>
            <div className="area">
              <h1>90%</h1>
              <progress value="90" max="100" className="media w-56"></progress>
              <h1 className="maximize">JavaScript is the Swiss Army knife of web development. It's a versatile programming language that adds interactivity and dynamic behavior to websites and web applications.</h1>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-once="true" className="part flex flex-row gap-4 justify-center items-center">
            <div className="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBiBI248rgjtRfFgxc8WapC-w7npSGPi6GnV1_VUMww&s" alt="" className=" h-20" />
            </div>
            <div className="area">
              <h1>80%</h1>
              <progress value="80" max="100" className=" w-56 progess"></progress>
              <h1 className="maximize">React.js is a powerful JavaScript library for building user interfaces, developed by Facebook. It's renowned for its efficiency, flexibility, and declarative approach to building UI components.</h1>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-once="true" className="part flex flex-row gap-4 justify-center items-center">
            <div className="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8w8Aj5mmx-CymtQCS5ZPW-2ZobeYTj5WByznAldi0Cw&s" alt="" className=" h-20" />
            </div>
            <div className="area">
              <h1>75%</h1>
              <progress value="75" max="100" className=" w-56 progess"></progress>
              <h1 className="maximize">Next.js is a powerful framework built on top of React.js, designed to streamline the development of server-rendered React applications. Developed by Vercel.</h1>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-once="true" className="part flex flex-row gap-4 justify-center items-center">
            <div className="logo">
              <img src="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png" alt="" className=" h-20" />
            </div>
            <div className="area">
              <h1>65%</h1>
              <progress value="65" max="100" className=" w-56 progess"></progress>
              <h1 className="maximize">Node.js is a powerful runtime environment that allows developers to run JavaScript code outside of a web browser, typically on the server side.</h1>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-once="true" className="part flex flex-row gap-4 justify-center items-center">
            <div className="logo">
              <img src="https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="" className=" h-20" />
            </div>
            <div className="area">
              <h1>90%</h1>
              <progress value="90" max="100" className=" w-56 progess"></progress>
              <h1 className="maximize">Web development is the art and science of creating websites and web applications that are accessible, interactive, and visually compelling.</h1>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-once="true" className="part flex flex-row gap-4 justify-center items-center">
            <div className="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGS2AgRLgYbCiPFfpcI0QkIem5iCWSVYADnZ9mrgJOhg&s" alt="" className=" h-20" />
            </div>
            <div className="area">
              <h1>80%</h1>
              <progress value="80" max="100" className=" w-56 progess"></progress>
              <h1 className="maximize">Figma is a powerful web-based design and prototyping tool that revolutionizes the way designers collaborate and create digital products. It offers a comprehensive platform for designing user interfaces.</h1>
            </div>
          </div>

        </div>
      </div>

      <div className="title my-10">
        <h1 className=" text-center font-semibold text-3xl noto">EDUCATION</h1>
      </div>
      <div className="education flex flex-row justify-center gap-10">
        <div className="lootie">
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
          <dotlottie-player src="https://lottie.host/0b106054-b9fc-42b5-bf14-64b17387ef37/0KWUvmnv8q.lottie" alt="EDUCATION" background="transparent" speed="1" direction="1" playMode="bounce" loop autoplay></dotlottie-player>
        </div>
        <div className="section flex flex-col max-w-80 justify-center gap-6">
          <div className="part">
            <h1 className=" font-semibold text-2xl noto">12th board</h1>
            <h1 className=" text-xs">I completed my 12th in Science PCM at 80%. I done my boards at my hometown. After my boards I move to ahmedabad for higher studies</h1>
          </div>
          <div className="part">
            <h1 className=" font-semibold text-2xl noto">Engineering</h1>
            <h1 className=" text-xs">I am currently studying Computer Engineering at Sal collage. My college is at ahmedabad and it bolongs to Gujarat tecgnical university</h1>
          </div>
        </div>
      </div>


    </>
  );
}
