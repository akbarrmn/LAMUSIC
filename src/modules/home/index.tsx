import Hero from "@/assets/Images Hero.png"

const Home = () => {
  return (
    <div className="container mx-auto mt-[70px] pb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-[100px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="font-clash-display text-white font-extrabold text-6xl">Feel the Music in Your Soul</h1>
            <div className="flex flex-col gap-[32px]">
              <h4 className="font-plus-jakarta-sans text-xl text-white">Discover, explore, and experience the world of music like never before with our comprehensive platform.</h4>
              <button className="px-[36px] py-[16px] rounded-[14px] border-[1px] border-[#F0F0F0] text-white w-fit ease-in-out duration-200 hover:scale-110">
                Register Now
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 text-white">
            <p className="font-plus-jakarta-sans text-lg">Support by</p>
            <div className="flex flex-row gap-[29px]">
              <h1>Sony Music</h1>
              <h1>AOLMUSIC</h1>
              <h1>LINE MUSIC</h1>
            </div>
          </div>
        </div>
        <div>
          <img src={Hero} alt="Hero" className="w-full "/>
        </div>
      </div>
    </div>
  )
}

export default Home