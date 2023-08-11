'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-16 w-screen px-4 fixed top-0 left-0 z-50">
      <Link href="/">
        <div className="flex flex-row gap-4 items-center">
          <Image src="/JMGCoding.png" width={50} height={50} alt="logo" />
          <h1 className="text-xl text-black">JMGCoding</h1>
        </div>
      </Link>
    </div>
  );
}
