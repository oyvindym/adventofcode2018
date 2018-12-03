const exampleData = require('./example-data.json');
const inputData = require('./input-data.json');

import { getAmountOfOverlappingInches, getNonOverlappingClaim } from './day3';

describe('day', () => {
  describe('part 1', () => {
    describe('example data', () => {
      it('should return amount of overlapping inches', () => {
        expect(getAmountOfOverlappingInches(exampleData)).toBe(4);
      });
    });
    describe('actual data', () => {
      it('should return amount of overlapping inches', () => {
        expect(getAmountOfOverlappingInches(inputData)).toBe(108961);
      });
    });
  });

  describe('part 2', () => {
    describe('example data', () => {
      it('should find correct claim id', () => {
        expect(getNonOverlappingClaim(exampleData)).toBe('#3');
      });
    });

    describe('actual data', () => {
      it('should find correct claim id', () => {
        expect(getNonOverlappingClaim(inputData)).toBe('#681');
      });
    });
  });
});
