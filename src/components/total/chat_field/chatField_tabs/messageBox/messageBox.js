import React from 'react';
import styled from 'styled-components';
import btcImg from './btc.svg';
import adaImg from './ada.svg';
import adminImg from './admin.svg';
import moderImg from './moder.svg';
import './messageBox.css';

const StyledMessageDiv = styled.div`
  align-self: ${props=>props.align ? 'flex-end' : 'flex-start'};
  display: flex;
  /* color: #000; */
  text-align: left;
  max-width: 265px;
  align-items: center;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  margin: 4px 0;
`
const StyledOwnerAndTextDiv = styled.div`
  color: ${props=>props.isMe ? '#ddd' : '#000'};
  background-color: ${props=>props.isMe ? '#000' : '#fff'};
  padding: 12px;
  border-radius: ${props=>props.isMe ? '20px 20px 0px 20px' : '20px 20px 20px 0px'};
`
const StyledOwnerDiv = styled.div`
  display: ${props=>props.display ? 'flex': 'none'};
  margin-bottom: 6px;
  align-items: center;
`
const StyledImg = styled.img`
  display: ${props=>props.display ? 'inline-block' : 'none'};
  width: 14px;
  height: 14px;
`
let newKey = () => {return Math.random().toString(36).substr(2, 7);};

export default function messageBox(props) {
  const {messages = []} = props;
  // console.log(`Длина массива с сообщениями = ${messages.length}`);
  let msgs=[];
  for(let i=0; i<messages.length; i++) {
    const {from,text,
          lvl = Math.floor(Math.random()*10+1),
          admin = false,
          moder = false,
          // time,
          createdAt,
          btc = true,
          ada = false}=messages[i];
    msgs.push(
      <StyledMessageDiv key={newKey()} align={from==='me' ? true : false}>
        <StyledOwnerAndTextDiv className="OWNERANDTEXT" isMe = {from==='me' ? true : false}>
          <StyledOwnerDiv className="OWNER" display={from==='me' ? false : true}>
            <StyledImg className="CRIPTOIMG" src={btcImg} display={btc} />
            <StyledImg className="CRIPTOIMG" src={adaImg} display={ada} />
            <span className="NAME">{from}</span>
            <StyledImg className="isAdmin" src={adminImg} display={admin}/>
            <StyledImg className="isModer" src={moderImg} display={moder}/>
            <span className="LVL">{lvl}</span>
          </StyledOwnerDiv>
          <div className="TEXT">{text}</div>
        </StyledOwnerAndTextDiv>
        <div className="MESSAGETIME">{`${(new Date(createdAt)).getHours()}:${(new Date(createdAt)).getMinutes()}`}</div>
      </StyledMessageDiv>
    )
  }
  return (
    <> {msgs} </>
  )
}
