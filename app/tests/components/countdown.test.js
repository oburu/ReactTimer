import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Countdown from '../../components/countdown';

describe('Countdown', () => {
  it('Should exists', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    // the done function is to let know mocha to wait until the seTimeout is over ;), other wise wouldn't work.
    it('Should set state to started and countdown', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      },1001);

    });

    it('Should NEVER set count less than zero', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      },3001);

    });
  });


});
