'use client';
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import { HiPlay, HiPause, HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'

export default function AboutMe() {
    const [isVideo, setIsVideo] = React.useState([{ playing: false, muted: true, elementId: "tpe-video" }, { playing: false, muted: true, elementId: "tpe-video2" }, { playing: false, muted: true, elementId: "tpe-video3" }, { playing: false, muted: true, elementId: "tpe-video4" }])

    React.useEffect(() => {
        setTimeout(() => {
            const newArr = isVideo.map((video) => {
                document.getElementById(video.elementId).play();
                return { ...video, playing: true }
            })
            setIsVideo(newArr);
        }, 10)
    }, [])

    const ToggleMute = (index) => {
        const newArr = isVideo.map((video, i) => {
            if (i === index) {
                if (video.muted) {
                    document.getElementById(video.elementId).muted = false
                    return { ...video, muted: false }
                } else {
                    document.getElementById(video.elementId).muted = true
                    return { ...video, muted: true }
                }
            } else {
                return video;
            }
        });
        setIsVideo(newArr);
    }

    const TogglePausePlay = (index) => {
        const newArr = isVideo.map((video, i) => {
            if (i === index) {
                if (video.playing) {
                    document.getElementById(video.elementId).pause()
                    return { ...video, playing: false }
                } else {
                    document.getElementById(video.elementId).play()
                    return { ...video, playing: true }
                }
            } else {
                return video;
            }
        });
        setIsVideo(newArr);
    }

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
        <div className="flex flex-col justify-center gap-4 h-full">
            <h1 className="text-center text-white text-4xl font-bold">My Experiences</h1>
            <div className="flex justify-between items-center h-full">
                <div className="flex flex-col items-center w-full mx-4">
                    <p className="text-white text-center">
                        Back in my old school, I did quite a lot of productions, band shows and talent shows. I got to learn on an X32 mixer, and a jester lighting desk, it wasn't very good, and it was very old, but it worked. I also learned on an analogue mixer, forgotten which one but some beedy eyed genius might be able to spot the model from my pictures.
                    </p>
                </div>
                <div className="flex flex-col w-[1300px] h-full gap-4">
                    <div className="flex flex-row justify-center gap-4">
                        <div>
                            <div className="flex flex-row justify-center text-white mt-2">
                                <button
                                    outline={true}
                                    className="mb-2 rounded-lg"
                                    onClick={() => TogglePausePlay(0)}
                                >
                                    {isVideo[0].playing
                                        ?
                                        <HiPause className="h-6 w-6" />
                                        :
                                        <HiPlay className="h-6 w-6" />
                                    }
                                </button>
                                <button
                                    outline={true}
                                    className="mb-2 ml-4 rounded-lg"
                                    onClick={() => ToggleMute(0)}
                                >
                                    {isVideo[0].muted
                                        ?
                                        <HiSpeakerXMark className="h-6 w-6" />
                                        :
                                        <HiSpeakerWave className="h-6 w-6" />
                                    }
                                </button>
                            </div>
                            <video className="h-64 border rounded-lg" id="tpe-video" muted loop webkit-playsinline="true" playsInline>
                                <source src="/performances/6EB53089-B3CE-4C59-9332-5EBDE7544F0A.MP4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div>
                            <div className="flex flex-row justify-center text-white mt-2">
                                <button
                                    outline={true}
                                    className="mb-2 rounded-lg"
                                    onClick={() => TogglePausePlay(3)}
                                >
                                    {isVideo[3].playing
                                        ?
                                        <HiPause className="h-6 w-6" />
                                        :
                                        <HiPlay className="h-6 w-6" />
                                    }
                                </button>
                                <button
                                    outline={true}
                                    className="mb-2 ml-4 rounded-lg"
                                    onClick={() => ToggleMute(3)}
                                >
                                    {isVideo[3].muted
                                        ?
                                        <HiSpeakerXMark className="h-6 w-6" />
                                        :
                                        <HiSpeakerWave className="h-6 w-6" />
                                    }
                                </button>
                            </div>
                            <video className="h-64 border rounded-lg" id="tpe-video4" muted loop webkit-playsinline="true" playsInline>
                                <source src="/performances/94F6B965-4B87-421A-B360-0D8136779BD7.MP4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-4">
                        <div>
                            <div className="flex flex-row justify-center text-white mt-2">
                                <button
                                    outline={true}
                                    className="mb-2 rounded-lg"
                                    onClick={() => TogglePausePlay(1)}
                                >
                                    {isVideo[1].playing
                                        ?
                                        <HiPause className="h-6 w-6" />
                                        :
                                        <HiPlay className="h-6 w-6" />
                                    }
                                </button>
                                <button
                                    outline={true}
                                    className="mb-2 ml-4 rounded-lg"
                                    onClick={() => ToggleMute(1)}
                                >
                                    {isVideo[1].muted
                                        ?
                                        <HiSpeakerXMark className="h-6 w-6" />
                                        :
                                        <HiSpeakerWave className="h-6 w-6" />
                                    }
                                </button>
                            </div>
                            <video className="w-64 border rounded-lg" id="tpe-video2" muted loop webkit-playsinline="true" playsInline>
                                <source src="/performances/IMG_0087.MP4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div>
                            <div className="flex flex-row justify-center text-white mt-2">
                                <button
                                    outline={true}
                                    className="mb-2 rounded-lg"
                                    onClick={() => TogglePausePlay(2)}
                                >
                                    {isVideo[2].playing
                                        ?
                                        <HiPause className="h-6 w-6" />
                                        :
                                        <HiPlay className="h-6 w-6" />
                                    }
                                </button>
                                <button
                                    outline={true}
                                    className="mb-2 ml-4 rounded-lg"
                                    onClick={() => ToggleMute(2)}
                                >
                                    {isVideo[2].muted
                                        ?
                                        <HiSpeakerXMark className="h-6 w-6" />
                                        :
                                        <HiSpeakerWave className="h-6 w-6" />
                                    }
                                </button>
                            </div>
                            <video className="w-64 border rounded-lg" id="tpe-video3" muted loop webkit-playsinline="true" playsInline>
                                <source src="/performances/IMG_0085.MP4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
