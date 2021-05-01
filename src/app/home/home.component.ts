import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardForm;
  carregando = true;
  pagamentoProcessado = false;
  animationItem: AnimationItem | undefined;
  options: AnimationOptions = {
    path: '../../assets/loading.json',
  };
  sucesso: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_rnnrduuq.json',
    autoplay: false,
    loop: true,
  };

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.cardForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carregando = false;
  }

  onSubmit(cardData: any): void {
    this.carregando = true;
    // alert(cardData.nome);
    const lead = {nome: cardData.nome, email: cardData.email, telefone: cardData.telefone};
    console.log(lead);
    this.http.post('https://cais.centraldevendasbr.com.br/inserir_lead.php', lead).subscribe(
      (res: any) => {
      console.log('res', res);
      this.carregando = false;
      this.pagamentoProcessado = true;
      if(this.animationItem) {
        this.animationItem.play();
      }
      }, (err) => {
        console.error(err);
        this.carregando = false;
      },
      () => (this.carregando = false)
    );
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
