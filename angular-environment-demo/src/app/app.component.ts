import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-environment-demo';

  ngOnInit(){
    this.title = environment.pageTitle;
  }

  getInfo(){
    const myPromise = new Promise((resolve, reject) => {
      fetch(environment.apiUrl)
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => reject(error))
    });

    myPromise
    .then((result: any) => {
      const element = document.getElementById('txtResult');
      if (element) {
        element.innerHTML = JSON.stringify(result.slice(0, 5));
      }
      console.log(result.slice(0, 5));
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('promise done'));
  }
}
