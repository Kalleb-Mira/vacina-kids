import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    RouterLink
  ]
})
export class DashboardPage {
  totalChildren = 2;
  pendingVaccines = 1;
  overdueVaccines = 1;
  activeCampaigns = 1;
}
