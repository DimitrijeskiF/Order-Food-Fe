import {Injectable} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Item} from "../interfaces/ingredients.model";
import {items} from "../mocks/item.mock";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  BASE_URI = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {
  }

  getSingleItem(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.BASE_URI}/${id}`)
  }

  getAllItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.BASE_URI);
  }
}
