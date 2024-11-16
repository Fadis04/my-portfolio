import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine, RiPhoneLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5hctn4m",
        "template_xcrd1mm",
        form.current,
        "iGfQ7tw7LLcW30NhI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("message has been sent successfully!");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <a
              href="mailto:fadi.slimi@insat.ucar.tn"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <HiOutlineMail className="contact_option-icon" />
                <h4>EMAIL</h4>
                <h5>fadi.slimi@insat.ucar.tn / fadi.slimi@univ-lyon1.fr</h5>
                Send a message
              </div>
            </a>
          </article>

          <article className="contact_option">
            <a
              
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <RiPhoneLine className="contact_option-icon" />
                <h4>Call Me</h4>
                <h5>+33 7 59 89 72 42 </h5>
                +216 94 35 36 39 
              </div>
            </a>
          </article>
          <article className="contact_option">
            <a
              href="https://api.whatsapp.com/send?phone=+33759897242"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <BsWhatsapp className="contact_option-icon" />
                <h4>WHAT'SAPP</h4>
                <h5>+33 7 59 89 72 42</h5>
                Send a message
              </div>
            </a>
          </article>
        </div>
        {/*END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="from_mail" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary sendBtn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;