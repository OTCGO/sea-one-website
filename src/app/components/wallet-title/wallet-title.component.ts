import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wallet-title',
  templateUrl: './wallet-title.component.html',
  styleUrls: ['./wallet-title.component.scss']
})
export class WalletTitleComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() underline: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
