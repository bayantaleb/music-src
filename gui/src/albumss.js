import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Albumss = () => (
    <Query query={gql`
        {
        allAlbums {
            id
            artist
            song
            albums
        }
    }



    `}
    >
    {({loading, error, data}) => {
        if (loading) return <p> Loading ...</p>;
        if (error) return <p> Error :(</p>;

        return data.allAlbums.map(({id, artist, song, albums,}) => (

            <div

            key={id}>


            <h2>{`  * ${albums} , ${song} by ${artist}`}</h2>


            </div>
        ));

    }}
    </Query>
);

export default Albumss;
