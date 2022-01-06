import { Desenvolvedor } from './../model/desenvolvedor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedorService {

  private _API = 'desenvolvedor';

  constructor(private _httpClient: HttpClient) { }

  obter(params): Promise<Desenvolvedor[]> {
    return this._httpClient.get<Desenvolvedor[]>(`${environment.host + this._API}?${params}`).toPromise();
  }

  obterPorId(id: string): Observable<Desenvolvedor> {
    return this._httpClient.get<Desenvolvedor>(`${environment.host + this._API}/${id}`).pipe(take(1), delay(800));
  }

  inserir(desenvolvedor: Desenvolvedor): Observable<Desenvolvedor> {
    return this._httpClient.post<Desenvolvedor>(`${environment.host}${this._API}`, desenvolvedor).pipe(take(1), delay(800));
  }

  alterar(desenvolvedor: Desenvolvedor): Observable<Desenvolvedor> {
    return this._httpClient.put<Desenvolvedor>(`${environment.host}${this._API}`, desenvolvedor).pipe(take(1), delay(800));
  }

  excluir(id: number): Observable<Desenvolvedor> {
    return this._httpClient.delete<Desenvolvedor>(`${environment.host}${this._API}/${id}`).pipe(take(1), delay(800));
  }
}
