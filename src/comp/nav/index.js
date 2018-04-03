import React,{Component} from 'react';
import {Tabs,WhiteSpace} from 'antd-mobile';
import './index.css'

class Nav extends Component{
    constructor(){
        super();
        this.state={}
    }
    
    clickTab = (tab,index)=>{
        const navArr = ["newsong","rank","hot","singer"];
        let {url:{history}} = this.props;
        history.push({pathname:`/${navArr[index]}`});
    }

    render(){
        const tabs = [
            { title: '新歌' },
            { title: '排行' },
            { title: '歌单' },
            { title: '歌手' }
        ];
        let {url:{location}} = this.props;
        let obj = {
            '/newsong':0,
            '/rank':1,
            '/hot':2,
            '/singer':3
        }
        let num = obj[location.pathname];
        return (
            <div>
               <WhiteSpace/>
                <Tabs tabs = {tabs}
                    initialPage={0}
                    renderTabBar={props => 
                        <Tabs.DefaultTabBar {...props} 
                        page={4} 
                        activeTab={num}
                        onTabClick={(tab,index)=>{this.clickTab(tab,index)}} />
                    }
                ></Tabs>
                <WhiteSpace/>
            </div>
        )
    }
}
export default Nav;