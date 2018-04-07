import React,{Component} from 'react';
import Banner from '../banner';
import { List } from 'antd-mobile';
const Item = List.Item;

class NewSong extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
        let {banner,data} = this.props;
        let list = data.map((e,i)=>{
            return(
                <List className="my-list" key={i}>
                    <Item 
                        arrow="horizontal" 
                        multipleLine
                        onClick={() => {}}
                    >{e.filename}</Item>
                </List>
            )
        })
        // console.log("newSong",list);
        return (
            <div>
                <Banner {...{banner,data}}/>
                {list}
            </div>
        )
    }
}

export default NewSong;