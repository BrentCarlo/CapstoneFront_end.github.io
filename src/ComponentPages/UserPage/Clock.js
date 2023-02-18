import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    this.intervalD = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div className="time">
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
