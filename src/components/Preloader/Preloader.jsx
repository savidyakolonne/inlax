import React from 'react'
import preloaderGif from '../../assets/preloader.gif'

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <img
        src={preloaderGif}
        alt="Loading..."
        className="w-50 h-50"
      />
    </div>
  )
}

export default Preloader

