import React from 'react'
import './Introduce.css'
import IntroBox from './IntroBox'
import { AiOutlineProduct } from "react-icons/ai";
import { MdHighQuality } from "react-icons/md";
import { MdPriceCheck } from "react-icons/md";


const Introduce = () => {

    const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate aliquid quia libero vero dolores exercitationem iure possimus voluptatibus vel modi ea aliquam accusamus asperiores nam non, doloremque eveniet ipsum?'

    return (
        <div className='introduce'>
            <div className="container ">
                <div className="title">
                    <h4>
                        <span>Let Us Introduce </span>
                         <span> Ourself To You</span>
                         </h4>
                </div>

                <div className="intro-boxes">

                    <IntroBox title={'Variety of products'} desc={lorem} logo={<AiOutlineProduct />
                    } />
                    <IntroBox title={'Quality'} desc={lorem} logo={<MdHighQuality />} />
                    <IntroBox title={'Lowest Price'} desc={lorem} logo={<MdPriceCheck />
                    } />
                </div>

            </div>
        </div>
    )
}

export default Introduce