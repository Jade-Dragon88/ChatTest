import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  color: #ffffff;
  text-transform: uppercase;
  background-color: transparent;
  border-color: transparent;
`
const Styledoption = styled.option`
  color: #000000;
`

let nextId = () => {return Math.random().toString(36).substr(2, 7);};

export default function Select(props) {
  let selectOpts = props.opts.map((lang) =>{
    return(
      <Styledoption key={nextId()}>{lang}</Styledoption>
    );
  });

  return (
    <StyledSelect>
      {selectOpts}
    </StyledSelect>
  )
}
