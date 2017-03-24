import React,{Component} from 'react';
import Clock from './clock';

class Countdown extends Component{
  render(){
    return(
      <Clock totalSeconds={129}/>
    )
  }
}

export default Countdown;
