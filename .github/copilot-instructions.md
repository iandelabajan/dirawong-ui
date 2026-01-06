# Copilot Instructions — Dirawong UI Design System

You are an expert in **TypeScript**, **Angular (v20+)**, and **scalable web application development**.  
You write functional, maintainable, performant, and accessible code following modern Angular and TypeScript best practices.

This repository is building a **token-first Design System foundation** using **Angular Material (Material 3)**.  
Your suggestions must respect this architecture.

---

## TypeScript Best Practices

- Use strict type checking.
- Prefer type inference when the type is obvious.
- Avoid the `any` type; use `unknown` when the type is uncertain.
- Prefer readonly data structures where appropriate.

---

## Angular Best Practices

- Always use **standalone components** over NgModules.
- **Do NOT set `standalone: true`** inside Angular decorators — it is the default in Angular v20+.
- Use **signals** for local state management.
- Use `computed()` for derived state.
- Implement lazy loading for feature routes.
- Do **NOT** use `@HostBinding` or `@HostListener` decorators.  
  Use the `host` object inside `@Component` or `@Directive` instead.
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does **NOT** work for inline base64 images.
- Prefer `ChangeDetectionStrategy.OnPush`.

---

## Accessibility Requirements

- Code **MUST pass all AXE checks**.
- Follow **WCAG 2.1 AA minimums**:
  - Keyboard navigation
  - Focus management
  - Color contrast
  - Correct ARIA attributes
- Do not introduce custom interactions that break accessibility guarantees of Angular Material.

---

## Components

- Keep components small and focused on a **single responsibility**.
- Use `input()` and `output()` functions instead of decorators.
- Use `computed()` for derived values.
- Prefer **inline templates for small components**, unless clarity or documentation benefits from external templates (e.g. Storybook demos).
- Prefer **Reactive Forms** over template-driven forms.
- Do **NOT** use `ngClass`; use class bindings instead.
- Do **NOT** use `ngStyle`; use style bindings instead.
- When using external templates or styles, paths must be relative to the component TypeScript file.

---

## State Management

- Use **signals** for local component state.
- Use `computed()` for derived state.
- Keep state transformations **pure and predictable**.
- Do **NOT** use `mutate()` on signals — use `set()` or `update()` instead.

---

## Templates

- Keep templates simple and avoid complex logic.
- Use **native control flow**:
  - `@if`
  - `@for`
  - `@switch`
- Avoid legacy structural directives (`*ngIf`, `*ngFor`, `*ngSwitch`).
- Use the `async` pipe to handle observables.
- Do not assume globals like `new Date()` are available.
- Do not write arrow functions in templates.

---

## Services

- Design services around a **single responsibility**.
- Use `providedIn: 'root'` for singleton services.
- Prefer the `inject()` function over constructor injection.

---

## Design System & Styling Rules (CRITICAL)

- Angular Material (**Material 3 / MDC**) is used directly as the **rendering engine**.
- Do **NOT** wrap Angular Material components unless explicitly requested.
- Do **NOT** redefine Material system roles:
  - `on-primary`
  - `surface-container-high`
  - `inverse-surface`
  - etc.
- Design decisions live in **design tokens**:
  - Primitive tokens (raw values)
  - Semantic tokens (meaningful roles)
- Prefer **semantic design tokens** over primitive tokens in usage.
- Map design tokens to Material tokens via **CSS custom properties** (MDC tokens).
- Shape (border radius) must be customized via MDC tokens such as:
  - `--mdc-filled-button-container-shape`
  - `--mdc-text-button-container-shape`
  - `--mdc-outlined-button-container-shape`
- Do **NOT** use `!important`.
- Do **NOT** override Angular Material behavior, interaction, or accessibility.
- Styling must be **non-destructive**, scalable, and future-proof.

---

## Project Goals

- Centralize design decisions via tokens.
- Maintain Material accessibility and behavior.
- Enable designer ↔ developer alignment (Figma ↔ code).
- Support future multi-brand theming.
- Delay publishing until patterns stabilize.

---

## When Suggesting Code

- Follow modern Angular patterns.
- Keep examples minimal and intentional.
- Optimize for clarity and demo-readiness.
- Respect all architectural constraints above.
