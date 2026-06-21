import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent
  ]
})
export class CampaignsPage {

  campaigns = [
    {
      title: 'Campanha Influenza 2026',
      audience: 'Crianças de 6 meses a 5 anos',
      period: '01/04/2026 até 31/07/2026'
    }
  ];

}
