import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../../../environments/environment'
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class settingsService {

  constructor(private http: HttpClient) {
  }
   relatedto(){  
    return this.http.get("enum_masters?category_name=health_diary")
   }
  aboutUpdate(detail){
	  return this.http.post("health_details/about_update",detail)
  }
  
  aboutDetail(){
	  return this.http.get("health_details/about")
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

  addContacts(user_details){
    return this.http.post("emergency_details",user_details)
  }

  deleteData(id){
    return this.http.delete("emergency_details/"+id)
  }
  deleteCaregiver(id){
    return this.http.get("emergency_details/caregiver_delete?cg_id="+id)
  }

  commonEventList(event_type,page)/*:Observable<any>*/ {
    return this.http.get("events?event_type="+event_type+"&&order=DESC&&sort=created_at&&per_page=10&&page="+page)
  }

  commonDateEventList(event_type,page)/*:Observable<any>*/ {
    return this.http.get("events?event_type="+event_type+"&&order=DESC&&sort=event_datetime&&per_page=10&&page="+page)
  }

  commonAppointmentDateEventList(event_type,page)/*:Observable<any>*/ {
    return this.http.get("events?event_type="+event_type+"&&order=ASC&&sort=event_datetime&&per_page=10&&page="+page)
  }
 
  commonEventSearchList(event_type,search){
    return this.http.get("events?event_type="+event_type+"&&search="+search+"&&order=DESC&&sort=created_at")
  }

  commonDateEventSearchList(event_type,search){
    return this.http.get("events?event_type="+event_type+"&&search="+search+"&&order=DESC&&sort=event_datetime")
  }

  commonAppointmentSearchList(event_type,search){
    return this.http.get("events?event_type="+event_type+"&&search="+search+"&&order=ASC&&sort=event_datetime")
  }

  
  commonVitalList(event_type,page)/*:Observable<any>*/ {
    return this.http.get("events?event_type="+event_type+"&&order=DESC&&sort=event_datetime&&per_page=10&&page="+page)
  }

  commonVitalSearchList(event_type,search){
    return this.http.get("events?event_type="+event_type+"&&search="+search+"&&order=DESC&&sort=event_datetime")
  }  

  commonDeleteEvent(id){
    return this.http.delete("events/"+id)
  }

  commonPost(record){
    return this.http.post("events",record)
  }

  vitalCommonPost(record){
        return this.http.post("events/vital_update",record)
  }
  commonUpdatePost(id,record){
    return this.http.put("events/"+id,record)
  }

  myEmergencyHealthDetail(){
    return this.http.get("health_details")
  }

  myEmergencyHealthUpdate(data){
    return this.http.post("health_details",data)
  }

  myEmergencyPreview(){
    return this.http.get("users/preview")
  }

  reportType(){
    return this.http.get("enum_masters?category_name=report")
  }

  deleteImage(data){
    return this.http.post("events/delete_image",data)
  }

  vitaldelete(data){
    return this.http.put("events/vital_delete",data) 
  }
  vitalReading(){
    return this.http.get("enum_masters?category_name=vital")    
  }
  vitalFoodTime(){
    return this.http.get("enum_masters?category_name=food_time")

  }
  view_expenses(id){
    return this.http.get("events/expense_list?user_id="+id);
  
  }
  event_view_delete(id){
    return this.http.delete("events/"+id);
  }
  event_add_option(){
    return this.http.get("enum_masters?category_name=spent_place");
  }
  event_add(value){
    return this.http.post("events",value); 
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
  filterChart(id,data){
    return this.http.post("events/expense_chart_filter?user_id="+id,data)
  }
  filterAmount(from,to,id){
    return this.http.get("events/expense_list?from_date="+from+"&&end_date="+to+"&&user_id="+id); 
  }

  Appointmentdropdown(){
    return this.http.get("enum_masters?category_name=appointment")
  }
  appointmentDetails(data){
    return this.http.post("events",data)
  }
  
  EditDetails(id,data){
    return this.http.put("events/"+id,data)
  }
  
  recentAppointment(id){
    return this.http.get("events/appointment_list?user_id="+id); 
  }
  record_filter(data){
    console.log(data)
    return this.http.post("events/diary_recording?",data)
  }

  completedAppointmentEventList(event_type,page){
    return this.http.get("events?event_type="+event_type+"&&tab=history&&order=DESC&&sort=event_datetime&&per_page=10&&page="+page)
  }
  completedAppointmentSearchList(event_type,search){
    return this.http.get("events?event_type="+event_type+"&&search="+search+"&&tab=history&&order=DESC&&sort=event_datetime")
  }

  vitalFoodTime1(){
    return this.http.get("enum_masters?category_name=food_time_1")

  }
  vitalFoodTime2(){
    return this.http.get("enum_masters?category_name=food_time_2")

  }
  vitalEventListNew(id){
    return this.http.get("events/vitals_list1?user_id="+id)
  }
  reading_history(event,id,page,count){
    return this.http.get("events/vital_history?event_name="+event+"&&user_id="+id+"&&page="+page+"&&per_page="+count)
  }
  filterReading(event,id,page,count,from,end){
    return this.http.get("events/vital_history?event_name="+event+"&&user_id="+id+"&&page="+page+"&&per_page="+count+"&&from_date="+from+"&&end_date="+end)

  }
  vitalEventList(id){
    return this.http.get("events/vital_names_list?user_id="+id)
  }
  vitalfilter(id,data){
    return this.http.post("events/vitals_list1?user_id="+id,data)
  }
}
