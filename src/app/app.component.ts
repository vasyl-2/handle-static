import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'handle-static';

  path = `${environment.imageUrl}/my.jpg`;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    // this.http.get<string>(`${environment.apiUrl}`)
    //   .subscribe((resp) => console.log('RESP____1', resp));

    this.http.get<{ prop: string }>(`${environment.apiUrl}/get-data`)
      .subscribe((resp) => console.log('RESP____2', resp));
  }
}
