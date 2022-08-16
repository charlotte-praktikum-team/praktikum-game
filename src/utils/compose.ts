type ComposeFunction = (...arg: any[]) => void;

export const compose = (...functions: ComposeFunction[]) => {
  if (functions.length === 0) {
    return (arg: unknown) => arg;
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
