const assert = require('chai').assert;
const {GameState} = require('../../models/gameState');

describe('Automatch tests', () => {
    const selectorId = 'selector';
    const matcherId = 'matcher';
    const selectorIndex = 0;
    const matcherIndex = 1;
    let gameState;
    const firstResponse = 'firstResponse';

    beforeEach(() => {
        const players = [{id: selectorId, active: true}, {id: matcherId, active: true}];
        gameState = new GameState({players});
        gameState.players[selectorIndex].responses.push(firstResponse);
        gameState.beginSelection();
        gameState.selectionType = 'strike';
    });

    it('AutoMatch match empty responses', () => {
        gameState.acceptResponseSelection(selectorId, firstResponse);
        assert.isTrue(gameState.players[matcherIndex].matchingComplete);
        assert.strictEqual(gameState.players[matcherIndex].match, '');
    });

    it('AutoMatch match all used', () => {
        gameState.players[matcherIndex].responses = [firstResponse, 'abc', 'cde'];
        gameState.players[matcherIndex].used = ['cde', 'abc', firstResponse];
        gameState.acceptResponseSelection(selectorId, firstResponse);
        assert.isTrue(gameState.players[matcherIndex].matchingComplete);
        assert.strictEqual(gameState.players[matcherIndex].match, '');
    });

    it('AutoMatch exactMatch', () => {
        gameState.players[matcherIndex].responses = [firstResponse];
        gameState.acceptResponseSelection(selectorId, firstResponse);
        assert.isTrue(gameState.players[matcherIndex].matchingComplete);
        assert.strictEqual(gameState.players[matcherIndex].match, firstResponse);
    });

    it('AutoMatch whiteSpace', () => {
        gameState.players[matcherIndex].responses = [firstResponse + ' '];
        gameState.acceptResponseSelection(selectorId, firstResponse);
        assert.isTrue(gameState.players[matcherIndex].matchingComplete);
        assert.strictEqual(gameState.players[matcherIndex].match, firstResponse + ' ');
    });

    it('AutoMatch capitalizationMatch', () => {
        gameState.players[matcherIndex].responses = [firstResponse.toUpperCase()];
        gameState.acceptResponseSelection(selectorId, firstResponse);
        assert.isTrue(gameState.players[matcherIndex].matchingComplete);
        assert.strictEqual(gameState.players[matcherIndex].match, firstResponse.toUpperCase());
    });

    it('AutoMatch punctuationMatch', () => {
        gameState.players[matcherIndex].responses = [firstResponse + '!!!'];
        gameState.acceptResponseSelection(selectorId, firstResponse);
        assert.isTrue(gameState.players[matcherIndex].matchingComplete);
        assert.strictEqual(gameState.players[matcherIndex].match, firstResponse + '!!!');
    });

    it('AutoMatch misSpelledMatch');

    it('AutoMatch misSpelledSelection');

    it('AutoMatch misSpelledBoth');

});