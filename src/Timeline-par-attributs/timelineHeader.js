import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './timelineHeader.css'


class TimelineHeader extends Component {

  handleNavbarDate(e) {
    this.link.classNavbarDate.add("fade");
    if (this.panel)
      this.panel.classNavbarDate.remove("fade");
    // e.preventDefault();
  }

  handleBack(e) {
    this.link.classList.remove("fade");
    if (this.panel)
      this.panel.classList.add("fade");
  }

  render() {
    // const items = [<TimelineExample />];
    // const {location} = this.props;
    
    return (
      <div className="TimelineNav">
        <div className="navMenu" ref={el => this.link = el}>
        <Link className="list-link-Colloque-scientifique" to="/Colloque-scientifique" onClick={this.handleNavbarConferences}>Colloque scientifique</Link>
        <Link className="list-link-workshop" to="/Workshop" onClick={this.handleNavbarWorkshop}>Workshop</Link>
        <Link className="list-link-Think-Tank" to="/ThinkTank" onClick={this.handleNavbarTablesRondes}>Think Tank</Link>
        <Link className="list-link-Parcours-succes" to="/Parcours-succes" onClick={this.handleNavbarConferences}>Parcours succes</Link>
        <Link className="list-link-Raid-Art" to="/Raid-Art" onClick={this.handleNavbarConferences}>Raid-Art</Link>
        <Link className="list-link-Galerie" to="/Galerie" onClick={this.handleNavbarConferences}>Galerie</Link>
        {/* <Link className="list-link-Connection" to="/Connection" onClick={this.handleNavbarConferences}>Connection</Link> */}
        </div>
      </div>
    );
  }
}

export default withRouter(TimelineHeader);
