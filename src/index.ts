export function arrayMoveSliceMutate(
  array: any[],
  to: number,
  from: number,
  count: number
) {
  const length = !count || count < 1 ? 1 : count;
  const toIndex = to < 0 ? array.length + to : to;

  if (toIndex >= 0 && toIndex < array.length) {
    const slice = array.splice(from, length)[0];
    array.splice(toIndex, 0, ...slice);
  }
}

export function arrayMoveSlice(
  array: any[],
  to: number,
  from: number,
  count: number
) {
  const arr = [...array];
  arrayMoveSliceMutate(arr, to, from, count);
  return arr;
}
