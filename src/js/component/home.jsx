import React, { useEffect } from "react";
import { Component } from "react";
import ReactDOM from "react-dom";

//create your first component
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item_input: "",
      items: [],
    };
    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    useEffect(() => {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
        method: "PUT",
        body: JSON.stringify(todos),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          console.log(resp.ok); // will be true if the response is successfull
          console.log(resp.status); // the status code = 200 or code = 400 etc.
          console.log(resp.text()); // will try return the exact result as string
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        })
        .then((data) => {
          //here is were your code should start after the fetch finishes
          console.log(data); //this will print on the console the exact object received from the server
          this.setState({
            isLoaded: true,
            data: result,
          });
        })
        .catch((error) => {
          //error handling
          console.error(err);
          console.log(error);
        });
    }, []);
  }

  update(event) {
    this.setState({
      item_input: event.target.value,
    });
  }

  add() {
    this.setState((prev) => {
      return {
        item_input: "",
        items: prev.items.concat(prev.item_input),
      };
    });
  }

  render() {
      return (
        <div id="todo">
          <h4>Todo List</h4>

          <input
            placeholder="add task"
            type="text"
            value={this.state.data.item_input}
            onChange={this.update}
          />
          <button type="button" onClick={this.add}>
            add item
          </button>

          <ul>
            {this.state.data.items.map((item, i) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
  }