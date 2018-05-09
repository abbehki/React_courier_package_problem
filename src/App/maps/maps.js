import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
  } from "react-simple-maps";
  import IMAGE from '../../image/world-50m.json';

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
  }

class Poster extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            center: [0,20],
            zoom: 1,
            cities: [
              { name: "Zurich", coordinates: [8.5417,47.3769] },
              { name: "Singapore", coordinates: [103.8198,1.3521] },
              { name: "San Francisco", coordinates: [-122.4194,37.7749] },
              { name: "Sydney", coordinates: [151.2093,-33.8688] },
              { name: "Lagos", coordinates: [3.3792,6.5244] },
              { name: "Buenos Aires", coordinates: [-58.3816,-34.6037] },
              { name: "Shanghai", coordinates: [121.4737,31.2304] },
            ]
          }
          this.handleCitySelection = this.handleCitySelection.bind(this)
          this.handleReset = this.handleReset.bind(this)
    }
    handleCitySelection(evt) {
        const cityId = evt.target.getAttribute("data-city")
        const city = this.state.cities[cityId]
        this.setState({
          center: city.coordinates,
          zoom: 1,
        })
      }
      handleReset() {
        this.setState({
          center: [0,20],
          zoom: 1,
        })
      }

    UNSAFE_componentWillMount() {
       console.log("will mount")
      }
    
    componentDidMount() {
        console.log("Did mount")
      }
   static getDerivedStateFromProps(newprops,prevState){
        console.log(newprops.poster);
        console.log(prevState);
        return{
            a:newprops.poster.flag
        };
    }
    handleclick=(e)=>{
        console.log("On click");
        this.setState({
                a:2
        })
    }

    divfunction=(e)=>{
      return(
          <React.Fragment>
          <div>
              as
          </div>
          <div>
              fdsad
            </div>
            </React.Fragment>
      );
    }

    clickon=(evt,i,e)=>{
        console.log(evt);
        const cityId = i;
        const city = this.state.cities[cityId]
        this.setState({
          center: city.coordinates,
          zoom: 2,
        })
    }
    
    render(){
        return(
        <React.Fragment>  
            <style>{`
                div{
                  color:red;
                }`
              }
            </style> 

            <div>
        <div style={wrapperStyles}>
          {/* {
            this.state.cities.map((city, i) => (
              <button
                key={i}
                className="btn px1"
                data-city={i}
                onClick={this.handleCitySelection}
                >
                { city.name }
              </button>
            ))
          } */}
          <button onClick={this.handleReset}>
            { "Reset" }
          </button>
        </div>
        <div style={wrapperStyles}>
          <ComposableMap
            projectionConfig={{
              scale: 205,
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",
            }}
            >
            <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
              <Geographies geography={IMAGE}>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))}
              </Geographies>
              <Markers>
                {
                  this.state.cities.map((city, i) => (
                    <Marker key={i} marker={city}>
                      <circle
                        cx={0}
                        cy={0}
                        r={6}
                        fill="#FF5722"
                        stroke="#DF3702"
                        onClick={this.clickon.bind(this,city,i)}
                      />
                    </Marker>
                  ))
                }
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
        </React.Fragment>
        );
    }
  
}
const mapStateToProps = ({poster}) =>
    ({poster}); 

  export default connect(mapStateToProps)(Poster);