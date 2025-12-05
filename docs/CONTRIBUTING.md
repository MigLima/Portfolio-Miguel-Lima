# 🤝 Contribuindo para o Portfólio

Obrigado pelo interesse em contribuir! Este documento fornece diretrizes para contribuir com o projeto.

## Como Contribuir

### 1. **Reportando Bugs**

Se você encontrou um bug:

- Verifique se o bug já foi reportado nas [Issues](https://github.com/MigLima/Portfolio-Miguel-Lima/issues)
- Se não, crie uma nova issue com:
  - Título claro e descritivo
  - Descrição detalhada do problema
  - Passos para reproduzir
  - Comportamento esperado vs. observado
  - Screenshots (se aplicável)
  - Seu ambiente (navegador, OS, etc)

### 2. **Sugerindo Melhorias**

Para sugerir melhorias:

- Abra uma issue com o título começando com `[FEATURE REQUEST]`
- Descreva a melhoria proposta
- Explique por que essa melhoria seria útil
- Liste exemplos de como ela funcionaria

### 3. **Pull Requests**

#### Preparando seu PR:

1. **Fork** o repositório
2. **Clone** seu fork localmente:

   ```bash
   git clone https://github.com/seu-usuario/Portfolio-Miguel-Lima.git
   cd Portfolio-Miguel-Lima
   ```

3. **Crie uma branch** para sua feature:

   ```bash
   git checkout -b feature/sua-feature
   # ou para bug fixes:
   git checkout -b fix/seu-bug
   ```

4. **Faça suas mudanças** seguindo as [Guidelines](#guidelines)

5. **Commit** com mensagens claras:

   ```bash
   git commit -m "feat: adicionar nova seção de certificados"
   git commit -m "fix: corrigir menu responsivo em mobile"
   ```

6. **Push** para sua branch:

   ```bash
   git push origin feature/sua-feature
   ```

7. **Abra um Pull Request** com:
   - Título descritivo
   - Descrição das mudanças
   - Referência a issues relacionadas (#123)
   - Screenshots se houver mudanças visuais

## Guidelines

### Estrutura de Código

#### HTML

- Use semântica HTML5 apropriada (`<section>`, `<article>`, `<nav>`, etc)
- Sempre inclua `alt` em imagens
- Adicione `aria-label` em elementos interativos
- Use classes BEM para organização

#### CSS

- Mantenha a paleta de cores consistente
- Use variáveis CSS para cores, fontes e espaçamentos
- Mobile-first: estile para mobile primeiro, depois adicione media queries
- Documente classes complexas com comentários

#### JavaScript

- Código limpo e legível
- Nomes descritivos para variáveis e funções
- Comente lógica complexa
- Use `const` por padrão, `let` quando necessário
- Evite `var`

### Naming Conventions

- **Arquivos**: `lowercase-com-hifen.ext`
- **Classes CSS**: `nome-descritivo` (kebab-case)
- **IDs**: Evite usar IDs para estilos
- **Variáveis JS**: `camelCase`
- **Funções JS**: `camelCase`

### Performance

- Otimize imagens (use formatos modernos como WebP)
- Minifique CSS/JS em produção
- Lazy-load imagens quando apropriado
- Evite bloqueadores de renderização

### Acessibilidade

- Contraste WCAG AAA mínimo
- Links com `rel="noopener noreferrer"` para links externos
- Campos de formulário com labels associados
- Navegação por teclado funcional

### Responsividade

- Breakpoints principais: 480px (mobile), 768px (tablet), 1024px (desktop)
- Teste em múltiplos dispositivos
- Use `em` ou `rem` para font-sizes

## Processo de Review

1. Seu PR será revisado por um mantenedor
2. Pode haver pedidos de mudanças
3. Após aprovação, seu PR será mesclado
4. Seu nome será adicionado à lista de contribuidores

## Código de Conduta

### Nossa Promessa

Estamos comprometidos em fornecer um ambiente acolhedor para todos, independentemente de:

- Idade, deficiência, etnia, identidade de gênero
- Nível de experiência, nacionalidade, aparência pessoal
- Raça, religião, identidade/orientação sexual

### Nossos Padrões

Exemplos de comportamento que contribuem para um ambiente positivo:

- Usar linguagem acolhedora e inclusiva
- Ser respeitoso com pontos de vista diferentes
- Aceitar críticas construtivas
- Focar no que é melhor para a comunidade
- Mostrar empatia com outros membros

### Aplicação

Comportamentos inaceitáveis incluem:

- Linguagem ou imagens sexualizadas
- Ataques pessoais ou políticos
- Assédio público ou privado
- Publicar informações privadas sem consentimento
- Outras condutas inadequadas

### Reportando Problemas

Se você presenciar comportamento inadequado:

- Reporte diretamente ao mantenedor
- Forneça detalhes sobre o incidente
- Mantenha a confidencialidade

## Dúvidas?

Sinta-se livre para:

- Abrir uma discussão no repositório
- Entrar em contato via email: miglimapires@gmail.com
- Comentar em uma issue existente

Obrigado por contribuir! 🎉
