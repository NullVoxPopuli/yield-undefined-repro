import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';
import templateOnly from '@ember/component/template-only';

export const SomeComponent = setComponentTemplate(
  hbs`
  I am "SomeComponent"
`,
  templateOnly()
);
