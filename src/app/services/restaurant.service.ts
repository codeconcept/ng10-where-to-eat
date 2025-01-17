import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  collectionName = 'ng10-wte-restaurants';

  constructor(private afs: AngularFirestore) {}

  createRestaurant(name) {
    return this.afs
      .collection(this.collectionName)
      .add({ name, createdAt: Date.now(), votes: 0 });
  }

  readRestaurants() {
    return this.afs.collection<Restaurant>(this.collectionName, (ref) =>
      ref.orderBy('name', 'asc')
    );
  }

  voteForRestaurant(restaurant) {
    return this.afs
      .doc(`${this.collectionName}/${restaurant.id}`)
      .update({ votes: restaurant.votes + 1 });
  }

  deleteRestaurant(restaurant: Restaurant) {
    return this.afs.doc(`${this.collectionName}/${restaurant.id}`).delete();
  }
}
