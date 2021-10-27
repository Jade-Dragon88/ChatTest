import React, { Component } from 'react';
// import './total.css'
import styled from 'styled-components'
// import axios from 'axios'
import Header from './header_tabs/header'
import ChatField from './chat_field/chatField'
import Footer from './footer_input/footer'


import GetMessages from '../../services/GetMessages';
// const getMessages = new GetMessages();
let messagesFromBase;
// getMessages.getMessages()
//             .then(res => {messagesFromBase = res;
//                           console.log(res);
//                         }
//                 );


                // console.log(messagesFromBase);
const StyledTotalDiv = styled.div`
  position: absolute;
  width: 360px;
  height: 400px;
  left: 20px;
  bottom: 20px;
  background: #00000080;
  border-radius: 20px;
  z-index:-1;
`
class Total extends Component {
  constructor(props) {
    super(props);
    this.getMsgs();
  }

  state = {
    numOfActiveTab: 0,
    tabs : ['Общий','Клан','Друзья','Новости'],
    messages : [/*messagesFromBase*/
        { from : 'BivOld',
        text : 'Я думал, что они будут пополнятся разв н-ное время. А тут реально игра закончена',
        lvl: Math.floor(Math.random()*10+1),
        btc: true,
        ada: false,
        admin: false,
        moder: false,
        time:'14:28'
      },
      { from : 'Nigativ',
        text : 'wac можно только купить',
        lvl: Math.floor(Math.random()*10+1),
        btc: true,
        ada: false,
        admin: false,
        moder: false,
        time:'14:28'
      },
      { from : 'Skylifesky',
        text : 'Цена 1 wac =0,1$ и цена не изменится',
        lvl: Math.floor(Math.random()*10+1),
        btc: true,
        ada: false,
        admin: false,
        moder: false,
        time:'14:28'
      },
      { from : 'me',
        text : 'Сегодня идем на Германию',
        lvl: Math.floor(Math.random()*10+1),
        btc: true,
        ada: false,
        admin: false,
        moder: false,
        time:'14:28'
      },
    ]
  }

  getMessages = new GetMessages();

  getMsgs =()=>{
    let newState;
    this.getMessages
        .getMessages()
        .then(res => {
          this.setState(()=>{
            console.log(res);
            newState = this.state;
            // let reverseRes=[];
            // res.forEach(item => reverseRes.unshift(item));
            // return (newState.messages = (reverseRes));
            res.forEach(item => newState.messages.unshift(item));
            console.log(newState);
            return newState;
          })
        });
        // console.log(this.state);
  }

  setNumOfActiveTab = (tabIndex) => {
    this.setState(({numOfActiveTab})=>({
      numOfActiveTab: tabIndex
    }));
  }
  addMsg=(text) => {
    this.setState(({messages})=>{
          const newMessage = {
              from :'me',
              text : text,
              lvl: '',
              btc: false,
              ada: false,
              admin: false,
              moder: false,
              time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`,
          };
          console.log('messages');
          console.log(messages);
          const newMessageArr = [...messages, newMessage];
          console.log('newMessageArr');
          console.log(newMessageArr);
          const newState = this.state;
          console.log('newStateBeforeChange');
          console.log(newState);
          newState.messages = newMessageArr;
          console.log('newState');
          console.log(newState);
          return newState;
    })
  }
  render() {
    let {tabs,numOfActiveTab,messages} = this.state;
    // console.log(messages);
    return (
      <StyledTotalDiv className="TOTAL">
        <Header tabs={tabs} 
                setNumOfActiveTab={this.setNumOfActiveTab} 
                numOfActiveTab={numOfActiveTab}/>
        <ChatField numOfTabs={tabs.length} 
                  numOfActiveTab={numOfActiveTab} 
                  messages={messages}/>
        <Footer addMsg={this.addMsg}/>
      </StyledTotalDiv>
    )
  }
}

export default Total;