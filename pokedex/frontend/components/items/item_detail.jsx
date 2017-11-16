import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.item) {
      return (
        <div></div>
      );
    }
    return (
      <ul>
        <li>Name: {this.props.item.name}</li>
        <li>Price: {this.props.item.price}</li>
        <li>Happiness: {this.props.item.happiness}</li>
      </ul>
    );
  }
}

export default ItemDetail;
