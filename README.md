# Front-end challenge

Features do projeto:

* Banners com [Swiper](https://swiperjs.com/).
* Barra de pesquisa funcional, que retorna os itens das categorias em "Seções".
* Validação no formulário de "Newsletter" no rodapé.
* Menu "Hambúrguer" nos dispositivos mobile.
* Seta para voltar ao topo da página.
* Total suporte ao navegador Microsoft Edge, suporte parcial ao navegador Internet Explorer.

Possíveis adições ao projeto:

* Integração com a API do Instagram na seção "Galeria".
* Animações na rolagem/ancoragem entre seções.
* Suporte total ao navegador Internet Explorer.

## Instruções para rodar o projeto

* Clone ou faça download deste repositório no seu computador.
* Tenha o [Node.js](https://nodejs.org/en/) no seu computador.
* Rode o comando `npm install` na raiz do projeto.
* Rode o comando `gulp build` na raiz do projeto para minificar os arquivos CSS e JS e movê-los para a pasta `/dist`.
* Abra o arquivo index.html no seu navegador para visualizar o projeto.

Neste projeto, o Gulp está configurado para rodar as seguintes funções:

* Compilar os arquivos SCSS em CSS.
* Adicionar Autoprefix e minificar o arquivo CSS.
* Concatenar os arquivos JS.
* Minificar os arquivos JS (Uglify).
* Mover o CSS e JS final para a pasta `/dist`.
