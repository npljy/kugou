import React,{Component} from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import App from '../../App';
import Header from '../head';
import Rank from '../rank';
import Menu from '../menu';
import Singer from '../singer';

const routers = [
    {
        path:'/',
        component:App
    },
    {
        path:'/newsong',
        component:App
    },
    {
        path:'/rank',
        component:Rank
    },
    {
        path:'/menu',
        component:Menu
    },
    {
        path:'/singer',
        component:Singer
    },
    {
        path:'/play/:id',
        component:App
    }
]

class Routers extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        let routeLsit = routers.map((e,i)=>{
            return(
                <Route key={i} exact path={e.path} component={e.component}/>
            )
        })
        return (
            <Router>
                <div>
                    <Route path='/' exact children={(props)=>{
                        return <Header url={props}/>
                    }}/>
                    {routeLsit}
                </div>
            </Router>
        )
    }
}

export default Routers;