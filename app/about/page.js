'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { HiArrowLeft } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi';

import AboutMe from '../../components/AboutMe';
import Timeline from '../../components/Timeline';
import ExperienceSlideshow from '../../components/ExperienceSlideshow';
import ExperienceVideos from '../../components/ExperienceVideos';

export default function AboutPage() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isComponentVisible, setIsComponentVisible] = React.useState(false);
    const [key, setKey] = React.useState(1);
    const [currentComponent, setCurrentComponent] = React.useState(1);
    const router = useRouter();

    React.useEffect(() => {
        setIsVisible(true);
        setIsComponentVisible(true)
    }, []);

    const forwardComponent = () => {
        setIsComponentVisible(false)
        setTimeout(() => {
            if (currentComponent >= 4) {
                setCurrentComponent(1)
            } else {
                setCurrentComponent(currentComponent + 1)
            }
            setIsComponentVisible(true)
        }, 1000)
    }

    const backComponent = () => {
        console.log(currentComponent)
        if (currentComponent <= 1) {
            setIsVisible(false)
            setTimeout(() => {
                router.push('/')
            }, 1000)
        } else {
            setIsComponentVisible(false)
            setTimeout(() => {
                setCurrentComponent(currentComponent - 1)
                setIsComponentVisible(true)
            }, 1000)
        }
    }

    return (
        <motion.div
            className="max-w-full max-h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col items-center justify-center absolute top-0 left-0 z-10 h-screen w-screen">
                <motion.div
                    key={key}
                    className="flex flex-col items-center justify-center max-w-full max-h-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isComponentVisible ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {currentComponent === 1
                        ?
                        <AboutMe />
                        :
                        currentComponent === 2
                            ?
                            <Timeline />
                            :
                            currentComponent === 3
                                ?
                                <ExperienceSlideshow />
                                :
                                currentComponent === 4
                                    ?
                                    <ExperienceVideos />
                                    :
                                    null
                    }
                </motion.div>
                <div className="fixed bottom-4 z-10">
                    <div className="flex flex-row gap-4 justify-end">
                        <button onClick={() => backComponent()} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group w-32 mt-4">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full group-hover:translate-x-0 ease">
                                <HiArrowLeft className="h-6 w-6" />
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:-translate-x-full ease">
                                Back
                            </span>
                            <span className="relative invisible">About me</span>
                        </button>
                        <button onClick={() => forwardComponent()} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group w-32 mt-4">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                                <HiArrowRight className="h-6 w-6" />
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                                Next
                            </span>
                            <span className="relative invisible">About me</span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
