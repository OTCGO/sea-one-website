import { TestBed, async, inject } from '@angular/core/testing';
import { WalletService, LoggerService, ConsoleLoggerService } from '../index';


describe('#WalletService', () => {
     let service: WalletService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WalletService, { provide: LoggerService, useClass: ConsoleLoggerService }]
          });

        service = TestBed.get(WalletService);



    });


    it('should create', (done) => {
        // service.generateNewWalletAccount('111', '111');
        done();
    });

    // it('should downloadWallet', (done) => {
    //     service.generateNewWalletAccount('111', '111');
    //     service.downloadWallet(`${new Date().valueOf()}`);
    //     done();
    // });
});
