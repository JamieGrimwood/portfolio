import './App.css';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <body style={{
      backgroundColor: 'black',
      margin: 0,
      height: "100vh"
    }}>
      <div class="text-center text-2xl text-white">
        <Fade top>
          <h1 class="font-medium">Jamie Grimwood</h1>
        </Fade>
      </div>
      <div class="text-center text-white">
        <Fade top delay={500}>
          <h1>Backend Developer</h1>
        </Fade>
      </div>
      <br></br>
      <div class="text-center text-white">
        <Fade top delay={1000}>
          <h1>Now let me be completely honest, I have no clue how to make frontend. That is why I am a backend dev and using Tailwind.</h1>
          <h1>You can find my github at <a href="https://github.com/JamieGrimwood" class="text-teal-500">https://github.com/JamieGrimwood</a> which is where all my projects that I make are.</h1>
          <h1>I am currently the Lead Developer & Founder at <a href="https://votion.dev" class="text-teal-500">Votion Development</a> and I am the Founder of <a href="https://colournodes.com" class="text-teal-500">ColourNodes</a></h1>
        </Fade>
      </div>
      <br></br>
      <div class="text-center text-white">
        <Fade top delay={1500}>
          <h1>Also fancy sending me a message? Check out <a href="https://sendmessage.jmgcoding.com" class="text-teal-500">https://sendmessage.jmgcoding.com</a></h1>
        </Fade>
      </div>
    </body>
  );
}

export default App;
