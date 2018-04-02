import React,{component} from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class NewList extends React.Component {
    pushState = ()=>{
        
    }
    render() {
        let {songlist} = this.props;
        console.log("newList",songlist);
        return (
            <List className="my-list">
                <Item 
                    arrow="horizontal" 
                    multipleLine
                    onClick={() => {}}
                >{songlist.filename}</Item>
            </List>
        );
    }
}

export default NewList;