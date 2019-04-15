import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./ThinkTankHeader.css";

class ThinkTankHeader extends Component {

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
      <div className="TimelineNav-ThinkTank-day">
        <div className="navMenu-ThinkTank-day" ref={el => this.link = el}>
        <Link className="list-link-ThinkTank-day" to="/ThinkTank/Programme-complet">Programme complet</Link>
        <Link className="list-link-ThinkTank-day" to="/ThinkTank/Day-One" onClick={this.handleNavbarDayOne}>Jour 1</Link>
        <Link className="list-link-ThinkTank-day" to="/ThinkTank/Day-Two" onClick={this.handleNavbarDayTwo}>Jour 2</Link>
        <Link className="list-link-ThinkTank-day" to="/ThinkTank/Day-Three" onClick={this.handleNavbarDayThree}>Jour 3</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(ThinkTankHeader);
