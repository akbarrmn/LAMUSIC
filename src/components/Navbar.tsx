import Logo from "@/assets/logo-71.png"

const Navbar = () => {
    return (
        <nav className="container flex md:justify-center items-center mx-auto py-[40px]">
            <div className="flex gap-4 items-center">
                <img src={Logo} alt="logo" />
                <h1 className="text-white text-2xl"><span className="text-[#E5B710]">La</span>Music</h1>
            </div>
            <div className="w-full justify-center md:flex hidden">
                <div className="flex gap-[40px] text-white">
                    <a href="#" className="font-plus-jakarta-sans">Home</a>
                    <a href="#" className="font-plus-jakarta-sans">Features</a>
                    <a href="#" className="font-plus-jakarta-sans">About</a>
                    <a href="#" className="font-plus-jakarta-sans">Subscription</a>
                    <a href="#" className="font-plus-jakarta-sans">Question</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar