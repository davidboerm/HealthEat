import React, { useState } from "react";
import Container from "/Users/ashley/Documents/GitHub/HealthEat/client/src/Components/Container/index.js";
import Col from "/Users/ashley/Documents/GitHub/HealthEat/client/src/Components/Col/index.js";
import Row from "/Users/ashley/Documents/GitHub/HealthEat/client/src/Components/Row";

function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    var newUser = this;
    fetch(
      // { this is where the route will }   
      {
        method: POST,
        data: {
          // we can enter more columns if there are some when we create database
          username: newUser.refs.username,
          password: newUser.refs.password,
        }
      }).then(function(response) {
        return response.json()
      })
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Welcome to Wikipedia Searcher!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {username}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container>
      </form>
    </div>
  );
}

export default Signup;
