import React from "react";
import Layout from "../../components/Layout/Layout";
import RohitJi from "../../images/rohitji.jpeg";
import "./About.css";
import About1 from "../../images/about1.png";
import About2 from "../../images/about2.png";
import About3 from "../../images/about3.png";
import About4 from "../../images/about4.png";
import About5 from "../../images/about5.png";

const About = () => {
  return (
    <Layout>
      <div className="rooms-first-image">
        <div>
          <h1>About us</h1>
          <p>
            The elegant luxury bedrooms in this gallery showcase custom interior
            <br />
            designs & decorating ideas. View pictures and find your
            <br /> perfect luxury bedroom design.
          </p>
        </div>
      </div>
      <div className="about-data">
        <div>
          <div className="about-left">
            <img src={RohitJi} alt="" />
          </div>
          <h1 className="about-manager">Mr.Rohit Kumar (Manager)</h1>
        </div>
        <div className="about-right">
          <p>
            The United Nations is an international organization founded in 1945.
            Currently made up of 193 Member States, the UN and its work are
            guided by the purposes and principles contained in its founding
            Charter.
            <br /> The UN has evolved over the years to keep pace with a rapidly
            changing world. But one thing has stayed the same: it remains the
            one place on Earth where all the world’s nations can gather
            together, discuss common problems, and find shared solutions that
            benefit all of humanity. The Secretary-General is Chief
            Administrative Officer of the UN – and is also a symbol of the
            Organization's ideals and an advocate for all the world's peoples,
            especially the poor and vulnerable.
            <br />
            <br /> The Secretary-General is appointed by the General Assembly on
            the recommendation of the Security Council for a 5-year, renewable
            term. <br />
            The current Secretary-General, and the 9th occupant of the post, is
            António Guterres of Portugal, who took office on 1 January 2017.
            <br /> On the 18th of June, 2021, Guterres was re-appointed to a
            second term, pledging as his priority to continue helping the world
            chart a course out of the COVID-19 pandemic.
            <br />
            <br /> The United Nations is an international organization founded
            in 1945. Currently made up of 193 Member States, the UN and its work
            are guided by the purposes and principles contained in its founding
            Charter.
            <br /> The UN has evolved over the years to keep pace with a rapidly
            changing world. But one thing has stayed the same: it remains the
            one place on Earth where all the world’s nations can gather
            together, discuss common problems, and find shared solutions that
            benefit all of humanity. The Secretary-General is Chief
            Administrative Officer of the UN – and is also a symbol of the
            Organization's ideals and an advocate for all the world's peoples,
            especially the poor and vulnerable.
            <br />
            <br /> The Secretary-General is appointed by the General Assembly on
            the recommendation of the Security Council for a 5-year, renewable
            term. The current Secretary-General, and the 9th occupant of the
            post, is António Guterres of Portugal, who took office on 1 January
            2017. <br /> On the 18th of June, 2021, Guterres was re-appointed to
            a second term, pledging as his priority to continue helping the
            world chart a course out of the COVID-19 pandemic.
          </p>
        </div>
      </div>
      <h1 className="about-clients">Clients</h1>
      <div className="about-logo">
        <img src={About1} alt="" />
        <img src={About2} alt="" />
        <img src={About3} alt="" />
        <img src={About4} alt="" />
        <img src={About5} alt="" />
      </div>
    </Layout>
  );
};

export default About;
