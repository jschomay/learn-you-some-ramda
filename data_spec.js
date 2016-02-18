import {equal} from 'assert'
import {boundUpper, boundLower, bountBetween} from './data'

describe('data tools', () => {
  describe('boundUpper', () => {
    it('clips numbers at a specified maximum', () => {
      equal(boundUpper(10, 5), 5);
      equal(boundUpper(10, -5), -5);
      equal(boundUpper(10, 15), 10);
    });
  })

  describe('boundLower', () => {
    it('clips numbers at a specified minimum', () => {
      equal(boundLower(0, 5), 5);
      equal(boundLower(0, -5), 0);
      equal(boundLower(0, 0), 0);
    });
  })
  
  describe('boundBetween', () => {
    it('clips numbers between a specified minimum and maximum', () => {
      equal(boundBetween(0, 10, 5), 5);
      equal(boundBetween(0, 10, 15), 10);
      equal(boundBetween(0, 10, -20), 0);
    });
  })
})

