import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import WorkSection from "views/LandingPage/Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function ContactSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h2>Contacto</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Información de contacto</small>
              </h3>
              <h6>
                <i className={"fab fa-whatsapp"} />
                &nbsp; +44 7902766219
              </h6>
              <h6>
                <i className={"fas fa-phone"} /> &nbsp; +34 691 567 533 / +34
                622 492 011
              </h6>
              <h5>
                {" "}
                <i className={"fas fa-email"} />
                info@tukturia.com
              </h5>
              <div>
                <Button justIcon link className={classes.margin5}>
                  <i className={"fab fa-twitter"} />
                </Button>
                <Button justIcon link className={classes.margin5}>
                  <i className={"fab fa-instagram"} />
                </Button>
                <Button justIcon link className={classes.margin5}>
                  <i className={"fab fa-facebook"} />
                </Button>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Escríbenos</small>
              </h3>
              <WorkSection />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
