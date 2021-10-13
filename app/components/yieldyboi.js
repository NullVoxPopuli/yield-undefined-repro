import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import { SomeComponent } from './some-component';

export default class YieldyBoi extends Component {
  someComponent = SomeComponent;

  @tracked isOops = false;

  toggle = async (e) => {
    e.preventDefault();
    this.isOops = !this.isOops;
  };
}
