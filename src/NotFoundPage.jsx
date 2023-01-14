import Lottie from 'react-lottie-player';
import errorLottie from './lottiefiles/98170-sunthalpy-404.json';

export default function NotFoundPage() {
    return (
        <div className="m-4 flex justify-center items-center flex-col">
            <h1 className="text-white text-8xl font-bold">Uh Oh!</h1>
            <p className="text-white text-2xl">That page could not be found.</p>
            <Lottie
                loop
                animationData={errorLottie}
                play
                style={{ width: 600, height: 600 }}
            />
        </div>
    );
}