import React,{Component} from 'react'
import {NavBar,Icon} from 'antd-mobile'
import './index.css'
import Nav from '../nav'
class Header extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        console.log("head",this.props);

        return (
            <div>
                <NavBar
                    mode="dark"
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                ></NavBar>
                <Nav url = {}/>
            </div>
        )
    }
}
export default Header;