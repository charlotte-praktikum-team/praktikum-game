type ComposeFunction<T> = (...arg: any[]) => T;

export const compose = <T>(...functions: ComposeFunction<T>[]): ComposeFunction<T> => {
  if (functions.length === 0) {
    return (arg: T) => arg;
  }

  if (functions.length === 1) {
    return functions[0];
  }

  return functions.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
};
