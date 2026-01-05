# Template Custom Elements MFE React

## Visão Geral

Micro Frontend React encapsulado como **Custom Element**, renderizando React internamente no **Shadow DOM**.

## Tecnologias

- React
- Vite
- Custom Elements
- Shadow DOM
- Tailwind
- shadcn/ui

## Arquitetura

- Browser enxerga apenas um Custom Element
- React é apenas o renderer interno

## Estilos

- Tailwind + shadcn compilados em `mfe-shadow.css`
- Tokens aplicados em `:host`
- Tema via atributo `theme`

## Comunicação

O Shell injeta:

```ts
element.context = ShellContext;
```

O React consome via props.

## Build

```bash
npm run build
npm run serve
```
