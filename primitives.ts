let num: number | string = 7;
let myStr: string = 'hello';
let myBool: boolean = false;

num = 'goodbye';
// num = false;

const nums: (number | string)[] = [1, 2, 3];
nums.push(4);
nums.push('5');
// nums.push(true);

interface IAuthor {
  id?: number;
  name: string;
  numOfBooks: number;
  isRetired?: boolean;
}

const authors: IAuthor[] = [];

const myAuth: IAuthor = {
  name: 'Agatha Christie',
  numOfBooks: 7,
};

authors.push(myAuth);
