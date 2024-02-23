import ReactPlayer from 'react-player'
import { useState, useEffect } from 'react';
import './MeditationSession.css';
import meditateLogo from '../../public/meditate-logo.svg';
import GetStarted from '../GetStarted/GetStarted';

function MeditationSession( {toggleGetStarted, toggleMeditationSession, toggleMainContent, time, sound} ) {
  const [stopMeditate, setStopMeditate] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const sessionDuration = time * 60000;
  const [remainingTime, setRemainingTime] = useState(sessionDuration);
  const [soundPlaying, setSoundPlaying] = useState(true);

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

  useEffect(() => {
    if (isPaused) {
      setSoundPlaying(false);
    } else {
      setSoundPlaying(true);
    }
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  const startNewSession = () => {
    setStopMeditate(false);
    setProgress(0);
    setRemainingTime(sessionDuration);
  };

  if (stopMeditate) {
    return <GetStarted toggleMeditationSession={toggleMeditationSession} toggleMainContent={toggleMainContent} startNewSession={startNewSession} key={Date.now()}/>;
  }

  return (
    <div className="meditate-set">
      <img src={meditateLogo} className="meditate-logo-set" />
      <div className="session">
        <div className="countdown">
          {Math.floor(remainingTime / 60000)}:
          {Math.floor((remainingTime % 60000) / 1000).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        </div>
        <progress value={progress} max="100" className="progress-bar" />
        <ReactPlayer className="react-player" url={sound} playing={soundPlaying} loop />
        <div className="session-actions">
          <button className="play" onClick={handlePlay}>▶</button>
          <button className="pause" onClick={handlePause}>▐▐</button>
          <button className="close" onClick={toggleGetStarted}>◼</button>
        </div>
      </div>
    </div>
  );
}

export default MeditationSession;