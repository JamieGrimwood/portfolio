import { Card, Avatar, Carousel, Button } from 'flowbite-react';
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="m-4">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-white fadein-text">Hi, I'm Jamie <span className="wave">👋🏻</span></h1>
          <a className="text-xl text-white fadein-subtext">I'm a fullstack developer & System Administrator from the UK.</a>
          <p className="text-xl text-white fadein-subtext">I also do a lot of Technical Theatre on the side.</p>
          <p className="text-xl text-white fadein-subtext">Founder & Company Director of <span className="text-blue-500 cursor-pointer underline" onClick={() => window.open("https://falconhosting.co.uk")}>FalconHosting.co.uk</span></p>
        </div>
        <img
          src="/profile-image.jpg"
          className="rounded-3xl h-64 fadein-subtext mt-4"
          alt="JMGCoding Logo"
        />
      </div>
      <div className="fadein-main mt-4">
        <Card className="text-center">
          <p className="text-white text-lg font-bold">Development technologies I work with:</p>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex flex-col">
              <Avatar
                img="/icons/nodejs.png"
                size="lg"
              />
              <a className="text-white">Node.js</a>
            </div>
            <div className="flex flex-col">
              <Avatar
                img="/icons/python.png"
                size="lg"
              />
              <a className="text-white">Python</a>
            </div>
            <div className="flex flex-col">
              <Avatar
                img="/icons/nextjs.png"
                size="lg"
              />
              <a className="text-white">Next.js</a>
            </div>
            <div className="flex flex-col">
              <Avatar
                img="/icons/reactjs.png"
                size="lg"
              />
              <a className="text-white">React.js</a>
            </div>
            <div className="flex flex-col">
              <Avatar
                img="/icons/vitejs.png"
                size="lg"
              />
              <a className="text-white">Vite.js</a>
            </div>
            <div className="flex flex-col">
              <Avatar
                img="/icons/tailwindcss.png"
                size="lg"
              />
              <a className="text-white">Tailwind CSS</a>
            </div>
            <div className="flex flex-col">
              <Avatar
                img="/icons/socketio.png"
                size="lg"
              />
              <a className="text-white">Socket.io</a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button className="w-48" onClick={() => navigate('/projects')}>Check out my projects</Button>
            <Button className="w-48 ml-4" onClick={() => window.open("https://www.buymeacoffee.com/JamieGrimwood")}>Support my work</Button>
          </div>
        </Card>
        <div className="h-96 sm:h-screen mt-4 mb-4">
          <div className="flex flex-col text-center mb-4">
            <a className="text-white text-4xl font-bold">Recent Shows</a>
            <a className="text-white">These are productions and gigs I have recently done</a>
          </div>
          <Carousel>
            <img
              src="/performances/IMG_0213.JPEG"
              alt="IMG_0213.JPEG"
            />
            <img
              src="/performances/IMG_0214.JPEG"
              alt="IMG_0214.JPEG"
            />
            <img
              src="/performances/IMG_1696.JPEG"
              alt="IMG_1696.JPEG"
            />
            <img
              src="/performances/IMG_2213.jpg"
              alt="IMG_2213.JPEG"
            />
            <img
              src="/performances/IMG_2214.JPEG"
              alt="IMG_2214.JPEG"
            />
            <img
              src="/performances/IMG_2215.JPEG"
              alt="IMG_2215.JPEG"
            />
            <img
              src="/performances/IMG_2222.JPEG"
              alt="IMG_2222.JPEG"
            />
            <img
              src="/performances/IMG_2228.JPEG"
              alt="IMG_2228.JPEG"
            />
            <img
              src="/performances/IMG_3519.JPEG"
              alt="IMG_3519.JPEG"
            />
            <img
              src="/performances/IMG_4747.PNG"
              alt="IMG_4747.JPEG"
            />
            <img
              src="/performances/IMG_4748.jpg"
              alt="IMG_4748.JPEG"
            />
            <img
              src="/performances/IMG_9707.JPEG"
              alt="IMG_9707.JPEG"
            />
            <img
              src="/performances/IMG_9714.JPEG"
              alt="IMG_9714.JPEG"
            />
            <img
              src="/performances/IMG_9779.JPEG"
              alt="IMG_9779.JPEG"
            />
          </Carousel>
        </div>
      </div>
    </div>
  )
}