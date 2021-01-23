import React from 'react';
import {Picker, Padded, Text, Button} from '@buffetjs/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as ICONS from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
height: 200px;
overflow-y: scroll;
`;

const IconWrap = styled.div`
display: flex;
justify-content:center;
align-items:center;
transition: 0.5s all;
width: 30%;
padding: 0.5rem;
border: 1px solid #6c757d1a;
flex: 1 0 10%;

  &:hover {
    box-shadow: 1px 1px 3px #73859f;
    background: #437eff;
    color: #fafafb;
  }
`;

const PickerButton = () => {
  return (
    <Picker
      position="left"
      renderButtonContent={(isOpen) => <Text>Choose Icon</Text>}
      renderSectionContent={(onToggle) => (
        <>
          <Padded top left right bottom>
            <Wrapper>
              {
                Object.keys(ICONS).map((icon) => {
                  const {prefix, iconName} = ICONS[icon]
                  if (iconName) {
                    return (
                      <IconWrap key={iconName}>
                        <FontAwesomeIcon icon={ICONS[icon]}/>
                      </IconWrap>
                    )
                  }
                })
              }
            </Wrapper>
            {/*<Text>Picker content</Text>*/}
          </Padded>
          <Padded top left right bottom>
            <Button onClick={onToggle}>
              <Text color='white' fontSize='md'>Close</Text>
            </Button>
          </Padded>
        </>
      )}
    />
  );
}

export default PickerButton;