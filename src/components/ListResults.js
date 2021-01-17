import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import WebScraper from './WebScraper';
import './ListResults.css';

class ListResults extends React.Component {
    constructor(props) { 
        super(props);
    }
    render() {
        const { data } = this.props;
        const listItems = data.hits.map((hit, index) =>
            <div>
                <List.Item className="list-item" key={index}>{hit.result["full_title"]}</List.Item>
                <WebScraper url={hit.result.url}/>
            </div> 
        );
        return(
            <List className="list-container">
                {listItems}
            </List>
        )
    }
}

export default ListResults;