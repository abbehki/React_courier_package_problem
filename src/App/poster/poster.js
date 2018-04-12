import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Poster extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        console.log(this.props.poster)
        return(
            <div>
                ABHAY BEHKI!!
                <Link to={`/test`}>Test</Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        poster:state.poster_reducer
    };
  };
  export default connect(mapStateToProps)(Poster);