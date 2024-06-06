import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

//own
import { URL } from './constants'
import { IUser, ISetting } from './interfaces'




@Injectable({
  providedIn: 'root'
})
export class BdServiceService {
  private http = inject(HttpClient);
static _uriConection: string = URL
  

  constructor() { }


  public getStudent(id: string): Promise<any> {
    console.log(`${BdServiceService._uriConection}/carreradetalle?id=${id}`);
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${BdServiceService._uriConection}/carreradetalle`, {id})
       .subscribe({
          next: response => {
            console.log('get student detail')
            resolve(response)
          },
          error: error => {
            console.log('there was an error ----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }


  public lookupCareers(q: object): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${BdServiceService._uriConection}/buscacarreras`,q)
       .subscribe({
          next: response => {
            console.log('lookupCareers')
            resolve(response)
          },
          error: error => {
            console.log('hubo un error----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  public getUsers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${BdServiceService._uriConection}/users`)
       .subscribe({
          next: response => {
            console.log('get usres')
            resolve(response)
          },
          error: error => {
            console.log('there was an error ----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  public postUser(user: IUser): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${BdServiceService._uriConection}/user`, user)
       .subscribe({
          next: response => {
            console.log(response)
            resolve(response)
          },
          error: error => {
            console.log('hubo un error----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  public deleteUser(user: IUser): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${BdServiceService._uriConection}/user`, {body: user} )
       .subscribe({
          next: response => {
            console.log(response)
            resolve(response)
          },
          error: error => {
            console.log('hubo un error----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  public login(user: IUser): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${BdServiceService._uriConection}/login`, user )
       .subscribe({
          next: response => {
            resolve(response)
          },
          error: error => {
            console.log('hubo un error----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  public saveuser(user: IUser): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.put(`${BdServiceService._uriConection}/user`, user )
       .subscribe({
          next: response => {
            resolve(response)
          },
          error: error => {
            console.log('hubo un error----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }


  
  public getSetting(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${BdServiceService._uriConection}/setting`)
       .subscribe({
          next: response => {
            console.log('get setting')
            resolve(response)
          },
          error: error => {
            console.log('there was an error ----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }



  
  public putSetting(setting: ISetting): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.put(`${BdServiceService._uriConection}/setting`, setting )
       .subscribe({
          next: response => {
            resolve(response)
          },
          error: error => {
            console.log('hubo un error----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }


  


  public getReports(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${BdServiceService._uriConection}/reports`)
       .subscribe({
          next: response => {
            console.log('get reports')
            resolve(response)
          },
          error: error => {
            console.log('there was an error ----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  public postUpdateReport(id: string, url:string = '/updaterpt'): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${BdServiceService._uriConection}${url}`, {id})
       .subscribe({
          next: response => {
            console.log('get reports')
            resolve(response)
          },
          error: error => {
            console.log('there was an error ----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }
  




  // -----------------------------------import  -----------------------
  
  public importSGRACAD(sgracad: ISetting): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${BdServiceService._uriConection}/importSGRACAD`, sgracad )
       .subscribe({
          next: response => {
            resolve(response)
          },
          error: error => {
            console.log('hubo un error----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  public importConstancia(fechasExculirConst: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${BdServiceService._uriConection}/importConstancia`, {fechasExculirConst:fechasExculirConst} )
       .subscribe({
          next: response => {
            resolve(response)
          },
          error: error => {
            console.log('hubo un error----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }
  
  public importFicha(fechasExculirFicha: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${BdServiceService._uriConection}/importFicha`, {fechasExculirFicha:fechasExculirFicha} )
       .subscribe({
          next: response => {
            resolve(response)
          },
          error: error => {
            console.log('hubo un error----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  
  public getImportRegs(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${BdServiceService._uriConection}/importregs`)
       .subscribe({
          next: response => {
            console.log('get importregs')
            resolve(response)
          },
          error: error => {
            console.log('there was an error ----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  
  public delImportRegs(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${BdServiceService._uriConection}/importregs`)
       .subscribe({
          next: response => {
            console.log('delete importregs')
            resolve(response)
          },
          error: error => {
            console.log('there was an error ----------------------------------------------------------------')
            console.log(error)
            reject(error)
          }
       })
    })
  }

  

}
