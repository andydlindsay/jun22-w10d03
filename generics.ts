interface IContainer<T> {
  title: string | number;
  contents: T;
}

const numb: number = 7;

const stringContainer: IContainer<string> = {
  title: 'string container',
  contents: 'hello from container'
};

const numberContainer: IContainer<number> = {
  title: 'number container',
  contents: 42
};
