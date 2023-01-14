import React from 'react';
import { Card, Button } from 'flowbite-react';
import { HiPlay, HiPause, HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'

export default function ShowsAndGigs() {
  const [isVideo, setIsVideo] = React.useState([{ playing: false, muted: true, elementId: "tpe-video" }, { playing: false, muted: true, elementId: "tpe-video2" }, { playing: false, muted: true, elementId: "tpe-video3" }, { playing: false, muted: true, elementId: "tpe-video4" }])

  React.useEffect(() => {
    const newArr = isVideo.map((video) => {
      document.getElementById(video.elementId).play();
      return { ...video, playing: true }
    })
    setIsVideo(newArr);
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

  return (
    <div className="m-4 text-center">
      <h1 className="text-4xl font-bold text-white fadein-text">Shows and Gigs</h1>
      <a className="text-xl text-white fadein-subtext">These are the Shows and Gigs I have done</a>
      <Card className="fadein-main mt-4">
        <div>
          <div className="flex flex-col text-center justify-center items-center">
            <a className="text-white font-bold text-2xl">The Point Eastleigh</a>
            <a className="text-white font-bold text-md">Date: 30th March 2022</a>
            <a className="text-white">My old school invited me to go along with their dance group to The Point theatre in Eastleigh. This was a great experience, as the studio technician at my school was a theatre technician at that theatre, so I got to meet the theatre technicians at the theatre and learn how their eqiupment works and ask them questions about their job.</a>
            <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
              <div>
                <div className="flex flex-col text-center items-center justify-center">
                  <div className="flex flex-row mt-2">
                    <Button
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
                    </Button>
                    <Button
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
                    </Button>
                  </div>
                  <video className="w-64 border rounded-lg" id="tpe-video" muted loop webkit-playsinline="true" playsInline>
                    <source src="/performances/6EB53089-B3CE-4C59-9332-5EBDE7544F0A.MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <a className="text-white w-64 mt-4">In this video, I got the chance to watch the tech run of the group of dancers I was with. I also met with the technicians up top (where I was standing filming the video) and got to meet them and see how their equipment works and what they use.</a>
                </div>
              </div>
              <div className="h-64">
                <div className="flex flex-col text-center items-center justify-center h-64">
                  <div className="flex flex-row mt-2">
                    <Button
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
                    </Button>
                    <Button
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
                    </Button>
                  </div>
                  <video className="w-96 border rounded-lg" id="tpe-video2" muted loop webkit-playsinline="true" playsInline>
                    <source src="/performances/IMG_0087.MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <a className="text-white w-96 mt-4">In this video, I was watching the pre-show rehersal of another dance group, their soundtrack sounded amazing in this theatre!</a>
                </div>
              </div>
              <div>
                <div className="flex flex-col text-center items-center justify-center">
                  <div className="flex flex-row mt-2">
                    <Button
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
                    </Button>
                    <Button
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
                    </Button>
                  </div>
                  <video className="w-96 border rounded-lg" id="tpe-video3" muted loop webkit-playsinline="true" playsInline>
                    <source src="/performances/IMG_0085.MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <a className="text-white w-96">In this video, I got to watch the dance group I was with do their pre-show rehersal.</a>
                </div>
              </div>
              <div>
                <div className="flex flex-col text-center items-center justify-center">
                  <div className="flex flex-row mt-2">
                    <Button
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
                    </Button>
                    <Button
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
                    </Button>
                  </div>
                  <video className="w-64 border rounded-lg" id="tpe-video4" muted loop webkit-playsinline="true" playsInline>
                    <source src="/performances/94F6B965-4B87-421A-B360-0D8136779BD7.MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <a className="text-white w-64 mt-4">In this video, I was with my schools studio technician in the old tech booth at the back of the theatre, and got to listen on the XLR PA system for the technicians and backstage.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="text-white">More is being added, this website just takes a very long time to make it support mobile and desktop.</a>
      </Card>
    </div>
  )
}