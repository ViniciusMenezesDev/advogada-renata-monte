# Site — Renata Monte | Advogada

Landing page única e responsiva, feita com HTML/CSS/JS puro + Bootstrap 5 (via CDN), para publicação no GitHub Pages com domínio próprio `renatamonte.com.br`.

## Antes de publicar — substituir os placeholders

- **Dados da bio** (seção "Sobre" em `index.html`): preencher `[UF, nº OAB]`, `[Instituição de ensino]` e `[ano de formação]`.
- **Depoimentos** (seção "Depoimentos"): são todos de exemplo — substituir pelos depoimentos reais de clientes, com autorização deles para uso público.

## Como publicar no GitHub Pages com domínio próprio

1. Suba este conteúdo para um repositório no GitHub (branch `main`).
2. Em **Settings → Pages**, selecione a branch `main` e a pasta raiz (`/`) como fonte.
3. O arquivo `CNAME` já está configurado com `renatamonte.com.br` — o GitHub Pages usará esse domínio automaticamente.
4. No provedor de DNS do domínio `renatamonte.com.br`, configure:
   - Um registro **CNAME** apontando para `<seu-usuario>.github.io` (se usar subdomínio como `www`), **ou**
   - Registros **A** apontando para os IPs do GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
5. Aguarde a propagação do DNS e, em **Settings → Pages**, marque a opção **Enforce HTTPS**.

## Estrutura

```
index.html
CNAME
assets/
  css/style.css
  js/script.js
  img/favicon.svg
```

## Paleta de cores

| Uso        | Cor      |
|------------|----------|
| Primária (rosé) | `#8C3A4B` |
| Secundária (grafite) | `#3A3A3A` |
| Fundo | `#FFF8F6` |
| Texto | `#2A2A2A` |
