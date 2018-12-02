import React from 'react';
import './popUp.style.less';
const popUp = props => (
    <div className="class-popUp">
        <div onClick={props.onClose.bind()} className="close">
            X
        </div>
        <div className="popUp-show">
            {props.item.map((item,indexValue)=>{
                return(
                <div className="item-content">
                    <div  key={indexValue}>Package {indexValue+1}</div>
                    <div className="items">Items :-
                    {item.map((elementItem,index)=>{
                        return(
                            <span key={index} className="single-item">
                            {elementItem.name}</span>
                            );
                        })}
                    </div>
                    <div>Total weight :
                        {
                            props.sumOfitem(item,"weight")
                        }
                    </div>
                    <div>Total price :
                        {
                            props.sumOfitem(item,"price")
                        }
                    </div>
                    <div>Courier price :
                        {
                            props.sumOfitem(item,"courier")
                        }
                    </div>
                </div>
                );
            })}
        </div>
    </div>
);
export default popUp;