export default function ProductButton({ name }) {
    return (
        <section className="grid grid-cols-[30%_70%] w-full h-28 bg-amber-300 rounded-xl shadow-md shadow-amber-100 hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-1 transition-all">
            <p className="self-center font-black text-6xl md:text-6xl lg:text-8xl pl-4">{name[0]}</p>
            <h2 className="font-black text-neutral-800 text-2xl font-poppins pt-4">{name}</h2>
        </section>
    )
}