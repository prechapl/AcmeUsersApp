import React, { Component } from "react";
import axios from "axios";
import { Router } from "react-dom-router"

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: {},
      count: 0
    };
  }

  getData = (pageId) => {
    axios.get("").then();
  }

  componentDidMount() {
    axios
      .get(`https://acme-users-api.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log("res in axios ", res);
        this.setState({ users: res.data.users });
      })
      .catch(err => console.log(err));
  }

  render() {
    const users = this.state.users;
    console.log("inRender ", users);
    if (!users.length) {
      return null;
    }
    return (
      <div>
        <button type="button" onClick={this.getData()}>
          First
        </button>
        <button onClick={}>Prev</button>
          <button onClick={}>Next</button>
          <button onClick={}>Last</button>
        <table className="table">
          <thead>
            <tr>
              <th>First</th>
              <th>Middle</th>
              <th>Last</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
