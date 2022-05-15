import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export const Geo = ({ geo }) => {
    if (!geo.length) {
        const mapStyles = {
            width: "100%",
            height: "100%",
          };
        return (<>
            <Map 
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 9.761927, lng: 79.95244 }}
        >
             {/* <Marker position={{ lat: 9.761927, lng: 79.95244 }} /> */}
             </Map>
        </>)
    }
    return (
        <div>
            <h5><b>Данные местоположения</b></h5>
    

            {geo.map((elem) => {
                    return (
                        <p> {elem.time}, {elem.coordinates}</p>
                    )})}
        </div>
    )
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDOTrF6mUfaNd5sPub6o5XP7jP0So-Irew'
  })(Geo);