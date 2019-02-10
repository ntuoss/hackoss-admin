import { PeopleRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export function getPeople() {
  const pplRepo = new PeopleRepository(FirebaseApp);
  pplRepo.getPeople().then(people => {
    console.log(people);
  });
}

export const createPerson = setStatus => async input => {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const existingPeople = await pplRepo.getPeople();
  if (existingPeople.find(person => person.name === input.name)) {
    setStatus('This person exsited in the database');
    return input;
  }
  const status = await pplRepo.createPerson(input);
  setStatus(status || 'success');
  return input;
};
