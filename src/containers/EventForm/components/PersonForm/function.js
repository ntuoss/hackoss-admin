import { peopleRepository } from '../../utils/hackoss-repo';

/* eslint-disable */
export const createPerson = async input => {
  const existingPeople = await peopleRepository.getPeople();
  if (existingPeople.find(person => person.name === input.name)) {
    throw new Error('This person exsited in the database');
  }
  return peopleRepository.createPerson(input);
};
