import { Injectable } from '@angular/core';
import { ResponseG } from './Service/responseG';
import { PeticionEnvio } from './Service/peticionEnvio';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PhttpService {
  private url: string = "http://localhost:4000/api/categoria";
  private ArrayG: Array<ResponseG>;
  constructor(private http: HttpClient) { }

  postRespuesta(_body: PeticionEnvio): Observable<ResponseG> {

    return this.http.post<ResponseG>(this.url, _body);
  }
  getRespuesta(): Observable<ResponseG[]> {
    return this.http.get<ResponseG[]>(this.url + "/");
  }
  getProduct(codigo: String): Observable<ResponseG[]> {
    return this.http.get<ResponseG[]>(this.url + '/' + codigo);
  }
  putRespuesta(_id: String, _body: PeticionEnvio): Observable<ResponseG> {
    let urlcom = this.url + "/" + _id;
    return this.http.put<ResponseG>(urlcom, _body);
  }

  deleteRespuesta(_id: String): Observable<ResponseG> {
    let urlcom = this.url + "/" + _id;
    return this.http.delete<ResponseG>(urlcom);
  }
}
