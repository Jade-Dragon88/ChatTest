import React from 'react';
import styled from 'styled-components';
import './select.css';
import arrowImg from './lang-arrow.svg';

const StyledSelect = styled.select`
  color: #ffffff;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  background-color: transparent;
  border-color: transparent;
  appearance: none; /* убираем дефолтные стрелочки */
  -webkit-appearance: none; /* Chrome */
  -moz-appearance: none; /* Firefox */
  background: url(${arrowImg}) no-repeat;
  background-position-x: 100%;
  background-position-y: 45%;
  margin: 0;
  padding: 0;
  width: 35px;
  height: 100%;
  /* align-items: start; */
  /* vertical-align: top; */
`;
const Styledoption = styled.option`
  color: #000000;
`;

const nextId = () => Math.random().toString(36).substr(2, 7);

export default function Select(props) {
  const { opts } = props;
  const selectOpts = opts.map((lang) => (
    <Styledoption key={nextId()}>{lang}</Styledoption>
  ));

  return <StyledSelect className='LANG-SELECT'>{selectOpts}</StyledSelect>;
}
