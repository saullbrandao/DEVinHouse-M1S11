import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  arrayFotos: any = [
    {
      url: 'https://cloudinary.fifa.com/m/6e6c51d56752bd7a/original/The-FIFA-World-Cup-Trophy.jpg',
      description: 'World Cup Trophy',
    },
    {
      url: 'https://seekflag.com/app/uploads/2021/11/Flag-of-Croatia-01-1-300x200.png',
      description: "Croatia's Flag",
    },
    {
      url: 'https://seekflag.com/app/uploads/2021/11/flag-of-Argentina-01-300x200.png',
      description: "Argentina's Flag",
    },
    {
      url: 'https://seekflag.com/app/uploads/2021/11/Flag-of-France-01-1-300x200.png',
      description: "France's Flag",
    },
    {
      url: 'https://seekflag.com/app/uploads/2021/12/Morocco-01-1-300x200.png',
      description: "Morocco's Flag",
    },
  ];
}
