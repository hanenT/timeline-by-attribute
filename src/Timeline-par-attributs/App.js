import React, { Component } from "react";
import "./Timeline.scss";
import TimelineNav from "./timelineHeader";
// import TimelineHoleEvent from "./Timeline"
import { Link, Route, Switch} from 'react-router-dom';
import TimelineWorkshop from "./Attributs/Workshop";
import TimelineTablesRondes from "./Attributs/TablesRondes";
import TimelineConferences from "./Attributs/Conferences";
import TimelineParcoursSucces from "./Attributs/Parcours-succes";
import TimelineRaidArt from "./Attributs/Raid-Art";
import TimelineGalerie from "./Attributs/Galerie";
// import TimelineDayOne from "./TimelineDayOne";
// import TimelineDayTwo  from "./TimelineDayTwo";
// import TimelineDayThree from "./TimelineDayThree";

class App extends Component {
  
  render() {
    const {location} = this.props;
    return (
      <div>
        <div className="timeline-header">
      <TimelineNav />
        </div>
      <hr />
        {/* <div className="container">
      <TimelineHoleEvent/>
    </div> */}

<Switch location={location}>
          {/* <Route exact={true} path="/Programme-complet" component = {TimelineHoleEvent} /> */}
          {/* <Route path="/Day-One" component = {TimelineDayOne} />
          <Route path="/Day-Two" component = {TimelineDayTwo} />
          <Route path="/Day-Three" component = {TimelineDayThree} />  */}
          <Route path="/Colloque-scientifique" component = {TimelineConferences} />
          <Route path="/Workshop" component = {TimelineWorkshop} />
          <Route path="/Think-Tank" component = {TimelineTablesRondes} />
          <Route path="/Parcours-succes" component = {TimelineParcoursSucces} />
          <Route path="/Raid-Art" component = {TimelineRaidArt} />
          <Route path="/Galerie" component = {TimelineGalerie} />
          <Route path="/Connection" component = {TimelineTablesRondes} />
          
          

              <Link className="back" to="/" onClick={this.handleBack}>Back</Link>
              <Route path="/" />
    
          )} />
        </Switch>
    
      </div>
  
    )
  }
}
export default App;