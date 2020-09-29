import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-multi-select';

  settings = {
    label: 'Pokemon',
    primary_key: 'id',
    label_key: 'name',
    isDisabled: false,
  };

  selected_settings = {
    label: 'Pokemon',
    primary_key: 'id',
    label_key: 'name',
    isDisabled: false,
  };

  disabled_settings = {
    label: 'Pokemon',
    isDisabled: true,
  };

  data = [
    {
      id: 1,
      name: 'Pikachu',
    },
    {
      id: 2,
      name: 'Snorlax',
    },
    {
      id: 3,
      name: 'Eevee',
    },
    {
      id: 4,
      name: 'Charizard',
    },
    {
      id: 5,
      name: 'Ditto',
    },
    {
      id: 6,
      name: 'Charmander',
    },
  ];

  selected_1 = [];
  selected_2 = [
    {
      id: 1,
      name: 'Pikachu',
    },
    {
      id: 2,
      name: 'Snorlax',
    },
  ];

  getDisplayData(data){
    return JSON.stringify(data)
  }
}
