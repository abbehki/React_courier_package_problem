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
    componentWillMount() {
       console.log("will mount")
      }
    
      componentDidMount() {
        console.log("Did mount")
      }

    componentWillReceiveProps(newprops){
        console.log("component will receive props");
        if(newprops.poster){
            console.log("recieve",newprops.poster)
        }
    }
    handleclick=(e)=>{
        console.log("On click");
        this.setState({
                a:2
        })
    }
    render(){        
        return(
            <div>
                ABHAY BEHKI!!
                <Link to={`/test`}>Test</Link>
                <div onClick={this.handleclick.bind(this)}>dasd</div>
                {
                    this.props.poster && this.props.poster.flag
                }
                </div>
        )
    }
  
}
const mapStateToProps = ({poster}) =>
    ({poster}); 

  export default connect(mapStateToProps,null,null,{pure:false})(Poster);