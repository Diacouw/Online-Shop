import React from 'react'

import './AboutUs.css'
import AboutSwiper from './AboutSwiper'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className="container">
        <div className="about-us-container">

          {/* When We Start */}

          <div className="start-time">
            <h4 className='st-title'>When did we start?</h4>
            <p className='st-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta nihil animi iusto voluptate aperiam sunt vel sequi, reiciendis adipisci dolore provident, corporis iste fuga minima architecto enim fugit mollitia!
              Fugiat eos praesentium accusantium repellat temporibus! Quo dolorem nam id perferendis temporibus qui, excepturi, consequuntur iure deleniti quod illo est adipisci, unde fuga suscipit quisquam quidem culpa sunt. Minus, vel.
              Maxime ea ratione obcaecati culpa beatae quia, tempora illo, animi odit nihil reprehenderit a esse doloremque hic rem accusantium, natus amet. Saepe impedit accusamus laborum sint nesciunt voluptas nam cumque.</p>
          </div>

          {/* Number of branches */}

          <div className="num-branches">
            <h3 className='our-branches'>
              Our Branches
            </h3>
          <AboutSwiper/>

          </div>





        </div>
      </div>
    </div >
  )
}

export default AboutUs