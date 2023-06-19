export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 h-full">
            <h1 className="text-center text-white text-4xl font-bold">Timeline</h1>
            <ol className="border-l border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
                <li>
                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0" />
                        <p className="mt-2 text-sm text-neutral-300">
                            28/02/2021
                        </p>
                    </div>
                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                        <h4 className="mb-1.5 text-xl font-semibold text-white">ColourNodes</h4>
                        <p className="mb-3 text-neutral-300">
                            I founded ColourNodes with someone else back in 2021. I handled all the system administration and development, making unique systems lile linkin discord accounts with WHMCS client accounts, and so much more.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0" />
                        <p className="mt-2 text-sm text-neutral-300">
                            21/08/2022
                        </p>
                    </div>
                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                        <h4 className="text-xl font-semibold text-white">Falcon Hosting</h4>
                        <a className="mb-1.5 text-blue-500 underline" href="https://falconhosting.co.uk">https://falconhosting.co.uk</a>
                        <p className="mb-3 text-neutral-300">
                            I am the founder of Falcon Hosting and I work on managing our systems along side our system administrator, as well as helping clients and improving and adding new services.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0" />
                        <p className="mt-2 text-sm text-neutral-300">
                            05/06/2023
                        </p>
                    </div>
                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                        <h4 className="text-xl font-semibold text-white">Learn It Sign It</h4>
                        <a className="mb-1.5 text-blue-500 underline" href="https://learnitsignit.co.uk">https://learnitsignit.co.uk</a>
                        <p className="mb-3 text-neutral-300">
                            I have taken on a volunteer role at Learn It Sign It as a software engineer, creating their website to host their amazing signing videos, to teach kids around the world how to use sign language to sing songs.
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    )
}
