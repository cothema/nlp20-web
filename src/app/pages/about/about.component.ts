import { Component, OnInit } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faDollarSign = faDollarSign;

  constructor() {
  }

  ngOnInit(): void {
  }

}
