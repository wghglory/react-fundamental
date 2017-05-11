const React = require('react');
const Link = require('react-router-dom').Link;
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container jumbotron">
        <h1 className="animation">Github Battle: Battle your friends. h1: native css3 animation; button: react-addons-css-transition-group.</h1>
        <ReactCSSTransitionGroup transitionName="animation" transitionAppear={true} transitionAppearTimeout={2000}
          transitionEnterTimeout={2000} transitionLeaveTimeout={500}>
          <Link className="button" to="/battle">Battle</Link>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}