// TryOnView.js

import React, { useRef, useEffect, useState } from 'react';

const TryOnView = ({ selectedItem }) => {
  const [isCameraOn, setIsCameraOn] = useState(true); // State to track camera on/off
  const videoRef = useRef(null);

  useEffect(() => {
    if (isCameraOn) {
      startCamera();
    } else {
      stopCamera();
    }

    // Clean up function
    return () => {
      stopCamera();
    };
  }, [isCameraOn]); // useEffect dependency on isCameraOn state

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
    }
  };

  const stopCamera = () => {
    let stream = videoRef.current.srcObject;
    if (stream) {
      let tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const toggleCamera = () => {
    setIsCameraOn(prevState => !prevState);
  };

  return (
    <div className="try-on-view">
      <h2>Try On: {selectedItem.name}</h2>
      <p>Use the AR marker to try on the item virtually.</p>
      <video ref={videoRef} className="video" />
      <button onClick={toggleCamera}>
        {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
      </button>
    </div>
    
  );
};

export default TryOnView;
