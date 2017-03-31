import React from 'react'

import {render} from 'react-dom' 
import {Link} from 'react-router'
import Confirm from '../../component_dev/confirm/src/index.js';
import Carousel from '../../component_dev/carousel/src/';
import InputNumber from '../../component_dev/inputnumber/src/index.js';
import fetchData from './fetch.js'
import aJax from './Ajax'
class Cartshop extends React.Component{
	constructor(props){
		super(props)
		
		this.extend=this.extend.bind(this)
		this.routeChange=this.routeChange.bind(this)
		this.state = {
	      bannerList:[<div/>],
	      routechange:false,
	      i:0,
	      icon:'&#xe65e;',
	      a:false
	    }
	    console.log(this.props.params.id);


	}
	render () {
		return (
			
			
			<div className="cartshop">
				
				<div className="back yo-ico icon"><Link to="shop" className="font yo-ico icon">&#xe64e;</Link></div>
				<div className="motai" onClick={this.none.bind(this)} ref="modal"></div>
				<div className="btn" ref="btn">
					<img src="" />
					<div className="imgb">
						<div className="dmsgn">琉璃杯</div>
						<div className="dmsgp">$199</div>
					</div>
					<div className="v">
						<span>
							<p>数量</p>
							<i><em>古洛克雕花</em></i>
						</span>
					</div>
					<div className="color">
						<span>
							<p>数量</p>
							<i><em></em></i>
						</span>
					</div>
					<div className="num">
						<span>
							<p>数量</p>
							<i>
								<InputNumber
								    value={this.state.value}
								    min={0}
								    onChange={value => this.setState({value})}
								/>
							</i>
						</span>
					</div>
					<div className="foot" onClick={this.pushCart.bind(this)}>
						购物车
					</div>

				</div>
				<section>
					
					<Carousel className="swiper" autoplay={false}>
					 	{this.state.bannerList}   
					</Carousel>
					<div className="goodsName"><span>九龙七彩琉璃杯</span></div>
					<div className="price"><span>$400</span></div>
					<div className="changeNorms">
						<div className="contentNorms" onClick={this.Click}>
							<span >选择规格:1</span>
							<span></span>
						</div>
					</div>
					<div className="activity">
						<div className="contentActivity" onClick={this.extend} ref="extend">
							<div className="left">
								<span>活动:</span>
								<span className="noMoney" >包邮</span>
							</div>
							<div className="right" className="yo-ico" ref='icon'>&#xe6cb;</div>
							<div className='hide' ref='hide'>包邮:本商品包邮 </div>
						</div>
					</div>
					<div className="service">
						<div className="contentService">
							<p>客服:4008-2311-31231,工作时间:9:00-18:00</p>
							<p>由阿莫家具发货,并提供售后服务</p>
						</div>
					</div>
					<div className="advantage">
						<div className="contentAdvantage">
							<span><i className="yo-ico">&#xe621;</i><em>正品保障</em></span>
							<span><i className="yo-ico">&#xe621;</i><em>7天退换货</em></span>
							<span><i className="yo-ico">&#xe621;</i><em>先行赔付</em></span>
						</div>
					</div>
					<div className="logo">
						<div className="contentLogo">
							<span >
								摩西家园
							</span>
							<i className="yo-ico">&#xe6cb;</i>
						</div>
					</div>
					<div className="detail" id="detail">
						<div className="contentDetail">
							<div className="detailTop">
								<span><i onClick={this.routeChange}>
								<Link to="/cartshop/matter" activeClassName="active">详情</Link></i></span>
								<span><i data-id="" onClick={this.routeChange}><Link to="/cartshop/standard" activeClassName="active">规格</Link></i></span>
							</div>
							<div id="matter">
							 	{this.props.children}
							 </div>
						</div>
					</div>
				</section>
				<footer>
					<ul>
						<li><Link to="exchange" className="yo-ico icon">&#xe603;</Link></li>
						<li><Link className="yo-ico icon">&#xe602;</Link></li>
						<li onClick={this.show.bind(this)}><Link>加入购物车</Link></li>
						<li onClick={this.show.bind(this)}><Link>立即购买</Link></li>
					</ul>
				</footer>
			</div>

		)
	}
	
	show(){
		this.refs.modal.style.display="block";
		this.refs.btn.style.display="block";
		this.refs.btn.style.animate="ani,0.5s";
	}
	none(){
		this.refs.modal.style.display="none";
		this.refs.btn.style.display="none";

	}
	extend () {
		if(this.state.i!==1&&this.state.i%2==0){
			this.refs.hide.style.display="block";
			this.refs.icon.innerHTML="&#xe65e;"
		}else{
			this.refs.hide.style.display="none";
			this.refs.icon.innerHTML="&#xe6cb;"
		}
		this.state.i++;
	}
	routeChange (){
			if(!this.state.routechange){
				 this.setState({
		          	routechang:!this.state.routechange
				 })
			}
	}
	pushCart(){
		window.localStorage.setItem("username","hhhhh")
		if(window.localStorage.getItem("username")){
			return Confirm({
			    
			    title:'加入购物车成功',
			    btnText:[<div>去结算</div>,<div>再逛逛</div>]
			});
		}else{
			alert("empty")
		}
	}
	 componentDidMount() {

	 	aJax("POST","http://wwbtygm.duapp.com/haozaicart",true,{goods_id:this.props.params.id},function(data){
	 		console.log(JSON.parse(data));
	 	})

	 }
}
export default Cartshop