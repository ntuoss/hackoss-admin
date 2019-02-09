import { ArtworkRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export function getArtworks() {
  const awRepo = new ArtworkRepository(FirebaseApp);
  awRepo.getArtworks().then(artwork => {
    console.log(artwork);
  });
}

export function createPerson(artwork) {
  const awRepo = new ArtworkRepository(FirebaseApp);
  awRepo.createArtwork(artwork).then(getArtworks);
}
