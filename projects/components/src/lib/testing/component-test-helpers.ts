import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';

/**
 * Creates a component fixture for testing.
 * This helper reduces boilerplate in component tests by handling the common setup pattern.
 *
 * Note: This utility is intentionally duplicated across projects (tokens, components, demo)
 * rather than shared to maintain project independence and avoid creating cross-project
 * dependencies for dev-only test utilities. Each project can evolve its testing needs
 * independently.
 *
 * @template T - The component type
 * @param component - The component class to test
 * @returns An object containing the component instance and fixture
 *
 * @example
 * ```typescript
 * describe('MyComponent', () => {
 *   let component: MyComponent;
 *   let fixture: ComponentFixture<MyComponent>;
 *
 *   beforeEach(async () => {
 *     ({ component, fixture } = await createComponentFixture(MyComponent));
 *   });
 *
 *   it('should create', () => {
 *     expect(component).toBeTruthy();
 *   });
 * });
 * ```
 */
export async function createComponentFixture<T>(
  component: Type<T>
): Promise<{ component: T; fixture: ComponentFixture<T> }> {
  await TestBed.configureTestingModule({
    imports: [component],
  }).compileComponents();

  const fixture = TestBed.createComponent(component);
  const componentInstance = fixture.componentInstance;
  await fixture.whenStable();

  return { component: componentInstance, fixture };
}
