import React from 'react';
import Balls from '../../UtilComp/Balls/Balls';
import RippleButton from '../../UtilComp/RippleButton/RippleButton';

function UpdateScore() {
    const handleBallClick = (content, index) => {
        console.log(`Ball ${index + 1} clicked with content: ${content}`);
    };

    return (
        <main className="w-full h-full flex flex-col bg-gradient-to-b from-green-200 to-green-400 p-4">
            {/* Balls display section */}
            <section className="w-full h-max bg-green-300 shadow-md rounded-lg flex items-center justify-center mb-4">
                <Balls
                    numberOfBalls={6}
                    animateActive={true}
                    onBallClick={handleBallClick}
                />
            </section>

            {/* Center Ripple Button section */}
            <section className="w-full h-[10%] flex items-center justify-center">
                <RippleButton buttonText="Update Score" />
            </section>

            {/* Input Section */}
            <section className="w-full h-max bg-green-300 shadow-md rounded-lg flex items-center justify-center mt-4">
                <Balls
                    numberOfBalls={8}
                    content={[1, 2, 3, 4, 6, 'W', 'Wd', 'NB']}
                    animateActive={false}
                    onBallClick={handleBallClick}
                />
            </section>
        </main>
    );
}

export default UpdateScore;
