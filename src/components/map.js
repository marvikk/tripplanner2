import CesiumGlobe from "./../cesium/CesiumGlobe";
import React, {Component} from 'react';
import axios from "axios";

import markerLogo from "./../markerLogo.png";
import redsLogo from "./../redsLogo.png";


export default class Map extends Component {
  constructor(props) {
     super(props);
  this.state = {
      markerLogo : {lat : 37.484505, lon : -122.147877, image : markerLogo, scale : 0.6},
      redsLogo : { lat : 39.097465, lon : -84.50703, image : redsLogo, scale : 0.1},
      markers: [],
      label : {lat : 35.0, lon : -100.0, text : "Catch phrase here"},
      line : [
              {lat : 47.5, lon : -122.3, alt : 20000 },
              {lat : 36.2, lon : -115.0, alt : 20000 },
              {lat : 39.0, lon : -94.6, alt : 20000 },
              {lat : 30.4, lon : -81.6, alt : 20000 },
          ],
      flyToLocation : null,
  }

  this.deleteMarker = this.deleteMarker.bind(this);
};
  componentWillMount() {
    axios
      .get("http://localhost:3001/alldestinations")
      .then(res =>
        {
          var markers = this.state.markers;
          var result = res.data.destinations;
          result.map((marker, i) =>
          markers.push( marker ));
          this.setState({ markers });
        })
      .catch(error=>console.log(error));

  }

  handleLeftClick = coords => {
  console.log("Left mouse clicked at: ", coords);
  axios
    .post("http://localhost:3001/destination", {
      lon: coords.lon,
      lat: coords.lat,
      image : markerLogo
     })
    .then(res => {
      var markers = this.state.markers;
      markers.push({ lat: coords.lat, lon: coords.lon, image: markerLogo });
      this.setState({ markers });
      console.log(res);
    })
    .catch(error=>console.log(error));
}
deleteMarker = (marker, index) => {
  axios
    .delete("http://localhost:3001/destination/" +  marker._id)
    .then(res =>
      {
        //state deleteMarker
        const markers = this.state.markers.filter((marker, markerIndex) => {
            return markerIndex !== index
          })
          this.setState({ markers });
      })
    .catch(error=>console.log(error));
  console.log("delete " + marker._id);
}

  handleFlyToClicked = () => {
      this.setState({
          flyToLocation : {lat : 32.6925, lon : -117.1587, alt : 100000}
      });
  }
  render() {
    const {markerLogo, redsLogo, label, line, flyToLocation, markers} = this.state;

    const containerStyle = {
        width: '100%',
        height: '100%',
        top: 50,
        left: 0,
        bottom: 0,
        right: 150,
        position: 'fixed'
    };

    const icons = markers;
    const labels = [label];
    const polylines = [line];

    return (
      <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<div className="row">
				<div className="col-md-8">
          <div style={containerStyle}>
              <CesiumGlobe
                  icons={icons}
                  labels={labels}
                  polylines={polylines}
                  onLeftClick={this.handleLeftClick}
                  flyToLocation={flyToLocation}
              />
          </div>
				</div>
				<div className="col-md-4">
          <ul style={{position : "fixed", top : 100, textAlign: "right"}} >
            {markers.map((marker, index) =>
              <li style={{color : "white"}} key={index} >{marker.lat} {marker.lon}
              <button className="glyphicon glyphicon-trash"
                onClick={() => {this.deleteMarker(marker, index)}} key={marker}></button>
          <button className="glyphicon glyphicon-pencil"></button></li>)}
          </ul>
				</div>
			</div>
		</div>
	</div>
</div>
    )}}

// import CesiumGlobe from "./cesium/CesiumGlobe";
//
// import reactLogo from "logo.svg";
// import redsLogo from "./redsLogo.png";

// class App extends Component {
    // state = {
    //     reactLogo : {lat : 37.484505, lon : -122.147877, image : reactLogo},
    //     redsLogo : { lat : 39.097465, lon : -84.50703, image : redsLogo, scale : 0.3},
    //     label : {lat : 35.0, lon : -100.0, text : "Catch phrase here"},
    //     line : [
    //             {lat : 47.5, lon : -122.3, alt : 20000 },
    //             {lat : 36.2, lon : -115.0, alt : 20000 },
    //             {lat : 39.0, lon : -94.6, alt : 20000 },
    //             {lat : 30.4, lon : -81.6, alt : 20000 },
    //         ],
    //     flyToLocation : null,
    // }
    //
    // handleLeftClick = (coords) => {
    //     console.log("Left mouse clicked at: ", coords)
    // }
    //
    // handleFlyToClicked = () => {
    //     this.setState({
    //         flyToLocation : {lat : 32.6925, lon : -117.1587, alt : 100000}
    //     });
    // }
//
//
//     render() {
        // const {reactLogo, redsLogo, label, line, flyToLocation} = this.state;
        //
        // const containerStyle = {
        //     width: '100%',
        //     height: '100%',
        //     top: 0,
        //     left: 0,
        //     bottom: 0,
        //     right: 0,
        //     position: 'fixed',
        // };
        //
        // const icons = [reactLogo, redsLogo];
        // const labels = [label];
        // const polylines = [line];
//
//         return (
            // <div style={containerStyle}>
            //     <CesiumGlobe
            //         icons={icons}
            //         labels={labels}
            //         polylines={polylines}
            //         onLeftClick={this.handleLeftClick}
            //         flyToLocation={flyToLocation}
            //     />
            //     <div style={{position : "fixed", top : 0}}>
            //         <div style={{color : "white", fontSize: 40, }}>
            //             Text Over the Globe
            //         </div>
            //         <button style={{fontSize : 40}} onClick={this.handleFlyToClicked}>
            //             Jump Camera Location
            //         </button>
            //     </div>
            //
            // </div>
//         );
//     }
// }
//
// export default App;
