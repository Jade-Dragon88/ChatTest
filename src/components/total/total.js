import React, { Component } from 'react';
// import './total.css'
import styled from 'styled-components';
import autoScroll from '../autoScroll/autoScroll';
import Header from './header_tabs/header';
import ChatField from './chat_field/chatField';
import Footer from './footer_input/footer';
import GetMessages from '../../services/GetMessages';

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
        createdAt:'2021-10-27T14:28:00.368Z'
      },
      { from : 'Nigativ',
        text : 'wac можно только купить',
        lvl: Math.floor(Math.random()*10+1),
        btc: true,
        ada: false,
        admin: false,
        moder: false,
        createdAt:'2021-10-27T14:28:00.368Z'
      },
      { from : 'Skylifesky',
        text : 'Цена 1 wac =0,1$ и цена не изменится',
        lvl: Math.floor(Math.random()*10+1),
        btc: true,
        ada: false,
        admin: false,
        moder: false,
        createdAt:'2021-10-27T14:28:00.368Z'
      },
      { from : 'me',
        text : 'Сегодня идем на Германию',
        lvl: Math.floor(Math.random()*10+1),
        btc: true,
        ada: false,
        admin: false,
        moder: false,
        createdAt:'2021-10-27T14:28:00.368Z'
      },
    ]
  }
  autoScrollActive = true; 
  componentDidMount(){
    console.log('TOTAL mount');
    this.getMsgs();
    // autoScroll();
  }
  componentDidUpdate(){
    console.log('TOTAL update');
    if (this.autoScrollActive){
      autoScroll();
      this.autoScrollActive = false;
    }
    let CHATFIELD = document.querySelector('.CHATFIELD');
    CHATFIELD.addEventListener('scroll',()=>{
      let CHATFIELD_scrollTop = CHATFIELD.scrollTop;
      if (CHATFIELD_scrollTop<=100){
        // console.log('DONE')
        // this.getMsgs();
      }
    })
  }
  componentWillUnmount(){
    console.log('TOTAL UNmount');
  }

  getMessages = new GetMessages();

  getMsgs = async ()=>{
    let newState;
    await this.getMessages
        .getMessages()
        .then(res => {
          this.setState(()=>{
            console.log(res);
            newState = this.state;
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
              createdAt: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`,
          };
          // console.log('messages');
          // console.log(messages);
          const newMessageArr = [...messages, newMessage];
          // console.log('newMessageArr');
          // console.log(newMessageArr);
          const newState = this.state;
          // console.log('newStateBeforeChange');
          // console.log(newState);
          newState.messages = newMessageArr;
          // console.log('newState');
          // console.log(newState);
          return newState;
    })
  }
  render() {
    console.log('TOTAL from render');
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