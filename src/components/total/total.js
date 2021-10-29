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
  componentDidMount(){
    this.getMsgs();
  }
  autoScrollActive = true;
  componentDidUpdate(){
    if (this.autoScrollActive){
      autoScroll();
      this.autoScrollActive = false;
    }
    this.onScroll();
  }
  componentWillUnmount(){
  }
  scrollValue = 0;
  chatFieldHeight = 0;
  onScroll = () => {
    const chatField = document.querySelector('.CHATFIELD');
    const scrollListener = ()=>{
      const chatFieldScrollTop = chatField.scrollTop;
      if (chatFieldScrollTop<=200 && chatFieldScrollTop>=150){
        chatField.removeEventListener('scroll',scrollListener)
        console.log('!!! EventListener удален !!!');
        this.getMsgs();
      }
    }
    chatField.addEventListener('scroll',scrollListener)
    console.log('DONE');
  }

  getMessages = new GetMessages();
  apiSkip = 0;
  apiLimit = 5;
  getMsgs = async ()=>{
    const chatField = document.querySelector('.CHATFIELD');
    this.scrollValue = chatField.scrollHeight;
    // console.log(`scrollValue перед обновлением = ${this.scrollValue}`);
    let newState;
    await this.getMessages
          .getMessages(this.apiSkip,this.apiLimit)
          .then(res => {
            this.setState(()=>{
              newState = this.state;
              res.forEach(item => newState.messages.unshift(item));
              return newState;
            })
          });
    console.log('Сообщения обновлены');
    chatField.scrollTo(0,(chatField.scrollHeight - this.scrollValue));
    this.scrollValue = chatField.scrollHeight;
    this.apiSkip+=this.apiLimit;
    // console.log(`scrollValue после обновления = ${this.scrollValue}`);
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
          const newMessageArr = [...messages, newMessage];
          const newState = this.state;
          newState.messages = newMessageArr;
          return newState;
    })
  }
  render() {
    let {tabs,numOfActiveTab,messages} = this.state;
    return (
      <StyledTotalDiv className="TOTAL">
        <Header tabs={tabs} 
                setNumOfActiveTab={this.setNumOfActiveTab} 
                numOfActiveTab={numOfActiveTab}/>
        <ChatField numOfTabs={tabs.length} 
                  numOfActiveTab={numOfActiveTab} 
                  messages={messages}
                  // onScroll={this.onScroll}
        />
        <Footer addMsg={this.addMsg}/>
      </StyledTotalDiv>
    )
  }
}

export default Total;