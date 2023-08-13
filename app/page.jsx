'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Slider from '../components/Slider';
import { scrollIntoView } from 'seamless-scroll-polyfill';

import { BsArrowDown } from 'react-icons/bs';

export default function Home() {
    const [isBrowser, setIsBrowser] = React.useState(true)
    const router = useRouter();

    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    React.useEffect(() => {
        if (isMobile) setIsBrowser(false)
    }, [])

    return (
        !isBrowser
            ?
            <div className="flex flex-col items-center justify-center text-center h-screen">
                <h1 className="text-4xl font-bold">Woah there</h1>
                <p className="mx-2">Be careful, as this website is NOT optimised for mobile devices yet. If you wish to proceed, click the button below, but won&apos;t be a nice experience. Use a desktop or laptop for the best experience.</p>
                <button className="relative inline-block text-lg group mt-4" onClick={() => setIsBrowser(true)}>
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Proceed to website</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
            </div>
            :
            <>
                <div className="flex flex-col sm:flex-row justify-between items-center h-screen">
                    <div className="sm:ml-16 text-black sm:w-1/2">
                        <h1 className="text-5xl sm:text-7xl" style={{ fontWeight: 800 }}>Jamie Grimwood</h1>
                        <p>Fullstack Web Developer - System Administrator</p>
                        <button onClick={() => scrollIntoView(document.querySelector("#about"), { behavior: "smooth" })} className="relative inline-flex items-center justify-center p-4 px-6 py-0 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-full group w-32 mt-4">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-y-full group-hover:translate-y-0 ease text-xl">
                                <BsArrowDown />
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-y-full ease">
                                About me
                            </span>
                            <span className="relative invisible">About me</span>
                        </button>
                    </div >
                    <div className="flex items-center justify-end sm:mr-16 sm:w-1/2 sm:h-full">
                        <Image src="/me.jpg" alt="me" width={2000} height={1333} className="rounded-lg w-4/5" priority unoptimized={true} />
                    </div>
                </div >
                <div className="flex flex-col items-center text-center bg-white sm:mx-32 mb-16" id="about">
                    <h1 className="text-6xl">About Me</h1>
                    <p className="max-w-[500px] mt-4">
                        Hey! I&apos;m Jamie Grimwood, a 15 year old fullstack web developer and volunteer theatre technician (at the moment). I love music, computer science, and most things techy.
                    </p>
                    <h2 className="text-4xl mt-16">Scouting</h2>
                    <div className="flex flex-col gap-8 mt-4">
                        <div className="flex flex-wrap justify-center items-center gap-16">
                            <p className="max-w-[500px]">I have been doing scouting for a little over 8 years now, starting in sea scouts and moving to normal scouts. Throughout this time, I have learnt a lot of skills along the way, as well as had a ton of fun. I have participated in camps, hikes, watersports activities, fundraising events, community events, and more.</p>
                            <Slider {...settings} className="flex items-center justify-center h-96 w-[512px]">
                                <div className="flex items-center justify-center" key={'IMG_7708.jpg'}>
                                    <Image src="/scouting/IMG_7708.jpg" alt="IMG_7708.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center" key={'6559ef14-6a4a-4f41-940a-a0d741827456.JPG'}>
                                    <Image src="/scouting/6559ef14-6a4a-4f41-940a-a0d741827456.JPG" alt="6559ef14-6a4a-4f41-940a-a0d741827456.JPG" height={400} width={500} className="h-96 w-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center" key={'3e185f56-c9e8-4777-a440-61f0ff76c11f.JPG'}>
                                    <Image src="/scouting/3e185f56-c9e8-4777-a440-61f0ff76c11f.JPG" alt="3e185f56-c9e8-4777-a440-61f0ff76c11f.JPG" height={400} width={300} className="h-96 w-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center" key={'IMG_1615.jpg'}>
                                    <Image src="/scouting/IMG_1615.jpg" alt="IMG_1615.jpg" height={400} width={500} className="h-96 w-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center" key={'IMG_0817.jpg'}>
                                    <Image src="/scouting/IMG_0817.jpg" alt="IMG_0817.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center" key={'IMG_0100.jpg'}>
                                    <Image src="/scouting/IMG_0100.jpg" alt="IMG_0100.jpg" height={400} width={500} className="h-96 w-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center" key={'IMG_7810.jpg'}>
                                    <Image src="/scouting/IMG_7810.jpg" alt="IMG_7810.jpg" height={400} width={500} className="h-96 w-auto rounded-lg" />
                                </div>
                            </Slider>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-16">
                            <Slider {...settings} className="flex items-center justify-center h-96 w-[512px]">
                                <div className="flex items-center justify-center" key={'IMG_3828.jpg'}>
                                    <Image src="/scouting/IMG_3828.jpg" alt="IMG_3828.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center" key={'IMG_3836.jpg'}>
                                    <Image src="/scouting/IMG_3836.jpg" alt="IMG_3836.jpg" height={400} width={500} className="h-96 w-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center" key={'IMG_3837.jpg'}>
                                    <Image src="/scouting/IMG_3837.jpg" alt="IMG_3837.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center" key={'IMG_3839.jpg'}>
                                    <Image src="/scouting/IMG_3839.jpg" alt="IMG_3839.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                                </div>
                            </Slider>
                            <p className="max-w-[500px]">During this time, I was awarded the Alf Breeze award for my work as a Young Leader at a cub group, where I have been working with other leaders to run nights and activities for the cubs, as well as helping out at their fundraising events.</p>
                        </div>
                    </div>
                    <h2 className="text-4xl mt-16">Work Timeline</h2>
                    <div className="flex flex-col h-full sm:mx-32">
                        <div className="flex flex-col items-center justify-center gap-8 h-full p-4">
                            <ol className="border-l border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
                                <li>
                                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0" />
                                        <p className="mt-2 text-sm text-neutral-700">
                                            28/02/2021
                                        </p>
                                    </div>
                                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                                        <h4 className="mb-1.5 text-xl font-semibold text-black">ColourNodes</h4>
                                        <p className="mb-3 text-neutral-700">
                                            I founded ColourNodes with someone else back in 2021. I handled all the system administration and development, making unique systems like linking discord accounts with WHMCS client accounts, and so much more.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0" />
                                        <p className="mt-2 text-sm text-neutral-700">
                                            21/08/2022
                                        </p>
                                    </div>
                                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                                        <h4 className="text-xl font-semibold text-black">Falcon Hosting</h4>
                                        <a className="mb-1.5 text-blue-500 underline" href="https://falconhosting.co.uk">https://falconhosting.co.uk</a>
                                        <p className="mb-3 text-neutral-700">
                                            I am the founder of Falcon Hosting and I work on managing our systems along side our system administrator, as well as helping clients and improving and adding new services.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0" />
                                        <p className="mt-2 text-sm text-neutral-700">
                                            05/06/2023
                                        </p>
                                    </div>
                                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                                        <h4 className="text-xl font-semibold text-black">Learn It Sign It</h4>
                                        <a className="mb-1.5 text-blue-500 underline" href="https://learnitsignit.co.uk">https://learnitsignit.co.uk</a>
                                        <p className="mb-3 text-neutral-700">
                                            I have taken on a volunteer role at Learn It Sign It as a software engineer, creating their website to host their amazing signing videos, to teach kids around the world how to use sign language to sing songs.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0" />
                                        <p className="mt-2 text-sm text-neutral-700">
                                            05/07/2023
                                        </p>
                                    </div>
                                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                                        <h4 className="text-xl font-semibold text-black">Titchfield Festival Theatre</h4>
                                        <a className="mb-1.5 text-blue-500 underline" href="https://www.titchfieldfestivaltheatre.com">https://www.titchfieldfestivaltheatre.com</a>
                                        <p className="mb-3 text-neutral-700">
                                            At titchfield, I am a Volunteer Associate, meaning I sign up for shows, concerts and whatever else is on to do technical theatre. This may be either lights or sound, both I am confident in and enjoy. I have also been helping at the new Arden theatre, mostly building and fitting seats.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <h1 className="text-4xl mt-16">Programming</h1>
                    <div className="flex items-center justify-center text-center mt-4">
                        <p className="max-w-[800px]">
                            Programming has been a massive part of my life since I was about 12, when I started making Minecraft plugins for my Minecraft server at the time. That then evolved into joining a mod creation group and helping with a few. After this, I eventually found my love for Web Development.
                            Every since, I have been focused on that, using tools such as <a href="https://nextjs.org" className="text-blue-500 underline">Next.JS</a>, <a href="https://react.dev/" className="text-blue-500 underline">React.JS</a> and <a href="https://tailwindcss.com/" className="text-blue-500 underline">TailwindCSS</a> for frontend development. For backend, I have focused on <a href="https://github.com/kartikk221/hyper-express" className="text-blue-500 underline">HyperExpress</a> due to its performance using <a href="https://github.com/uNetworking/uWebSockets.js/" className="text-blue-500 underline">uWebSockets.js</a>.
                        </p>
                    </div>
                    <h2 className="text-4xl mt-16">Projects</h2>
                    <div className="flex flex-col items-center justify-center text-center gap-4 mt-4">
                        <h3 className="text-2xl underline">Falcon Hosting Website</h3>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <p className="max-w-[500px]">
                                My best project HAS to be the Falcon Hosting website I designed and built myself, this was a massive challenge. I needed to ensure the site was appealing yet informative, fun yet professional. I went with the choice of adding moving images with LottieFiles, which I have had great feedback on. The website was made entirely using TailwindCSS and Next.JS, completely from scratch. I managed to integrate the API our uptime page uses to also add a little popup at the bottom of the screen to show the current status.
                            </p>
                            <Image src="/falcon-website.png" alt="Falcon Website Image" width={1920} height={1080} className="rounded-lg max-w-[500px]" />
                        </div>
                        <a href="https://falconhosting.co.uk" className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative">Visit Website</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-4 mt-16">
                        <h3 className="text-2xl underline">TapTag</h3>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <p className="max-w-[500px]">
                                TapTag was a reallt fun project to make, using HyperExpress and WebSockets, I managed to create a multiplayer game for me and my friends to play. It had a fully functioning chat, along with commands for moderators to spice up the game, like party mode.
                            </p>
                            <Image src="/taptag.png" alt="TapTag Image" width={1920} height={1080} className="rounded-lg max-w-[500px]" />
                        </div>
                    </div>
                </div>
            </>
    )
}
