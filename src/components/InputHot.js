import React from 'react'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { render } from 'react-dom';
// import { colourOptions } from '../data';


const hotOptions = [
    { value: 'tester', label: 'Thing' },
    { value: 'test1', label: 'Test' },
    { value: 'test2', label: 'goo' }
  ];

  class InputHot extends React.Component{
    state = {
      selectedOption: null,
    };
    handleChange = selectedOption => {
      this.setState(
        { selectedOption },
        () => console.log(`Option selected:`, this.state.selectedOption)
      );
  };

  render(){
    const {selectedOption} = this.state;

    return(
      <Select
        value = {selectedOption}
        onChange = {this.handleChange}
        options = {hotOptions}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti={true} />
      );
    }
  }

  const animatedComponents = makeAnimated();

  export default InputHot