import { App } from './app';
import { createComponentFixture } from './testing/component-test-helpers';

describe('App', () => {
  it('should create the app', async () => {
    const { component } = await createComponentFixture(App);
    expect(component).toBeTruthy();
  });

  it('should render title', async () => {
    const { fixture } = await createComponentFixture(App);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, demo');
  });
});
