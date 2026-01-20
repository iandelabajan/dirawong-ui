import { ComponentFixture } from '@angular/core/testing';

import { Components } from './components';
import { createComponentFixture } from './testing/component-test-helpers';

describe('Components', () => {
  let component: Components;
  let fixture: ComponentFixture<Components>;

  beforeEach(async () => {
    ({ component, fixture } = await createComponentFixture(Components));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
