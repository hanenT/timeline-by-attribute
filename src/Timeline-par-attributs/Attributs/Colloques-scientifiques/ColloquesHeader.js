import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import "./ColloquesHeader.css";

class ColloquesHeader extends Component {

  handleNavbarDate(e) {
    this.link.classNavbarDate.add("fade");
    if (this.panel)
      this.panel.classNavbarDate.remove("fade");
  }
  handleBack(e) {
    this.link.classList.remove("fade");
    if (this.panel)
      this.panel.classList.add("fade");
  }
  render() {
    
    return (
      <div className="TimelineNav-Colloques-day">
        <div className="navMenu" ref={el => this.link = el}>
        <Link className="list-link-Colloques-day" to="/Colloque-scientifique/Programme-complet" onClick={this.handleNavbar}>Programme complet</Link>
        <Link className="list-link-Colloques-day" to="/Colloque-scientifique/Day-One" onClick={this.handleNavbarDayOne}>Jour 1</Link>
        <Link className="list-link-Colloques-day" to="/Colloque-scientifique/Day-Two" onClick={this.handleNavbarDayTwo}>Jour 2</Link>
        <Link className="list-link-Colloques-day" to="/Colloque-scientifique/Day-Three" onClick={this.handleNavbarDayThree}>Jour 3</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(ColloquesHeader);
