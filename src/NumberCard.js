import React, { Component } from 'react';

import './NumberCard.css';

export default class NumberCard extends Component {
  render() {
    const { title, children, bold } = this.props;

    return (
      <div className="NumberCard">
        <div className="NumberCard--title">{title}</div>
        <div className={`NumberCard--amount ${bold ? 'bold' : ''}`}>
          {children}
        </div>
      </div>
    );
  }
}
