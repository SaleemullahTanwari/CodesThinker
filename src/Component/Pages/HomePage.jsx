import React from 'react'
import Page1 from '../homePage/Page1'
import Page2 from '../homePage/Page2'
import Page3 from '../homePage/Page3'
import Page4 from '../homePage/Page4'
import Page5 from '../homePage/Page5'
import Page6 from '../homePage/Page6'
import Page7 from '../homePage/Page7'
import Page9 from '../homePage/Page9'
import Page10 from '../homePage/Page10'

const HomePage = () => {
  return (
    <div className='h-[auto] w-full flex flex-col gap-1'>
     <Page1/>
     <Page2/>
     <Page3/>
     <Page4/>
     <Page5/>
     <Page6/>
     <Page7/>
     <Page9/>
     <Page10/>
    </div>
  )
}

export default HomePage


