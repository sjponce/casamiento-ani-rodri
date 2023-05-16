import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
@ViewChild('audio') audio: any;

constructor() {}
fogos = Array(20).fill(10);

  playAudio(){
    let audio = new Audio();
    audio.src = "https://www.w3schools.com/tags/horse.mp3";
    audio.load();
    audio.play();
  }

  title = 'flamante-casorio';

  clickiclaka() {
    this.playAudio()
  window.alert(`
  Confirmas cada señal,
  Ya no dudo estoy seguro que eres tú mi otra parte,
  No es casual ni mucho menos que tengamos tantas cosas en común...
  Es tu vida con mi vida un complemento tan perfecto,
  Que ahora todo lo comprendo, te esperaba hace tiempo,
  Guardándote mi amor, guardando éste amor...
  CORO
  Porque me puedes de punta a punta,
  Porque desnudas todo mi ser,
  Y es que contigo todo es inmenso,
  Y mi esperanza vuelve a nacer,
  Porque me puedes y a mí me gusta,
  Porque superas lo que soñé,
  Estar contigo es un privilegio,
  Hoy por ti vuelvo a nacer... X2
  Descubres en mis adentros capacidades que ignoraba,
  Y me enseñas a entregarme por completo.
  No existen dudas, está a la vista,
  Tenemos tanta piel...
  Es tu vida con mi vida un complemento tan perfecto,
  Que ahora todo lo comprendo, te esperaba hace tiempo,
  Guardándote mi amor, guardando éste amor...`)
  window.alert("https://www.youtube.com/watch?v=Q54BrGTIi9I&ab_channel=SalsaM%C3%BAsica")
}

}