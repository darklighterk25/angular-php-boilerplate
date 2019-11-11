import {HttpHeaders} from '@angular/common/http';

const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

export const AppSettings = {
  APIEndpoint: 'http://localhost:8080/api/v1/',
  Options: {
    headers: httpHeaders
  }
};
