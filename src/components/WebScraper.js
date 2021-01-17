import React, { Component } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

class WebScraper extends React.Component {
    constructor(props) { 
        super(props);
        console.log(props);
    }

    render(){
        const { url } = this.props;
        return(
            <p>{url}</p>   
        )
    }
}

export default WebScraper;