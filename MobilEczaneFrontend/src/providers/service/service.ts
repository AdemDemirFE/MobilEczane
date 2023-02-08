import { Injectable } from '@angular/core';
import { GeneralSettings } from 'src/app/pages';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Service {
    public resourceUrl = GeneralSettings.url;
    constructor(private http: HttpClient) {

    }

    create(val: any, mappingName: string): Observable<any> {
        return this.http.post(this.resourceUrl + '/' + mappingName, val);
    }

    update(val: any, mappingName: string): Observable<any> {
        return this.http.put(this.resourceUrl + '/' + mappingName, val);
    }

    find(id: number, mappingName: string): Observable<any> {
        return this.http.get(`${this.resourceUrl + '/' + mappingName}/${id}`);
    }

    query(mappingName: string, req?: any): Observable<any> {
        return this.http.get(this.resourceUrl + '/' + mappingName);
    }

    download(mappingName: string, req?: any): Observable<any> {
        return this.http.get(this.resourceUrl + '/' + mappingName, { responseType: 'arraybuffer' });
    }

    delete(id: number, mappingName: string): Observable<any> {
        return this.http.delete(`${this.resourceUrl + '/' + mappingName}/${id}`, { observe: 'response', responseType: 'text' });
    }

    deletes(ids: string, mappingName: string): Observable<any> {
        return this.http.delete(`${this.resourceUrl + '/' + mappingName}/${ids}`, { observe: 'response', responseType: 'text' });
    }
}