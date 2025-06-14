import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@admin/environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req.clone({ url: `${environment.backendUrl}${req.url}`, withCredentials: true }));
};
