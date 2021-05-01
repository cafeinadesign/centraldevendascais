import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardForm;
  carregando = true;

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
      console.log(res);
      }, (err) => {
        console.error(err);
        this.carregando = false;
      },
      () => (this.carregando = false)
    );
  }
}
