import React from 'react';
import { Slider } from '../slider'


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18,
      height: 140,
    }
    this.onUpdateAge = this.onUpdateAge.bind(this);
  }

  onUpdateAge(age) {
    this.setState({ age: age })
  }

  render() {
    return(
      <div className="section">
        <Slider label="Age" min={this.state.age} max={100} step={1}
          handleChange={this.onUpdateAge}></Slider>
        <Slider label="Height(cm)" min={this.state.height} max={210} step={1}></Slider>
      </div>
    )
  }
}