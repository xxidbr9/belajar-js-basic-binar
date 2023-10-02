// sumAll(1,2,3,5,6,7)
export const sumAll = (...args) => {
  if (args.length === 1) return args[0];
  return args.reduce((f, n) => f + n, 0);
};
