import React,{Component} from 'react';
import {List} from 'antd-mobile';
import axios from 'axios';
import './index.css'

const Item = List.Item;
class Rank extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }
    componentDidMount(){
		axios.get('/proxy/rank/list&json=true').then((json)=>{
			// console.log("App.js",json);
			let {data:{rank:{list}}} = json;
			this.setState({
				data:list
			})
		})
	}
    render(){
        let {data} = this.state;
        console.log("rank",data);
        let list = data.map((e,i)=>{
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