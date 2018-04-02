import React,{Component} from 'react';
import Banner from '../banner';
import NewList from '../newList'

class NewSong extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
        let {banner,data} = this.props;
        let list = data.map((e,i)=>{
            return(
                <NewList {...{
                    key:i,
                    songlist:e,
    
                }}/>
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