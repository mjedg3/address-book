import React, { Component } from "react";

class AddressNum extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="addressNMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="addNum"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> submitToAddressBook</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddressList;
