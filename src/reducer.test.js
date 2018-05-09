import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('reducer', () => {

  it('Should set the initial state', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!')
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.auralStatus).toEqual('');
  });


  describe('restartGame', () => {
    it('Should reset state', () => {

        let state = {
        guesses: [10],
        feedback: 'Way to go!',
        correctAnswer: 4
        };

        const correctAnswer = 100;

        state = reducer(state, restartGame(correctAnswer));
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toEqual(correctAnswer);
        expect(state.auralStatus).toEqual('');
    });
  });

  describe('makeGuess', () => {
    it('Should make and log guesses', () => {
      let state = {
        guesses: [],
        feedback: '',
        correctAnswer: 100
      };


      state = reducer(state, makeGuess(1));
      expect(state.guesses).toEqual([1]);
      expect(state.feedback).toEqual("You're Ice Cold...");

      state = reducer(state, makeGuess(15));
      expect(state.guesses).toEqual([1, 15]);
      expect(state.feedback).toEqual("You're Ice Cold...");

      state = reducer(state, makeGuess(99));
      expect(state.guesses).toEqual([1, 15, 99]);
      expect(state.feedback).toEqual("You're Hot!");

      state = reducer(state, makeGuess(100));
      expect(state.guesses).toEqual([1, 15, 99, 100])
      expect(state.feedback).toEqual('You got it!');
    });
  });
});
