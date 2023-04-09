import React from 'react';
import { useState, useRef } from 'react';
import { tracks } from '../data/tracks';

import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const AudioPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef();
    const progressBarRef = useRef();
    console.log(audioRef);
    
    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
          setTrackIndex(0);
          setCurrentTrack(tracks[0]);
        } else {
          setTrackIndex((prev) => prev + 1);
          setCurrentTrack(tracks[trackIndex + 1]);
        }
      };

    return(
        <div className='audio-player'>
        <div className='inner'>
            <DisplayTrack 
            currentTrack={currentTrack}
            audioRef={audioRef}
            setDuration={setDuration}
            progressBarRef={progressBarRef}
            handleNext={handleNext}
            />
            <Controls
            audioRef={audioRef}
            progressBarRef={progressBarRef}
            duration={duration} 
            setTimeProgress={setTimeProgress}
            tracks={tracks}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            setCurrentTrack={setCurrentTrack}
            handleNext={handleNext}
            />
            <ProgressBar
            progressBarRef={progressBarRef}
            audioRef={audioRef} 
            timeProgress={timeProgress}
            duration={duration}
            />
        </div>
        </div>
    );
};

export default AudioPlayer;