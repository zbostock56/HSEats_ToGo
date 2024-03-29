import React from 'react'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { render } from 'react-dom';
// import { colourOptions } from '../data';


/*

Component for COLD Input (the dynamic input boxes)
Options for the input box is named "coldOptions"

*/


const coldOptions = [
    { value: 'yogurtParfait', label: 'Yogurt Parfait' },
    { value: 'test1', label: 'Test Food' },
    { value: 'test2', label: 'Test Food 2' }
  ];

  class Input extends React.Component{
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

{/* Below is the Select package "settings", more or less this is what the Select package will use when it is displaying the component */}

    return(
      <Select
        value = {selectedOption}
        onChange = {this.handleChange}
        options = {coldOptions}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti={true} />
      );
    }
  }

  const animatedComponents = makeAnimated();

  export default Input