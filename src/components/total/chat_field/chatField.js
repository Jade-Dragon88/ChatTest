import React from 'react'
import styled from 'styled-components'
import ChatFieldTab from './chatField_tabs/chatField_tab'
import './chatField.css'

const StyledChatFieldDiv = styled.div`
  position: relative;
  width: 360px;
  height: 320px;
  /* left: 20px; */
  /* top: 700px; */
  /* outline: 1px solid blue; */
  overflow-y: auto;
`
// const StyledTabDiv = styled.div`
//   display: ${props=>props.display? 'block' : 'none'};
//   position: absolute;
//   /* border: 2px solid ${props=>props.borderColor}; */
//   box-sizing: border-box;
//   width: 100%;
//   height: 100%;
// `
let newKey = () => {return Math.random().toString(36).substr(2, 7);};
export default function ChatField(props) {
  const {numOfActiveTab,numOfTabs,messages} = props;
  let tabs = [];
  
  for (let i=0; i< numOfTabs; i++){
    tabs.push(<ChatFieldTab 
                  key = {newKey()} 
                  display = {numOfActiveTab === i ? true : false}
                  messages = {messages}
                  />)
  };
  // console.log(tabs);

  return (
    <StyledChatFieldDiv className="CHATFIELD">
    {tabs}
    </StyledChatFieldDiv>
  )
}
