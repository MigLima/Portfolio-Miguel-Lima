# 🏗️ Arquitetura do Projeto

Descrição da estrutura arquitetural e componentes do portfólio.

## Visão Geral

O portfólio é um site estático desenvolvido com **HTML5, CSS3 e JavaScript vanilla**, sem dependências externas (exceto bibliotecas de ícones e fontes CDN).

### Stack Tecnológico

```
Frontend
├── HTML5 (Estrutura semântica)
├── CSS3 (Flexbox, Grid, Animações)
├── JavaScript ES6+ (Interatividade)
├── Google Fonts (Tipografia)
├── Font Awesome (Ícones)
└── Devicons (Ícones de skills)

Serviços Externos
├── FormSubmit (Envio de formulários)
├── Netlify (Hosting)
└── GitHub (Versionamento)
```

## Estrutura de Pastas

```
Portfolio-Miguel-Lima/
│
├── 📄 Raiz (Configuração)
│   ├── index.html
│   ├── README.md
│   ├── package.json
│   ├── .gitignore
│   └── LICENSE
│
├── 📁 docs/ (Documentação Técnica)
│   ├── CONTRIBUTING.md (Guia de contribuição)
│   ├── DEPLOYMENT.md (Guia de deploy)
│   ├── ARCHITECTURE.md (Este arquivo)
│   └── GUIDELINES.md (Padrões de código)
│
├── 📁 css/ (Estilos)
│   └── style.css (Estilos unificados)
│
├── 📁 js/ (Lógica)
│   └── script.js (Comportamentos e interatividade)
│
└── 📁 assets/ (Recursos)
    ├── images/
    │   ├── profile/ (Fotos de perfil)
    │   └── projects/ (Imagens de projetos)
    ├── documents/
    │   └── resume/ (Currículo PDF)
    └── favicons/
        └── favicon.png
```

## Componentes Principais

### 1. **HTML (index.html)**

O arquivo principal contém a estrutura semântica:

```
<html>
  ├── <head> (Metadados, links CSS, fontes)
  │   ├── Meta tags (SEO, viewport)
  │   ├── <title> (Título da página)
  │   ├── Links CSS
  │   └── Favicon
  │
  └── <body>
      ├── <nav class="navbar"> (Navegação fixa)
      ├── <main>
      │   ├── <section id="sobre"> (Apresentação)
      │   ├── <section id="projetos"> (Carrossel)
      │   ├── <section id="skills"> (Grid de skills)
      │   └── <section id="contato"> (Formulário)
      ├── <footer> (Rodapé)
      └── <script> (JavaScript)
```

#### Seções

| Seção    | ID          | Propósito                         |
| -------- | ----------- | --------------------------------- |
| Navbar   | -           | Menu de navegação fixo            |
| Sobre    | `#sobre`    | Apresentação + foto + habilidades |
| Projetos | `#projetos` | Carrossel com navegação           |
| Skills   | `#skills`   | Grid de ícones de habilidades     |
| Contato  | `#contato`  | Links sociais + formulário        |
| Footer   | -           | Informações finais                |

### 2. **CSS (style.css)**

Arquivo único com todo o estilo (899 linhas):

```
Ordem lógica:
1. Reset e configurações globais
2. Variáveis de cor (custom properties)
3. Componentes (navbar, seções, etc)
4. Animações
5. Media queries (responsividade)
```

#### Principais Classes

```css
/* Layout */
.navbar {
} /* Menu fixo */
main {
} /* Container principal */
section {
} /* Seções principais */

/* Componentes */
.sobre {
} /* Seção de apresentação */
.carrossel {
} /* Carrossel de projetos */
.projeto {
} /* Card de projeto */
.skills {
} /* Grid de skills */

/* Interatividade */
.hamburger {
} /* Menu mobile */
.nav-links.active {
} /* Menu aberto */
.projeto:hover {
} /* Efeitos hover */
```

#### Paleta de Cores

```css
--bg-dark: #111; /* Fundo principal */
--bg-secondary: #222; /* Fundo secundário */
--text-primary: #e8e8e8; /* Texto principal */
--text-secondary: #f5f5f5; /* Texto destaque */
--accent: #7c3aed; /* Cor de destaque (roxa) */
--accent-hover: #6d28d9; /* Hover da cor de destaque */
```

#### Responsividade

```css
/* Mobile First */
/* Estilos padrão para mobile */

/* Tablet (768px+) */
@media (min-width: 768px) {
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
}
```

### 3. **JavaScript (script.js)**

Arquivo com ~106 linhas, contém:

```javascript
// 1. Carrossel
- const slides, projetos, btnAnterior, btnProximo
- mostrarSlide() - Renderiza o slide atual
- avancarAutomaticamente() - Auto-play a cada 9s
- Event listeners - Navegação manual

// 2. Animação de Typing
- typeWriter() - Anima "Desenvolvedor Front-End"
- Ciclo: escrita → pausa → apagado → pausa

// 3. Menu Mobile (Hamburger)
- hamburger.click() - Toggle menu
- links.click() - Fechar menu ao navegar

// 4. Scroll Suave
- logoLink.click() - Volta ao topo com scroll smooth
```

#### Fluxo de Dados

```
User Interaction
     ↓
Event Listener
     ↓
Função (mostrarSlide, typeWriter, etc)
     ↓
DOM Manipulation
     ↓
Renderização Visual
```

## Data Flow (Fluxo de Dados)

### Carrossel de Projetos

```
User clica em "Próximo"
  ↓
btnProximo.addEventListener('click')
  ↓
index = (index + 1) % projetos.length
  ↓
mostrarSlide()
  ↓
slides.style.transform = `translateX(-${index * 100}%)`
  ↓
CSS transition anima o movimento
```

### Formulário de Contato

```
User preenche form + clica "Enviar"
  ↓
form action="https://formsubmit.co/..."
  ↓
POST request para FormSubmit
  ↓
Email enviado para miglimapires@gmail.com
  ↓
Redirect para página de sucesso
```

## Dependências Externas

### CDNs

| Recurso      | URL                  | Propósito                |
| ------------ | -------------------- | ------------------------ |
| Google Fonts | googleapis.com       | Tipografia (Inter, Lora) |
| Font Awesome | cdnjs.cloudflare.com | Ícones de redes sociais  |
| Devicons     | cdn.jsdelivr.net     | Ícones de tecnologias    |

### Serviços

| Serviço    | Propósito                        |
| ---------- | -------------------------------- |
| FormSubmit | Envio de formulários sem backend |
| Netlify    | Hosting e deployment             |
| GitHub     | Versionamento e repositório      |

## Performance

### Otimizações Implementadas

- ✅ Site estático (sem servidor necessário)
- ✅ Sem framework pesado (vanilla JS)
- ✅ Imagens otimizadas
- ✅ CSS unificado em 1 arquivo
- ✅ JavaScript unificado em 1 arquivo
- ✅ Fonts carregadas com `display=swap`
- ✅ Lazy loading em CDNs

### Métricas Esperadas (Lighthouse)

- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## Acessibilidade (WCAG AA+)

### Implementações

```
✅ Semântica HTML5 apropriada
✅ ARIA labels em botões e links
✅ Alt text em imagens
✅ Contraste WCAG AAA (16:1)
✅ Focus states visíveis
✅ Navegação por teclado
✅ Links externos com rel="noopener noreferrer"
```

## SEO

### Meta Tags

```html
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="author" content="Miguel Lima Pires" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
```

### Estrutura

```
<main> (contém todo conteúdo principal)
<h1> (único, título principal)
<h2>, <h3> (hierarquia correta)
<section> (agrupamento semântico)
<footer> (rodapé com info adicional)
```

## Escalabilidade Futura

### Recomendações para Crescimento

1. **Separar CSS em módulos**

   ```
   css/
   ├── variables.css (cores, fonts)
   ├── base.css (reset, globals)
   ├── components.css (componentes reutilizáveis)
   ├── layout.css (grid, flexbox)
   └── responsive.css (media queries)
   ```

2. **Modularizar JavaScript**

   ```
   js/
   ├── modules/
   │   ├── carousel.js
   │   ├── navigation.js
   │   └── animations.js
   └── utils/
       └── helpers.js
   ```

3. **Adicionar Build Tool** (Webpack, Vite)

   - Minificação automática
   - Otimização de imagens
   - Bundling

4. **Adicionar Testing**

   - Jest para testes de unidade
   - Cypress para testes E2E

5. **CI/CD Pipeline**
   - GitHub Actions para deploy automático
   - Pre-commit hooks para linting

## Segurança

### Implementações Atuais

- ✅ Links externos com `rel="noopener noreferrer"`
- ✅ Formulário via FormSubmit (terceirizado)
- ✅ Sem dados sensíveis no frontend
- ✅ HTTPS obrigatório no deployment

### Recomendações Futuras

- Implementar CSP (Content Security Policy)
- Rate limiting no formulário
- Input validation no backend

## Maintenance

### Checklist Regular

- [ ] Verificar links externos (mensal)
- [ ] Atualizar projetos/skills (conforme necessário)
- [ ] Revisar performance com Lighthouse (mensal)
- [ ] Atualizar dependências CDN (trimestral)
- [ ] Backup do repositório (semanal)

### Monitoramento

- Google Analytics (visitantes)
- Sentry (erros de JS)
- Netlify Analytics (performance)
- Google Search Console (indexação)

---

**Última atualização**: Dezembro 2025
**Versão**: 1.0.0
