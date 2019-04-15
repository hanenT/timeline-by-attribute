import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./WorkshopHeader.css";

class WorkshopHeader extends Component {

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
      <div className="TimelineNav-workshop-day">
        <div className="navMenu-workshop-day" ref={el => this.link = el}>
        <Link className="list-link-workshop-day" to="/Workshop/Programme-complet" onClick={this.handleNavbar}>Programme complet</Link>
        <Link className="list-link-workshop-day" to="/Workshop/Day-One" onClick={this.handleNavbarDayOne}>Jour 1</Link>
        <Link className="list-link-workshop-day" to="/Workshop/Day-Two" onClick={this.handleNavbarDayTwo}>Jour 2</Link>
        <Link className="list-link-workshop-day" to="/Workshop/Day-Three" onClick={this.handleNavbarDayThree}>Jour 3</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(WorkshopHeader);
