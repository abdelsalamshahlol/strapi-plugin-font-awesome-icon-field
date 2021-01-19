import React from 'react';
import styled from 'styled-components';
import {Label, InputDescription, InputErrors} from 'strapi-helper-plugin';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Picker, Button, InputText} from '@buffetjs/core';
import * as ICONS from '@fortawesome/free-solid-svg-icons';
import PickerButton from "../PickerButton";

const Wrapper = styled.div`
display:block;
`;
const InputGroup = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 3rem;
`;

const IconPicker = ({inputDescription, errors, label, name, noErrorsDescription, onChange, value, error}) => {
  return (
    <Wrapper>
      <Label htmlFor={name} message={label} style={{marginBottom: 10}}/>
      <div>
        {/*<InputGroup>*/}
        {/*  <InputText value={"fa fas"} disabled/>*/}
        {/*  <Button>T</Button>*/}
        {/*</InputGroup>*/}
        <PickerButton/>
      </div>
    </Wrapper>
  )
}

export default IconPicker;