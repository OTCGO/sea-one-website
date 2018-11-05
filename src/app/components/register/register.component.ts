import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { wallet } from '@cityofzion/neon-js';
import * as  FileSaver from 'file-saver';
import { fail } from 'assert';


interface ValidateResult {
  status: string;
  message?: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  @Output() closeRegisterModal = new EventEmitter();

  registerForm: FormGroup;
  isSuccess = false;
  encrypted;
  address;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, this.usernameValidator]],
      wif: ['', [this.wifValidator]],
      pwd: ['', [Validators.required, this.pwdValidator]],
      repwd: ['',  [], [this.repwdValidator.bind(this)]],
      isRead: [false, [this.isReadValidator]],
    });
  }

  private usernameValidator = (control: FormControl): ValidateResult => {

    console.log('usernameValidator', control.value);
    if (!control.value) {
      return { status: 'error', message: '请输入账号名' };
    }
    return { status: 'success' };
  }

  private isReadValidator = (control: FormControl): ValidateResult => {

    console.log('isReadValidator', control.value);
    if (!control.value) {
      return { status: 'error', message: '请同意服务条款' };
    }
    return { status: 'success' };
  }


  private wifValidator = (control: FormControl): ValidateResult => {

    if (control.value && !wallet.isWIF(control.value)) {
      return { status: 'error', message: '填写正确的wif' };
    }
    return { status: 'success' };
  }
  private pwdValidator = (control: FormControl): ValidateResult => {

    const pwd = control.value;
    if (pwd.length < 8 || pwd.length > 16) {
      return { status: 'error', message: '长度8-16位' };
    }
    return { status: 'success' };
  }

  async repwdValidator (control: FormControl) {
    console.log('repwdValidator');
    const pwd = control.value;
    if (pwd !== this.registerForm.get('pwd').value) {
      return { status: 'error', message: '密码不一致，请重新输入' };
    }
    return { status: 'success' };
  }

  closeMySelf() {
    this.closeRegisterModal.emit();
  }

  async btnRegister() {

    console.log('registerForm', this.registerForm);

    for (const item in this.registerForm.controls) {
      // console.log('item', item);
      // console.log('item', item['errors']['status']);
      if (this.registerForm.controls[item].hasOwnProperty('errors')) {
       console.log(item, this.registerForm.controls[item]['errors']['status']);
       if (this.registerForm.controls[item]['errors']['status'] === 'error' ) {
          return ;
       }
      }
    }

    const wif = this.registerForm.get('wif').value;
    const pwd = this.registerForm.get('pwd').value;




    console.log('wif', pwd);
    console.log('pwd', pwd);
    if (wif) {
      const tempAcct = new wallet.Account(wif);
      this.address = tempAcct.address;
      this.encrypted = wallet.encrypt(wif, pwd);
    } else {
      const pk = wallet.generatePrivateKey();
      const tempAcct = new wallet.Account(pk);
      this.address = tempAcct.address;
      this.encrypted = wallet.encrypt(tempAcct.WIF, pwd);
    }

    console.log('btnRegister',  this.encrypted);
    this.isSuccess = true;


    // const pk = wallet.generatePrivateKey();
    // const wif = wallet.getWIFFromPrivateKey(pk);
    // const encrypted = wallet.encrypt(wif, '123');

  }


  statusCtrl(item) {
    if (!this.registerForm.controls[item]) { return; }
    const control: AbstractControl = this.registerForm.controls[item];
    return control.dirty && control.hasError('status') ? control.errors.status : '';
  }
  messageCtrl(item) {
    if (!this.registerForm.controls[item]) { return; }
    const control: AbstractControl = this.registerForm.controls[item];
    return control.dirty && control.hasError('message') ? control.errors.message : '';
  }


  btnDownload() {
    const ob = {
      address: this.address,
      label: this.registerForm.get('username').value,
      isDefault: true,
      lock: false,
      key: this.encrypted,
      contract: {
        script: '',
        parameters: [
          {
            name: 'signature',
            type: 'Signature'
          }
        ],
        deployed: false
      },
      extra: {
      }
    };

    // const pk = wallet.generatePrivateKey();
    // const acct = new wallet.Account(ob);
    // const result = acct.export();
    // console.log('result', result);

    const blob = new Blob([JSON.stringify({
      'name': null,
      'version': '1.0',
      'scrypt': {
        'n': 16384,
        'r': 8,
        'p': 8
      },
      'accounts': [ob],
      'extra': null
    })], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, `${this.address}.json`);
    // wallet.e
  }
}


