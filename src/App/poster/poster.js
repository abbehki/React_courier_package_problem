import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Poster extends React.Component{
    constructor(props){
        super(props);
        this.state={
                a:0
        }
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
    
    render(){
       console.log("--->",this.state.a)
        return(
        <React.Fragment>      
            <style>{`
                div{
                  color:red;
                }`
              }
            </style> 

            <div>
                ABHAY BEHKI!!
                <Link to={`/test`}>Test</Link>
                <div onClick={this.handleclick.bind(this)}>dasd</div>
                {
                    this.props.poster && this.props.poster.flag
                }
                {
                    this.divfunction()
                }
                </div>
        </React.Fragment>
        );
    }
  
}
const mapStateToProps = ({poster}) =>
    ({poster}); 

  export default connect(mapStateToProps)(Poster);