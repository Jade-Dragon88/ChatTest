import React, { useState } from 'react'
import styled from 'styled-components'
import './tabs.css'

const StyledTabsDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
`
const StyledP = styled.p`
  margin-right: .5rem;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  /* color: #23B838; */
  color: ${props=>props.color};
  cursor: pointer;
`
let newKey = () => {return Math.random().toString(36).substr(2, 7);};

export default function Tabs(props) {
  const {numOfActiveTab}=props;
  let [color, setColor] = useState('#23B838')
  let tabsElems = React.Children.map(
        props.tabs,
        (tab,tabIndex)=>{
          let TabClassName = `NUM_${tabIndex.toString()}`
          return(
            <StyledP key={newKey()} 
                    className={TabClassName}
                    color={color}
                    onClick={()=>{
                      props.setNumOfActiveTab(tabIndex);
                    }}>
              {tab}
            </StyledP>
          );
        })
  // console.log(numOfActiveTab);
  return (
    <StyledTabsDiv className="TABS">
      {tabsElems}
    </StyledTabsDiv>
  )
}