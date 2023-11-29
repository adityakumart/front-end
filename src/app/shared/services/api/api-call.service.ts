import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from '../data/common.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  apiURL = environment.api;
  constructor(
    private http: HttpClient,
    private cs: CommonService
  ) { }

  public getDashJobs(): Observable<any> {
    return this.http
      .post(`${this.apiURL}/job/dash_list`, {});
  }
  public getDashCands(): Observable<any> {
    return this.http
      .post(`${this.apiURL}/candidate/dash_list`, {});
  }
  public candList(data): Observable<any> {
    return this.http
      .post(`${this.apiURL}/candidate/list`, data);
  }
  public addCand(data): Observable<any> {
    return this.http
      .post(`${this.apiURL}/candidate/add`, data);
  }
  public addResumeCand(data): Observable<any> {
    return this.http
      .post(`${this.apiURL}/candidate/add`, data);
  }
  public addCandFile(data): Observable<any> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/form-data', Accept: 'multipart/form-data' }) };
    return this.http
      .post(`${this.apiURL}/candidate/resume`, data);
  }

  public contactList(data): Observable<any> {
    return this.http
      .post(`${this.apiURL}/contact/list`, data);
  }

  public getDashboardJson(data): Observable<any> {
    return this.http
      .post(`${this.apiURL}/dashboard/get`, {data});
  }

  public saveDashboardJson(data): Observable<any> {
    return this.http
      .post(`${this.apiURL}/dashboard/post`, {data});
  }

  public getUsers(data): Observable<any> {
    return this.http
      .post(`${this.apiURL}/user/list`, {data});
  }

  public getUser(data): Observable<any> {
    return this.http
      .post(`${this.apiURL}/user/list`, {data});
  }

  public saveUser(data): Observable<any> {
    return this.http
      .post(`${this.apiURL}/user/save`, {data});
  }

  public updateUser(data): Observable<any> {
    return this.http
      .put(`${this.apiURL}/user/update`, {data});
  }
}
