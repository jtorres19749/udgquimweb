import { Component, OnInit, inject } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';

//own 
import { BdServiceService } from '../shared'
import { IMongoQuery, IStudentSearchResult } from '../shared/interfaces'

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage {
  searchvalue: string = ""
  pageSize: number = 50
  page: number = 1
  items: Array<IStudentSearchResult> = [];
  q: IMongoQuery = {
    find: {},
    projection: {},
    skip: 0 ,
    limit: this.pageSize,
    sort: {}
  };  //query
  noMore: Boolean =  true;
  isWaiting: Boolean = false;

  private bdservice = inject(BdServiceService)

  constructor(public menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }
    
  onIonInfinite(ev: any) {
    if (!this.noMore) {
      this.page++;
      this.q.skip = (this.page-1) * this.pageSize;
      this.loadData(this.q);
      setTimeout(() => {
        (ev as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    } else {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }
  }

  handleInput(txt:string | null | undefined) {
    if (txt) {
      this.searchvalue= txt;
      console.log(this.lookup());
    }
  }

  lookup() {
    const txt: string = this.searchvalue;
    let arr: Array<string>= txt.toLowerCase().split(",");
    let arr2: Array<string>= txt.toUpperCase().split(",");

    const xCode: object =  {codigo: {$in: arr} };  
    const xName: object = { nombre: { "$regex" :  `.*${txt}.*`, "$options" : "i"} };  //
    const xYear: object = {admision: {$in: arr }};
    const xYear2: object = {admision: {$in: arr2 }};
    console.log('xName');
    console.log(xYear);
    console.log(xYear2);
    
    const find =  { $or : [xCode, xName, xYear, xYear2]  };
    const projection = {_id: 1,  codigo: 1, nombre: 1, admision: 1,  status: 1,  nivel: 1,  situacion: 1,  ciclos: 1,  ultimoCiclo: 1, creditos: 1, promedio: 1, creditosFaltantes:1 };
    const sort = {admision:1, nombre: 1};  

    this.page = 1;
    this.items = [];

    this.q = {
      find,
      projection,
      skip: (this.page-1) * this.pageSize ,
      limit: this.pageSize,
      sort
    };
    this.noMore = false;
    this.loadData(this.q);
  }


  loadData(query: object){
    if (!this.noMore) {
      this.isWaiting = true;
      this.bdservice.lookupCareers(query)
      .then(response => {
        console.log(response)
        if (response.hasOwnProperty("data") && response.data.length>0) {
          for (let i:number = 0; i < response.data.length; i++) {
            this.items.push(response.data[i]);
          }
        } else  {
          //todo: send message, there is no data found. 
          this.items.push(
            {
              codigo: "Total:",
              _id: "",
              nombre: this.items.length.toString() + " estudiantes"
            }

          );
          this.noMore = true;
        }
        this.isWaiting = false;
      })
      .catch(err => {
        console.log(err)
        this.isWaiting = false;
      })
    }
  }

}


