import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./RaidArtHeader.css";

class RaidArtHeader extends Component {

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
      <div className="TimelineNav-RaidArt-day">
        <div className="navMenu" ref={el => this.link = el}>
        <Link className="list-link-RaidArt-day" to="/Raid-Art/Programme-complet" onClick={this.handleNavbar}>Programme complet</Link>
        <Link className="list-link-RaidArt-day" to="/Raid-Art/Day-One" onClick={this.handleNavbarDayOne}>Jour 1</Link>
        <Link className="list-link-RaidArt-day" to="/Raid-Art/Day-Two" onClick={this.handleNavbarDayTwo}>Jour 2</Link>
        <Link className="list-link-RaidArt-day" to="/Raid-Art/Day-Three" onClick={this.handleNavbarDayThree}>Jour 3</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(RaidArtHeader);
