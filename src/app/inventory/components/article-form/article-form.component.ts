import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Article} from '../../interfaces/article.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit, OnDestroy {

  @Input() input: Article;
  @Output() output = new EventEmitter<Article>();
  @Output() close = new EventEmitter();

  private formSubscription: Subscription;

  public form: FormGroup;
  public disableBtn: boolean;
  public title = 'Editar';

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      cost: new FormControl(0, [Validators.required]),
      stock: new FormControl(0, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.disableBtn = true;
    this.input ? this.patchForm() : this.title = 'Agregar';
    this.formSubscription = this.form.valueChanges.subscribe(
      () => this.disableBtn = !this.form.valid
    );
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  cancel(): void {
    this.close.emit();
  }

  submit(): void {
    this.output.emit(this.form.value);
  }

  patchForm(): void {
    this.form.patchValue({
      name: this.input.name,
      description: this.input.description,
      cost: this.input.cost,
      stock: this.input.stock,
    });
  }
}
