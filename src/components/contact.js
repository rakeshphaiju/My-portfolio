import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import logo from "../../src/components/my-pic.jpg";
import resume from "../../src/components/resume.pdf";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell className="contact-cv" col={6}>
            <h2>Rakesh Phaiju</h2>
            <img src={logo} alt="avatar" style={{ height: "400px" }} />

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Experienced software engineer adept in crafting, implementing, and refining software and cloud-based
            solutions for both emerging and established products. Proficient in harnessing cutting-edge technologies
            like Python, AWS S3, Flask, FastAPI, and Kubernetes to deliver top-tier, efficient solutions. Seeking a
            challenging opportunity to leverage my expertise, contribute meaningfully to an organization, and propel
            my career forward.
            You can also download my resume from
              <a href={resume} target="_blank" rel="noopener noreferrer">
                {" "}
                here
              </a>
            </p>
          </Cell>
          <Cell className="contact-info" col={6}>
            <h2>Contact Info</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontFamily: "Anton", fontSize: "auto" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (358) 469209445
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontFamily: "Anton", fontSize: "auto" }}
                  >
                    <i className="fas fa-envelope-square" aria-hidden="true" />
                    rakeshphaiju22@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
