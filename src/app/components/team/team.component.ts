import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team:any = [
    {    
      name:'Dr. Grace Ngozi Isiozor',
      photo: 'Dr-Grace-Ngozi-Isiozor.jpeg',
      designation: 'Executive Director',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
    {
      name:'Anyanwu Odinaka Gideon',
      photo: 'Anyanwu-Odinaka-Gideon.jpeg',
      designation: 'Program Manager',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },    
    {
      name:'Ihuoma Juliana Chigozie',
      photo: 'Ihuoma-Juliana-Chigozie.jpeg',
      designation: 'Finance & Admin Officer',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },    
    {
      name:'Iwundu Cosmas Ugochukwu',
      photo: 'Iwundu-Cosmas-Ugochukwu.jpeg',
      designation: 'Care & Support Officer',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },    {
      name:'Egboluche Oluchukwu Francisca',
      photo: 'Egboluche-Oluchukwu-Francisca.jpeg',
      designation: 'Data Entry Officer 1',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },    {
      name:'Ndulue Chinelo Celina',
      photo: 'Ndulue-Chinelo-Celina.jpeg',
      designation: 'Data Entry Officer II',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },    {
      name:'Ikemenanwa Ifeanyichukwu Stanley',
      photo: 'Ikemenanwa-Ifeanyichukwu-Stanley.jpeg',
      designation: 'HES Officer',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },    {
      name:'Eke Lilian Olachi',
      photo: 'Eke-Lilian-Olachi.jpeg',
      designation: 'Gender Officer',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },    {
      name:'Alvan Njoku',
      photo: 'Alvan-Njoku.jpg',
      designation: 'M & E Officer',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },    
    {
      name:'Chizoba Chioma Esther',
      photo: 'Chizoba-Chioma-Esther.jpeg',
      designation: 'Education and Protection Officer',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
