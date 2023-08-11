import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">AMIT JANGID </span>
            from <span className="purple"> Jaipur, India.</span>
            <br /> I am a final year student pursuing Btech (chemical engineering) at MNIT Jaipur.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay. */}
            <br />
            {/* <br /> */}
            "I am a passionate software  developer looking to embark on a dynamic career journey fueled by continuous growth and impactful contributions to the tech industry."          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}
          <br/>
          <p style={{ color: "rgb(155 126 172)" }}>
          "Endeavor to create meaningful impact through your creations!"{" "}
          </p>
          <footer className="blockquote-footer">Amit..</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
