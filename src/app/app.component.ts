import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  info = `Multiselect with search is a much needed functionality , but unfortunately we don't have a proper best library available.
          The available libraries are ,`;
  info_end = `These libraries are basic with few bugs and not a materialized one.`
  avail_lib = [
    {
      name: 'Ng multi select',
      link: 'https://www.npmjs.com/package/ng-multiselect-dropdown',
    },
    {
      name: 'Angular2-multiselect-dropdown',
      link: 'https://www.npmjs.com/package/angular2-multiselect-dropdown',
    },
    {
      name: 'Angular4 Multiselect Dropdown',
      link: 'https://www.npmjs.com/package/angular4-multiselect-dropdown',
    },
  ];

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

  getDisplayData(data) {
    return JSON.stringify(data);
  }
}
