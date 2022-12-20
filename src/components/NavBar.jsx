export default function NavBar() {
    return (
        <nav className="w-full h-20 sticky top-0 grid grid-cols-[1fr_9fr] grid-rows-1 justify-items-end items-center bg-white/50">
            <p className="text-7xl font-black"><a href="/" className="">UC</a></p>
            <ul className="flex gap-8 md:gap-20 pr-8 md:pr-32 text-xl font-bold">
                <li><a href="/" className="">About</a></li>
                <li><a href="/" className="">Contact</a></li>
                <li><a href="/" className="">Home</a></li>
            </ul>
        </nav>
    )
}