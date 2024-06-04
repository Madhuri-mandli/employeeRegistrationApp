import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
updateEmployee() {
throw new Error('Method not implemented.');
}
saveEmployee() {
throw new Error('Method not implemented.');
}
onDelete(_t15: any) {
throw new Error('Method not implemented.');
}
onEdit(_t15: any) {
throw new Error('Method not implemented.');
}

  employeeCreateObj={
    "roleId": 3,
    "userName": "Madhuri",
    "empCode": "CT-5271",
    "empId": 123,
    "empName": "Manasa",
    "empEmailId": "manasa@gmail.com",
    "empDesignationId": 2,
    "empContactNo": "987654321",
    "empAltContactNo": "70222143102",
    "empPersonalEmailId": "manasa.s@gmail.com",
    "empExpTotalYear": 3,
    "empExpTotalMonth":1,
    "empCity": "Ramanagaram",
    "empState": "karnataka",
    "empPinCode": "562159",
    "empAddress": "Chamundeshwari Extension",
    "empPerCity": "3",
    "empPerState": "5",
    "empPerPinCode": "4",
    "empPerAddress": "2",
    "password": "madhuri",
    "ErpEmployeeSkills": [
      {
        "empSkillId": 1,
        "empId": 0,
        "skill": "Angular",
        "totalYearExp": 3,
        "lastVersionUsed": "12"
      }
    ],
    "ErmEmpExperiences": [
      {
        "empExpId": 2,
        "empId": 3,
        "companyName": "CGI",
        "startDate": "2number24-number5-28Tnumber5:49:16.432Z",
        "endDate": "2number24-number5-28Tnumber5:49:16.432Z",
        "designation": "software developer",
        "projectsWorkedOn": "performplus"
      }
    ]
  }
  title = 'employeeRegistrationApp';
  @ViewChild('myModal')
  model!: ElementRef;
  employeeObj:Employee = new Employee();
  employeeData:Employee[] = []
  employees: any;
  employeeDetailsObj!:EmployeeDetails;

  
  constructor(private employeeService:EmployeeService){}

 

  openModal(){
    const model = document.getElementById('myModal');
    if(model!==null){
      model.style.display="block";
    }
  }

  closeModal(){
    this.employeeObj = new Employee();
    if(this.model!==null){
      this.model.nativeElement.style.display = "none";
    }
  }
  ngOnInit(): void {
this.getAllEmployees();
    

  this.employeeService.getAllEmployeeByDesignation().subscribe((data:any)=>{
   //this.employees=data.data;
    //console.log(data.data)
  })
 
  this.employeeService.getAllEmployeeByEmployeeId().subscribe((data:any)=>{
   // this.employees=data.data;
    //console.log(data.data)
  })
  this.employeeService.getAllRoles().subscribe((data:any)=>{
   //this.employees=data.data;
    //console.log(data.data)
  })
// // this.employeeService.createNewEmployee(this.employeeCreateObj).subscribe((data:any)=>{
// //   console.log(data)
// })

}
getAllEmployees(){
  this.employeeService.getAllEmployee().subscribe((data:any)=>{
    this.employees=data.data;
//console.log(data.data);
})
}

}
export class Employee{
  empName:string;
  empId:number;
  empCode:string;
  empEmailId:string;
  empDesignation:string;
  role:string;
  mobile:string;

  constructor(){
    this.empName="";
    this.empId=0;
    this.empCode="";
    this.empEmailId="";
    this.empDesignation="";
    this.role="";
    this.mobile="";
  }
}

export class EmployeeDetails{
  
    roleId: number;
    userName:  string;
    empCode:  string;
    empId: number;
    empName:  string;
    empEmailId:  string;
    empDesignationId: number;
    empContactNo:  string;
    empAltContactNo:  string;
    empPersonalEmailId:  string;
    empExpTotalYear: number;
    empExpTotalMonth: number;
    empCity:  string;
    empState:  string;
    empPinCode:  string;
    empAddress:  string;
    empPerCity:  string;
    empPerState:  string;
    empPerPinCode:  string;
    empPerAddress:  string;
    password:  string;
    ErpEmployeeSkills: [
      {
        empSkillId: number;
        empId: number;
        skill:  string;
        totalYearExp: number;
        lastVersionUsed: string;
      }
    ];
    ErmEmpExperiences: [
      {
        empExpId: number;
        empId: number;
        companyName:  string;
        startDate: string;
        endDate: string;
        designation:  string;
        projectsWorkedOn: string;
      }
    ]
    constructor(data: any) {
      this.roleId = data.roleId;
      this.userName = data.userName;
      this.empCode = data.empCode;
      this.empId = data.empId;
      this.empName = data.empName;
      this.empEmailId = data.empEmailId;
      this.empDesignationId = data.empDesignationId;
      this.empContactNo = data.empContactNo;
      this.empAltContactNo = data.empAltContactNo;
      this.empPersonalEmailId = data.empPersonalEmailId;
      this.empExpTotalYear = data.empExpTotalYear;
      this.empExpTotalMonth = data.empExpTotalMonth;
      this.empCity = data.empCity;
      this.empState = data.empState;
      this.empPinCode = data.empPinCode;
      this.empAddress = data.empAddress;
      this.empPerCity = data.empPerCity;
      this.empPerState = data.empPerState;
      this.empPerPinCode = data.empPerPinCode;
      this.empPerAddress = data.empPerAddress;
      this.password = data.password;
      this.ErpEmployeeSkills = data.ErpEmployeeSkills;
      this.ErmEmpExperiences = data.ErmEmpExperiences;
  }
}
    
  
