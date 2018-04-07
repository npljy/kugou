import React,{Component} from 'react';
import { List } from 'antd-mobile';
import axios from 'axios';
import './index.css'
const Item = List.Item;
const ico = require('../../images/icon_music.png');

class Menu extends Component{
    constructor(){
        super();
        this.state={
            menuList:[]
        }
    }
    componentWillMount(){
        axios.get('/proxy/plist/index&json=true').then((json)=>{
            // console.log("menu",json);
            let {data:{plist:{list:{info}}}} = json;
            // console.log("menu",info);
            this.setState({
                menuList:info
            })
        })
    }
    render(){
        let {menuList} = this.state;
        let list = menuList.map((e,i)=>{
            // console.log(e);
            return (
                <List  className="my-list rank-list" key={i}>
                    <Item
                        arrow="horizontal"
                        thumb={e.imgurl.replace(/{size}/,'400')}
                        multipleLine
                        onClick={() => {}}
                    >
                        {e.specialname}
                        <div className="menu-ico">
                            <img alt="" src={ico}/>
                            <span>{e.playcount}</span>
                        </div>
                    </Item>
                    
                    
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
export default Menu;