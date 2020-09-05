import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-multi-select';

  settings = {
    label: "My label",
    primary_key: 'id',
    label_key: 'name',
    title: "mmmm",
    isDisabled: false
  }

  data = [
    {
      id: 1,
      name : "vvs1",
    },
    {
      id: 2,
      name : "vvs2",
    }
  ]
  selected = [];
}
