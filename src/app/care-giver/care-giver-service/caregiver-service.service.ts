import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class careGiverService {

  constructor(private http: HttpClient) {
  }


  getPreview(id){
    return this.http.get("users/user_details?user_uid="+id)
  }

  setting(){
    return this.http.get("users/picture_show")
  }

  editprofile(val,id){
    return this.http.put("users/"+id,val)
  }

  sendimage(val){
    return this.http.post("users/profile_picture",val)
  }

  contactDetails(){
    return this.http.get("emergency_details")
  }

  commonEventList(event_type,page)/*:Observable<any>*/ {
    return this.http.get("events?event_type="+event_type+"&&order=DESC&&sort=created_at&&per_page=10&&page="+page+"&&user_id="+localStorage.getItem("user_id"))
  }

  commonDateEventList(event_type,page)/*:Observable<any>*/ {
    return this.http.get("events?event_type="+event_type+"&&order=DESC&&sort=event_datetime&&per_page=10&&page="+page+"&&user_id="+localStorage.getItem("user_id"))
  }

  commonEventSearchList(event_type,search){
    return this.http.get("events?event_type="+event_type+"&&search="+search+"&&order=DESC&&sort=created_at&&user_id="+localStorage.getItem("user_id"))
  }

  commonDateEventSearchList(event_type,search){
    return this.http.get("events?event_type="+event_type+"&&search="+search+"&&order=DESC&&sort=event_datetime&&user_id="+localStorage.getItem("user_id"))
  }
  
  commonAppointmentDateEventList(event_type,page)/*:Observable<any>*/ {
    return this.http.get("events?event_type="+event_type+"&&order=ASC&&sort=event_datetime&&per_page=10&&page="+page+"&&user_id="+localStorage.getItem("user_id"))
  }

  commonAppointmentSearchList(event_type,search){
    return this.http.get("events?event_type="+event_type+"&&search="+search+"&&order=ASC&&sort=event_datetime&&user_id="+localStorage.getItem("user_id"))
  }
  

  reportType(){
    return this.http.get("enum_masters?category_name=report")
  }

  /*private extractData(res) {
    var data = res.json().data || [];
    data.forEach((d) => {
      d.timestamp = new Date(d.timestamp);
    });
    console.log(res)
    return res;
  }*/
  vitalReading(){
    return this.http.get("enum_masters?category_name=vital")    
  }
  vitalFoodTime(){
    return this.http.get("enum_masters?category_name=food_time")

  }
  view_expenses(id){
    return this.http.get("events/expense_list?user_id="+id);
  
  }
  
  view_expenses_cal(id){
    return this.http.get("events/expense_calculation?user_id="+id)
  }
  chartrepeat(id){
    return this.http.get("events/expense_chart?user_id="+id)
  }
  main_chart(id){
    return this.http.get("events/expense_cals_chart?user_id="+id)
  }

  add_care_giver(value){
    return this.http.post("users/add_patient",value)
  }

  patient_list(){
    return this.http.get("users/patient_list")
  }

  togglecheck(id){
    return this.http.post("users/add_patient",{"user_uid":id})
  }

  analytic_chart(){
    return this.http.get("events/vitals_list?user_id="+localStorage.getItem("user_id"))
   
  }

  vitalChart(data){
    return this.http.post("events/vitals_list_filter?user_id="+localStorage.getItem("user_id"),data)
  }

  filterChart(data){
    return this.http.post("events/expense_chart_filter?user_id="+localStorage.getItem("user_id"),data)
  }

  filterAmount(from,to,id){
    return this.http.get("events/expense_list?from_date="+from+"&&end_date="+to+"&&user_id="+id); 
  }

  recentAppointment(id){
    return this.http.get("events/appointment_list?user_id="+id); 
  }

  record_filter(data){
    console.log(data)
    return this.http.post("events/diary_recording?",data)
  }

  completedAppointmentEventList(event_type,page){
    return this.http.get("events?event_type="+event_type+"&&tab=history&&order=DESC&&sort=event_datetime&&per_page=10&&page="+page+"&&user_id="+localStorage.getItem("user_id"))
  }
  completedAppointmentSearchList(event_type,search){
    return this.http.get("events?event_type="+event_type+"&&search="+search+"&&tab=history&&order=DESC&&sort=event_datetime&&user_id="+localStorage.getItem("user_id"))
  }
 removePatient(id){
  return this.http.get("users/patient_delete?patient_id="+id);
 }

  vitalEventList(){
    return this.http.get("events/vital_names_list?user_id="+localStorage.getItem("user_id"))
  }
  reading_history(event,page,count){
    return this.http.get("events/vital_history?event_name="+event+"&&user_id="+localStorage.getItem("user_id")+"&&page="+page+"&&per_page="+count)
  }
  filterReading(event,page,count,from,end){
    return this.http.get("events/vital_history?event_name="+event+"&&user_id="+localStorage.getItem("user_id")+"&&page="+page+"&&per_page="+count+"&&from_date="+from+"&&end_date="+end)
  }
  vitalfilter(data){
    return this.http.post("events/vitals_list1?user_id="+localStorage.getItem("user_id"),data)
  }
  vitalEventListNew(){
    return this.http.get("events/vitals_list1?user_id="+localStorage.getItem("user_id"))
  }
}
 