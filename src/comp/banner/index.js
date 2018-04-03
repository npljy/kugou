import React , {Component} from 'react'
import { Carousel } from 'antd-mobile';
import './index.css'

class Banner extends Component{
    constructor(){
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
            tourl:''
        }
    }
    
    componentWillReceiveProps(next) {
       let {banner} = next;
        setTimeout(() => {
            this.setState({
                data: banner
            });
        }, 100);
    }
    render(){
        return (
            <div>
                <Carousel
                    autoplay={true}
                    infinite
                    selectedIndex={1}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map((val,i) => (
                        <a
                            key={val}
                            href={val.extra&&val.extra.tourl?val.extra.tourl:''}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.imgurl}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
            </div>
        )
    }
}
export default Banner;