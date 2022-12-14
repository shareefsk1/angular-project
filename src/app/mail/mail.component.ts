import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {

public mails : any = [];

constructor(private _mailService:MailService){
    this._mailService.getMail().subscribe(
      (maildata:any) => {
        this.mails = maildata
      },
      (err:any) => {
        alert('server not found')
      }
    )
}

}
