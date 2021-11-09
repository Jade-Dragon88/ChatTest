import React from 'react';
import styled from 'styled-components';
import MessageBox from './messageBox/messageBox';

const StyledTabDiv = styled.div`
  display: ${(props) => (props.display ? 'flex' : 'none')};
  flex-direction: column;
  /* align-items: flex-start; */
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  /* height: 100%; */
  padding: 10px;
`;

export default function ChatFieldTab(props) {
  const { display, messages } = props;
  return (
    <StyledTabDiv className='chatFieldContent' display={display}>
      <MessageBox messages={messages} />
    </StyledTabDiv>
  );
}
