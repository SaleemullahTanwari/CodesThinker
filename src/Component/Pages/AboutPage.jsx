import React from 'react'
import AboutP1 from '../AboutPage/AboutP1'
import AboutP2 from '../AboutPage/AboutP2'
import AboutP3 from '../AboutPage/AboutP3'

const AboutPage = () => {
  return (
    <div className='h-[auto] w-full flex flex-col gap-6'>
        <AboutP1/>
        <AboutP2/>
        <AboutP3/>
    </div>
  )
}

export default AboutPage
