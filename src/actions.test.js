import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';

describe('restartGame', () => {
  it('Should clear the current state', () => {
    const action = restartGame(10);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(10);
  });
});

describe('makeGuess', () => {
  it('Should return the action', () => {
      const guess = 33;
      const action = makeGuess(guess);
      expect(action.type).toEqual(MAKE_GUESS);
      expect(action.guess).toEqual(guess);
  });
});

describe('generateAuralUpdate', () => {
    it('Should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});
