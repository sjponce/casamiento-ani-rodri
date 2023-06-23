import Swal from 'sweetalert2';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take, BehaviorSubject, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { FireStoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

loading$ = new BehaviorSubject(false);

constructor(private fireService: FireStoreService, private fb: FormBuilder) {
  this.musicForm = this.fb.group({
    nombre: ['', Validators.required],
    autor: [''],
    link: [''],
  });
  this.asistenciaForm = this.fb.group({
    asistencia: ['', Validators.required],
    nombre: ['', Validators.required],
    detalle: [''],
  });
}

musicForm: FormGroup;
asistenciaForm: FormGroup;

putMusica() {
  this.loading$.next(true);
  from(this.fireService.putMusica(this.musicForm.getRawValue())).pipe(
    take(1),
    catchError((e: Error) => {
      Swal.fire({
        text: 'No se pudo agregar la canción :(',
        toast: true,
        icon: 'error',
        timer: 1500,
        showConfirmButton: false,
        position: 'bottom-right'
      });
      throw e;
    }),
  ).subscribe(() => {
    this.loading$.next(false);
    Swal.fire({
      text: 'Canción agregada',
      toast: true,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
      position: 'bottom-right'
    });
    this.musicForm.setValue({
      autor: '',
      nombre: '',
      link: '',
    });
    this.musicForm.updateValueAndValidity();
  })
}

putAsistencia() {
  this.loading$.next(true);
  from(this.fireService.putAsistencia(this.asistenciaForm.getRawValue())).pipe(
    take(1),
    catchError((e: Error) => {
      Swal.fire({
        text: 'No se pudo agregar la canción :(',
        toast: true,
        icon: 'error',
        timer: 1500,
        showConfirmButton: false,
        position: 'bottom-right'
      });
      throw e;
    }),
  ).subscribe(() => {
    this.loading$.next(false);
    Swal.fire({
      text: 'Asistencia confirmada!',
      toast: true,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
      position: 'bottom-right'
    });
    this.asistenciaForm.setValue({
      asistencia: '',
      nombre: '',
      detalle: '',
    });
    this.asistenciaForm.updateValueAndValidity();
  });
}

}