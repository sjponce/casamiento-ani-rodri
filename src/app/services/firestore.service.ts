import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireStoreService {
  constructor(private firestore: Firestore) {}

  async putMusica(body: any) {
    const col = collection(this.firestore, 'musica');
    return addDoc(col, body);
  }

  putAsistencia(body: any) {
    const col = collection(this.firestore, 'asistencia');
    return addDoc(col, body);
  }
}
