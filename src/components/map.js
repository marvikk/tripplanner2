import React, {Component} from 'react';
import CesiumGlobe from "./../cesium/CesiumGlobe";

import reactLogo from "logo.svg";
import redsLogo from "./../redsLogo.png";


export default class Map extends Component{
  state = {
      reactLogo : {lat : 37.484505, lon : -122.147877, image : reactLogo},
      redsLogo : { lat : 39.097465, lon : -84.50703, image : redsLogo, scale : 0.3},
      markers: [
           { lat: 37.484505, lon: -122.147877, image: reactLogo },
           { lat: 39.097465, lon: -84.50703, image: redsLogo, scale: 0.3 }
         ],
      label : {lat : 35.0, lon : -100.0, text : "Catch phrase here"},
      line : [
              {lat : 47.5, lon : -122.3, alt : 20000 },
              {lat : 36.2, lon : -115.0, alt : 20000 },
              {lat : 39.0, lon : -94.6, alt : 20000 },
              {lat : 30.4, lon : -81.6, alt : 20000 },
          ],
      flyToLocation : null,
  }

  handleLeftClick = coords => {
  console.log("Left mouse clicked at: ", coords);
  var markers = this.state.markers;
  markers.push({ lat: coords.lat, lon: coords.lon, image: reactLogo });
  this.setState({ markers });
  var line = this.state.line;
  console.log(line);
  line.push({ lat: coords.lat, lon: coords.lon, alt: 20000 });
  this.setState({ line });
};


  handleFlyToClicked = () => {
      this.setState({
          flyToLocation : {lat : 32.6925, lon : -117.1587, alt : 100000}
      });
  }
  render() {
    const {reactLogo, redsLogo, label, line, flyToLocation, markers} = this.state;

    const containerStyle = {
        width: '100%',
        height: '100%',
        top: 50,
        left: 0,
        bottom: 0,
        right: 150,
        position: 'fixed'
    };

    const icons = [reactLogo, redsLogo];
    const labels = [label];
    const polylines = [line];

    return (
      <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<div className="row">
				<div className="col-md-10">
          <div style={containerStyle}>
              <CesiumGlobe
                  icons={icons}
                  labels={labels}
                  polylines={polylines}
                  onLeftClick={this.handleLeftClick}
                  flyToLocation={flyToLocation}
              />
              <div style={{position : "fixed", top : 100}}>
                  <div style={{color : "white", fontSize: 20, }}>
                      Text Over the Globe
                  </div>
                  <button style={{fontSize : 20}} onClick={this.handleFlyToClicked}>
                      Jump Camera Location
                  </button>
              </div>

          </div>
				</div>
				<div className="col-md-2">
          <ul style={{position : "fixed", top : 100, color : "white"}} >
            {markers.map((marker, i) => <li>{marker.lat}<button className="glyphicon glyphicon-trash"></button>
          <button className="glyphicon glyphicon-pencil"></button></li>)}

</ul>
				</div>
			</div>
		</div>
	</div>
</div>
    )
  }
}

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
