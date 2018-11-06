import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DrawsService, Draw } from '../../core';

@Component({
  selector: 'draw-editor',
  providers: [DrawsService],
  templateUrl: './draw-editor.component.html',
  styleUrls: ['./draw-editor.component.css']
})
export class DrawEditorComponent implements OnInit {

  constructor(
    private drawsService: DrawsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the FormBuilder to create a form group
    this.drawForm = this.fb.group({
      name: '',
      description: '',
      programmedFor: '',
    });

    // Initialized tagList as empty array
    // this.article.tagList = [];

    // Optional: subscribe to value changes on the form
    // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));

  }

  // Fields
  draw: Draw = {} as Draw;
  drawForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;
  // tagField = new FormControl();

  // Methods
  ngOnInit() {
    // If there's an article prefetched, load it
    // this.route.data.subscribe((data: { article: Article }) => {
    //   if (data.article) {
    //     this.article = data.article;
    //     this.articleForm.patchValue(data.article);
    //   }
    // });
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateDraw(this.drawForm.value);

    // post the changes
    this.drawsService
      .save(this.draw)
      .subscribe(
        savedDraw => this.router.navigateByUrl('/draws/' + savedDraw.id),
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
  }

  updateDraw(values: Object) {
    Object.assign(this.draw, values);
  }
}
