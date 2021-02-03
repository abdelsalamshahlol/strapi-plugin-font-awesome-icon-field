import React, {useState} from 'react';
import {Picker, Padded, Text, Button, InputText} from '@buffetjs/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as ICONS from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {useDebounce} from '@buffetjs/hooks';

const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
overflow-y: scroll;
max-height: 200px;
`;

const IconWrap = styled.div`
display: flex;
justify-content:center;
align-items:center;
transition: 0.5s all;
padding: 0.5rem;
border: 1px solid #6c757d1a;
flex: 1 0 10%;
max-width: 50px;

  &:hover {
    box-shadow: 1px 1px 3px #73859f;
    background: #437eff;
    color: #fafafb;
  }
`;

const PickerButton = () => {
  const iconsArr = Object.keys(ICONS);
  const [val, setValue] = useState('');
  const debouncedValue = useDebounce(val, 600);

  const icons = React.useMemo(() => {
    if (val) {
      return iconsArr.filter(icon => icon.toLowerCase().indexOf(val.toLowerCase()) > 0);
    }
    return iconsArr;
  }, [debouncedValue]);

  const filterIcons = ({target: {value}}) => setValue(value);


  const selectIcon = (prefix, iconName, onToggle) => {
    // Take the prefix and iconName
    const i = prefix + " fa-" + iconName
    console.log(i)
    onToggle()
  };

  return (
    <Picker
      position="left"
      renderButtonContent={(isOpen) => <Text>Choose Icon</Text>}
      renderSectionContent={(onToggle) => (
        <>
          <Padded top left right bottom>
            <InputText name="input" onChange={filterIcons} placeholder="Search..." type="text" value={val}/>
            <Wrapper>
              {
                // Object.keys(ICONS).map((icon) => {
                icons.map((icon) => {
                  const {prefix, iconName} = ICONS[icon]
                  if (iconName) {
                    return (
                      <IconWrap key={iconName} onClick={() => selectIcon(prefix, iconName, onToggle)}>
                        <FontAwesomeIcon icon={ICONS[icon]}/>
                      </IconWrap>
                    )
                  }
                })
              }
            </Wrapper>
          </Padded>
        </>
      )}
    />
  );
}

export default PickerButton;