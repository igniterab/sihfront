import React, { Component } from 'react';
import Modal from './crop';
import ReactDOM from 'react-dom';
import "./vanilla.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Know More
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <h1>Here's some content for the modal</h1> <br />
           
          <a href="#"><b>Video clip</b></a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           
          <a href="#"><b>Map snippet</b></a><br /> 
         <h2>Device Info :</h2>
          <br /><br />
          
          <br />

        </Modal>
      </div>
    );
  }
}

//console.log(document.getElementById("r1"));

export default App;
ReactDOM.render(<App />,document.getElementById("r1"));
ReactDOM.render(<App />,document.getElementById("r2"));
ReactDOM.render(<App />,document.getElementById("r3"));