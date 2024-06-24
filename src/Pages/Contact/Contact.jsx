import React from 'react'
import ContactUs from './../../Components/ContactUs/ContactUs'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="contact-container">

                {/* Contact First Part */}

                <div className="contact-box">
                    <h3 className='c-title'> Major Shopping</h3>
                    <p className='c-desc'>For bulk purchases, you can use two communication methods in Telegram or face-to-face shopping
                    The Telegram link and the address for in-person purchase are listed below
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, animi assumenda recusandae velit sit et obcaecati voluptates nesciunt at beatae, illo esse facere! Eos facilis assumenda ducimus pariatur provident fugiat.
                    </p>
                </div>

                {/* Contact Second Part */}

                <div className="contact-box">
                    <h3 className='c-title'>Work With Us</h3>
                    <p className='c-desc'>To cooperate with us, you can contact us by phone or by email
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At atque veniam modi temporibus eveniet eaque veritatis, natus repellat dolorum quo odit iusto beatae quia, quisquam animi quibusdam ad aperiam laboriosam?
                        Cupiditate, officia. Repudiandae eligendi, laudantium aspernatur repellat est quos ipsum fuga. Explicabo, fugit aut maiores autem tempore fuga voluptas asperiores expedita officiis! Dolore facere voluptas, repellendus quod ad magni debitis?
                    </p>
                </div>

                {/* Contact Third Part */}

                <div className="contact-box">
                    <h3 className='c-title'>Working Hours</h3>
                    <p className='c-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel consequatur, odio possimus laudantium velit ipsa id dignissimos, aut totam iste, atque eaque perspiciatis impedit quia nulla pariatur alias voluptatum!
                    Placeat odio tempore necessitatibus distinctio vitae iusto recusandae architecto optio pariatur nisi reprehenderit illum voluptatibus, similique dicta commodi, quidem, ducimus saepe temporibus corrupti quaerat adipisci harum. Cupiditate voluptates soluta et!
                    </p>
                </div>

                <ContactUs/>

            </div>
        </div>
    </div>
  )
}

export default Contact