import './App.css';
import React from 'react';
import Users from './Components/Users';
import axios from 'axios';
import './index.css';
class App extends React.Component {
  constructor(props) {
    super() 
    this.state = {
      userInfo: []
      
    }
  }
  componentDidMount(){
   axios.get("https://api.github.com/users/AbdirisakAhmed")
   .then(res => {
    this.setState({
      userInfo: [res.data]
    })
    
   })
   .catch((error) => console.log(error))
  }
  render() {
  return (
    <div className="container">
      <h1> Github User Data</h1>
    <div className="App">
     
      <Users myUsers={this.state.userInfo}/>
    </div>
    </div>
  );
  }
}

export default App;
