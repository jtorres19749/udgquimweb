import { Component, OnInit, inject } from '@angular/core';


//owns
import { BdServiceService } from '../shared';
import { URLRPT } from '../shared/constants'
// import { IUser } from '../shared/interfaces';



@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  private bdservice = inject(BdServiceService);
  rptUrl: string = URLRPT;
  reports: Array<any> = [];
  
  constructor() { }

  ngOnInit() {
    this.loadData();
  }


  loadData(){
    this.bdservice.getReports()
    .then(response => {
      console.log(response)
      if (response.hasOwnProperty("data") && response.results>0) {
          this.reports = response.data.rpts;
      } else  {
        //todo: send message, there is no data found. 
      }
    })
    .catch(err => {
      console.log(err)
    })
  }


  updaterpt(index: number){
    console.log(`index = ${index}`);
    console.log(this.reports[index]);
    const url = this.reports[index].url;
    this.bdservice.postUpdateReport(this.reports[index]._id, (url || '/updaterpt'))
    .then(response => {
      console.log(response);
      if (response.hasOwnProperty("data")) {
        console.log(response.data)
        this.reports[index]= response.data  ;
      } else  {
        console.log('error');
        //todo: send message, there is no data found. 
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  rptaction(index:number, action:number){
    const url = this.reports[index].actions[action].url;
    window.open(this.rptUrl + url, "_blank");

    /*      
    this.bdservice.postUpdateReport(this.reports[index]._id, (url || '/updaterpt'))
    .then(response => {
      console.log(response);
      if (response.hasOwnProperty("data")) {
        console.log(response.data)
        this.reports[index]= response.data  ;
      } else  {
        console.log('error');
        //todo: send message, there is no data found. 
      }
    })
    .catch(err => {
      console.log(err)
    })
    */

  }

}
