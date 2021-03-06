import React,{Component} from 'react'
import PubSub from 'pubsub-js'

import PropTypes from 'prop-types'

export default class Search extends Component{



    handleClick = () =>{
        const searchName = this.searchInput.value.trim();
        if (searchName){
            //发送搜索指令
            //参数1：事件名，数据参数
            PubSub.publish('searchAction',searchName);
        }

    }


    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={x=>this.searchInput = x}/>
                    <button onClick={this.handleClick}>Search</button>
                </div>
            </section>
        );
    }
}
