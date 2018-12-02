
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import IMAGE from '../../image/download.jpg';
import ACTION from '../../actionConstant';
import './poster.style.less';
import {
    knapsack,
    removeElementfromArray,
    removeElementsfromArray
} from '../../util/common';
import PopUp from '../popUp/popup.component';

class Poster extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[],
            resultArr:[],
            showPopUp:false,
            totalSumWeight:0
        }
    }
    componentDidMount() {
        const {dispatch}=this.props;
        dispatch({type:ACTION.CHECK.LOAD})
      }   

      onCheckBoxClick=(item,e)=>{
          let arrayStore=[];
            let totalWeight=this.state.totalSumWeight;            
            if(this.state.arr.length>0){
                arrayStore=this.state.arr;
                if(e.target.checked){
                    totalWeight=totalWeight+item.weight;
                    arrayStore.push(item);            
                  }else{
                    totalWeight=totalWeight-item.weight;
                    arrayStore=removeElementfromArray(arrayStore,item);  
                  }
              }else{
                  arrayStore.push(item)
              }
              this.setState({
                  arr:arrayStore,
                  totalSumWeight:totalWeight
              }) 
      }
      sumOfitem=(item,tag)=>{
        let sumW=0;
        let sumP=0;
        let costCourier=0;
        item.map(item=>{
           sumW=sumW+item.weight;
           sumP=sumP+item.price;
        })
        if(tag==="weight"){
            return (<span>{sumW}g</span>);            
        }else if(tag==="price"){
            return (<span>{sumP}g</span>);
        }
        else if(tag==="courier"){
            if(sumW>0 && sumW<=200){
                costCourier=5;
            }else if(sumW>200 && sumW<=500){
                costCourier=10;
            }else if(sumW>500 && sumW<=1000){
                costCourier=15;
            }else{
                costCourier=20;
            }
            return (<span>${costCourier}</span>);
        }
      }
      placeOrder=(arr,e)=>{
          let arrStore=[...arr];
          this.state.resultArr.push(knapsack(arrStore,250).subset);
          let remainingArr=removeElementsfromArray(arrStore,knapsack(arrStore,250).subset);
          if(remainingArr.length>0){
            this.placeOrder(remainingArr);
          }
          this.setState({
            resultArr:this.state.resultArr,
            showPopUp:true
          })
      }
      onClose=()=>{
        this.setState({
            showPopUp:false,
            resultArr:[]
        })
      }
    
    render(){
        const {poster}=this.props;
        return(
        <React.Fragment>  
            <div className="container">
                {
                    this.state.showPopUp && 
                    <PopUp 
                    sumOfitem={this.sumOfitem}
                    onClose={this.onClose} 
                    item={this.state.resultArr}/>
                }
            <div className="header-nav">ITEM SELECTED :-{this.state.arr.length}</div>
            <div className="data-container">
                <div className="header-title">
                    <div className="align-padding">S.No</div>
                    <div className="align-padding">Item Name</div>
                    <div className="align-padding">Price ($)</div>
                    <div className="align-padding">Weigth (g)</div>
                </div>
                <div className="contain-data">
                    {poster && poster.data && 
                    poster.data.map((item,index)=>{
                        return(
                            <div key={index} className="selection-item">
                                <div className="align-padding">{index+1}</div>
                                <div className="align-padding">{item.name}</div>
                                <div className="align-padding">{item.price}</div>
                                <div className="align-padding">{item.weight}</div>
                                <input onClick={this.onCheckBoxClick.bind(this,item)} type="checkbox"/>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
            
            <button onClick={this.placeOrder.bind(this,this.state.arr)} className={this.state.arr.length >0 ?
             "button-place-order" : "button-place-order button-disable"} >Place Order</button>
            </div>
        </React.Fragment>
        );
    }
  
}
const mapStateToProps = ({poster}) =>
    ({poster}); 

export default connect(mapStateToProps)(Poster);