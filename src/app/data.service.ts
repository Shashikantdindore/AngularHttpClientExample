import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Define your API endpoint
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API

  constructor(private http: HttpClient) { }

  // Method to fetch data from the API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
