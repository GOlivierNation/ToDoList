const getDataFromLocalStorage = () => {
  const todoList = localStorage.getItem('todoList');
  return JSON.parse(todoList);
};

export default getDataFromLocalStorage;