import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Odometer from 'tm-odometer';

export default class ReactOdometer extends PureComponent {
  static propTypes = {valueMeters: PropTypes.number.isRequired};

  constructor(props) {
    super(props);
    this.node = React.createRef();
    this.prev = 0;
  }

  componentDidMount() {
    const value = this.getValue(), el = this.node.current;
    this.odometer = new Odometer({el, value});
  }

  componentDidUpdate() {
    this.odometer.update(this.getValue());
  }

  render() {
    return React.createElement('div', {
      ref: this.node,
    });
  }

  getValue() {
    if (!this.prev) {
      this.prev = this.props.valueMeters;
    } else if (this.prev < this.props.valueMeters) {
      this.prev += 10;
    }
    return 0.000539957 * this.prev;
  }
}
