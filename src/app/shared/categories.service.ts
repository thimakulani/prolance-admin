import { Injectable } from '@angular/core';
import {Categories} from "./categories.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  formData?: Categories;
  constructor( private afs:AngularFirestore) { }

  getCategories(){
    return this.afs.collection("CATEGORIES").snapshotChanges();
  }
}
