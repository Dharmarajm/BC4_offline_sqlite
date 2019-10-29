import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

    constructor(private http: HttpClient) { }

	care_detail(data){
		return this.http.post("users/patient_register",data)
	}
	login_credential(credential){
		return this.http.post("auth/login",credential)
		
	}
	verify_CGId(id){
		return this.http.get("users/user_uid?user_uid="+id)
	}
	CGdetails(val){
		return this.http.post("users/caregiver_register",val)
	}

	emailVerify(mail){
		return this.http.get("users/identify_user?email="+mail)

	}
	VerifyCode(code,id){
		return this.http.get("users/verification_code?user_id="+id+"&&verification_code="+code)
	}
	pwdUpdate(val){
		return this.http.post("users/password_updation",val)

	}
	subscriptionAmt(){
		return this.http.get("subscriptions/app_amount")
	}
	offerAmt(){
		return this.http.get("offers")
	}
	couponAmt(user_id,id){
		return this.http.get("subscriptions/apply_coupon?user_id="+user_id+"&&offer_id="+id)
	}

	selfPayment(data){
		return this.http.post("subscriptions/make_payment",data)
	}

	user_data(e_id){
		return this.http.get("auth/find_user?email="+e_id)
	}
}
