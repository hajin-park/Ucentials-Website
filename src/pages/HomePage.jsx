import ProductButton from '../components/ProductButton'

export default function HomePage() {
    return (
        <article className="w-full grid-cols-1">
            <h1 className="text-center self-center font-poppins bg-gradient-to-tr from-lime-100 via-lime-400 to-lime-900 bg-clip-text text-transparent text-7xl md:text-9xl font-black py-56">Ucentials</h1>
            <article className="grid grid-cols-1 lg:grid-cols-2 px-8 sm:px-20 md:px-32 lg:px-44 xl:px-56 pb-12 gap-12">
                <ProductButton name="Student Marketplace"/>
                <ProductButton name="Major Course Planner"/>
                <ProductButton name="Campus Directory"/>
                <ProductButton name="Dining Hall Menu"/>
                <ProductButton name="..."/>
                <ProductButton name="..."/>
            </article>
        </article>
    )
}