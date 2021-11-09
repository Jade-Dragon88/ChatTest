import React, { Component } from 'react';
// import './total.css'
import styled from 'styled-components';
import AutoScroll from '../scroll/scroll';
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
  z-index: -1;
`;
class Total extends Component {
  state = {
    numOfActiveTab: 0,
    tabs: ['Общий', 'Клан', 'Друзья', 'Новости'],
    messages: [
      {
        from: 'BivOld',
        text: 'Я думал, что они будут пополнятся разв н-ное время. А тут реально игра закончена',
        lvl: Math.floor(Math.random() * 10 + 1),
        btc: true,
        ada: false,
        admin: false,
        moder: false,
        createdAt: '2021-10-27T14:28:00.368Z',
      },
      {
        from: 'Nigativ',
        text: 'wac можно только купить',
        lvl: Math.floor(Math.random() * 10 + 1),
        btc: false,
        ada: true,
        admin: false,
        moder: true,
        createdAt: '2021-10-27T14:28:00.368Z',
      },
      {
        from: 'Skylifesky',
        text: 'Цена 1 wac =0,1$ и цена не изменится',
        lvl: Math.floor(Math.random() * 10 + 1),
        btc: true,
        ada: false,
        admin: true,
        moder: false,
        createdAt: '2021-10-27T14:28:00.368Z',
      },
      {
        from: 'me',
        text: 'Сегодня идем на Германию',
        lvl: Math.floor(Math.random() * 10 + 1),
        btc: true,
        ada: false,
        admin: false,
        moder: false,
        createdAt: '2021-10-27T14:28:00.368Z',
      },
    ],
  };

  getMessages = new GetMessages();
  haveChatFieldScroll = false;
  scrollValue = 0;
  chatFieldHeight = 0;
  apiSkip = 0;
  apiLimit = 5;

  componentDidMount() {
    this.getMsgs();
  }

  componentDidUpdate() {
    AutoScroll();
    this.onScroll();
  }

  componentWillUnmount() {}

  onScroll = () => {
    const chatField = document.querySelector('.CHATFIELD');
    const scrollListener = () => {
      const chatFieldScrollTop = chatField.scrollTop;
      if (chatFieldScrollTop <= 200 && chatFieldScrollTop >= 150) {
        chatField.removeEventListener('scroll', scrollListener);
        this.haveChatFieldScroll = false;
        console.log('!!! EventListener удален !!!');
        this.getMsgs();
      }
    };
    if (!this.haveChatFieldScroll) {
      chatField.addEventListener('scroll', scrollListener);
      this.haveChatFieldScroll = true;
      console.log('DONE');
    }
  };

  getMsgs = async () => {
    const chatField = document.querySelector('.CHATFIELD');
    this.scrollValue = chatField.scrollHeight;
    // console.log(`scrollValue перед обновлением = ${this.scrollValue}`);
    let newState;
    await this.getMessages
      .getMessages(this.apiSkip, this.apiLimit)
      .then((res) => {
        this.setState(() => {
          newState = this.state;
          res.forEach((item) => newState.messages.unshift(item));
          return newState;
        });
      });
    console.log('Сообщения обновлены');
    chatField.scrollTo(0, chatField.scrollHeight - this.scrollValue);
    this.scrollValue = chatField.scrollHeight;
    this.apiSkip += this.apiLimit;
    // console.log(`scrollValue после обновления = ${this.scrollValue}`);
  };

  setNumOfActiveTab = (tabIndex) => {
    this.setState({
      numOfActiveTab: tabIndex,
    });
  };

  addMsg = (text) => {
    // 2021-10-27T14:28:00.368Z
    const myTime =
      new Date().getFullYear() +
      /* '-0' +*/ '-' +
      (new Date().getMonth().toString().length === 1
        ? `0${new Date().getMonth()}`
        : `${new Date().getMonth()}`) +
      '-' +
      (new Date().getUTCDate().toString().length === 1
        ? `0${new Date().getUTCDate()}`
        : `${new Date().getUTCDate()}`) +
      'T' +
      (new Date().getUTCHours().toString().length === 1
        ? `0${new Date().getUTCHours()}`
        : `${new Date().getUTCHours()}`) +
      ':' +
      (new Date().getMinutes().toString().length === 1
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`) +
      ':' +
      (new Date().getSeconds().toString().length === 1
        ? `0${new Date().getSeconds()}`
        : `${new Date().getSeconds()}`) +
      '.' +
      new Date().getMilliseconds() +
      'Z';
    console.log(myTime);
    this.setState(({ messages }) => {
      const newMessage = {
        from: 'me',
        text,
        lvl: '',
        btc: false,
        ada: false,
        admin: false,
        moder: false,
        createdAt: myTime,
      };
      const newMessageArr = [...messages, newMessage];
      const newState = this.state;
      newState.messages = newMessageArr;
      return newState;
    });
    const chatField = document.querySelector('.CHATFIELD');
    // this.scrollValue = chatField.scrollHeight;
    chatField.scrollTo(0, chatField.scrollHeight);
    // console.log('chatField from addMsg');
  };

  render() {
    const { tabs, numOfActiveTab, messages } = this.state;
    // console.log(numOfActiveTab);
    return (
      <StyledTotalDiv className='TOTAL'>
        <Header
          tabs={tabs}
          setNumOfActiveTab={this.setNumOfActiveTab}
          numOfActiveTab={numOfActiveTab}
        />
        <ChatField
          numOfTabs={tabs.length}
          numOfActiveTab={numOfActiveTab}
          messages={messages}
          // onScroll={this.onScroll}
        />
        <Footer addMsg={this.addMsg} onScroll={this.onScroll} />
      </StyledTotalDiv>
    );
  }
}

export default Total;
