// app.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Make sure this is set to true
  imports: [CommonModule], // Import any required Angular modules here
  template: `
    <h1>Fetched Data from API</h1>
    <ul *ngIf="data.length">
      <li *ngFor="let item of data">{{ item.title }}</li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
