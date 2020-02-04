import React,{useState} from 'react'

export default function EnglishTest() {

    const [email,setEmail] = useState('');

    return (
        <div>
            <form id="fs-frm" name="simple-contact-form"  acceptCharset="utf-8" action={'https://formspree.io/'+email} method="post">
               <div className='form-group'>
                <fieldset id="fs-frm-inputs">
                    <label for="full-name">Full Name</label>
                    <input className='form-control' type="text" name="name" id="full-name" placeholder="Enter your full name" required=""/>
                    <label for="email-address">Email advisor</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} className='form-control' type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
                    <label for="message">Write down a few sentences about yourself</label>
                    <textarea className='form-control' rows="5" name="message" id="message" placeholder="Minimum 3 lines" required=""></textarea>
                    <input className='form-control' type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                </fieldset>
            <input className='btn btn-primary' type="submit" value="Submit"/>
            </div>
            </form>
        </div>
    )
}
