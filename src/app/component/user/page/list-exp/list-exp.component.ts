import { Component, OnInit } from '@angular/core';
import {ExpService} from "../../../../service/exp.service";
import {Exp} from "../../../../model/exp";
import {TokenService} from "../../../../service/token.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-list-exp',
  templateUrl: './list-exp.component.html',
  styleUrls: ['./list-exp.component.scss']
})
export class ListExpComponent implements OnInit {
  user_id: string | undefined;
  exps: Exp[] = [];
  exp: Exp | undefined;
  id: string | undefined;
  constructor(private expService: ExpService, private token: TokenService, private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.user_id = this.token.getToken().id;
    console.log(this.user_id)
    // @ts-ignore
    this.expService.getAllUser(this.user_id).subscribe(expList =>{
      this.exps = expList;
      console.log(expList);
    }, error => {
      console.log(error);
    })
  }

}
