import Image from 'next/image';

export default function AboutMe() {
    return (
        <div className="w-[1000px] bg-black-900 rounded-lg p-4 shadow-lg h-fit">
            <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-col justify-center gap-4 w-[500px]">
                    <h1 className="text-center text-white text-4xl font-bold">About Me</h1>
                    <p className="text-white text-center">I am a fullstack developer and System Administrator from the UK with about 4 years experience. I work on both frontend and backend web development, using a vast range of different tools and frameworks. I also enjoy 3D printing, and Technical Theatre.</p>
                </div>
                <div className="h-full">
                    <Image src="/me.jpg" height={1500} width={1500} className="rounded-lg w-[500px] h-auto" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 mt-4">
                <div className="flex flex-row items-center justify-center gap-1 border border-white w-[100px] rounded-full text-white py-1 px-4 bg-black-800">
                    <Image src="/icons/nodejs.png" height={30} width={30} />
                    <p>Node.js</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-1 border border-white w-[100px] rounded-full text-white py-1 px-4 bg-black-800">
                    <Image src="/icons/nextjs.png" height={30} width={30} />
                    <p>Next.js</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-1 border border-white w-[100px] rounded-full text-white py-1 px-y bg-black-800">
                    <Image src="/icons/reactjs.png" height={30} width={30} />
                    <p>React.js</p>
                </div>
            </div>
        </div>
    )
}
