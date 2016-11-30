import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Car from './cars';
const authUser = () => "authed person";

const Hello = props => {
  return(
    <div>
      <h1 className="red">Hello {props.name}!!</h1>
      <Car make="Toyota" />
    </div>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  // componentWillMount() {
  //   console.log("Component about to mount");
  // }
  // componentDidMount() {
  //   console.log("Component has successfully mounted")
  // }
  increment(){
    this.setState({counter: this.state.counter + 1});
  }
  render() {
    console.log("Component is rendering")
    return(
      <div>
        <h3>This {this.props.adjective} counter is at {this.state.counter}</h3>
        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter adjective="pretty"/>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Hello name={authUser()} make="Toyota" />,
//   document.getElementById('root')
// );
