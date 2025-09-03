import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:3000';

  constructor() { }

  login( email: string, senha: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios?email=${email}&senha=${senha}`).pipe(
      tap(usuarios => {
        if (usuarios && usuarios.length > 0) {
          const usuario = usuarios[0];
          localStorage.setItem('currentUser', JSON.stringify(usuario));
          this.redirectByRole(usuario.tipo);
        } else {
          alert('Usuario ou Senha incorretos.');
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !! localStorage.getItem('currentUser');
  }

  getPerfilUsuario(): string | null {
    const usuarioStr = localStorage.getItem('currentUser');
    if (usuarioStr) {
      const usuario = JSON.parse(usuarioStr);
      return usuario.tipo;
    }
    return null;
  }

  private redirectByRole(role: string): void {
    if (role === 'corretor') {
      this.router.navigate(['/dasbord']);
    } else if (role === 'cliente') {
      this.router.navigate(['/meus-interesses']);
    }
  }





}