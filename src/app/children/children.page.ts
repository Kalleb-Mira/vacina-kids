import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    RouterLink
  ]
})
export class ChildrenPage {

  children = [
    {
      id: 1,
      name: 'Lucas',
      age: '3 anos',
      status: 'Em dia'
    },
    {
      id: 2,
      name: 'Sofia',
      age: '8 meses',
      status: 'Pendente'
    }
  ];

}
