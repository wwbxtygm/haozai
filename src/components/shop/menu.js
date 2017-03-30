
class Menu extends React.Component {
	constructor(props){
		super(props)
		console.log(this.props.menu);
		this.state={
			data:[]
		}
	}
	render(){
		return (
				<div>{
					this.state.data
				}</div>
			)
	}
	componentDidMount(){
		var _len=this.props.menu.length;
		for(var i=0;i<_len;i++){

		}
	}
}
export default Menu;
