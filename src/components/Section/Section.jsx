import React, { Component } from 'react';

class SectionTitle extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}

export default SectionTitle;
