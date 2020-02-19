import React, { Component } from "react";
import AddressList from "./AddressList";
import AddressItems from "./AddressItems";
import "./App.css";

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        num: ""
      }
    };
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    const addressNum = { num: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
    this.setState({
      addressNum
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "", num: "" }
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Address Book</h1>
        <AddressList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          addressNum={this.state.addressNum}
        />
        <AddressItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
