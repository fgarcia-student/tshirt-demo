export const toDictionary = (
  keySelectorFn?: (i) => any,
  valueSelectorFn?: (i) => any,
) => (dictionary, item) => {
  dictionary[keySelectorFn?.(item) ?? item.id] = valueSelectorFn?.(item) ?? item;
  return dictionary;
};