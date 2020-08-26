const sayHello = (name: string, age?: number): string => {
  return `hello ${name}!`;
  // return undefined;
};

const result: string = sayHello('Alice');

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num), 2000);
  });
};

interface IDog {
  name: string;
  goForWalk: (a: number, b: string) => boolean;
}

const zucchini: IDog = {
  name: 'Zucchini',
  goForWalk: (lengthOfWalk: number, street: string) => {
    return true;
  }
};
