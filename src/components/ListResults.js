import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class ListResults extends React.Component {
    constructor(props) { 
        super(props);
        console.log(props);
    }
    render() {
        return(
            <div>
                {this.props.data.hits.map((hit) => {
                    <List>
                        <List.Item>{hit.result["full_title"]}</List.Item>
                    </List>

                })}
            </div>
        )
    }
}

export default ListResults;