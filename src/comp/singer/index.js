import React ,{Component} from 'react';
import axios from 'axios';
import './index.css'
import { List,WhiteSpace } from 'antd-mobile';
const Item = List.Item;

class Singer extends Component {
    constructor(){
        super();
        this.state = {
            singerList:{}
        };
    }

    componentWillMount(){
        axios.get('/proxy/singer/class&json=true').then((json)=>{
            // console.log("singer",json);
            let {data:{list}} = json;
            // console.log("singer",list);
            let obj = {};
            let arr = [];
            list.forEach(e=>arr.push(e.classname.substring(0,2)));
            arr = [...new Set(arr)];
            list.forEach(e=>{
                arr.forEach(f=>{
                    if(e.classname.includes(f)){
                        obj[f] = obj[f] || [];
                        obj[f].push(e);
                    }
                })
            })
            this.setState({
                singerList: obj
            });
        })
    }

    render(){
        let {singerList} = this.state;
        let list = [];
        let i = 0;
        for(let attr in singerList){
            list.push(<WhiteSpace/>);
            list.push(<li className="singer-list" key={++i}>{
                singerList[attr].map((e,idx)=>{
                    return(
                        <List key={idx} className="my-list">
                            <Item arrow="horizontal" onClick={() => {}}>{e.classname}</Item>
                        </List>
                    )
                })
            }</li>)
            list.push(<WhiteSpace/>);
        }
        return (
            <div>{list}</div>
        )
    }
}

export default Singer;