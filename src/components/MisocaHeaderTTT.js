import React from 'react'
import misocalogo from '../assets/images/misocalogo.svg'

import '../assets/css/container.css'
import '../assets/css/header.css'

class MisocaHeaderTTT extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ticketNum:"1",
            lilist:[
                {a_href:"#", a_content:"はじめての方へ", a_i_class:"ico ico-beginner"},
                {a_href:"#", a_content:"サポート", a_i_class:"ico ico-help"},
                {a_href:"#", a_content:"レポート", a_i_class:"ico ico-graph"},
                {a_href:"#", a_content:"自社情報", a_i_class:"ico ico-office"}
            ]
        };
    }

    render() {
        let listResult = this.state.lilist.map(function(value,key){
        return <li key={key}><a href={value.a_prop}><i className={value.a_i_class}></i>{value.a_content}</a></li>
        })

        return (
            <div class="container">
                <p class="header__logo">
                    <a href="#">
                        <img alt="" src={misocalogo}></img>
                    </a>
                </p>
                <ul>
                    <li>
                        <a id="ticket_quantity">
                            郵送チケット: {this.state.ticketNum}枚
                        </a>
                    </li>
                    {listResult}
                    <li>
                        <a href="#">
                        マイポータル
                        </a>
                    </li>
                    <li>
                        <a href="">
                        設定
                        </a>
                        <i className="ico ico-angle-down"></i>
                        <ul>
                                
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
export default MisocaHeader;