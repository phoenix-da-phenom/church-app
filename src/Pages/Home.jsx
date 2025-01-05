import React from 'react'
import Content from '../Components/Content'
import Hero from '../Components/Hero'
import WatchLive from '../Components/WatchLive'
import Events from '../Components/Events'

export default function Home() {
  return (
    <div>
        <Content>
        <Hero/>
        <WatchLive/>
        <Events/>

        </Content>
    </div>
  )
}
