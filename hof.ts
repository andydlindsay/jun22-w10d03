const hof = (cb: (num: number) => string) => {
  cb(7);
};

hof((a: number) => 'hello');
