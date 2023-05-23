import { IAtores } from './../model/IAtores';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  listaAtores: IAtores[] = [

    {
      nome: 'Zendaya Maree Stoermer Coleman',
      nascimento: '01/09/1996',
      idade: '26',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6TE2AlOUqcrs7CyJiWYgodmee1r.jpg',
      generos: ['Feminino',],
      pagina: '/Zendaya',
      favorito: false

      },

      {
      nome: 'Julia Fiona Roberts',
      nascimento: '28/10/1967',
      idade: '56',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/AhQMyQ10kz5g8Y3Fp54GPhgDxQS.jpg',
      generos: ['Feminino',],
      pagina: '/Julia Roberts',
      favorito: false

      },

      {
      nome: 'Thomas Cruise Mapother IV',
      nascimento: '03/07/1962',
      idade: '60',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yUsSJ0vO8AM9HnDQWuGKMSzCKOP.jpg',
      generos: ['Masculino',],
      pagina: '/Tom Cruise',
      favorito: false

      },

      {
      nome: 'Thomas Stanley Holland',
      nascimento: '01/06/1996',
      idade: '26',
      classificacao: 10,
      cartaz: 'https://s2-monet.glbimg.com/b3WCrHB4D-Bn5_4LP-CqjBZ5rOc=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e7c91519bbbb4fadb4e509085746275d/internal_photos/bs/2023/n/R/kUZ90BQ1inMcq762VB5g/20230215-homem-aranha-tom-holland.jpeg',
      generos: ['Masculino',],
      pagina: '/Tom Holland',
      favorito: false
     },

      {
      nome: 'Dylan Rhodes O Brien',
      nascimento: '26/08/1991',
      idade: '31',
      classificacao: 10,
      cartaz: 'https://br.paipee.com/wp-content/uploads/2021/08/The-Maze-Runner-Actor.jpg',
      generos: ['Masculino',],
      pagina: '/Netflix',
      favorito: false
         }

    ];

}
