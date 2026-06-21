import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonProgressBar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.page.html',
  styleUrls: ['./child-details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonProgressBar
  ]
})
export class ChildDetailsPage implements OnInit {

  private route = inject(ActivatedRoute);

  child: any;

  children = {
    '1': {
      name: 'Lucas',
      age: '3 anos',
      progress: 1,
      status: 'upToDate',
      vaccines: [
        { name: 'BCG', status: 'applied' },
        { name: 'Hepatite B', status: 'applied' },
        { name: 'Pentavalente', status: 'applied' }
      ]
    },
    '2': {
      name: 'Sofia',
      age: '8 meses',
      progress: 0.7,
      status: 'attention',
      vaccines: [
        { name: 'BCG', status: 'applied' },
        { name: 'Hepatite B', status: 'applied' },
        { name: 'Pentavalente', status: 'overdue' }
      ]
    }
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '1';
    this.child = this.children[id as keyof typeof this.children];
  }
}
