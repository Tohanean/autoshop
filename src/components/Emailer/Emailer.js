import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SubHeading from '../SubHeading/SubHeading';
import './Emailer.css';

export const Emailer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8e7vumu', 'template_e6wdvhd', form.current, 'h_GKo1DRrB7-ofoIf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="app__emailer">
      <div className="app__emailer-heading">
        <SubHeading title="Contact us!" />
      </div>
      <div className="app__emailer-input flex__center">
       <form ref={form} onSubmit={sendEmail}>
        <label className="p__opensans">Name  </label>
        <input type="text" name="user_name" />
        <label className="p__opensans">Email  </label>
        <input type="email" name="user_email" />
        <div className="app__emailer-message flex__center">
        <label className="p__opensans">Message  </label>
        <textarea name="message" />
        
        <input type="submit"  value="Send"  />
        </div>
       </form>
      </div>
    </div>
  );
};

export default Emailer;