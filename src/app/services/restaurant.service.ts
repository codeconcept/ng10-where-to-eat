import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private afs: AngularFirestore) {}

  createRestaurant(name) {
    return this.afs
      .collection('ng10-wte-restaurants')
      .add({ name, createdAt: Date.now(), votes: 0 });
  }
}
