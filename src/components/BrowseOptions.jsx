export default function BrowseOptions() {
    return (
        <main className="grid grid-cols-2 grid-rows-2 justify-items-center">
            <h2 className="block text-center text-2xl font-black italic col-span-2 self-center">Start Browsing</h2>
            <button className="bg-moss-800 w-[600px] rounded-full">Products</button>
            <button className="bg-moss-800 w-[600px] rounded-full">Services</button>
        </main>
    )
}