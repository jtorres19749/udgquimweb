import { Component, OnInit, inject } from '@angular/core';
import { InfiniteScrollCustomEvent, SegmentChangeEventDetail } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

//own 
import { BdServiceService } from '../shared';
import { IObjectMap, IData, ITableData } from '../shared/interfaces';
import { StudentFields_General, StudentFields_Ingreso, StudentFields_ListaCiclos, StudentFields_Calificaciones } from '../shared/constants';

@Component({
  selector: 'app-studentitem',
  templateUrl: './studentitem.page.html',
  styleUrls: ['./studentitem.page.scss'],
})
export class StudentItemPage implements OnInit {
  
  private bdservice = inject(BdServiceService)
  private activatedRoute = inject(ActivatedRoute);

  section: string = "general";
  id: string = "";
  stName: string = "detalle";
  data: object =  {};
  itemsGeneral: Array<IObjectMap>  = [];
  
  ingresoHeaders: Array<ITableData> = StudentFields_Ingreso;
  itemsIngreso: Array<object> = [];

  listaCiclosHeaders:Array<ITableData> = StudentFields_ListaCiclos;
  listaCiclos: Array<object> = [];

  calificacionesHeaders:Array<ITableData> = StudentFields_Calificaciones;
  calificaciones: Array<object> = [];

  constructor() { }
    
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.loadData(this.id);
  }
  

  loadData(id: string){
    if (id) {
      this.bdservice.getStudent(id)
      .then(response => {
        console.log(response);
        if (response.hasOwnProperty("data") ) {
          this.data = response.data;
          this.stName = `${this.data["codigo" as keyof typeof this.data]} - ${this.data["nombre" as keyof typeof this.data]}`;
          
          this.itemsGeneral = this.chargeData(StudentFields_General, this.data);
          this.itemsIngreso =this.data["ingreso" as keyof typeof this.data];
          this.listaCiclos = this.data["listaciclos" as keyof typeof this.data];
          this.calificaciones = this.data["calificaciones" as keyof typeof this.data];


          // console.log(this.itemsGeneral);
          // console.log(this.itemsIngreso);
          
        } else  {
          //todo: send message, there is no data found. 
      
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  getV(itm:any, fld:ITableData){
    return itm[fld.field as keyof typeof this.data]    
  }

  chargeData(arrFields: Array<IData>, data: any): Array<IObjectMap> {
    let arrItems: Array<IObjectMap>  = [];
    for (let i:number=0; i<arrFields.length;i++) {
      let value: string = `${data[arrFields[i].field  as keyof typeof this.data]}`;
      let item: IObjectMap = {
        "key": arrFields[i].title,
        "value": value || ''
      }
      arrItems.push(item);
    }
    return arrItems;
  }

  onSegmentChange (ev: CustomEvent<SegmentChangeEventDetail>){
    this.section = ev.detail.value?.toString() || 'gereral';
  }

}


