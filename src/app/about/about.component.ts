import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  objectives: any = [
    'To create/increase the level of awareness on issues pertaining to orphans, vulnerable children and widows'
, 'To create enabling environment for orphans and vulnerable children including those made vulnerable by HIV/AIDS'
, 'To stimulate and strengthen community to prevent/respond to Gender Based Violence and Violence against women and girls. '
, 'To strengthen the capacity of women to meet the needs of OVCs for sustainable income generation through training '
, 'To promote rural widows, indigent women and caregivers empowerment through micro-credit facilities'
, 'To sponsor and organize programmes and award scholarships for the development of the education of orphans, youths, young widows and other vulnerable groups in the society'
, 'To establish centers for capacity building for OVCs, women and youth in order to facilitate and undertaken human development by fostering self-empowerment through training and acquisition of skills especially for orphans, widows, caregivers, indigent women and youths' 
, 'To develop at all levels, guidelines on care and support for orphans and vulnerable children, widows and indigent women. '

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
