import React, { Component } from "react";
// import "./TimelineDayOne.css"
import ModalExample from "./Bootstrap";



const timelineListDayOne = [
    {
      image: "/image/RAID-image.png",
      name: "Day 1 Galerie",
      title: "Technology and fashion design",
      date: "24/04/2019",
      time: "11h00/17h00",
      place: "208",
      description: "Hello",
      id: 5
    },
    {
      image: "/image/RAID-image.png",
      name: "Day 1 Galerie",
      title: "Le Design pour le Digital Marketing",
      date: "24/04/2019",
      time: "14h00/16h00",
      place: "102",
      description: "Hello",
      id: 5
    },
    {
      image: "/image/RAID-image.png",
      name: "Day 1 Galerie",
      title: "UX Masterclass.",
      date: "24/04/2019",
      time: "09h00/16h00",
      place: "203",
      description: "Hello",
      id: 5
    }
  ]
  
const Dot = props => {
  return <svg className="rt-dot" viewBox="0 0 8 10">
    <circle cx="4" cy="5" r="3" stroke='square'  color= 'blue'/>
  </svg>
};


const DefaultStartLabel = props => {
  const { date } = props.event;
  return <div className="rt-label">{date}</div>;
};

const DefaultEndLabel = props => {
  const { date } = props.event;
  return <div className="rt-label">{date}</div>;
};

const DefaultHeader = props => {
  const { time, title, place, name } = props.event;
  return (
    <div>
      <h4 className="rt-title">{title}</h4>
      <h3 className="rt-title">{name}</h3>
      <p className="rt-time">{time}</p>
      <p className="rt-place">{place}</p>
    </div>
  );
};

const DefaultFooter = props => {
  const { buttonText= <ModalExample />} = props.event;
  return (
    <div className="rt-btn">
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
      <img src={image} alt="" className="rt-image" />
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
      <li className="rt-label-container">
        <DefaultStartLabel event={startEvent} />
      </li>
    );
    const endLabel = (
      <li  className="rt-label-container">
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
          <div className="rt-content">
          <div className="rt-image-header-text-footer">
          <div className="rt-image-container">
              <DefaultImageBody event={event} />
            </div>
            <div className="header-text-footer">
            <div className="rt-header-container">
              <DefaultHeader event={event} />
            </div>
            <div className="rt-text-container">
              <DefaultTextBody event={event} />
            </div>
            <div className="rt-footer-container">
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

class TimelineDayOneGalerie extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        events: timelineListDayOne,
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

  export default TimelineDayOneGalerie;