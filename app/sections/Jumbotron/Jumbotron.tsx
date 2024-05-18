import React from 'react'
import './Jumbotron.css'
import Button from '../../components/Button/Button'

function Jumbotron() {
  return (
    // any property that doesn't start with sm:, md:, lg:, etc are default values for mobile
    // as you increase the screen size, you need to adjust the following for different screen sizes:
    // flex-direction (do the opposite of mobile's flex direction)
    // width for divs (decrease width size as screen size increases)
    // height for divs (increase height size as screen size increases)
    // image size
    // font size
    
    // general formatting for className
    // element name, width (breakpoints), height (breakpoints), flex, flex-wrap, flex-direction (breakpoints), items-center, justify-content, gap, margin, padding

    <section className='jumbotron parent-container' id="home">
        <div className='jumboImg-container child-container'>
            <img className="wehack-mascot h-auto max-w-60 sm:max-w-64 md:max-w-72 lg:max-w-72" src={"/static/images/IMG_0844(1).png"} alt="wehack logo" loading="eager"></img>
        </div>
        <div className='jumboText-container child-container'>
            <div className='jumbo-group'>
                <h3 className='jumbo-text text-[#FFE9D7] text-lg italic lg:text-lg'>WEHack Presents</h3>
                <h1 className='jumbo-title text-[#FFE9D7] text-4xl md:text-5xl lg:text-5xl animate-pulse'>WEHack 2025: Coming Soon</h1>
                <h2 className='jumbo-text text-[#FFE9D7] text-2xl sm:text-2xl md:2xl lg:text-3xl'>April 2025</h2>
                <div className='jumbo-buttons'>
                  {/* <Button link={''} buttonText={'Interest Form'}/> */}
                  {/* <Button link={'https://live.wehackutd.com/'} buttonText={'WEHack Portal'}/> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Jumbotron