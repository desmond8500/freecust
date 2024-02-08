import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  websites = [
    {
      name: 'Freecust Mobile',
      link: 'https://freecust.netlify.app/',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'Freecust server',
      link: 'https://freecustserver.yonkou.info',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'Freecust Web',
      link: 'https://freecustweb.netlify.app',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'Termii',
      link: 'https://termii.com/',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'Stripe',
      link: 'https://stripe.com/',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'Stripe API DOCS',
      link: 'https://stripe.com/docs/api',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'FIGMA',
      link: 'https://www.figma.com/file/XeSdFGQWhxISqucvw4bKuQ/FREECUST?type=design&node-id=0-1&mode=design&t=oRo9qBORAgnsRVfv-0',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'Ionic Docs',
      link: 'https://ionicframework.com/docs/',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'Angular Docs',
      link: 'https://angular.dev/',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'Fiche de parcours',
      link: 'https://docs.google.com/spreadsheets/d/11VvF4AQlNKXIN46QThhTxHKa0kTgj13h/edit#gid=1577116275',
      description: "",
      img: '../../assets/img/internet.png'
    },
    {
      name: 'Gitmab',
      link: 'https://about.gitlab.com/',
      description: "",
      img: '../../assets/img/internet.png'
    },
  ]
}
