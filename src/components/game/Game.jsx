import React from 'react';


import { Header } from '../header';
import { Slider } from '../slider';
import { ButtonGroup } from '../button-group';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { calculatePoints } from '../../common/calculateCamels';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18,
      height: 140,
      hairColor: 'blonde',
      hairLength: 'long',
      eyeColor: 'blue',
      beardType: 'shaved',
      bodyType: 'strong'
    }
    this.minAge =  18;
    this.minHeight = 140;
    this.hairColorOptions = ['blonde', 'brown', 'black', 'red', 'grey'];
    this.hairLengthOptions = ['long', 'middle', 'short', 'bald'];
    this.eyecolorOptions = ['blue', 'green', 'brown', 'grey'];
    this.beardType = ['shaved', 'moustache', 'goatee', 'full'];
    this.bodyType = ['strong', 'skinny', 'fat']
    this.onUpdateAge = this.onUpdateAge.bind(this);
    this.onUpdateHeight = this.onUpdateHeight.bind(this);
    this.onUpdateHairColor = this.onUpdateHairColor.bind(this);
    this.onUpdateHairLength = this.onUpdateHairLength.bind(this);
    this.onUpdateEyeColor = this.onUpdateEyeColor.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  onUpdateAge(age) {
    this.setState({ age: age });
  }
  onUpdateHeight(height) {
    this.setState({ height: height });
  }
  onUpdateHairColor(color) {
    this.setState ({ hairColor: color })
  }
  onUpdateHairLength(length) {
    this.setState({ hairLength: length});
  }
  onUpdateEyeColor(color) {
    this.setState({ eyecolor: color});
  }
  calculate() {
    const { handleCalculate } = this.props
    this.props.history.push('/result');
    const camels = calculatePoints(this.state)
    handleCalculate(camels)
  }

  render() {
    return(
      <React.Fragment>
        <Header title="How Many Camels for your boyfriend?"></Header>
        <div className="section">
          <Slider label="Age" 
                  min={this.minAge} max={100} step={1}
                  handleChange={this.onUpdateAge}>
          </Slider>
          <Slider label="Height(cm)" 
                  min={this.minHeight} max={210} step={1}
                  handleChange={this.onUpdateHeight}>      
          </Slider>
          <Select label="Hair color" 
                  options={this.hairColorOptions}
                  handleChange={this.onUpdateHairColor}>    
          </Select>
          <ButtonGroup label="Hair length"
                       name="hairlength"
                       options={this.hairLengthOptions}
                       handleChange={this.onUpdateHairLength}>
          </ButtonGroup>
          <RadioGroup label="Eyecolor" 
                      options={this.eyecolorOptions}
                      handleChange={this.onUpdateEyeColor}>
          </RadioGroup>
          <ButtonGroup label="Beard"
                       name="hairlength"
                       options={this.beardType}
                       handleChange={this.onUpdateHairLength}>
          </ButtonGroup>
          <ButtonGroup label="Body"
                       name="hairlength"
                       options={this.bodyType}
                       handleChange={this.onUpdateHairLength}>
          </ButtonGroup>
          <button onClick={this.calculate} className="button is-link">CALCULATE</button>
        </div>
      </React.Fragment>
    )
  }
}