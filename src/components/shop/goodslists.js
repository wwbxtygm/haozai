
class Goodslists extends React.Component {
	constructor(props){
		super(props)
		this.state={
			list:[],
			playflag:false
		}
	}
	render(){
		return (
				<div className="shop-match">
					</div>
			)
	}
	componentDidMount(){
		console.log(this.props.params.cid);
		var _cid=this.props.params.cid;
		var _url="http://wwbtygm.duapp.com/hlist";
		fetch(_url).then(res => res.json()).then(function(res){
			console.log(res);
		})

	}
}
export default Goodslists;