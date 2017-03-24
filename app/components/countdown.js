import React,{Component} from 'react';
import Clock from './clock';
import CountdownForm from './countdownForm';

class Countdown extends Component{
  constructor(props){
    super(props);

    this.state = {
      count:0
    }
  }

  handleSetCoundown(seconds){
    this.setState({
      count: seconds
    });
  }

  render(){
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown = {this.handleSetCoundown.bind(this)}/>
      </div>
    )
  }
}

export default Countdown;
