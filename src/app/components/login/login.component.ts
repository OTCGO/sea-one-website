import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { getWif } from '../../shared/utils';
import { wallet } from '@cityofzion/neon-js';
import { Store } from '@ngrx/store';
import { WalletActions } from '../../actions';
import { Wallet } from '../../models';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';


interface ValidateResult {
  status: string;
  message?: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nep2Form: FormGroup;
  flieForm: FormGroup;
  key: String;
  loginType: String = 'file';
  errorMsg: String;

  @Output() loginSuccess = new EventEmitter<boolean>();
  @Output() closeLogin = new EventEmitter();
  constructor(private store$: Store<any>, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    console.error(this.loginType);
    // this.nep2Login();

    this.nep2Form = this.formBuilder.group({
      nep2: ['', [this.nep2Validator]],
      pwd: ['', [this.pwdValidator]]
    });

    this.flieForm = this.formBuilder.group({
      file: ['', []],
      pwd: ['', [this.pwdValidator]]
    });

  }

  onFileChange(evt) {
    const self = this;
    const files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    const output = [];
    for (let i = 0, f; f = files[i]; i++) {
      const reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function (theFile) {
        return function (e) {
          // console.log('e readAsText = ', e);
          // console.log('e readAsText target = ', e.target);
          try {
            const json = JSON.parse(e.target.result);

            self.key = json.accounts[0].key;
            console.log('self.key', self.key);
            // alert('json global var has been set to parsed json of this file here it is unevaled = \n' + JSON.stringify(json));
          } catch (ex) {
            // alert('ex when trying to parse json = ' + ex);
          }
        };
      })(f);
      reader.readAsText(f);
    }
  }
  // fileLogin() {
  //   this.loginSuccess.emit();

  // }

  private pwdValidator = (control: FormControl): ValidateResult => {

    const pwd = control.value;
    if (pwd.length < 8 || pwd.length > 16) {
      return { status: 'error', message: '长度8-16位' };
    }
    return { status: 'success' };
  }


  private nep2Validator = (control: FormControl): ValidateResult => {

    if (!wallet.isNEP2(control.value)) {
      return { status: 'error', message: '填写正确的nep2' };
    }
    return { status: 'success' };
  }

  async nep2Login() {

    try {

      const encrypted = this.nep2Form.get('nep2').value;
      const pwd = this.nep2Form.get('pwd').value;
      await this.login(encrypted, pwd);
      this.loginSuccess.emit();

    } catch (error) {
      console.log('error', error);
      this.errorMsg = '登陆失败，请重新输入';
      // return this.message['error']('登陆失败，请重新输入');
    }
  }
  closeLoginModal() {
    this.closeLogin.emit();
  }

  async login(encrypted, pwd) {

    const result: any = await getWif(encrypted, pwd);
    const tempAcct = new wallet.Account(result.wif);
    const { address } = tempAcct;
    this.store$.dispatch(new WalletActions.LoginSuccess(new Wallet({
      isLogin: true,
      privateKey: tempAcct.privateKey,
      wif: result.wif,
      address,
      publicKey: tempAcct.publicKey,
      publicKeyCompressed: wallet.getPublicKeyFromPrivateKey(result.prikey, true),
      scriptHash: tempAcct.scriptHash,
      encrypted: encrypted,
    })));


  }
  async fileLogin() {
    try {
      const encrypted = this.key;
      const pwd = this.flieForm.get('pwd').value;

      console.log('encrypted', encrypted);
      console.log('pwd', pwd);
      await this.login(encrypted, pwd);
      this.loginSuccess.emit();

    } catch (error) {
      console.log('error', error);
      this.errorMsg = '登陆失败，请重新输入';
      // return this.message['error']('登陆失败，请重新输入');
    }
  }


  statusCtrl(item) {
    if (!this.nep2Form.controls[item]) { return; }
    const control: AbstractControl = this.nep2Form.controls[item];
    return control.dirty && control.hasError('status') ? control.errors.status : '';
  }
  messageCtrl(item) {
    if (!this.nep2Form.controls[item]) { return; }
    const control: AbstractControl = this.nep2Form.controls[item];
    return control.dirty && control.hasError('message') ? control.errors.message : '';
  }
}
