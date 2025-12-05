# 🚀 Guia de Deploy

Este documento descreve como fazer o deploy do portfólio em diferentes plataformas.

## Deploy na Netlify (Recomendado)

### Opção 1: Conectar via GitHub (Automático)

1. Acesse [Netlify](https://netlify.com)
2. Clique em **"New site from Git"**
3. Conecte sua conta GitHub
4. Selecione o repositório `Portfolio-Miguel-Lima`
5. Configure:
   - **Build command**: (deixe em branco - site estático)
   - **Publish directory**: `.` (raiz)
6. Clique em **"Deploy site"**

### Opção 2: Deploy Manual

1. Instale o Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Faça login:

   ```bash
   netlify login
   ```

3. Deploy a pasta:
   ```bash
   netlify deploy --prod --dir=.
   ```

## Deploy no GitHub Pages

### 1. Renomear o repositório (opcional)

Se desejar usar `seu-usuario.github.io`:

- Renomeie o repositório para `MigLima.github.io`
- O site estará disponível em `https://miglima.github.io`

### 2. Habilitar GitHub Pages

1. Vá para **Settings** → **Pages**
2. Em **Source**, selecione **Deploy from a branch**
3. Selecione a branch `main` e pasta `/root`
4. Clique em **Save**
5. Aguarde alguns minutos para o deploy

O site estará disponível em `https://miglima.github.io/Portfolio-Miguel-Lima`

## Deploy no Vercel

1. Instale o Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Execute:

   ```bash
   vercel
   ```

3. Siga as instruções
4. Confirme as configurações padrão

## Deploy Local (Desenvolvimento)

### Usar HTTP Server (Node.js)

```bash
# Se tiver Node.js instalado
npx http-server

# Ou instale globalmente
npm install -g http-server
http-server
```

O site estará em `http://localhost:8080`

### Usar Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

O site estará em `http://localhost:8000`

## Domínio Customizado

### Netlify

1. Vá para **Site settings** → **Domain management**
2. Clique em **Add custom domain**
3. Digite seu domínio
4. Configure os registros DNS do seu provedor:
   - CNAME: `seu-site.netlify.app`
   - Ou use os nameservers da Netlify

### GitHub Pages

1. Vá para **Settings** → **Pages**
2. Em **Custom domain**, digite seu domínio
3. Configure os registros DNS:
   - A records para os IPs do GitHub Pages
   - Ou CNAME para `username.github.io`

## HTTPS / SSL

- **Netlify**: Automático e gratuito (Let's Encrypt)
- **GitHub Pages**: Automático e gratuito
- **Vercel**: Automático e gratuito

## Otimizações Recomendadas

### Antes de Deploy

- [ ] Verificar links internos e externos
- [ ] Testar em múltiplos navegadores
- [ ] Verificar responsive em mobile
- [ ] Validar HTML com W3C
- [ ] Minificar CSS/JS (opcional para sites estáticos simples)
- [ ] Otimizar imagens
- [ ] Verificar performance com Lighthouse

### After Deployment

```bash
# Verificar status
curl -I https://seu-dominio.com

# Testar SEO
# Use ferramentas como:
# - Google PageSpeed Insights
# - Lighthouse
# - SEO Audit (Chrome DevTools)
```

## CI/CD (GitHub Actions)

Para automatizar testes antes de deploy (opcional):

Criar `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod
```

## Troubleshooting

### Site não carrega

- Verifique se todos os arquivos foram enviados
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Verifique o console do navegador (F12)

### Imagens não aparecem

- Verifique os caminhos (case-sensitive em Linux/Mac)
- Use caminhos relativos, não absolutos
- Verifique permissões de arquivo

### Links retornam 404

- Em GitHub Pages, não é necessário `/index.html` no final
- Para rotas customizadas, use `index.html` com anchor links

## Monitoramento

- Use Google Analytics para rastrear visitantes
- Use Sentry para erros de JavaScript
- Use Lighthouse regularmente para performance

## Support

Para dúvidas sobre deploy:

- Contate: miglimapires@gmail.com
- Abra uma issue no GitHub
- Consulte a documentação oficial da plataforma
