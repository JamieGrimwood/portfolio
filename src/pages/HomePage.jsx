export default function Home() {
    return (
        <>
            <ul className="circles absolute top-0 left-0 z-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left items-center h-screen p-16 gap-8">
                <div>
                    <h1 className="text-5xl md:text-7xl" style={{ fontWeight: 800 }}>Jamie Grimwood</h1>
                    <p>Fullstack Web Developer - System Administrator</p>
                    <br></br>
                    <p>Website currently in development</p>
                </div>
                <div className="flex items-center justify-end md:mr-16 md:w-1/2 md:h-full">
                    <img src="/me.jpg" alt="me" width={2000} height={1333} className="rounded-lg w-full max-w-[700px]" />
                </div>
            </div>
        </>
    )
}
