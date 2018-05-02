import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import history from '../../history';

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    callfunction=(e)=>{
        const {dispatch} =this.props;
        dispatch({type:"USER_FETCH_REQUESTED",data:"hey"})
        history.push('/');
    }

    render(){
        return (
        <React.Fragment>
            <style>
                {
                    `
                    p{
                        color:green;
                    }
                    `
                }
            </style>
            <div>
                test
                <div onClick={this.callfunction.bind(this)}>clickme</div>
                <p>Whats up man!!!</p>
            </div>
        </React.Fragment>
        );
    }
}
const mapStateToProps = ({}) =>
    ({}); 

  export default connect(mapStateToProps,null,null,{pure:false})(Test);