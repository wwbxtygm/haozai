import ActionSheet from '../../component_dev/actionsheet/src/index';
class Menu extends React.Component {
	constructor(props){
		super(props)
		console.log(this.props.menu);
		this.state={
			data:[]
		}
		this.action=this.action.bind(this);
	}
	action(){
		return ActionSheet({menu:[ { text:<div>
				<div>1</div>
				<div>3</div>
			</div>, onTap() { console.log('save.'); } }]})
	}
	render(){
		return (
				<div className="list1 clearfix active">{this.state.data}</div>
			)
	}
	componentDidMount(){
		var _len=this.props.menu.length;
		var _arr=[];
		for(var i=0;i<_len;i++){
			_arr.push(<div className="goods"><img src={this.props.menu[i].imgurl} className="lazy"/>	<div>{this.props.menu[i].goodsname}</div></div>)
		}
		this.setState({
			data:_arr
		})
	}
}
export default Menu;
