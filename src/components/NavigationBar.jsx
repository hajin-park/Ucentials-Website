export default function NavigationBar() {
    return (
        <nav className="w-full h-16">
            <ul className="flex items-end justify-around w-full h-full border-b-black border-b-[1px]">
                <li className="text-4xl font-semibold">Home</li>
                <li className="text-4xl font-semibold">About</li>
                <li className="text-4xl font-semibold">Contact</li>
                <li className="text-4xl font-semibold">Login/Sign-up</li>
            </ul>
        </nav>
    )
}