import React, { Component } from "react";
import "./Timeline.scss";
import TimelineNav from "./timelineHeader";
// import TimelineHoleEvent from "./Timeline";
import { Route} from 'react-router-dom';


import ColloquesHeader from "./Attributs/Colloques-scientifiques/ColloquesHeader";
import TimelineColloquesScientifiques from "./Attributs/Colloques-scientifiques/ProgrammeCompletC"
import TimelineDayOneColloques from "./Attributs/Colloques-scientifiques/TimelineDayOneC";
import TimelineDayTwoColloques  from "./Attributs/Colloques-scientifiques/TimelineDayTwoC";
import TimelineDayThreeColloques from "./Attributs/Colloques-scientifiques/TimelineDayThreeC";

import WorkshopHeader from "./Attributs/Workshop/WorkshopHeader";
import TimelineWorkshop from "./Attributs/Workshop/ProgrammeCompletW";
import TimelineDayOneWorkshop from "./Attributs/Workshop/TimelineDayOneW";
import TimelineDayTwoWorkshop from "./Attributs/Workshop/TimelineDayTwoW";
import TimelineDayThreeWorkshop from "./Attributs/Workshop/TimelineDayOneW";

import ThinkTankHeader from "./Attributs/Think-Tank/ThinkTankHeader";
import TimelineThinkTank from "./Attributs/Think-Tank/ProgrammeComplet";
import TimelineDayOneThinkTank from "./Attributs/Think-Tank/TimelineDayOneT";
import TimelineDayTwoThinkTank  from "./Attributs/Think-Tank/TimelineDayTwoT";
import TimelineDayThreeThinkTank from "./Attributs/Think-Tank/TimelineDayThreeT";

import ParcoursHeader from "./Attributs/Parcours-succes/ParcoursSuccesHeader";
import TimelineParcoursSucces from "./Attributs/Parcours-succes/ProgrammeComplet";
import TimelineDayOneParcours from "./Attributs/Parcours-succes/TimelineDayOnePS";
import TimelineDayTwoParcours  from "./Attributs/Parcours-succes/TimelineDayTwoPS";
import TimelineDayThreeParcours from "./Attributs/Parcours-succes/TimelineDayThreePS";

import RaidArtHeader from "./Attributs/Raid-Art/RaidArtHeader";
import TimelineRaidArt from "./Attributs/Raid-Art/ProgrammeComplet";
import TimelineDayOneRaidArt from "./Attributs/Raid-Art/TimelineDayOneRaid";
import TimelineDayTwoRaidArt  from "./Attributs/Raid-Art/TimelineDayTwoRaid";
import TimelineDayThreeRaidArt from "./Attributs/Raid-Art/TimelineDayThreeRaid";

import GalerieHeader from "./Attributs/Galerie/GalerieHeader";
import TimelineGalerie from "./Attributs/Galerie/ProgrammeComplet";
import TimelineDayOneGalerie from "./Attributs/Galerie/TimelineDayOneGalerie";
import TimelineDayTwoGalerie  from "./Attributs/Galerie/TimelineDayTwoGalerie";
import TimelineDayThreeGalerie from "./Attributs/Galerie/TimelineDayThreeGalerie";

class App extends Component {
  
  render() {
    
    return (
      <div>
        <div className="timeline-header">
      <TimelineNav />
        </div>
      <hr />
      
          <Route path="/Colloque-scientifique" render = {()=><ColloquesHeader />}/>
          <Route exact path="/(Colloque-scientifique|Colloque-scientifique/Programme-complet)/" render = {()=><TimelineColloquesScientifiques/>}/>
          <Route exact path="/Colloque-scientifique/Day-One" component = {TimelineDayOneColloques} /> 
          <Route exact path="/Colloque-scientifique/Day-Two" component = {TimelineDayTwoColloques} />
          <Route exact path="/Colloque-scientifique/Day-Three" component = {TimelineDayThreeColloques} /> 
{/*WORKSHOP*/}
          <Route path="/Workshop" component = {WorkshopHeader} />
          <Route exact path="/(Workshop|Workshop/Programme-complet)" component = {TimelineWorkshop} />
          <Route exact path="/Workshop/Day-One" component = {TimelineDayOneWorkshop} /> 
          <Route exact path="/Workshop/Day-Two" component = {TimelineDayTwoWorkshop} />
          <Route exact path="/Workshop/Day-Three" component = {TimelineDayThreeWorkshop} />
{/*THINK-TANK*/}
          <Route path="/ThinkTank" component = {ThinkTankHeader} />
          <Route exact path="/(ThinkTank|ThinkTank/Programme-complet)" component = {TimelineThinkTank} />
          <Route exact path="/ThinkTank/Day-One" component = {TimelineDayOneThinkTank} /> 
          <Route exact path="/ThinkTank/Day-Two" component = {TimelineDayTwoThinkTank} />
          <Route exact path="/ThinkTank/Day-Three" component = {TimelineDayThreeThinkTank} />
{/*PARCOURS-SUCCES*/}
          <Route path="/Parcours-succes" component = {ParcoursHeader} />
          <Route exact path="/(Parcours-succes|Parcours-succes/Programme-complet)" component = {TimelineParcoursSucces} />
          <Route exact path="/Parcours-succes/Day-One" component = {TimelineDayOneParcours} /> 
          <Route exact path="/Parcours-succes/Day-Two" component = {TimelineDayTwoParcours} />
          <Route exact path="/Parcours-succes/Day-Three" component = {TimelineDayThreeParcours} />
{/*RAID-ART*/}
          <Route path="/Raid-Art" component = {RaidArtHeader} />
          <Route exact path="/(Raid-Art|Raid-Art/Programme-complet)" component = {TimelineRaidArt} />
          <Route exact path="/Raid-Art/Day-One" component = {TimelineDayOneRaidArt} /> 
          <Route exact path="/Raid-Art/Day-Two" component = {TimelineDayTwoRaidArt} />
          <Route exact path="/Raid-Art/Day-Three" component = {TimelineDayThreeRaidArt} />
{/*GALERIE*/}
          <Route path="/Galerie" component = {GalerieHeader} />
          <Route exact path="/(Galerie|Galerie/Programme-complet)" component = {TimelineGalerie} />
          <Route exact path="/Galerie/Day-One" component = {TimelineDayOneGalerie} /> 
          <Route exact path="/Galerie/Day-Two" component = {TimelineDayTwoGalerie} />
          <Route exact path="/Galerie/Day-Three" component = {TimelineDayThreeGalerie} />
          
          
    
      </div>
  
    )
  }
}
export default App;