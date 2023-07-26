'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [isVisible, setIsVisible] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    const aboutPage = () => {
        setIsVisible(false)
        setTimeout(() => {
            router.push("/about")
        }, 1000)
    }

    return (
        <motion.div
            className="max-w-full max-h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col absolute top-0 left-0 z-10">
                <div className="flex flex-col justify-center text-center sm:text-left h-screen sm:ml-16">
                    <h1 className="text-4xl sm:text-8xl text-white font-bold ">Hi, I&apos;m Jamie</h1>
                    <h2 className="text-lg sm:text-2xl text-white">I&apos;m a fullstack web developer and System Administrator</h2>
                    <button onClick={() => aboutPage()} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group w-32 mt-4">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                            About me
                        </span>
                        <span className="relative invisible">About me</span>
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
