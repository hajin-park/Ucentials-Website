export default function NavigationBar() {
    return (
        <nav className="w-full h-16">
            <ul className="flex items-end justify-around w-full h-full border-b-white border-b-[1px]">
                <li className="text-4xl font-semibold text-moss-500">Home</li>
                <li className="text-4xl font-semibold text-moss-500">About</li>
                <li className="text-4xl font-semibold text-moss-500">Contact</li>
                <li className="text-4xl font-semibold text-moss-500">Login/Sign-up</li>
            </ul>
        </nav>
    )
}