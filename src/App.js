import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            Searchfield: ''
        }
    }    

     onSearchChange = (event) => {
         this.setState({ Searchfield: event.target.value })
    }
   
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          return response.json();
        })
        .then(users => {
            this.setState({ robots: users });
        })
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
           })

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox SearchChange = {this.onSearchChange} />
                <CardList robots = { filteredRobots } />
            </div>
            
            );

    }
    
}

export default App;