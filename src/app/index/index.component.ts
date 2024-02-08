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
      img: '../../assets/img/internet.png'},
    {
      name: 'Freecust server',
      link: 'https://freecustserver.yonkou.info',
      description: "",
      img: '../../assets/img/internet.png'},
    {
      name: 'Freecust Web',
      link: 'https://freecustweb.netlify.app',
      description: "",
      img: '../../assets/img/internet.png'},
    {
      name: 'Termii',
      link: 'https://termii.com/',
      description: "",
      img: '../../assets/img/internet.png'},
    {
      name: 'Stripe',
      link: 'https://stripe.com/',
      description: "",
      img: '../../assets/img/internet.png'},
    {
      name: 'Stripe API DOCS',
      link: 'https://stripe.com/docs/api',
      description: "",
      img: '../../assets/img/internet.png'},
  ]
}
