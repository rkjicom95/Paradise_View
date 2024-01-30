import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Contact.css";

const Contact = () => {
  return (
    <Layout>
      <div className="rooms-first-image">
        <div>
          <h1>Contact</h1>
          <p>
            The elegant luxury bedrooms in this gallery showcase custom interior
            <br />
            designs & decorating ideas. View pictures and find your
            <br /> perfect luxury bedroom design.
          </p>
        </div>
      </div>
      <form className="contact-form">
        <div className="contact-name-email">
          <div className="contact-name">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="Enter Full Name" />
          </div>
          <div className="contact-name">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>
        </div>
        <div className="contact-message">
          <label htmlFor="">Message</label>
          <textarea type="text" />
        </div>
        <button className="contact-sand-data">Sand Data</button>
      </form>
      <div className="responsive-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224301.72958946665!2d76.92464507055352!3d28.54829920000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dc73fb950e9%3A0xb3acee85ece2f159!2shotel%20paradise%20international!5e0!3m2!1sen!2sin!4v1706642913942!5m2!1sen!2sin"
          width={600}
          height={450}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Layout>
  );
};

export default Contact;
