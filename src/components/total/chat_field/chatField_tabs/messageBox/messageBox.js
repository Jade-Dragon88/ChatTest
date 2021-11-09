import React from 'react';
import styled from 'styled-components';
import btcImg from './btc.svg';
import adaImg from './ada.svg';
import adminImg from './admin.png';
import moderImg from './moder.png';
import './messageBox.css';

const StyledMessageDiv = styled.div`
  align-self: ${(props) => (props.align ? 'flex-end' : 'flex-start')};
  display: flex;
  flex-direction: ${(props) => (props.direction ? 'row-reverse' : 'row')};
  /* color: #000; */
  text-align: left;
  max-width: 265px;
  word-wrap: break-word;
  align-items: center;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  margin: 4px 0;
`;
const StyledOwnerAndTextDiv = styled.div`
  color: ${(props) => (props.isMe ? '#ddd' : '#000')};
  background-color: ${(props) => (props.isMe ? '#000' : '#fff')};
  border-radius: ${(props) =>
    props.isMe ? '20px 20px 0px 20px' : '20px 20px 20px 0px'};
  padding: 12px;
  max-width: 265px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
`;
const StyledOwnerDiv = styled.div`
  display: ${(props) => (props.display ? 'flex' : 'none')};
  margin-bottom: 6px;
  align-items: center;
`;
const StyledImg = styled.img`
  display: ${(props) => (props.display ? 'inline-block' : 'none')};
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;
const StyledDivMessageTime = styled.div`
  font-size: 12px;
  line-height: 12px;
  margin: 0 10px;
  color: #ffffff;
  opacity: 0.4;
`;

const newKey = () => Math.random().toString(36).substr(2, 7);

export default function messageBox(props) {
  const { messages = [] } = props;
  // console.log(`Длина массива с сообщениями = ${messages.length}`);
  const msgs = [];
  for (let i = 0; i < messages.length; i++) {
    const {
      from,
      text,
      lvl = Math.floor(Math.random() * 10 + 1),
      admin = false,
      moder = false,
      // time,
      createdAt,
      btc = true,
      ada = false,
    } = messages[i];
    // console.log(createdAt);
    const myHours =
      new Date(createdAt).getHours().toString().length === 1
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`;
    const myMinutes =
      new Date(createdAt).getMinutes().toString().length === 1
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`;
    msgs.push(
      <StyledMessageDiv
        className='MESSAGEBOX'
        key={newKey()}
        align={from === 'me'}
        direction={from === 'me'}
      >
        <StyledOwnerAndTextDiv className='OWNERANDTEXT' isMe={from === 'me'}>
          <StyledOwnerDiv className='OWNER' display={from !== 'me'}>
            <StyledImg className='CRIPTOIMG' src={btcImg} display={btc} />
            <StyledImg className='CRIPTOIMG' src={adaImg} display={ada} />
            <span className='NAME'>{from}</span>
            <StyledImg className='isAdmin' src={adminImg} display={admin} />
            <StyledImg className='isModer' src={moderImg} display={moder} />
            <span className='LVL'>{lvl}</span>
          </StyledOwnerDiv>
          <div className='TEXT'>{text}</div>
        </StyledOwnerAndTextDiv>
        <StyledDivMessageTime className='MESSAGETIME'>
          {`${myHours}:${myMinutes}`}
        </StyledDivMessageTime>
      </StyledMessageDiv>
    );
  }
  return <> {msgs} </>;
}
