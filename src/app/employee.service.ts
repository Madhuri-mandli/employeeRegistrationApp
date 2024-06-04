import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  

  constructor(private http:HttpClient) { }

getAllEmployee(){
  let dataUrl:string="https://freeapi.gerasim.in/api/EmployeeApp/GetAllEmployee";
  return  this.http.get(dataUrl)
}
getAllEmployeeByDesignation(){
  let dataUrl:string="https://freeapi.gerasim.in/api/EmployeeApp/GetAllDesignation";
  return  this.http.get(dataUrl)
}
getAllEmployeeByEmployeeId(){
  let dataUrl:string="https://freeapi.gerasim.in/api/EmployeeApp/GetEmployeeByEmployeeId";
  return  this.http.get(dataUrl)
}
getAllRoles(){
let dataUrl:string="https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles";
  return  this.http.get(dataUrl)
}
createNewEmployee(employee: any){
  let dataUrl:string="https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee";
  return  this.http.post(dataUrl,employee)
}

editEmployee(){

}
deleteEmployee(){

}

}




