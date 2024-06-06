import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlOptions } from '@angular/forms'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

//own
import { BdServiceService, AuthserviceService } from '../shared';
import { ISetting } from '../shared/interfaces';


@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})

export class ConfigPage implements OnInit{
  bdService = inject(BdServiceService);
  fg: FormGroup = new FormGroup(
    {actualSemester: new FormControl('', Validators.compose([
      Validators.required
    ])) ,
    lastSemester: new FormControl('', Validators.compose([
      Validators.required
    ])),
    allSemesters: new FormControl('', Validators.compose([
      Validators.required
    ])),
    importBatchSize: new FormControl(50, Validators.compose([
      Validators.required
    ])) 
  })

  constructor( 
    public fb: FormBuilder,
    private route: Router,
    private alertController: AlertController
  ) {
    
   }

  
   ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.bdService.getSetting()
    .then(response => {
      console.log(response)
      if (response.hasOwnProperty("data") ) {
        this.fg.setValue({
          actualSemester: response.data.setting.actualSemester, 
          lastSemester: response.data.setting.lastSemester,
          allSemesters: response.data.setting.allsemesters,
          importBatchSize: response.data.setting.importbatchsize
        });
      } else  {
        //todo: send message, there is no data found. 
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  

 submit(values:any){
  console.log(values);
 // this.form.controls['your form control name'].value

  let setting:ISetting  = {
    actualSemester : values.actualSemester,
    lastSemester: values.lastSemester,
    allSemesters: values.allSemesters,
    importBatchSize: values.importBatchSize
  };
  this.bdService.putSetting(setting)
  .then(response=>{
    console.log(response);
    this.presentAlert('Actualización realizada con exito!');
  })
  .catch(err=>{
    this.presentAlert('Usuario o password no reconocidos');
  });

 }



 async presentAlert(message: string = '', header:string = 'Configuración', subHeader: string = '' , buttons: Array<any> = ['Ok']) {
  const alert = await this.alertController.create({
    header,
    subHeader,
    message,
    buttons,
  });

  await alert.present();
}


}




