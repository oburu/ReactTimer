import React,{Component} from 'react';
import Clock from './clock';
import Controls from './controls';

class Timer extends Component{
  constructor(props){
    super(props);

    this.state = {
      count:0,
      timerStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus){
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({
            count:0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  handleStart(){
    this.timer = setInterval(() => {
      this.setState({
        count:this.state.count + 1
      });
    },1000);
  }

  handleStatusChange(newTimerStatus){
    this.setState({
      timerStatus: newTimerStatus
    });
  }

  render(){
    let {count, timerStatus} = this.state;
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange.bind(this)} />
      </div>
    )
  }
}

export default Timer;
