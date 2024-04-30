export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};
export const incNumberByValue = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
