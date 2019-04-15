import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import "./ParcoursSuccesHeader.css";

class ParcoursHeader extends Component {

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
      <div className="TimelineNav-Parcours-Succes-day">
        <div className="navMenu" ref={el => this.link = el}>
        <Link className="list-link-Parcours-Succes-day" to="/Parcours-Succes/Programme-complet" onClick={this.handleNavbar}>Programme complet</Link>
        <Link className="list-link-Parcours-Succes-day" to="/Parcours-Succes/Day-One" onClick={this.handleNavbarDayOne}>Jour 1</Link>
        <Link className="list-link-Parcours-Succes-day" to="/Parcours-Succes/Day-Two" onClick={this.handleNavbarDayTwo}>Jour 2</Link>
        <Link className="list-link-Parcours-Succes-day" to="/Parcours-Succes/Day-Three" onClick={this.handleNavbarDayThree}>Jour 3</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(ParcoursHeader);
