'use strict';
import {stateToProps,dispatchToProps} from "./shop/reduxwwb";
import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import {connect} from "react-redux"
class User_heads extends React.Component{
		constructor(props){
		super(props);
		this.state={
			userID:[],
			flag:true
		}
		this.exit=this.exit.bind(this);
	}
	exit(){
		
		localStorage.removeItem("isLogin");
		localStorage.removeItem("userID");
		  	this.setState({
				userID:[],
				flag:true
				
			})

	}
  render(){
  	console.log(this.state.userID);
  	console.log("value",this.props.value);
    return(
      <div className="user-head">
	      <div className="user-header">
		      <div className="img">
		      	<img src='http://static.haozaishop.com/mobile2/v1/img/u_h.png'/>
		      </div>
		        <div className="login_a">
					{this.state.userID}
					<div className={this.state.flag?"":"dis"}>
		        	<Link to="login" >注册 / 登录</Link>
		        	</div>
		        	<div className={this.state.flag?"dis":""} onClick={this.exit}>退出</div>
		        </div>
	      </div>
        <div className="fr"></div>
      </div>
    )
  }
   componentDidMount(){
  	console.log(1);
  	var _arr=[];
  	if(localStorage.getItem('isLogin')==1){
			var userID = localStorage.getItem('userID');
			console.log("xwf",userID);
			_arr.push(<div>{userID}</div>)
	
			console.log(this.state.userID);
			  	this.setState({
				userID:_arr,
				flag:false
				
			})
		}

  }
}
let User_head =connect(stateToProps,dispatchToProps)(User_heads);
export default User_head
