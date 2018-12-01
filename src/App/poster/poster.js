
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import IMAGE from '../../image/download.jpg';
import ACTION from '../../actionConstant';
import './poster.style.less';

class Poster extends Component{
    constructor(props){
        super(props);
        this.state={
                a:0
        }
    }


    componentDidMount() {
        const {dispatch}=this.props;
        dispatch({type:ACTION.CHECK.LOAD})
      }   
    
    render(){
        const {poster}=this.props;
        return(
        <React.Fragment>  
            <div>
            {poster && poster.data && 
             poster.data.map((item,index)=>{
                 return(
                     <div key={index} className="selection-item">
                        <div className="name">{item.name}</div>
                        <div className="price">{item.price}</div>
                        <div className="weight">{item.weight}</div>
                     </div>
                 );
             })
            }
            </div>
        </React.Fragment>
        );
    }
  
}
const mapStateToProps = ({poster}) =>
    ({poster}); 

  export default connect(mapStateToProps)(Poster);