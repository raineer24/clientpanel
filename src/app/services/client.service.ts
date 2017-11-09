import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
//Rather than .list() returning a FirebaseListObservable, it now returns an AngularFireList<T>.
//FirebaseObjectObservable to AngularFireObject.
@Injectable()
export class ClientService {

  constructor() { }

}
