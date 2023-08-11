'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Slider from '../components/Slider';
import { scrollIntoView } from 'seamless-scroll-polyfill';

import { BsArrowDown } from 'react-icons/bs';

export default function Home() {
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

    return (
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
                </div>
                <div className="flex items-center justify-end sm:mr-16 sm:w-1/2 sm:h-full">
                    <Image src="/me.jpg" width={2000} height={1333} className="rounded-lg w-4/5" priority unoptimized={true} />
                </div>
            </div>
            <div className="flex flex-col items-center text-center bg-white sm:mx-32 mb-16" id="about">
                <h1 className="text-6xl">About Me</h1>
                <p className="w-[500px] mt-4">
                    Hey! I'm Jamie Grimwood, a 15 year old fullstack web developer and volunteer theatre technician (at the moment). I love music, computer science, and most things techy.
                </p>
                <h2 className="text-4xl mt-16">Scouting</h2>
                <div className="flex flex-col gap-8 mt-4">
                    <div className="flex flex-wrap justify-center items-center gap-16">
                        <p className="w-[500px]">I have been doing scouting for a little over 8 years now, starting in sea scouts and moving to normal scouts. Throughout this time, I have learnt a lot of skills along the way, as well as had a ton of fun. I have participated in camps, hikes, watersports activities, fundraising events, community events, and more.</p>
                        <Slider {...settings} className="flex items-center justify-center h-96 w-[512px]">
                            <div className="flex items-center justify-center" key={'IMG_7708.jpg'}>
                                <Image src="/scouting/IMG_7708.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                            </div>
                            <div className="flex items-center justify-center" key={'6559ef14-6a4a-4f41-940a-a0d741827456.JPG'}>
                                <Image src="/scouting/6559ef14-6a4a-4f41-940a-a0d741827456.JPG" height={400} width={500} className="h-96 w-auto rounded-lg" />
                            </div>
                            <div className="flex items-center justify-center" key={'3e185f56-c9e8-4777-a440-61f0ff76c11f.JPG'}>
                                <Image src="/scouting/3e185f56-c9e8-4777-a440-61f0ff76c11f.JPG" height={400} width={300} className="h-96 w-auto rounded-lg" />
                            </div>
                            <div className="flex items-center justify-center" key={'IMG_1615.jpg'}>
                                <Image src="/scouting/IMG_1615.jpg" height={400} width={500} className="h-96 w-auto rounded-lg" />
                            </div>
                            <div className="flex items-center justify-center" key={'IMG_0817.jpg'}>
                                <Image src="/scouting/IMG_0817.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                            </div>
                            <div className="flex items-center justify-center" key={'IMG_0100.jpg'}>
                                <Image src="/scouting/IMG_0100.jpg" height={400} width={500} className="h-96 w-auto rounded-lg" />
                            </div>
                            <div className="flex items-center justify-center" key={'IMG_7810.jpg'}>
                                <Image src="/scouting/IMG_7810.jpg" height={400} width={500} className="h-96 w-auto rounded-lg" />
                            </div>
                        </Slider>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-16">
                        <Slider {...settings} className="flex items-center justify-center h-96 w-[512px]">
                            <div className="flex items-center justify-center" key={'IMG_3828.jpg'}>
                                <Image src="/scouting/IMG_3828.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                            </div>
                            <div className="flex items-center justify-center" key={'IMG_3836.jpg'}>
                                <Image src="/scouting/IMG_3836.jpg" height={400} width={500} className="h-96 w-auto rounded-lg" />
                            </div>
                            <div className="flex items-center justify-center" key={'IMG_3837.jpg'}>
                                <Image src="/scouting/IMG_3837.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                            </div>
                            <div className="flex items-center justify-center" key={'IMG_3839.jpg'}>
                                <Image src="/scouting/IMG_3839.jpg" height={400} width={300} className="h-96 w-auto rounded-lg" />
                            </div>
                        </Slider>
                        <p className="w-[500px]">During this time, I was awarded the Alf Breeze award for my work as a Young Leader at a cub group, where I have been working with other leaders to run nights and activities for the cubs, as well as helping out at their fundraising events.</p>
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
                <h2 className="text-4xl mt-16">Programming</h2>
                <div className="flex flex-col gap-8 mt-4">
                    <div className="flex flex-wrap justify-center items-center gap-16">
                        <p className="w-[500px]">I have been doing scouting for a little over 8 years now, starting in sea scouts and moving to normal scouts. Throughout this time, I have learnt a lot of skills along the way, as well as had a ton of fun. I have participated in camps, hikes, watersports activities, fundraising events, community events, and more.</p>
                    </div>
                </div>
            </div>
            <Image src="https://github-readme-stats.vercel.app/api?username=JamieGrimwood&show_icons=true" width={500} height={300} />
        </>
    )
}
