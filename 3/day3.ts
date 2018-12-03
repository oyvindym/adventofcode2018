interface ICoordinate {
  left: number;
  top: number;
  width: number;
  height: number;
}

const SIZE = 1002;

const createEmptyMatrix = (): string[][] => {
  const emptyMatrix = [];
  for (let row = 0; row++, row < SIZE; ) {
    const emptyRow = [];
    for (let column = 0; column++, column < SIZE; ) {
      emptyRow.push('');
    }
    emptyMatrix.push(emptyRow);
  }
  return emptyMatrix;
};

const drawClaim = (
  matrix: string[][],
  claim: ICoordinate,
  claimId: string
): string[][] => {
  for (
    let yCoor = claim.top + 1;
    yCoor++, yCoor < claim.top + claim.height + 2;

  ) {
    for (
      let xCoor = claim.left + 1;
      xCoor++, xCoor < claim.left + claim.width + 2;

    ) {
      if (matrix[xCoor][yCoor] !== '') {
        matrix[xCoor][yCoor] = 'X';
      } else {
        matrix[xCoor][yCoor] = claimId;
      }
    }
  }
  return matrix;
};

const createMatrix = (claims: ICoordinate[]): string[][] => {
  const matrix = createEmptyMatrix();
  Object.keys(claims).forEach(
    (key: string): void => {
      drawClaim(matrix, claims[key], key);
    }
  );
  return matrix;
};

const countOccurences = (matrix: string[][], value: string): number =>
  matrix.reduce(
    (acc: number, row: string[]) =>
      (acc += row.reduce(
        (rowCount: number, cell: string) =>
          (rowCount += cell === value ? 1 : 0),
        0
      )),
    0
  );

export const getAmountOfOverlappingInches = (claims: ICoordinate[]): number => {
  return countOccurences(createMatrix(claims), 'X');
};

const claimSize = (claim: ICoordinate): number => {
  return claim.height * claim.width;
};

export const getNonOverlappingClaim = (claims: ICoordinate[]): string => {
  const matrix = createMatrix(claims);

  return Object.keys(claims).filter((key: string) => {
    return claimSize(claims[key]) === countOccurences(matrix, key);
  })[0];
};
