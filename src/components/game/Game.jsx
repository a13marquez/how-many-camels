import React from 'react';
import { Slider } from '../slider'


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minAge: 18,
      minHeight: 140,
      age: 18,
      height: 140
    }
    this.onUpdateAge = this.onUpdateAge.bind(this);
    this.onUpdateHeight = this.onUpdateHeight.bind(this);
  }

  onUpdateAge(age) {
    this.setState({ age: age });
  }
  onUpdateHeight(height) {
    this.setState({ height: height });
  }

  render() {
    const { minAge, minHeight } = this.state
    return(
      <div className="section">
        <Slider label="Age" min={minAge} max={100} step={1}
          handleChange={this.onUpdateAge}></Slider>
        <Slider label="Height(cm)" min={minHeight} max={210} step={1}
          handleChange={this.onUpdateHeight}></Slider>
      </div>
    )
  }
}