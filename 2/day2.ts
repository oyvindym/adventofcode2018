interface IFactors {
  twos: number;
  threes: number;
}

interface ILetterCount {
  [key: string]: number;
}

const getValues = (letterCount: ILetterCount): number[] =>
  Object.keys(letterCount).map((key: string): number => letterCount[key]);

export const getChecksum = (ids: string): number => {
  const { twos, threes } = ids
    .split(' ')
    .map(
      (id: string): ILetterCount =>
        id
          .split('')
          .reduce((letterCount: ILetterCount, letter: string): ILetterCount => {
            if (letterCount[letter] === undefined) {
              letterCount[letter] = 1;
            } else {
              letterCount[letter] += 1;
            }
            return letterCount;
          }, {})
    )
    .reduce(
      (factors: IFactors, letterCount: ILetterCount): IFactors => {
        const values = getValues(letterCount);

        if (values.indexOf(2) !== -1) {
          factors.twos += 1;
        }
        if (values.indexOf(3) !== -1) {
          factors.threes += 1;
        }

        return factors;
      },
      {
        threes: 0,
        twos: 0
      }
    );

  return twos * threes;
};

export const getCommonChars = (ids: string): string => {
  let found = false;
  const result = ids
    .split(' ')
    .sort()
    .reduce((prev: string, curr: string): string => {
      if (found) {
        return prev;
      }

      let difference = 0;
      prev.split('').forEach(
        (letter: string, index: number): void => {
          if (letter !== curr[index]) {
            difference += 1;
          }
        }
      );

      if (difference === 1) {
        found = true;
        return `${prev} ${curr}`;
      }

      return curr;
    }, '');

  const commonStrings = result.split(' ');
  const stringA = commonStrings[0].split('');
  const stringB = commonStrings[1].split('');

  let common = '';
  stringA.forEach(
    (letter: string, index: number): void => {
      if (letter === stringB[index]) {
        common += letter;
      }
    }
  );

  return common;
};
