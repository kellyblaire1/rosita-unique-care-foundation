import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-more',
  templateUrl: './about-more.component.html',
  styleUrls: ['./about-more.component.scss']
})
export class AboutMoreComponent implements OnInit {
  pagename: any = this.activatedRoute.snapshot.paramMap.get('pagename');;

  title:any = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    // this.pagename = activatedRoute.snapshot.paramMap.get('pagename');    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void {
    this.title = this.pagename.replace('-',' ');
  }

}
