// for example
export const hasElementWithId = <T extends { id: string }>(
  arr: T[],
  id: string
): boolean => arr.some((element) => element.id === id);
