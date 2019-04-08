import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './Timeline-par-attributs/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
// NAVIGATION
// import TimelineNav from "./timelineHeader";
// // PAGES
// import TimelineExample from "./TimelineDayOne";
// import timelineList from "./Data";

// const TimelineRouter = () => (
//   <div>
//     <Nav />
//     <div className="container">
//       <Route exact={true} path="/DayOne" component={TimelineExample} />
//       <Route exaxt path="/about" component={About} />
//       <Route exact path="/contact" component={Contact} />
//     </div>
//   </div>
// );


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
