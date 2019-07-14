import React from 'react';
import axios from 'axios';

import Albums from '../components/Album';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

class AlbumList extends React.Component {

state = {
    albums: []
}

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/graphql/')


        .then(res => {
            this.setState({
                albums: res.data
            });
            console.log(res.data);
        })

    }
    render(){
        return(
            <Albums data = {this.state.albums} />
        )
    }
}

export default AlbumList;
