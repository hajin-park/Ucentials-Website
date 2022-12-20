export default function ProductButton({ name }) {
    return (
        <section className="grid grid-cols-[7rem_1fr] w-full h-28 bg-amber-400 rounded-lg shadow-md shadow-amber-300 hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-1 transition-all">
            <p className="self-center font-black text-8xl pl-4">U</p>
            <h2 className="font-black text-neutral-800 text-2xl font-poppins pt-4">{name}</h2>
        </section>
    )
}