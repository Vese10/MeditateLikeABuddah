import { useState, useEffect } from 'react';
import './MeditationSession.css';
import meditateLogo from '../../public/meditate-logo.svg';
import GetStarted from '../GetStarted/GetStarted';

function MeditationSession( {time, sound} ) {
  const [stopMeditate, setStopMeditate] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const sessionDuration = time * 60000;
  const [remainingTime, setRemainingTime] = useState(sessionDuration);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setProgress(prevProgress => {
          const newProgress = prevProgress + (100 / (sessionDuration / 1000));
          if (newProgress >= 100) {
            clearInterval(interval);
            setStopMeditate(true);
          }
          return newProgress;
        });
        setRemainingTime(time => time - 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleStopMeditate = () => {
    setStopMeditate(true);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  if (stopMeditate) {
    return <GetStarted />;
  }

  return (
    <div className="settings">
      <img src={meditateLogo} className="meditate-logo-set" />
      <div className="session">
        <div className="countdown">
          {Math.floor(remainingTime / 60000)}:
          {Math.floor((remainingTime % 60000) / 1000).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        </div>
        <progress value={progress} max="100" className="progress-bar" />
        <audio src={sound} autoPlay loop />
        <div className="session-actions">
          <button className="play" onClick={handlePlay}>play</button>
          <button className="pause" onClick={handlePause}>pause</button>
          <button className="close" onClick={handleStopMeditate}>X</button>
        </div>
      </div>
    </div>
  );
}

export default MeditationSession;