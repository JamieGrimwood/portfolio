import React from 'react';
import { Card } from 'flowbite-react';
import $ from 'jquery';

export default function Home() {
  const currentLKPImage = React.useRef(1)
  const currentExplorersImage = React.useRef(1)

  const LKPImages = ["/projects/license-key-panel/license-key-panel-login.png", "/projects/license-key-panel/license-key-panel-dashboard.png", "/projects/license-key-panel/license-key-panel-keys.png"]
  const explorersImages = ["/projects/explorers-panel/explorers-panel-login.png", "/projects/explorers-panel/explorers-panel-dashboard.png", "/projects/explorers-panel/explorers-panel-view-event.png", "/projects/explorers-panel/explorers-panel-edit-event.png"]

  React.useEffect(() => {
    const id1 = setInterval(() => {
      $("#license-key-panel-image").fadeOut(3000, function () {
        $("#license-key-panel-image").attr("src", LKPImages[currentLKPImage.current]);
        if (currentLKPImage.current === LKPImages.length - 1) {
          currentLKPImage.current = 0
        } else {
          currentLKPImage.current = currentLKPImage.current + 1
        }
      }).fadeIn(3000);
    }, 7000)

    const id2 = setInterval(() => {
      $("#explorers-panel-image").fadeOut(3000, function () {
        $("#explorers-panel-image").attr("src", explorersImages[currentExplorersImage.current]);
        if (currentExplorersImage.current === explorersImages.length - 1) {
          currentExplorersImage.current = 0
        } else {
          currentExplorersImage.current = currentExplorersImage.current + 1
        }
      }).fadeIn(3000);
    }, 7000)

    return () => {
      clearInterval(id1)
      clearInterval(id2)
    }
  }, [])

  return (
    <div className="m-4 text-center">
      <h1 className="text-4xl font-bold text-white fadein-text">Projects</h1>
      <a className="text-xl text-white fadein-subtext">This is a showcase of projects that I am working on or have done</a>
      <Card className="fadein-main mt-4">
        <div className="flex justify-between">
          <div className="flex flex-col text-left">
            <a className="text-white font-bold text-xl">Jamie's License Key Panel</a>
            <a className="text-white">My License Key Panel is a website that allows you to manage license keys easily, with a robust API system to allow your software to check if an API key is valid. It has a clean and easy to navigate user interface and allows users to easily view active license keys and software, and sort license keys by owners, keys or software. Sensitive info like keys and API keys are automatically blurred out, and can be seen by hovering over them or toggling the blur button.</a>
          </div>
          <img
            src="/projects/license-key-panel/license-key-panel-login.png"
            id="license-key-panel-image"
            className="w-2/5 border rounded-lg ml-4 bottom"
          />
        </div>
        <div className="flex justify-between">
          <img
            src="/projects/explorers-panel/explorers-panel-login.png"
            id="explorers-panel-image"
            className="w-2/5 border rounded-lg bottom"
          />
          <div className="flex flex-col text-left ml-4">
            <a className="text-white font-bold text-xl">Explorer Scouts Panel</a>
            <a className="text-white">I created this web panel because the one we Explorer Scouts were supposed to be using (Online Scout Manager) does not allow explorers to add events themselves, and assign events to eachother, which is what we needed. This panel allows us to assign events to eachother so people know when they are running a night or not. It also has badges for upcoming events and to say if you are running events, and also the ability to email all users on the panel if an announcement is needed to be sent out. With the help of "react-select", I have been able to implement the system of assigning multiple users to an event, and just having an easy dropdown select for users. It also uses Socket.IO to automatically update the events overview when one is created, edited, or deleted.</a>
          </div>
        </div>
        <a className="text-white font-bold text-2xl">There is more to come! Stay tuned as I add more of my projects and things I do to this page</a>
      </Card>
    </div>
  )
}