import React,{Component} from 'react';
import {List} from 'antd-mobile';
import axios from 'axios';
import './index.css'

const Item = List.Item;
class Rank extends Component{
    constructor(){
        super();
        this.state={
            rankList:[]
        };
    }
    componentWillMount(){
		axios.get('/proxy/rank/list&json=true').then((json)=>{
			// console.log("App.js",json);
			let {data:{rank:{list}}} = json;
			this.setState({
				rankList:list
			})
		})
	}
    render(){
        let {rankList} = this.state;
        // console.log("rank",rankList);
        let list = rankList.map((e,i)=>{
            return(
                <List key={i}>
                    <Item
                        thumb={e.banner7url.replace(/{size}/,"400")}
                        arrow="horizontal"
                        onClick={() => {}}
                    >{e.rankname}</Item>
                </List>
            )
        })
        return(
            <div>
                {list}
            </div>
        )
    }
}
export default Rank;