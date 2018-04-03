import React,{Component} from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import App from '../../App';
import Header from '../head';
import Rank from '../rank'

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
        path:'/hot',
        component:App
    },
    {
        path:'/singer',
        component:App
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