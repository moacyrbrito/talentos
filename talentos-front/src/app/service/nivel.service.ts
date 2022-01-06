import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { Nivel } from '../model/nivel';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  private _API = 'nivel';

  constructor(private _httpClient: HttpClient) { }

  obter(params: string = ""): Promise<Nivel[]> {
    return this._httpClient.get<Nivel[]>(`${environment.host + this._API}?${params}`).toPromise();
  }

  obterPorId(id: string): Observable<Nivel> {
    return this._httpClient.get<Nivel>(`${environment.host + this._API}/${id}`).pipe(take(1), delay(800));
  }

  inserir(nivel: Nivel): Observable<Nivel> {
    return this._httpClient.post<Nivel>(`${environment.host}${this._API}`, nivel).pipe(take(1), delay(800));
  }

  alterar(nivel: Nivel): Observable<Nivel> {
    return this._httpClient.put<Nivel>(`${environment.host}${this._API}`, nivel).pipe(take(1), delay(800));
  }

  excluir(id: number): Observable<Nivel> {
    return this._httpClient.delete<Nivel>(`${environment.host}${this._API}/${id}`).pipe(take(1), delay(800));
  }
}
