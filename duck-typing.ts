interface IUser {
  username: string;
  password: string;
  friends?: IUser[]
}

const login = (user: IUser): boolean => {
  if (user.username === 'john stamos') {
    return true;
  } 
  return false;
};

const myUser = {
  username: 'charlie',
  password: '1234',
  anotherKey: false
};

login(myUser);
