import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/company/company';
import {PostService} from '../../../service/post.service';
import {CompanyService} from '../../../service/company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top1-company',
  templateUrl: './top1-company.component.html',
  styleUrls: ['./top1-company.component.scss']
})
export class Top1CompanyComponent implements OnInit {
  company: Company = {};

  constructor(private postService: PostService,
              private companyService: CompanyService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getTop1Company();
  }

  getTop1Company() {
    this.postService.getTop1Companies().subscribe(data => {
      this.companyService.findById(data).subscribe(company => {
        this.company = company;
        console.log(company);
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  }

  viewDetail(id: any) {
    this.router.navigate(['companies/view', id]);
  }

}
