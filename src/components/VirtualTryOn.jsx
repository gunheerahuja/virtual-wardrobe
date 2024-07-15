// src/components/VirtualTryOn.jsx
import React, { useEffect } from 'react';
import 'aframe';
import 'ar.js';

const VirtualTryOn = ({ item }) => {
  useEffect(() => {
    // AR.js initialization
    AFRAME.registerComponent('markerhandler', {
      init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
          console.log('Marker Found');
        });
        this.el.sceneEl.addEventListener('markerLost', () => {
          console.log('Marker Lost');
        });
      },
    });
  }, []);

  return (
    <a-scene embedded arjs='sourceType: webcam;'>
      <a-marker preset="hiro" markerhandler>
        <a-entity
          gltf-model={`url(${item.model})`}
          scale="0.5 0.5 0.5"
          position="0 0 0"
          rotation="0 0 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
          gesture-handler
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default VirtualTryOn;
