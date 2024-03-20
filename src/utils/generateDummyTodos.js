import { faker } from '@faker-js/faker';

export const generateDummyTodos = (numberOfTodos) => {
  let dummyTodos = [];
  for (let i = 0; i < numberOfTodos; i++) {
    dummyTodos.push({
      id: Date.now() + Math.random(),
      task: faker.hacker.phrase(),
      completed: faker.datatype.boolean(),
      clicks: 0,
    });
  }
  return dummyTodos;
};