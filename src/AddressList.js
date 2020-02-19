import React, * as react from "react";

class AddressList extends react.Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="addressListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="addName"
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
