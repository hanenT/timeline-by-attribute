import React, { Component } from "react";
import "./Workshop.css";
import ModalExample from "../bootstrap-btn";



const timelineListWorkshop = [
    {
      image: "RAID.IMAGE",
      name: "Workshop",
      title: "Technology and fashion design",
      date: "24/04/2019",
      time: "11h00/17h00",
      place: "208",
      description: "Hello",
      id: 5
    },
    {
      image: "RAID.IMAGE",
      name: "Workshop",
      title: "Le Design pour le Digital Marketing",
      date: "24/04/2019",
      time: "14h00/16h00",
      place: "102",
      description: "Hello",
      id: 5
    },
    {
      image: "RAID.IMAGE",
      name: "Workshop",
      title: "UX Masterclass.",
      date: "24/04/2019",
      time: "09h00/16h00",
      place: "203",
      description: "Hello",
      id: 5
    }
  ]
  
const Dot = props => {
  return <svg className="rt-dot" viewBox="0 0 8 10" >
    <circle cx="4" cy="5" r="3" stroke='square'  color= '#00ff30'/>
  </svg>
};


const DefaultStartLabel = props => {
  const { date } = props.event;
  return <div className="rt-label-w">{date}</div>;
};

const DefaultEndLabel = props => {
  const { date } = props.event;
  return <div className="rt-label-w">{date}</div>;
};

const DefaultHeader = props => {
  const { time, title, place, name } = props.event;
  return (
    <div>
      <h4 className="rt-title-w">{title}</h4>
      <h3 className="rt-title-w">{name}</h3>
      <p className="rt-time-w">{time}</p>
      <p className="rt-place-w">{place}</p>
    </div>
  );
};

const DefaultFooter = props => {
  const { buttonText= <ModalExample />} = props.event;
  return (
    <div className="rt-btn" background-color="#00ff30">
      {buttonText}
    </div>
  );
};

const DefaultTextBody = props => {
  const { description } = props.event;
  return (
    <div>
      <p className="description">{description}</p>
    </div>
  );
};

const DefaultImageBody = props => {
  const { image } = props.event;
  return (
    <div>
      <img src={image} alt="" className="rt-image-w" />
    </div>
  );
};

const ArrowAndDot = props => {
  return (
    <div className="rt-svg-container">
      {/* <Arrow /> */}
      <Dot />
    </div>
  );
};

export class Timeline extends Component {

  getStateForProps(props) {
    const { events } = props;
    const sortedEvents = events
  
    return {
      events: sortedEvents
    };
  }

  constructor(props) {
    super(props);
    this.state = this.getStateForProps(props);
  }

  render() {
    const { events } = this.props;
 
    const startEvent = events;
   
    const endEvent = events;
  
    const startLabel = (
      <li className="rt-label-container-w">
        <DefaultStartLabel event={startEvent} />
      </li>
    );
    const endLabel = (
      <li  className="rt-label-container-w">
        <DefaultEndLabel event={endEvent} />
      </li>
    );
  
    const topLabel = startLabel;
   
    const bottomLabel = endLabel;
    
    // Build event list content
    const eventContent = events.map((event) => {
      return <li className="rt-event" >
        <div className="rt-backing">
          <ArrowAndDot />
          <div className="rt-content-w">
          <div className="rt-image-header-text-footer-w">
          <div className="rt-image-container-w">
              <DefaultImageBody event={event} />
            </div>
            <div className="header-text-footer-w">
            <div className="rt-header-container-w">
              <DefaultHeader event={event} />
            </div>
            <div className="rt-text-container-w">
              <DefaultTextBody event={event} />
            </div>
            <div className="rt-footer-container-w">
              <DefaultFooter event={event} />
            </div>
            </div>
          </div>
          </div>
        </div>
      </li>
    });

    return (
      <div className="rt-timeline-container">
        <ul className="rt-timeline">
          {topLabel}
          {eventContent}
          {bottomLabel}
        </ul>
      </div>
    );
    }
  }

class TimelineWorkshop extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        events: timelineListWorkshop,
      };
    }
  

    render() {
      const { events} = this.state;
      const timeline = <Timeline events={events} />;
     
      return (
        <div>
          {timeline}
        </div>
      );
    }
  }

  export default TimelineWorkshop;