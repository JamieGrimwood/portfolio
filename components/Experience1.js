import Image from 'next/image';
import Slider from "react-slick";

export default function AboutMe() {
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
                    <p className="text-white">
                        Back in my old school, I did quite a lot of productions, band shows and talent shows. I got to learn on an X32 mixer, and a jester lighting desk, it wasn't very good, and it was very old, but it worked. I also learned on an analogue mixer, forgotten which one but some beedy eyed genius might be able to spot the model from my pictures.
                    </p>
                </div>
                <Slider {...settings} className="w-96">
                    <div>
                        <Image src="/performances/IMG_0213.JPEG" width={500} height={500} className="rounded-md" />
                    </div>
                    <div>
                        <Image src="/performances/IMG_0214.JPEG" width={500} height={500} className="rounded-md" />
                    </div>
                    {/*
                <div>
                    <Image src="/performances/IMG_1696.JPEG" width={500} height={500} className="rounded-md" />
                </div>
                */}
                    <div>
                        <Image src="/performances/IMG_2213.jpg" width={500} height={500} className="rounded-md" />
                    </div>
                    <div>
                        <Image src="/performances/IMG_2214.JPEG" width={500} height={500} className="rounded-md" />
                    </div>
                    <div>
                        <Image src="/performances/IMG_2215.JPEG" width={500} height={500} className="rounded-md" />
                    </div>
                    <div>
                        <Image src="/performances/IMG_2222.JPEG" width={500} height={500} className="rounded-md" />
                    </div>
                    <div>
                        <Image src="/performances/IMG_2228.JPEG" width={500} height={500} className="rounded-md" />
                    </div>
                    <div className="h-[288px]">
                        <Image src="/performances/IMG_3519.JPEG" layout="fill" objectFit="contain" className="rounded-md" />
                    </div>
                    <div>
                        <Image src="/performances/IMG_9707.JPEG" width={500} height={500} className="rounded-md" />
                    </div>
                    <div>
                        <Image src="/performances/IMG_9714.JPEG" width={500} height={500} className="rounded-md" />
                    </div>
                    <div>
                        <Image src="/performances/IMG_9779.JPEG" width={500} height={500} className="rounded-md" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
