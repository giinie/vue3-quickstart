let base = 100;
const add = (num) => base + num;
const multiply = (num) => base * num;

const getBase = () => base;

export { add, multiply };
export default getBase;