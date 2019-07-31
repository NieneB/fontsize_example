import React, { Component } from 'react';
import MapGL, { NavigationControl } from 'react-map-gl';


const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

class CustomMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 51.76409,
        longitude: 5.60482,
        zoom: 11.5,
        bearing: 0,
        pitch: 50,
        width: 900,
        height: 800
      }
    };
  }

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapStyle={this.props.mapStyle}
      >

      </MapGL>
    );
  }
}

module.exports = CustomMap;
