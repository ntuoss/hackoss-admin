import { PeopleRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export default setStatus => async input => {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const existingPeople = await pplRepo.getPeople();
  if (existingPeople.find(person => person.name === input.name)) {
    setStatus('This person exsited in the database');
    return null;
  }
  return pplRepo.createPerson(input);
};
