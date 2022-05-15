import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const style = {
    width: '30%',
    height: '30%'
  }
  

  export class MapContainer extends React.Component {
    render() {
        return (
          <Map google={this.props.google} zoom={14}
          style={style}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
          </Map>
        );
      }
    }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyDOTrF6mUfaNd5sPub6o5XP7jP0So-Irew')
  })(MapContainer)