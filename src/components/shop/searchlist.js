const multiData = {
	subItemType: 'ProductMenu',
    subList: [{
        name: '产品1',
        value: 1,
        subList: '精品家居',
         msg:[{
         	imgurl:"http://img4.haozaishop.cn/category/chuang.jpg",
         	goodsname:"床"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/chuangdian.jpg",
         	goodsname:"床垫"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/shafa.jpg",
         	goodsname:"床垫"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/guizi.jpg",
         	goodsname:"床垫"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/chaji.jpg",
         	goodsname:"床垫"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/zhuozi.jpg",
         	goodsname:"床垫"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/yizi.jpg",
         	goodsname:"床垫"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/jiazi.jpg",
         	goodsname:"床垫"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/pingjing.jpg",
         	goodsname:"床垫"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/pingfeng.jpg",
         	goodsname:"床垫"
         },{
         	imgurl:"http://img4.haozaishop.cn/category/all.png?v=2016050411",
         	goodsname:"全部"
         }],
    },{
        name: '产品2',
        value: 2,
        subList: '家具布艺',
         msg:[2]
    },
    {
        name: '产品3',
        value: 3,
        subList: '配饰日用',
        msg:[3],

    },{
        name: '产品4',
        value: 4,
        subList: '厨房餐饮',
        msg:[4],
    },{
        name: '产品5',
        value: 5,
        subList: '灯饰照明',
         msg:[5],
    }]
};

import MultiList from '../../component_dev/multilist/src/index'
import Menu from './menu'
class Searchlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: multiData,
            value: [1]
        }
    }
    updateValue(value) {
        this.setState({
            value,
        })
    }
    render() {
   return (
   		<div className="searchlistbox">
           <MultiList
               dataSource={ this.state.dataSource}

               value={this.state.value}
               onChange={({newValue}) => {
               
                   this.updateValue(newValue);
               }}
               onItemTap={({item})=>{

               		
                   return [item.value];
               }}
               renderItem={({itemType, data, isSpread, index})=>{
          			//console.log(data);

                   switch (itemType){
                       case 'ProductMenu':
                           return <div className={index==this.state.value[0]?'active_list':''}>{data.subList}</div>
                   }
               }}
               renderContent={({type,data}) => {
					
                   switch (type){
                       case '精品家居':
                       return <Menu menu={data.msg}/>;
                       			
                       case '家具布艺':
                           return <div>p2</div>;
                   }
               }}
           />
         </div>
   )
  }
  componenDidMount(){
		
  	}
}
export default Searchlist;