import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  phoneNumber: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ phone: string }>('assets/contact/contact.json')
      .subscribe((data: any) => {
        this.phoneNumber = data.phone;
      });
  }

}
