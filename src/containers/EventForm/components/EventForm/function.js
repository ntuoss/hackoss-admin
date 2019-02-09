import { PeopleRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export function getPeople() {
  const pplRepo = new PeopleRepository(FirebaseApp);
  pplRepo.getPeople().then(people => {
    console.log(people);
  });
}

export function createPerson(people) {
  const pplRepo = new PeopleRepository(FirebaseApp);
  pplRepo.createPerson(people).then(getPeople);
}
