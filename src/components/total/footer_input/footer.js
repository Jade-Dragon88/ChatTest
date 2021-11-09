import React, { useState } from 'react';
import './footer.css';
import styled from 'styled-components';
import emodjis from './emodjis.svg';

const StyledFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  left: 20px;
  padding: 0 1rem;
  border-radius: 0 0 20px 20px;
  background: #00000080;
`;
const StyledForm = styled.form`
  flex-grow: 1;
`;
const StyledInput = styled.input`
  width: 100%;
  color: #fff;
  background-color: transparent;
  border-color: transparent;
`;
const StyledImg = styled.img`
  margin-left: 0.75rem;
  width: 20px;
  height: 20px;
`;
const StyledPSymbolCounter = styled.p`
  margin-left: 1.5rem;
  color: #ffffff80;
  font-size: 0.75rem;
`;
const StyledSpan = styled.span`
  color: #ffffff80;
  font-size: 0.5rem;
`;

export default function Footer(props) {
  const [numOFSymbolsToCounter, setnumOFSymbolsToCounter] = useState(200);
  const [inputValue, setInputValue] = useState('');
  const { addMsg } = props;
  return (
    <StyledFooterDiv className='FOOTER'>
      <StyledForm
        className='FORM'
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputValue);
          addMsg(inputValue);
          console.log('from FOOTER');
          e.target[0].value = '';
          setnumOFSymbolsToCounter(200);
        }}
      >
        <StyledInput
          placeholder='Напишите сообщение...'
          maxLength='200'
          onChange={(e) => {
            let numOFSymbols = 200;
            setInputValue(e.target.value);
            numOFSymbols -= e.target.value.length;
            setnumOFSymbolsToCounter(numOFSymbols);
          }}
        />
      </StyledForm>
      <StyledPSymbolCounter className='SYMBOLCOUNTER'>
        {numOFSymbolsToCounter}/<StyledSpan>200</StyledSpan>
      </StyledPSymbolCounter>
      <StyledImg src={emodjis} className='emodjis' alt='emodjis' />
    </StyledFooterDiv>
  );
}
