import { Component } from '@angular/core';
import { users } from '../../interfaces/users';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  users: users[] = [
    {
      id: 1,
      name: 'Lorem',
      surname: 'Ipsum',
      email: 'loremipsum@gmail.com'
    },
    {
      id: 2,
      name: 'John',
      surname: 'Doe',
      email: 'jhondoe@gmail.com'
    },
    {
      id: 3,
      name: 'Jane',
      surname: 'Doe',
      email: 'janedoe@gmail.com'
    },
    {
      id: 4,
      name: 'John',
      surname: 'Smith',
      email: 'johnsmith@gmail.com'
    },
    {
      id: 5,
      name: 'Jane',
      surname: 'Smith',
      email: 'janesmith@gmail.com'
    },
    {
      id: 6,
      name: 'David',
      surname: 'Johnson',
      email: 'davidjohnson@gmail.com'
    },
    {
      id: 7,
      name: 'Emily',
      surname: 'Brown',
      email: 'emilybrown@gmail.com'
    },
    {
      id: 8,
      name: 'Michael',
      surname: 'Wilson',
      email: 'michaelwilson@gmail.com'
    },
    {
      id: 9,
      name: 'Sarah',
      surname: 'Taylor',
      email: 'sarahtaylor@gmail.com'
    },
    {
      id: 10,
      name: 'James',
      surname: 'Martinez',
      email: 'jamesmartinez@gmail.com'
    },
    {
      id: 11,
      name: 'Olivia',
      surname: 'Lopez',
      email: 'olivialopez@gmail.com'
    },
    {
      id: 12,
      name: 'Daniel',
      surname: 'Garcia',
      email: 'danielgarcia@gmail.com'
    },
    {
      id: 13,
      name: 'Sophia',
      surname: 'Hernandez',
      email: 'sophiahernandez@gmail.com'
    },
    {
      id: 14,
      name: 'Alexander',
      surname: 'Gonzalez',
      email: 'alexandergonzalez@gmail.com'
    },
    {
      id: 15,
      name: 'Mia',
      surname: 'Rodriguez',
      email: 'miarodriguez@gmail.com'
    },
    {
      id: 16,
      name: 'Ethan',
      surname: 'Martinez',
      email: 'ethanmartinez@gmail.com'
    },
    {
      id: 17,
      name: 'Isabella',
      surname: 'Gomez',
      email: 'isabellagomez@gmail.com'
    },
    {
      id: 18,
      name: 'Aiden',
      surname: 'Perez',
      email: 'aidenperez@gmail.com'
    },
    {
      id: 19,
      name: 'Madison',
      surname: 'Sanchez',
      email: 'madisonsanchez@gmail.com'
    }
  ];
}
