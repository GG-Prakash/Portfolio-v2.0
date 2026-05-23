// Preloader.jsx
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="w-30 h-30">
        <DotLottieReact
          src="https://lottie.host/35459ec0-6655-445d-8da8-d1949ab260fc/G9au14mopn.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Preloader;
