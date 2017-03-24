import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from '../../components/countdownForm';

describe('Countdown form', () =>{
  it('Should exists', () =>{
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () =>{
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value ='109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should NOT call onSetCountdown if invalid seconds entered', () =>{
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value ='text';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
