import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wallet-nav',
  templateUrl: './wallet-nav.component.html',
  styleUrls: ['./wallet-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WalletNavComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  goBack() {
    // this.route.navigate(['/wallet/bonus/total'])
    history.back();
  }
}
