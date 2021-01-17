import React, { Component } from 'react';
import ListResults from './ListResults';
import './SearchLyrics.css';
import { Input, Button, List } from 'semantic-ui-react';

class SearchLyrics extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            results: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.getResults = this.getResults.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({value: event.target.value});
    }

    getResults(event){
        event.preventDefault();
        fetch(`https://genius.p.rapidapi.com/search?q=${this.state.value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4079125b85msh1a1607fb1792ef5p161e96jsn1acd4863c272",
                "x-rapidapi-host": "genius.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then((data) => {
            this.setState({ results: data.response});
        })
        .catch(console.log("Request unable to be made"));
    }
    
    render(){
        return(
            <div className="search-container">
                <div className="search-container-input">
                    <Input 
                        type="text"
                        className="search-lyrics-input"
                        placeholder="Enter a lyric, song, or artist"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="search-container-button">
                    <Button className="search-lyrics-btn" onClick={this.getResults}>Generate Lyrics</Button>
                </div>
                {!this.state.results ? <p id="load">Going to get your results...</p> : <ListResults data={this.state.results}/>}
            </div>
        ) 
    }
}

export default SearchLyrics;