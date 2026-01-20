import { ComponentFixture } from '@angular/core/testing';

import { Tokens } from './tokens';
import { createComponentFixture } from './testing/component-test-helpers';

describe('Tokens', () => {
  let component: Tokens;
  let fixture: ComponentFixture<Tokens>;

  beforeEach(async () => {
    ({ component, fixture } = await createComponentFixture(Tokens));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
