import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";
import { SiBehance } from "react-icons/si";

function FigmaPro(props) {
  return (
    <Card className="project-card-view ">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text> */}
        <Button variant="primary" href={props.figmaLink} target="_blank">
          <SiBehance/> &nbsp;
          {props.isBlog ? "Blog" : "Behance"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
  );
}
export default FigmaPro;
