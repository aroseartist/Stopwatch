import React from 'react';

var Numbers = React.createClass({
    function padDigits(number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
    },
    render : function() {
        paddedNumber = this.padDigits(this.props.number,2);
      return <div> {this.props.number}</div> 
    }
});

export default Numbers;