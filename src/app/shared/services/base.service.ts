import {Injectable } from  '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable()
export class BaseService {
  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/posts/1';

getConfig() {
  return this.http.get(this.configUrl);
}
}