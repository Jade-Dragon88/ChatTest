import React from 'react';
import styled from 'styled-components';
import Tabs from './tabs/tabs';
import Select from './select/select';
import enlarge from './enlarge.svg';
import minimize from './minimize.svg';

const StyledHeaderDiv = styled.div`
  /* position: absolute; */
  display: flex;
  /* width: 358px; */
  height: 40px;
  left: 20px;
  top: 660px;
  padding: 0 10px 0 15px;
  /* outline: 1px solid red; */
  justify-content: space-between;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background: #00000080;
`;
const StyledImg = styled.img`
  width: 18px;
  height: 18px;
`;

// const tabs=['Общий','Клан','Друзья','Новости'];
const langs = ['ru', 'en', 'de', 'fr'];

export default function Header(props) {
  // const [a, b] = useState(null);
  const { setNumOfActiveTab, numOfActiveTab, tabs } = props;
  return (
    <StyledHeaderDiv className='HEADER'>
      <Tabs
        tabs={tabs}
        setNumOfActiveTab={setNumOfActiveTab}
        numOfActiveTab={numOfActiveTab}
      />
      <Select opts={langs} />
      <StyledImg src={enlarge} className='enlarge' alt='enlarge' />
      <StyledImg src={minimize} className='minimize' alt='minimize' />
    </StyledHeaderDiv>
  );
}
