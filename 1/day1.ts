export const applyChanges = (changes: string, startFrequency = 0): number =>
  changes
    .split(' ')
    .reduce(
      (frequency: number, n: string): number => (frequency += parseInt(n)),
      startFrequency
    );

export const findRepeatingFrequency = (
  changes: string,
  frequency = 0,
  visitedFrequencies = [0],
  found = false
): number => {
  if (found) {
    return frequency;
  }

  changes
    .split(' ')
    .map((change: string): number => parseInt(change))
    .forEach(
      (change: number): void => {
        if (!found) {
          frequency += change;
        }

        if (visitedFrequencies.indexOf(frequency) !== -1) {
          found = true;
        } else {
          visitedFrequencies.push(frequency);
        }
      }
    );

  return findRepeatingFrequency(changes, frequency, visitedFrequencies, found);
};
