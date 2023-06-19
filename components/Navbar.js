import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {

    return (
        <div className="flex items-center justify-between h-16 w-screen px-4 absolute top-0 left-0 z-50">
            <Link href="/">
                <div className="flex flex-row gap-4 items-center">
                    <Image src="/JMGCoding.png" width={50} height={50} alt="logo" />
                    <h1 className="text-xl text-white">JMGCoding</h1>
                </div>
            </Link>
            <div className="flex flex-row gap-4 items-center">
                <Link className={`text-gray-200 hover:text-white transition ease-in-out duration-100`} href="/">Home</Link>
            </div>
        </div>
    )
}
