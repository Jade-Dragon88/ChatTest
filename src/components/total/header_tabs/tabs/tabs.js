import React from 'react';
import styled from 'styled-components';
import './tabs.css';
import arrowImg from './lang-arrow.svg';

const StyledTabsDiv = styled.div`
  position: relative;
  display: flex;
  width: 235px;
  height: 100%;
  align-items: center;
  overflow: hidden;
`;
const StyledP = styled.p`
  display: flex;
  align-items: center;
  margin: 0px 15px 0px 0px;
  box-sizing: border-box;
  height: 100%;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 0%;
  /* vertical-align: middle; */
  text-align: center;
  text-transform: uppercase;
  /* color: #23B838; */
  color: ${(props) => props.color};
  cursor: pointer;
  border-bottom: ${(props) =>
    props.currTab === props.activeTab
      ? '2px solid #23B838'
      : '2px solid transparent'};
`;
const StyledDivTabsArrow = styled.div`
  position: absolute;
  /* z-index: 1; */
  right: 0px;
  width: 12px;
  height: 100%;
  background: url(${arrowImg}) no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
`;

const newKey = () => Math.random().toString(36).substr(2, 7);

export default function Tabs(props) {
  const { tabs, numOfActiveTab, setNumOfActiveTab } = props;
  const color = '#23B838';
  console.log(numOfActiveTab);
  const tabsElems = React.Children.map(tabs, (tab, tabIndex) => {
    const TabClassName = `NUM_${tabIndex.toString()}`;
    return (
      <StyledP
        key={newKey()}
        className={TabClassName}
        color={color}
        activeTab={numOfActiveTab}
        currTab={tabIndex}
        onClick={() => {
          setNumOfActiveTab(tabIndex);
        }}
      >
        <span>{tab}</span>
      </StyledP>
    );
  });
  // console.log(numOfActiveTab);
  return (
    <StyledTabsDiv className='TABS'>
      {tabsElems}
      <StyledDivTabsArrow className='tabsArrow' />
    </StyledTabsDiv>
  );
}
