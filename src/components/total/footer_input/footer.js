import React,{useState} from 'react'
import './footer.css'
import styled from 'styled-components'
import emodjis from './emodjis.svg'

const StyledFooterDiv = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  /* width: 360px; */
  height: 40px;
  left: 20px;
  padding: 0 1rem;
  /* top: 1020px; */
  /* outline: 1px solid orange; */
  border-radius: 0 0 20px 20px;
  background: #00000080;
`
const StyledForm = styled.form`
  flex-grow: 1;
`
const StyledInput = styled.input`
  /* flex-grow: 1; */
  width: 100%;
  color: #fff;
  background-color: transparent;
  border-color: transparent;
`
const StyledImg = styled.img`
  margin-left: 1rem;
  width: 20px;
  height: 20px;
`

export default function Footer(props) {
  // let [inputValue,setInputValue] = useState('')
  let inputValue;
  return (
    <StyledFooterDiv className="FOOTER">
      <StyledForm className="FORM"
                  onSubmit={(e)=>{
                    e.preventDefault();
                    props.addMsg(inputValue);
                    console.log('from FOOTER')
                    console.log(inputValue);
                    inputValue =('');
                  }}>
        <StyledInput placeholder="Напишите сообщение..."
                    value = {inputValue}
                    onChange={(e)=>{inputValue = (e.target.value);}}/>
      </StyledForm>
      <StyledImg src={emodjis} className="emodjis" alt="emodjis"/>
    </StyledFooterDiv>
  )
}
