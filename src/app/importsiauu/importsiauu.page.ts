import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlOptions } from '@angular/forms'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

//own
import { BdServiceService, AuthserviceService } from '../shared';
import { ISetting } from '../shared/interfaces';


@Component({
  selector: 'app-importsiauu',
  templateUrl: './importsiauu.page.html',
  styleUrls: ['./importsiauu.page.scss'],
})
export class ImportsiauuPage implements OnInit {
  bdService = inject(BdServiceService);
  isWaiting : Boolean=false;
  private spinval:number = 0;
  fg: FormGroup = new FormGroup(
    {
    allSemesters: new FormControl(''), 
    includeSGRACAD:  new FormControl(true),
    
    fechasExculirConst: new FormControl(''), 
    includeConstancia:  new FormControl(true),

    
    fechasExculirFicha: new FormControl(''), 
    includeFicha:  new FormControl(true),
  })

  
  constructor( 
    public fb: FormBuilder,
    private route: Router,
    private alertController: AlertController
  ) {
    
   }

  controlSpinner(value:number=0){

    this.spinval += value;
    console.log(this.spinval);
    this.isWaiting = (this.spinval==0)?false:true;
  }


  ngOnInit() {
    //check if there is already import data 
    this.loadData();
  }

  loadData(){
    this.controlSpinner(1);
    this.bdService.getSetting()
    .then(response => {
      this.controlSpinner(-1);
      console.log(response)
      if (response.hasOwnProperty("data") ) {
        this.fg.patchValue({
          allSemesters: response.data.setting.allsemesters
        });
      } else  {
        //todo: send message, there is no data found. 
      }
    })
    .catch(err => {
      this.controlSpinner(-1);
      console.log(err)
    })
  }

  generate(){
    
  }


  submit(values:any){
    console.log(values);
    // this.form.controls['your form control name'].value


    
    // sgracad
    if (values.includeSGRACAD) {
      console.log('entro a includeSGRACAD');
      let sgracad:ISetting  = {
        allSemesters: values.allSemesters
      };
      this.controlSpinner(1);
      this.bdService.importSGRACAD(sgracad)
      .then(response=>{
        this.controlSpinner(-1);
        console.log(response);
        //todo: inform in the same widget or with a toast
      })
      .catch(err=>{
        this.controlSpinner(-1);
        this.presentAlert('Error al tratar de grabar.');
      });
    } 
    // constancia
    if (values.includeConstancia) {
      console.log('entro a includeConstancia');
      let fechasExculirConst = values.fechasExculirConst;
      this.controlSpinner(1);
      this.bdService.importConstancia(fechasExculirConst)
      .then(response=>{
        this.controlSpinner(-1);
        console.log(response);
        //todo: inform in the same widget or with a toast
      })
      .catch(err=>{
        this.controlSpinner(-1);
        this.presentAlert('Error al tratar de grabar.');
      });
    } 
    
    // ficha
    if (values.includeFicha) {
      console.log('entro a includeFicha');
      let fechasExculirFicha = values.fechasExculirFicha;
      this.controlSpinner(1);
      this.bdService.importFicha(fechasExculirFicha)
      .then(response=>{
        this.controlSpinner(-1);
        console.log(response);
        //todo: inform in the same widget or with a toast
      })
      .catch(err=>{
        this.controlSpinner(-1);
        this.presentAlert('Error al tratar de grabar.');
      });
    } 
 
   }
  
   restart(){
    let alertButtons = [
      {
        text: 'Regresar',
        role: 'cancel'
      },
      {
        text: 'Continuar',
        role: 'confirm',
        handler: () => {
          this.restartContinue();
        },
      },
    ];
    this.presentAlert('Favor de confirmar si desea eliminar todos los pendientes de importación e ininciar de nuevo.','Importación','',alertButtons);
   }

   restartContinue() {
    this.controlSpinner(1);
    this.bdService.delImportRegs()
    .then((response:any)=>{
      this.controlSpinner(-1);
      console.log(response);
      this.presentAlert('Se eliminaron los registros.');
    })
    .catch((err:any)=>{
      this.controlSpinner(-1);
      this.presentAlert('Error al tratar de grabar.');
    });
   }
  
  
   async presentAlert(message: string = '', header:string = 'Importación', subHeader: string = '' , buttons: Array<any> = ['Ok']) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons,
    });
  
    await alert.present();
  }
  


}







  


  

