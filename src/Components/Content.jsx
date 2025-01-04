import React from 'react'
import NavigationalBar from './NavigationalBar'

import Hero from './Hero'
import WatchLive from './WatchLive'
import Events from './Events'

export default function Content() {
  return (
    <div className="content shadow-lg hover:shadow-2xl transition-shadow duration-300">
       
        <Hero/>
        <WatchLive/>
        <Events/>
        


    </div>
  )
}
