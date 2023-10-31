import Home from "./modules/home"
import Logo from "@/assets/logo-71.png"
import Headphones from "@/assets/headphones.svg"
import Padlock from "@/assets/padlock.svg"
import Microphone from "@/assets/microphone.svg"
import Discover from "@/assets/Discover.svg"
import Verified from "@/assets/tick-circle.svg"
import Marquee from "react-fast-marquee";
import Facebook from "@/assets/icon/facebook_square.svg"
import Insta from "@/assets/icon/instagram.svg"
import Twitter from "@/assets/icon/twitter.svg"
import Youtube from "@/assets/icon/youtube.svg"
import Accordion from "./components/Accordion"
import Navbar from "./components/Navbar"
import Acc1 from "@/assets/icon/Ellipse 579.svg"
import Acc2 from "@/assets/icon/Ellipse 580.svg"

export type accordionProps = {
  title: string,
  desc: string
}
function App() {


  const accordionData: accordionProps[] = [
    {
      title: "What is LaMusic?",
      desc: "LaMusic is an online platform for music lovers to discover, connect, and explore their passion for all genres of music."
    },
    {
      title: "How do I sign up for LaMusic?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quaerat quas non nostrum error fugiat maiores quos, ut similique labore sequi velit. Ab mollitia quod aliquam cumque delectus, vel molestiae."
    },
    {
      title: "Is LaMusic free to use?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quaerat quas non nostrum error fugiat maiores quos, ut similique labore sequi velit. Ab mollitia quod aliquam cumque delectus, vel molestiae."
    },
    {
      title: "Is LaMusic available on mobile devices?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quaerat quas non nostrum error fugiat maiores quos, ut similique labore sequi velit. Ab mollitia quod aliquam cumque delectus, vel molestiae."
    },
  ]

  return (

    <>
      <div>
        <header
          className={`relative w-full min-h-screen h-full bg-[#1E1E1E] bg-cover bg-no-repeat`}
        >
          <Navbar />
          <Home />
          <img src={Acc1} alt="acc"  className="absolute z-[1] top-0 left-0"/>
          <img src={Acc2} alt="acc" className="absolute z-[1] right-0 bottom-0"/>
        </header>

        <main>
          <section className="min-h-screen bg-[#F4ECE5] flex flex-col py-[100px] items-center justify-center gap-16">
            <h1 className="font-clash-display text-[48px] font-extrabold max-w-[870px] text-center uppercase tracking-wide">Our features provide a music experience like no other</h1>
            <div className="flex flex-wrap justify-center gap-[30px]">
              <div className="card bg-white w-[370px] h-[470px] rounded-3xl p-5 hover:scale-105 ease-in-out duration-150">
                <div className="flex flex-col items-center h-full justify-between">
                  <img src={Headphones} alt="headphone" className="w-full max-w-fit mt-[-5rem]" />
                  <div className="flex flex-col gap-2 pb-16">
                    <h1 className="font-plus-jakarta-sans text-2xl">Discover</h1>
                    <p className="font-plus-jakarta-sans text-base text-[#10101050]">Discover the fascinating and rich history of music through our platform</p>
                  </div>
                </div>
              </div>
              <div className="card bg-white w-[370px] h-[470px] rounded-3xl p-5 hover:scale-105 ease-in-out duration-150">
                <div className="flex flex-col items-center h-full justify-between">
                  <img src={Padlock} alt="headphone" className="w-full max-w-fit mt-[-5rem]" />
                  <div className="flex flex-col gap-2 pb-16">
                    <h1 className="font-plus-jakarta-sans text-2xl">Exclusive Content</h1>
                    <p className="font-plus-jakarta-sans text-base text-[#10101050]">Unlock access exclusive content from your favorite artists</p>
                  </div>
                </div>
              </div>
              <div className="card bg-white w-[370px] h-[470px] rounded-3xl p-5 hover:scale-105 ease-in-out duration-150">
                <div className="flex flex-col items-center h-full justify-between">
                  <img src={Microphone} alt="headphone" className="w-full max-w-fit mt-[-5rem]" />
                  <div className="flex flex-col gap-2 pb-16">
                    <h1 className="font-plus-jakarta-sans text-2xl">Live Music</h1>
                    <p className="font-plus-jakarta-sans text-base text-[#10101050]">Experience live music streaming like never before</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" py-[100px] bg-white flex justify-center">
            <div className="container flex flex-col items-center justify-center gap-16">
              <h1 className="font-clash-display text-[32px] md:text-[48px] font-extrabold max-w-[1040px] text-center uppercase tracking-wide">Our Story: Discover the Passion and Vision Behind LaMusic</h1>
              <div className="grid md:grid-cols-2 gap-[135px] max-w-screen-xl">
                <div className="flex flex-col gap-8 justify-center">
                  <div className="flex flex-col gap-4">
                    <h1 className="font-plus-jakarta-sans text-[32px] max-w-[500px] font-semibold leading-[160%]">About LaMusic: Your Ultimate Music Destination</h1>
                    <p className="font-plus-jakarta-sans text-base text-[#10101050]">Comprehensive music platform that provides an unparalleled experience for music enthusiasts.</p>
                  </div>
                  <button className="rounded-[14px] border-[1px] bg-[#101010] border-[#F0F0F0] text-white w-[153px] h-[52px]">Learn More</button>
                </div>
                <img src={Discover} alt="discover" className="w-full md:block hidden" />
              </div>
            </div>
          </section>

          <section className="py-[100px] bg-[#F4ECE5] flex flex-col items-center justify-center gap-16">
            <h1 className="font-clash-display text-[32px] md:text-[48px] font-extrabold max-w-[1040px] text-center uppercase tracking-wide">Affordable Pricing for Every Feature</h1>
            <div className="flex gap-[30px] justify-center flex-wrap">

              <div className="card p-[30px] bg-white h-[544px] w-[370px] rounded-3xl">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-9">
                      <h1 className="uppercase font-plus-jakarta-sans text-[32px] font-bold">Free</h1>
                      <div className="flex items-center">
                        <h1 className="font-sf-pro-display text-[#E77421] text-4xl font-semibold leading-[160%]">Rp. 0k</h1>
                        <p>/Month</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px]">
                      <div className="flex gap-3 items-center">
                        <img src={Verified} alt="Verified" />
                        <p className="font-plus-jakarta-sans text-base text-black">Free access to some songs</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img src={Verified} alt="Verified" />
                        <p className="font-plus-jakarta-sans text-base text-black">Random music while playing</p>
                      </div>
                    </div>
                  </div>
                  <button className="rounded-[14px] border-[1px] bg-[#101010] border-[#F0F0F0] text-white w-full h-[52px]">Get Started</button>
                </div>
              </div>
              <div className="card p-[30px] bg-white h-[544px] w-[370px] rounded-3xl">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-9">
                      <h1 className="uppercase font-plus-jakarta-sans text-[32px] font-bold">Student</h1>
                      <div className="flex items-center">
                        <h1 className="font-sf-pro-display text-[#E77421] text-4xl font-semibold leading-[160%]">Rp. 70k</h1>
                        <p>/Month</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px]">
                      <div className="flex gap-3 items-center">
                        <img src={Verified} alt="Verified" />
                        <p className="font-plus-jakarta-sans text-base text-black">Free access to some songs</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img src={Verified} alt="Verified" />
                        <p className="font-plus-jakarta-sans text-base text-black">Without limit music while playing</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img src={Verified} alt="Verified" />
                        <p className="font-plus-jakarta-sans text-base text-black">Unlock access exclusive content from your favorite artists</p>
                      </div>
                    </div>
                  </div>
                  <button className="rounded-[14px] border-[1px] bg-[#101010] border-[#F0F0F0] text-white w-full h-[52px]">Get Started</button>
                </div>
              </div>
              <div className="card p-[30px] bg-white h-[544px] w-[370px] rounded-3xl">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-9">
                      <h1 className="uppercase font-plus-jakarta-sans text-[32px] font-bold">Premium</h1>
                      <div className="flex items-center">
                        <h1 className="font-sf-pro-display text-[#E77421] text-4xl font-semibold leading-[160%]">Rp. 200k</h1>
                        <p>/Month</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px]">
                      <div className="flex gap-3 items-center">
                        <img src={Verified} alt="Verified" />
                        <p className="font-plus-jakarta-sans text-base text-black">Free access to some songs</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img src={Verified} alt="Verified" />
                        <p className="font-plus-jakarta-sans text-base text-black">Without limit music while playing</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img src={Verified} alt="Verified" />
                        <p className="font-plus-jakarta-sans text-base text-black">Unlock access exclusive content from your favorite artists</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img src={Verified} alt="Verified" />
                        <p className="font-plus-jakarta-sans text-base text-black">Unlock Experience live music streaming</p>
                      </div>
                    </div>
                  </div>
                  <button className="rounded-[14px] border-[1px] bg-[#101010] border-[#F0F0F0] text-white w-full h-[52px]">Get Started</button>
                </div>
              </div>

            </div>
          </section>
          <section>
            <Marquee autoFill={true} style={{ width: "100%", height: "120px", background: "#101010" }}>
              <h1 className="text-outlined font-plus-jakarta-sans text-[48px] font-bold text-white">LAMUSIC</h1>
            </Marquee>
          </section>

          <section className="py-[100px] flex justify-center bg-white">
            <div className="container">
              <div className="flex w-full flex-col items-center justify-center gap-16">
                <h1 className="font-clash-display text-[32px] md:text-[48px] font-extrabold max-w-[562px] text-center uppercase tracking-wide">Frequently Asked Questions </h1>
                <div className="w-full">
                  <Accordion data={accordionData} />
                </div>
              </div>
            </div>
          </section>

          <section className=" py-[100px] bg-[#19181D] flex flex-col items-center justify-center">
            <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-[155px]">

                <div className="flex flex-col col-span-2 gap-8">
                  <div className="flex gap-4">
                    <img src={Logo} alt="logo" />
                    <h1 className="font-plus-jakarta-sans text-4xl text-white">LAMUSIC</h1>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="font-plus-jakarta-sans text-base text-white">A comprehensive music platform that offers a seamless and immersive music experience located in Bali, Indonesia.</p>
                  </div>
                  <div className="flex gap-[26px]">
                    <img src={Facebook} alt="icon" />
                    <img src={Insta} alt="icon" />
                    <img src={Twitter} alt="icon" />
                    <img src={Youtube} alt="icon" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-white">
                  <h1>Company</h1>
                  <div className="flex flex-col gap-5">
                    <a href="">About</a>
                    <a href="">Pres</a>
                    <a href="">Blog</a>
                    <a href="">Careers</a>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-white">
                  <h1>Support</h1>
                  <div className="flex flex-col gap-5">
                    <a href="">Help Center</a>
                    <a href="">Contact Us</a>
                    <a href="">Term of Use</a>
                    <a href="">Privacy</a>
                  </div>
                </div>
                <div className="flex flex-col gap-4 col-span-2 text-white">
                  <h1>Maps</h1>
                  <div style={{ width: "100%" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "12px" }}
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                      <a href="https://www.maps.ie/population/">Population mapping</a>
                    </iframe>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
