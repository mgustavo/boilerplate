# Boilerplate #
## Pré-Deploy ##
### URLs ###

#### Funcionamento ####

Mantive alguns códigos hospedados localmente para caso a internet esteja com muita latência, caia ou algum problema externo dificulte ou impossibilite o acesso aos arquivos do CDN.

Os arquivos estão organizados dentro das pastas plugins e lib. É interessante checar se existem novas versões além de somente subsituir os paths de local para os de CDNs.

#### Checklist ####

O que precisa ser trocado?

- HTML5 Fallback (html5shiv.js, para Internet Explorer 8 ou menor))
- jQuery (Fallback) (Versão Versão 1.9, para Internet Explorer 8 ou menor)
- jQuery (Comum) (Versão 2.0+, para browsers atualizados)

#### Snippets ####

##### HTML5 FallBack #####

```html
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```
##### jQuery #####

###### Para Internet Explorer #####

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
´´´

###### Normal (Para browsers modernos) #####

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
´´´
