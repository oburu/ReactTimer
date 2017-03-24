import React,{Component} from 'react';
import Clock from './clock';
import CountdownForm from './countdownForm';
import Controls from './controls';

class Countdown extends Component{
  constructor(props){
    super(props);

    this.state = {
      count:0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState){
    //just check if the state had changed, comparing with the previous state
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer=undefined;
          break;
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer=undefined;
  }

  startTimer(){
    this.timer = setInterval(() => {
      let newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0){
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  }

  handleSetCountdown(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange(newStatus){
    this.setState({
      countdownStatus: newStatus
    });
  }

  render(){
    let {count, countdownStatus} = this.state;
    const renderControlArea = () => {
      if(countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)} />
      }else{
        return <CountdownForm onSetCountdown = {this.handleSetCountdown.bind(this)}/>
      }
    }
    return(
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
}

export default Countdown;
