import React from 'react';
import Numbers from './number.js'

var timeID = '';
var Stopwatch = React.createClass({
    getInitialState: function() {
        return { seconds: 0, minutes: 0, hours: 0 };
    },
    startWatch: function() {
        timerID = setInterval(this.updateTime, 1000);

    },
    stopWatch: function() {
        clearInterval(timerID);

    },
    clearWatch: function() {
        clearInterval(timerID);
        this.displayNewTime(0,0,0);
    },
    updateTime: function() {
        var newSeconds = this.state.seconds;
        var newMinutes = this.state.minutes;
        var newHours = this.state.hours;
        newSeconds++;
        if (newSeconds >= 60) {
            newSeconds = 0;
            newMinutes++;
            if (newMinutes >= 60) {
                newMinutes = 0;
                newHours++;
            }
        }
        this.displayNewTime(newHours, newMinutes, newSeconds);
    },
    displayNewTime: function(hours, minutes, seconds) {
        this.setState({ hours: hours, minutes: minutes, seconds: seconds });
    },
    render: function() {
        return <div >
            <div className = "stopwatch">
              <Numbers number={this.state.hours}>
              <Numbers number={this.state.minutes}>
              <Numbers number={this.state.seconds}>
            </div>
            <button className="buttons">
              <button id="start" onclick={this.startWatch}>Start</button>
              <button id="stop" onclick={this.stopWatch}>Stop</button>
              <button id="clear" onclick={this.clearWatch}>Clear</button>
    }
});