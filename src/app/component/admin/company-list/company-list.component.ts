import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies:any[]=[];
  constructor(private companyservice: CompanyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllEnableCompany();
  }

  getAllEnableCompany(){
    this.companyservice.getAllByEnable().subscribe(data => {
        // @ts-ignore
        this.companies = data;
      }, error => {
        console.log(error);
      }
    );
  }

  editInfo(id:number) {
    this.companyservice.updateenable(id).subscribe(() => {
      this.router.navigateByUrl('/admin/company-info/'+id).then(() => {
        location.reload();
      });
    })
  }

  changeRecommend(id:number){
    this.companyservice.updaterecommend(id).subscribe(() => {
      this.router.navigateByUrl('/admin/company-list').then(() => {
        location.reload();
      });
    })
  }



}
