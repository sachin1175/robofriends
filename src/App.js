import React,{Component} from 'react';
import Cardlist from './Cardlist';
import Scroll from './Scroll';
import SearchBox from './searchbox';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        })
        .then( users =>{
            this.setState({robots:users})
        })

    }

    onSearchchange=(event)=>{
        this.setState({
            searchfield: event.target.value
        }) 
        
    }

    render(){
        const filteredrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchchange}/>
                <Scroll>
                    <Cardlist robots={filteredrobots} />
                </Scroll>
                

            </div>
        )
    }
};

export default App;