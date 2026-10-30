# Plano e Especificação de Casos de Testes Funcionais

**Sistema:** Velô Sprint - Configurador de Veículo Elétrico  
**Tipo de Testes:** Funcionais (Blackbox), Validação de Negócio, Regressão e Usabilidade  
**Perfil de Usuário Avaliado:** Cliente (Usuário Comum / Visitante)  
**Versão do Documento:** 1.0  
**Data:** 30/10/2026  

---

## 1. Visão Geral e Escopo

Este documento apresenta a suíte completa de casos de testes funcionais para a Single Page Application (SPA) web **Velô Sprint**. O objetivo principal é garantir a confiabilidade de ponta a ponta dos fluxos de configuração, cálculo dinâmico de preços, simulação de financiamento, regras decisórias de análise de crédito automática, emissão de pedidos e rastreabilidade de ordens de compra.

### Módulos Cobertos:
1. **Landing Page:** Apresentação da marca, destaques técnicos, seções de conversão (CTAs), menu responsivo e FAQ.
2. **Configurador de Veículo:** Seleção de cores externas, opções de rodas, opcionais tecnológicos e precificação dinâmica em tempo real.
3. **Checkout / Pedido:** Coleta de dados cadastrais, validação de campos obrigatórios, seleção da forma de pagamento (À Vista vs. Financiamento) e cálculo de parcelas com juros.
4. **Análise de Crédito Automática:** Avaliação de score via integração, validação de limites de risco e aplicação da regra de exceção por entrada de alta porcentagem (>= 50%).
5. **Confirmação:** Feedback visual do status do pedido (Aprovado, Reprovado ou Em Análise), detalhes da reserva e código identificador gerado.
6. **Consulta de Pedidos (Order Lookup):** Busca de status e detalhes do pedido mediante informe do código identificador único (`order_number`).
7. **Páginas Institucionais e Controle de Rotas:** Termos de Uso, Política de Privacidade e tratamento de rotas não mapeadas (404).

---

## 2. Matriz de Casos de Teste

| Identificador | Módulo | Descrição Resumida | Tipo de Cenário |
|:---:|:---|:---|:---:|
| **CT01** | Landing Page | Carregamento completo da página inicial e exibição dos elementos estruturais | Positivo (Fluxo Feliz) |
| **CT02** | Landing Page | Acesso ao configurador através do botão CTA principal da Hero Section | Positivo (Fluxo Feliz) |
| **CT03** | Landing Page | Acesso ao configurador através do botão CTA da seção inferior | Positivo (Fluxo Feliz) |
| **CT04** | Landing Page | Navegação mobile e alternância de abertura/fechamento do menu | Positivo / Usabilidade |
| **CT05** | Landing Page | Interação com acordeom de Perguntas Frequentes (FAQ) | Positivo / Funcional |
| **CT06** | Configurador | Carregamento do estado padrão de configuração e valor base | Positivo (Fluxo Feliz) |
| **CT07** | Configurador | Alteração de cor externa e atualização da renderização do veículo | Positivo / Visual |
| **CT08** | Configurador | Seleção de Rodas Esportivas (Sport Wheels) e cálculo de acréscimo | Positivo / Regra de Negócio |
| **CT09** | Configurador | Seleção individual do opcional "Precision Park" | Positivo / Regra de Negócio |
| **CT10** | Configurador | Seleção individual do opcional "Flux Capacitor" | Positivo / Regra de Negócio |
| **CT11** | Configurador | Combinação de rodas esportivas e múltiplos opcionais (preço integral) | Positivo / Regra de Negócio |
| **CT12** | Configurador | Desmarcação de opcionais e recálculo regressivo do preço | Positivo / Regra de Negócio |
| **CT13** | Configurador | Transição do configurador para a tela de checkout | Positivo (Fluxo Feliz) |
| **CT14** | Checkout | Submissão do formulário com todos os campos obrigatórios vazios | Negativo / Validação |
| **CT15** | Checkout | Submissão com formato de e-mail inválido | Negativo / Validação |
| **CT16** | Checkout | Submissão com telefone incompleto ou fora da máscara | Negativo / Validação |
| **CT17** | Checkout | Submissão com CPF incompleto ou com máscara truncada | Negativo / Validação |
| **CT18** | Checkout | Submissão sem selecionar a Loja de Retirada | Negativo / Validação |
| **CT19** | Checkout | Submissão sem aceite dos Termos de Uso e Política de Privacidade | Negativo / Validação |
| **CT20** | Checkout | Seleção da modalidade de pagamento À Vista | Positivo (Fluxo Feliz) |
| **CT21** | Checkout | Seleção de Financiamento sem entrada e cálculo de 12 parcelas com juros | Positivo / Regra de Negócio |
| **CT22** | Checkout | Simulação de Financiamento com entrada parcial e recálculo dinâmico | Positivo / Regra de Negócio |
| **CT23** | Checkout | Validação de valor de entrada inválido ou superior ao preço total | Negativo / Validação |
| **CT24** | Checkout | Retorno à tela do configurador sem perder dados | Positivo / Navegação |
| **CT25** | Análise de Crédito | Financiamento com Score Alto (> 700) e entrada inferior a 50% | Positivo / Regra de Negócio |
| **CT26** | Análise de Crédito | Financiamento com Score Médio (501 a 700) e entrada inferior a 50% | Positivo / Regra de Negócio |
| **CT27** | Análise de Crédito | Financiamento com Score Baixo (<= 500) e entrada inferior a 50% | Negativo / Regra de Negócio |
| **CT28** | Análise de Crédito | Exceção de Entrada Alta (>= 50%) com Score Baixo | Positivo / Regra de Exceção |
| **CT29** | Análise de Crédito | Exceção de Entrada Alta (>= 50%) com Score Médio | Positivo / Regra de Exceção |
| **CT30** | Análise de Crédito | Pedido com pagamento À Vista ignorando consulta de crédito | Positivo / Regra de Negócio |
| **CT31** | Análise de Crédito | Indisponibilidade ou falha de resposta no serviço de análise de crédito | Negativo / Resiliência |
| **CT32** | Confirmação | Apresentação da tela de sucesso para pedido Aprovado | Positivo (Fluxo Feliz) |
| **CT33** | Confirmação | Apresentação da tela de aviso para crédito Reprovado | Negativo / Feedback |
| **CT34** | Confirmação | Acesso direto à rota de confirmação sem pedido ativo (Proteção de Rota) | Negativo / Permissão |
| **CT35** | Confirmação | Navegação a partir da tela de sucesso para consulta do pedido | Positivo / Navegação |
| **CT36** | Confirmação | Navegação a partir da tela de sucesso para configuração de novo veículo | Positivo / Navegação |
| **CT37** | Consulta de Pedidos | Consulta com sucesso de pedido Aprovado pelo código de rastreio | Positivo (Fluxo Feliz) |
| **CT38** | Consulta de Pedidos | Consulta com sucesso de pedido Em Análise pelo código de rastreio | Positivo (Fluxo Feliz) |
| **CT39** | Consulta de Pedidos | Consulta com sucesso de pedido Reprovado pelo código de rastreio | Positivo (Fluxo Feliz) |
| **CT40** | Consulta de Pedidos | Consulta com código de pedido inexistente | Negativo / Tratamento |
| **CT41** | Consulta de Pedidos | Submissão de busca com campo de código vazio | Negativo / Validação |
| **CT42** | Consulta de Pedidos | Consulta com código em minúsculas ou com espaços adjacentes | Positivo / Robustez |
| **CT43** | Geral / Rotas | Acesso a rotas inexistentes (Página 404 Not Found) | Negativo / Roteamento |
| **CT44** | Geral / Legal | Visualização e navegação nas páginas de Termos de Uso e Privacidade | Positivo / Institucional |

---

## 3. Especificação Detalhada dos Casos de Teste

---

### CT01 - Carregamento completo da página inicial e exibição dos elementos estruturais

#### Objetivo
Validar que a Landing Page da aplicação é carregada integralmente com todos os seus blocos fundamentais (Header, Hero, Especificações, CTA, FAQ e Rodapé).

#### Pré-Condições
- O navegador web deve estar aberto e com conectividade ativa com a aplicação.
- URL base da aplicação acessível (`/`).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Acessar a URL raiz da aplicação (`/`). | A página carrega com sucesso exibindo o título da aba no navegador ("Velô by Papito" ou similar). |
| 2  | Observar a barra superior de navegação (Header). | O logotipo da Velô está visível à esquerda e os botões "Consultar Pedido" e "Configure o Seu" estão visíveis à direita. |
| 3  | Inspecionar a seção de destaque (Hero Section). | Exibe o badge "Novo Modelo 2026", o título "Velô Sprint", os textos descritivos e as estatísticas rápidas (450 km de autonomia, 3.2s 0-100 km/h, 500 cv). |
| 4  | Rolar a página até o rodapé (Footer). | São exibidos os links de modelos, canais de suporte, redes sociais, links legais e dados de direitos autorais. |

#### Resultados Esperados
- Todos os componentes da Landing Page são renderizados sem erros visuais, quebras de layout ou exceções no console do navegador.

#### Critérios de Aceitação
- A página deve possuir o atributo `data-testid="landing-page"`.
- O header fixo permanece visível no topo da página.
- Nenhuma imagem ou fonte deve apresentar falha de carregamento (404).

---

### CT02 - Acesso ao configurador através do botão CTA principal da Hero Section

#### Objetivo
Garantir que o botão de ação primária localizado na Hero Section redireciona o usuário diretamente para o fluxo de montagem do veículo.

#### Pré-Condições
- Aplicação acessada na Landing Page (`/`).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Localizar o botão "Configure Agora" (`hero-cta-primary`) na seção Hero. | O botão é visível e possui indicação interativa ao passar o ponteiro do mouse (hover). |
| 2  | Clicar no botão "Configure Agora". | O sistema realiza a navegação para a rota `/configure`. |
| 3  | Verificar o conteúdo da nova página carregada. | É exibida a interface do Configurador com o palco do carro à esquerda e o painel de opções à direita. |

#### Resultados Esperados
- O usuário é transferido imediatamente para a tela `/configure` sem recarregamento forçado da página (transição SPA).

#### Critérios de Aceitação
- A URL do navegador é alterada para `/configure`.
- O título do painel "Configure seu Velô Sprint" é exibido.

---

### CT03 - Acesso ao configurador através do botão CTA da seção inferior

#### Objetivo
Validar que o botão de Call-to-Action secundário posicionado no bloco "Pronto para o Futuro?" realiza a transição para o configurador.

#### Pré-Condições
- Aplicação acessada na Landing Page (`/`).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Rolar a página até a seção de CTA (`cta-section`). | A seção exibe a mensagem "Pronto para o Futuro?", a imagem do modelo em preto e o preço inicial "A partir de R$ 40.000". |
| 2  | Clicar no botão "Monte o Seu Agora" (`cta-button`). | O usuário é redirecionado para a rota `/configure`. |

#### Resultados Esperados
- Transição suave para o configurador mantendo a experiência do cliente.

#### Critérios de Aceitação
- A rota `/configure` é carregada com a configuração inicial padrão.

---

### CT04 - Navegação mobile e alternância de abertura/fechamento do menu

#### Objetivo
Verificar o funcionamento do menu hambúrguer e a navegação responsiva em telas de resolução reduzida (smartphones).

#### Pré-Condições
- Navegador configurado em viewport móvel (ex: 375x667 pixels).
- Aplicação acessada em `/`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Observar o cabeçalho em visualização mobile. | Os links desktop estão ocultos e o botão de menu hambúrguer (`header-menu-toggle`) está visível. |
| 2  | Tocar/clicar no botão hambúrguer. | O ícone alterna para o símbolo de fechar ("X") e o menu deslizante exibe as opções "Consultar Pedido" e "Configure o Seu". |
| 3  | Clicar no botão "Configure o Seu" dentro do menu mobile. | O menu é fechado e a página `/configure` é aberta. |

#### Resultados Esperados
- O menu abre e fecha com animação adequada sem sobreposições indevidas de tela.

#### Critérios de Aceitação
- Ação de clique no menu mobile responde em menos de 1 segundo.
- Redirecionamento correto para as rotas correspondentes.

---

### CT05 - Interação com acordeom de Perguntas Frequentes (FAQ)

#### Objetivo
Validar a expansão e o recolhimento das perguntas e respostas frequentes na Landing Page.

#### Pré-Condições
- Usuário posicionado na seção FAQ da Landing Page.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Localizar o primeiro item de pergunta do FAQ. | A pergunta está visível e a resposta correspondente encontra-se inicialmente oculta. |
| 2  | Clicar sobre a pergunta para expandi-la. | A caixa expande exibindo o texto explicativo completo e o ícone de seta inverte sua orientação. |
| 3  | Clicar novamente sobre a mesma pergunta. | A resposta é recolhida e retorna ao estado inicial colapsado. |

#### Resultados Esperados
- O componente Accordion responde de maneira suave e permite a leitura do conteúdo sem erros de renderização.

#### Critérios de Aceitação
- Apenas o item clicado tem seu conteúdo alternado.

---

### CT06 - Carregamento do estado padrão de configuração e valor base

#### Objetivo
Garantir que ao iniciar o configurador, o veículo é apresentado com os parâmetros de fábrica padrão e o valor base de R$ 40.000,00.

#### Pré-Condições
- Usuário acessa `/configure` com o estado local limpo ou padrão.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Acessar a rota `/configure`. | O configurador é carregado. |
| 2  | Observar a cor selecionada na seção de Cores. | A cor "Glacier Blue" está selecionada com anel de destaque. |
| 3  | Observar a seleção na seção de Rodas. | As rodas "Aero Wheels" estão selecionadas com indicação de "Incluso". |
| 4  | Verificar os itens da seção de Opcionais. | Os checkboxes "Precision Park" e "Flux Capacitor" estão ambos desmarcados. |
| 5  | Conferir o campo de Preço de Venda no rodapé do painel. | O elemento `total-price` exibe o valor exato de "R$ 40.000,00". |

#### Resultados Esperados
- O preço inicial do carro é R$ 40.000,00 e o palco exibe a imagem correspondente ao carro Glacier Blue com rodas Aero.

#### Critérios de Aceitação
- Preço exibido: `R$ 40.000,00`.
- Imagem visível no elemento `car-exterior-image`.

---

### CT07 - Alteração de cor externa e atualização da renderização do veículo

#### Objetivo
Validar que a troca da cor externa altera o estado da aplicação e substitui a imagem do veículo no palco visual sem alterar o preço base.

#### Pré-Condições
- Usuário na tela `/configure`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Clicar na opção de cor "Midnight Black" (`color-option-midnight-black`). | A opção fica com indicador selecionado; a imagem do carro é atualizada para a versão Midnight Black. |
| 2  | Verificar o valor em "Preço de Venda". | O valor permanece "R$ 40.000,00" (a troca de cor de série não altera o valor). |
| 3  | Clicar na opção de cor "Lunar White" (`color-option-lunar-white`). | A opção "Lunar White" fica selecionada e a imagem do veículo no palco muda para branco lunar. |
| 4  | Verificar o valor em "Preço de Venda". | O valor permanece inalterado em "R$ 40.000,00". |

#### Resultados Esperados
- A imagem do veículo reflete instantaneamente a cor escolhida pelo cliente e o valor final mantém-se fiel à tabela de preços.

#### Critérios de Aceitação
- `car-exterior-image` carrega o arquivo de imagem correspondente à cor ativa.
- Nenhuma cobrança extra é aplicada pelas cores de catálogo.

---

### CT08 - Seleção de Rodas Esportivas (Sport Wheels) e cálculo de acréscimo

#### Objetivo
Validar que a escolha das rodas do tipo "Sport" adiciona o valor de R$ 2.000,00 ao montante total e atualiza a renderização gráfica do veículo.

#### Pré-Condições
- Usuário na tela `/configure` com configuração base (preço de R$ 40.000,00).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Localizar o card "Sport Wheels" na seção Rodas (`wheel-option-sport`). | O card exibe a legenda "+ R$ 2.000,00". |
| 2  | Clicar sobre a opção "Sport Wheels". | A opção é ativada com borda de destaque e botão rádio preenchido. |
| 3  | Inspecionar o palco do carro (`car-exterior-image`). | A imagem é atualizada para exibir o modelo equipado com rodas esportivas. |
| 4  | Verificar o Preço de Venda (`total-price`). | O valor é recalculado imediatamente para "R$ 42.000,00". |

#### Resultados Esperados
- O preço total do veículo passa de R$ 40.000,00 para R$ 42.000,00 (acréscimo exato de R$ 2.000,00).

#### Critérios de Aceitação
- Preço total exibido: `R$ 42.000,00`.
- O elemento `wheel-option-sport` exibe estado selecionado ativo.

---

### CT09 - Seleção individual do opcional "Precision Park"

#### Objetivo
Validar que a inclusão do pacote de estacionamento autônomo "Precision Park" adiciona exatamente R$ 5.500,00 ao preço total.

#### Pré-Condições
- Usuário na tela `/configure` com rodas Aero (preço de R$ 40.000,00).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Localizar o opcional "Precision Park" (`opt-precision-park`) na seção de Opcionais. | Exibe a descrição do sistema autônomo e o acréscimo de "+ R$ 5.500,00". |
| 2  | Clicar no checkbox de "Precision Park". | A caixa de seleção é marcada como selecionada. |
| 3  | Verificar o Preço de Venda (`total-price`). | O valor é recalculado para "R$ 45.500,00" (R$ 40.000,00 + R$ 5.500,00). |

#### Resultados Esperados
- O valor de R$ 5.500,00 é somado ao subtotal do veículo em tempo real.

#### Critérios de Aceitação
- Elemento `total-price` exibe `R$ 45.500,00`.

---

### CT10 - Seleção individual do opcional "Flux Capacitor"

#### Objetivo
Validar que a inclusão da estação de recarga ultra-rápida "Flux Capacitor" adiciona exatamente R$ 5.000,00 ao preço total.

#### Pré-Condições
- Usuário na tela `/configure` em estado base (preço de R$ 40.000,00).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Localizar o opcional "Flux Capacitor" (`opt-flux-capacitor`). | Exibe a descrição da estação de recarga doméstica e o acréscimo de "+ R$ 5.000,00". |
| 2  | Clicar no checkbox de "Flux Capacitor". | O checkbox fica marcado com preenchimento visual. |
| 3  | Inspecionar o Preço de Venda (`total-price`). | O valor é recalculado para "R$ 45.000,00" (R$ 40.000,00 + R$ 5.000,00). |

#### Resultados Esperados
- O valor de R$ 5.000,00 é somado ao preço total do veículo.

#### Critérios de Aceitação
- Elemento `total-price` exibe `R$ 45.000,00`.

---

### CT11 - Combinação de rodas esportivas e múltiplos opcionais (preço integral)

#### Objetivo
Validar a precisão aritmética do sistema quando todos os opcionais pagos e rodas esportivas são selecionados simultaneamente.

#### Pré-Condições
- Usuário na tela `/configure`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Selecionar as rodas "Sport Wheels" (`wheel-option-sport`). | Acréscimo de R$ 2.000,00 (Total parcial: R$ 42.000,00). |
| 2  | Marcar o checkbox "Precision Park" (`opt-precision-park`). | Acréscimo de R$ 5.500,00 (Total parcial: R$ 47.500,00). |
| 3  | Marcar o checkbox "Flux Capacitor" (`opt-flux-capacitor`). | Acréscimo de R$ 5.000,00 (Total final: R$ 52.500,00). |
| 4  | Conferir o elemento de Preço de Venda (`total-price`). | Exibe o total formatado de "R$ 52.500,00". |

#### Resultados Esperados
- A soma `40.000 + 2.000 + 5.500 + 5.000` resulta exatamente em `R$ 52.500,00`.

#### Critérios de Aceitação
- O valor exibido em `total-price` é rigorosamente `R$ 52.500,00`.

---

### CT12 - Desmarcação de opcionais e recálculo regressivo do preço

#### Objetivo
Garantir que a desmarcação de itens opcionais deduz de forma consistente os valores anteriormente acrescidos.

#### Pré-Condições
- Veículo configurado no valor de R$ 52.500,00 (todos os opcionais e rodas Sport selecionados).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Desmarcar o checkbox "Precision Park" (`opt-precision-park`). | O valor total passa de R$ 52.500,00 para R$ 47.000,00. |
| 2  | Desmarcar o checkbox "Flux Capacitor" (`opt-flux-capacitor`). | O valor total passa de R$ 47.000,00 para R$ 42.000,00. |
| 3  | Clicar na opção "Aero Wheels" (`wheel-option-aero`). | O valor total retorna para o valor base de R$ 40.000,00. |

#### Resultados Esperados
- O preço retrocede perfeitamente para o valor base sem manter resquícios de cálculos anteriores.

#### Critérios de Aceitação
- Preço final restabelecido em `R$ 40.000,00`.

---

### CT13 - Transição do configurador para a tela de checkout

#### Objetivo
Validar que clicar no botão de fechamento do configurador encaminha o cliente para a página de pedido preservando todas as personalizações selecionadas.

#### Pré-Condições
- Veículo configurado com cor "Midnight Black", rodas "Sport Wheels" e opcional "Precision Park" (Preço: R$ 47.500,00).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Clicar no botão "Monte o Seu" (`checkout-button`) no rodapé do configurador. | O navegador transita para a rota `/order`. |
| 2  | Observar o painel "Resumo" na lateral direita do checkout. | Exibe imagem do veículo preto com rodas sport, cor "Midnight Black", rodas "Sport Wheels", opcional "Precision Park (+ R$ 5.500,00)" e total de "R$ 47.500,00". |

#### Resultados Esperados
- O estado configurado persiste integralmente no resumo do pedido na página `/order`.

#### Critérios de Aceitação
- A rota atual é `/order`.
- O valor no elemento `summary-total-price` é igual a `R$ 47.500,00`.

---

### CT14 - Submissão do formulário com todos os campos obrigatórios vazios

#### Objetivo
Garantir que o sistema impeça a submissão do pedido quando os campos obrigatórios não forem preenchidos, exibindo as devidas mensagens de validação.

#### Pré-Condições
- Usuário na página `/order` com formulário totalmente em branco e checkbox de termos desmarcado.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Rolar até o final do formulário e clicar no botão "Confirmar Pedido" (`checkout-submit`). | O envio é bloqueado; a página não é recarregada nem redirecionada. |
| 2  | Inspecionar o campo "Nome" (`checkout-name`). | Borda avermelhada e mensagem "Nome deve ter pelo menos 2 caracteres". |
| 3  | Inspecionar o campo "Sobrenome" (`checkout-surname`). | Borda avermelhada e mensagem "Sobrenome deve ter pelo menos 2 caracteres". |
| 4  | Inspecionar o campo "Email" (`checkout-email`). | Borda avermelhada e mensagem "Email inválido". |
| 5  | Inspecionar o campo "Telefone" (`checkout-phone`). | Borda avermelhada e mensagem "Telefone inválido". |
| 6  | Inspecionar o campo "CPF" (`checkout-cpf`). | Borda avermelhada e mensagem "CPF inválido". |
| 7  | Inspecionar a seleção de Loja (`checkout-store`). | Mensagem de erro "Selecione uma loja". |
| 8  | Inspecionar o aceite dos termos (`checkout-terms`). | Mensagem de erro "Aceite os termos". |

#### Resultados Esperados
- Todas as mensagens de obrigatoriedade são exibidas e nenhum pedido é submetido à base de dados.

#### Critérios de Aceitação
- Exibição de 7 mensagens de erro correspondentes aos campos obrigatórios.
- Botão "Confirmar Pedido" permanece na tela sem disparar transição.

---

### CT15 - Submissão com formato de e-mail inválido

#### Objetivo
Validar que a entrada de um e-mail fora dos padrões sintáticos (sem '@' ou domínio) é rejeitada pelo validador.

#### Pré-Condições
- Usuário na página `/order`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Preencher o campo Nome com "Carlos". | Campo aceito. |
| 2  | Preencher o campo Sobrenome com "Silva". | Campo aceito. |
| 3  | Digitar no campo Email o valor `usuario.invalido.com` (sem arroba). | Texto inserido no campo. |
| 4  | Preencher os demais campos com dados válidos e marcar os termos. | Campos preenchidos. |
| 5  | Clicar no botão "Confirmar Pedido". | Submissão interrompida; mensagem "Email inválido" é apresentada abaixo do campo de e-mail. |

#### Resultados Esperados
- O formulário identifica o erro sintático de e-mail e não permite avançar.

#### Critérios de Aceitação
- Mensagem de erro "Email inválido" visível sob o campo.

---

### CT16 - Submissão com telefone incompleto ou fora da máscara

#### Objetivo
Garantir que a máscara telefônica `(99) 99999-9999` exija todos os dígitos e impeça envios incompletos.

#### Pré-Condições
- Usuário na tela `/order`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Clicar no campo "Telefone" (`checkout-phone`). | A máscara de entrada é ativada. |
| 2  | Digitar apenas 5 dígitos (ex: "11987"). | O campo exibe a máscara parcialmente preenchida `(11) 987__-____`. |
| 3  | Preencher os demais campos com dados válidos e clicar em "Confirmar Pedido". | A validação do schema Zod identifica comprimento inferior a 14 caracteres e exibe "Telefone inválido". |

#### Resultados Esperados
- Bloqueio de submissão para números de telefone incompletos.

#### Critérios de Aceitação
- Mensagem "Telefone inválido" exibida em destaque vermelho.

---

### CT17 - Submissão com CPF incompleto ou com máscara truncada

#### Objetivo
Verificar que números de CPF incompletos impedem o avanço do pedido.

#### Pré-Condições
- Usuário na tela `/order`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Clicar no campo "CPF" (`checkout-cpf`). | A máscara `999.999.999-99` é disponibilizada. |
| 2  | Digitar apenas 8 dígitos (ex: "12345678"). | O campo formata parcialmente `123.456.78_-__`. |
| 3  | Tentar submeter o formulário. | A validação falha e exibe a mensagem "CPF inválido". |

#### Resultados Esperados
- O sistema exige os 11 dígitos numéricos formatados para prosseguir.

#### Critérios de Aceitação
- Exibição da mensagem "CPF inválido".

---

### CT18 - Submissão sem selecionar a Loja de Retirada

#### Objetivo
Garantir que o cliente seja obrigado a selecionar uma das concessionárias Velô para retirada do veículo elétrico.

#### Pré-Condições
- Usuário na tela `/order` com dados cadastrais preenchidos e termos aceitos, porém sem selecionar a loja.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Deixar o seletor "Loja para Retirada" (`checkout-store`) com o placeholder "Selecione uma loja". | Nenhuma unidade selecionada. |
| 2  | Clicar em "Confirmar Pedido". | A mensagem "Selecione uma loja" é exibida sob o select. |
| 3  | Clicar no seletor e escolher "Velô Paulista - Av. Paulista, 1000". | O valor é selecionado e a mensagem de erro desaparece instantaneamente. |

#### Resultados Esperados
- A obrigatoriedade do ponto de retirada é respeitada e o erro é limpo após a seleção válida.

#### Critérios de Aceitação
- A lista de lojas exibe as unidades disponíveis: Velô Paulista, Velô Faria Lima, Velô Morumbi e Velô Ibirapuera.

---

### CT19 - Submissão sem aceite dos Termos de Uso e Política de Privacidade

#### Objetivo
Validar que a finalização da compra requer obrigatoriamente a concordância expressa com as cláusulas legais.

#### Pré-Condições
- Todos os campos de cadastro preenchidos corretamente, com checkbox de termos desmarcado.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Deixar o checkbox "checkout-terms" desmarcado. | O checkbox permanece em estado falso (`checked=false`). |
| 2  | Clicar no botão "Confirmar Pedido". | O sistema interrompe o processamento e exibe a mensagem "Aceite os termos" em vermelho. |
| 3  | Marcar o checkbox "checkout-terms". | A caixa é preenchida e a mensagem de erro é removida. |

#### Resultados Esperados
- Nenhuma compra é registrada sem a declaração afirmativa do cliente.

#### Critérios de Aceitação
- Erro "Aceite os termos" exibido quando o checkbox não estiver assinalado.

---

### CT20 - Seleção da modalidade de pagamento À Vista

#### Objetivo
Validar a seleção do pagamento À Vista, conferindo a exibição do valor total integral sem cobrança de juros e sem solicitação de entrada.

#### Pré-Condições
- Usuário na tela `/order` com veículo de R$ 40.000,00 configurado.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Localizar a seção "Forma de Pagamento". | Os botões "À Vista" (`payment-avista`) e "Financiamento" (`payment-financiamento`) estão disponíveis. |
| 2  | Clicar no botão "À Vista". | O botão fica ativo com estilo destacado (borda primária e fundo secundário). |
| 3  | Observar o valor exibido no botão À Vista. | Exibe "R$ 40.000,00". |
| 4  | Verificar se o campo "Valor da Entrada" é exibido. | O campo de entrada NÃO está presente na tela para a modalidade à vista. |
| 5  | Verificar o total no card "Resumo". | Exibe exatamente "R$ 40.000,00". |

#### Resultados Esperados
- Modalidade à vista configurada sem campos desnecessários e com valor integral de R$ 40.000,00.

#### Critérios de Aceitação
- O campo `input-entry-value` não é visível no DOM.
- Preço total em `summary-total-price` igual a `R$ 40.000,00`.

---

### CT21 - Seleção de Financiamento sem entrada e cálculo de 12 parcelas com juros

#### Objetivo
Validar o acionamento da opção de financiamento travado em 12x, aplicando a taxa de juros de 2% ao mês sobre o montante integral quando não há entrada informada.

#### Pré-Condições
- Veículo com preço base de R$ 40.000,00 na tela `/order`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Clicar no botão "Financiamento" (`payment-financiamento`). | O botão é selecionado; a seção de parâmetros de financiamento é exibida. |
| 2  | Verificar o campo "Valor da Entrada" (`input-entry-value`). | Campo inicia vazio ou com R$ 0,00. |
| 3  | Inspecionar o quadro de detalhamento de financiamento. | Exibe: <br>- Valor a financiar: R$ 40.000,00 <br>- Parcela (12x): R$ 3.400,00 <br>- Taxa de juros: 2% a.m. <br>- Total financiado: R$ 40.800,00 <br>- Juros totais: R$ 800,00 |
| 4  | Observar o rótulo do botão Financiamento. | Exibe "12x de R$ 3.400,00". |
| 5  | Verificar o total no card Resumo (`summary-total-price`). | Exibe "R$ 40.800,00". |

#### Resultados Esperados
- O sistema calcula o financiamento em 12x de R$ 3.400,00 totalizando R$ 40.800,00 (acréscimo de R$ 800,00 referente à taxa de juros).

#### Critérios de Aceitação
- Parcela calculada: `R$ 3.400,00`.
- Total financiado: `R$ 40.800,00`.

---

### CT22 - Simulação de Financiamento com entrada parcial e recálculo dinâmico

#### Objetivo
Garantir que a inserção de um valor de entrada recalcule dinamicamente o saldo devedor a financiar, o valor das 12 parcelas e os juros decorrentes.

#### Pré-Condições
- Veículo de R$ 40.000,00 na tela `/order` com modalidade Financiamento selecionada.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Clicar no campo "Valor da Entrada" (`input-entry-value`). | Campo pronto para digitação. |
| 2  | Inserir o valor `10000` (R$ 10.000,00 de entrada). | O sistema atualiza o cálculo em tempo real. |
| 3  | Inspecionar o detalhamento do financiamento. | - Valor a financiar: R$ 30.000,00 (40.000 - 10.000) <br>- Parcela (12x): R$ 2.550,00 <br>- Total financiado: R$ 30.600,00 <br>- Juros totais: R$ 600,00 |
| 4  | Verificar o total do pedido no botão e no Resumo. | O botão de financiamento exibe "12x de R$ 2.550,00". |

#### Resultados Esperados
- O valor da parcela é reduzido proporcionalmente à entrada fornecida, mantendo a incidência de 2% a.m. apenas sobre o saldo devedor.

#### Critérios de Aceitação
- Parcela recalculada para `R$ 2.550,00`.
- Valor a financiar ajustado para `R$ 30.000,00`.

---

### CT23 - Validação de valor de entrada inválido ou superior ao preço total

#### Objetivo
Garantir a integridade dos dados impedindo que o usuário informe valores negativos ou superiores ao montante total do veículo no campo de entrada.

#### Pré-Condições
- Veículo no valor de R$ 40.000,00 no checkout com modalidade Financiamento.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Localizar o campo `input-entry-value`. | Campo exibe a indicação "Máximo: R$ 40.000,00" e propriedade `min=0`, `max=40000`. |
| 2  | Tentar digitar um valor negativo (ex: `-5000`). | O campo rejeita o caractere de subtração ou converte para `0`. |
| 3  | Digitar um valor superior ao total (ex: `50000`). | O sistema não permite financiar valor negativo ou limita o cálculo ao teto da compra. |

#### Resultados Esperados
- O campo restringe a entrada a valores no intervalo compreendido entre 0 e o valor total do veículo.

#### Critérios de Aceitação
- O valor a financiar nunca atinge números negativos (`amountToFinance >= 0`).

---

### CT24 - Retorno à tela do configurador sem perder dados

#### Objetivo
Verificar que o cliente pode retornar ao configurador através do botão de voltar para revisar opções sem quebrar o fluxo.

#### Pré-Condições
- Usuário na página `/order`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Localizar a seta de retorno ("Voltar") no cabeçalho da página de checkout. | O botão é visível e acessível. |
| 2  | Clicar no botão de retorno. | O navegador transita de volta para a rota `/configure`. |
| 3  | Inspecionar as opções selecionadas no configurador. | Todas as escolhas anteriores (cor, rodas e opcionais) permanecem preservadas no estado da aplicação. |

#### Resultados Esperados
- Retorno transparente ao configurador permitindo ajustes no veículo.

#### Critérios de Aceitação
- URL volta para `/configure` e as seleções anteriores continuam ativas.

---

### CT25 - Financiamento com Score Alto (> 700) e entrada inferior a 50%

#### Objetivo
Validar a aprovação automática de crédito para clientes que possuem score de crédito superior a 700 em compras financiadas.

#### Pré-Condições
- Veículo configurado no valor de R$ 40.000,00 na página `/order`.
- CPF cadastrado na base Serasa/Experian com score simulado de 850 (Score > 700).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Preencher os dados pessoais com CPF de Score Alto (ex: Score 850). | Dados cadastrais validados. |
| 2  | Selecionar a modalidade "Financiamento". | Modalidade parcelada ativada. |
| 3  | Informar entrada de R$ 5.000,00 (12,5% do total, ou seja, < 50%). | Parcela calculada sobre saldo restante. |
| 4  | Aceitar os termos e clicar em "Confirmar Pedido". | Botão entra em estado de carregamento com texto "Processando...". |
| 5  | Aguardar o processamento da chamada à API de análise de crédito. | A API retorna `score: 850`. A regra avalia `score > 700` e define o status como `APROVADO`. |
| 6  | Observar a tela de redirecionamento. | O sistema navega para a página `/success` exibindo status "Pedido Aprovado!". |

#### Resultados Esperados
- Pedido aprovado automaticamente e persistido no banco com status `APROVADO`.

#### Critérios de Aceitação
- Redirecionamento para `/success`.
- Título exibido: "Pedido Aprovado!".
- Código de pedido gerado no formato `VLO-XXXXXX`.

---

### CT26 - Financiamento com Score Médio (501 a 700) e entrada inferior a 50%

#### Objetivo
Validar que clientes com score entre 501 e 700 e entrada menor que 50% tenham o pedido encaminhado para o status "EM_ANALISE".

#### Pré-Condições
- Veículo na tela `/order` com modalidade Financiamento.
- CPF de teste com score simulado de 600 (501 <= Score <= 700).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Preencher o formulário com o CPF vinculado ao score 600. | Campos preenchidos. |
| 2  | Selecionar "Financiamento" e definir entrada de R$ 0,00 (< 50%). | Saldo devedor integral financiado. |
| 3  | Marcar aceite dos termos e clicar em "Confirmar Pedido". | Submissão iniciada. |
| 4  | O sistema consulta o endpoint de crédito e recebe `score: 600`. | A regra de negócio classifica o pedido com status `EM_ANALISE`. |
| 5  | O pedido é salvo no banco com status `EM_ANALISE`. | Redirecionamento para a tela final com os dados da solicitação. |

#### Resultados Esperados
- O pedido não é aprovado de imediato, ficando registrado no sistema sob análise da mesa de crédito.

#### Critérios de Aceitação
- Registro na base com `status = "EM_ANALISE"`.
- Código do pedido disponibilizado para acompanhamento futuro.

---

### CT27 - Financiamento com Score Baixo (<= 500) e entrada inferior a 50%

#### Objetivo
Validar a reprovação de crédito para clientes com score igual ou inferior a 500 e sem entrada suficiente.

#### Pré-Condições
- Veículo de R$ 40.000,00 na página `/order` com modalidade Financiamento.
- CPF de teste configurado com score de crédito 350 (Score <= 500).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Preencher os dados cadastrais utilizando o CPF com score 350. | Formulário válido. |
| 2  | Selecionar "Financiamento" com entrada de R$ 8.000,00 (20% do total, < 50%). | Entrada inferior a 50%. |
| 3  | Aceitar os termos legais e submeter o pedido. | Executa chamada à função de análise de crédito. |
| 4  | A API retorna `score: 350`. | Sistema aplica a regra `score <= 500` e define o status como `REPROVADO`. |
| 5  | Observar a tela de destino (`/success`). | Exibe ícone vermelho de reprovação, título "Crédito Reprovado" e orientação para tentar pagamento à vista. |

#### Resultados Esperados
- Pedido gravado como `REPROVADO` e cliente orientado sobre a recusa do crédito.

#### Critérios de Aceitação
- Elemento `success-status` exibe texto "Crédito Reprovado" em vermelho (`text-destructive`).
- Mensagem orientando pagamento à vista é exibida.

---

### CT28 - Exceção de Entrada Alta (>= 50%) com Score Baixo

#### Objetivo
Validar a regra de exceção de negócio onde uma entrada maior ou igual a 50% do valor total do veículo aprova o pedido compulsoriamente, mesmo que o cliente possua score baixo (<= 500).

#### Pré-Condições
- Veículo com valor total de R$ 40.000,00 na página `/order`.
- CPF de teste com score baixo simulado em 300 (que normalmente seria reprovado).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Preencher os dados cadastrais com o CPF de score 300. | Dados preenchidos. |
| 2  | Selecionar a modalidade "Financiamento". | Campo de entrada liberado. |
| 3  | Digitar no campo "Valor da Entrada" o montante de `20000` (exatamente 50% de R$ 40.000,00). | Entrada de 50% registrada. |
| 4  | Marcar o aceite dos termos e submeter o formulário. | Inicia a consulta de crédito. |
| 5  | O sistema recebe o score 300, mas avalia a condição de prioridade: `entryPercentage >= 0.5`. | A regra de exceção prevalece sobre o score e define o status como `APROVADO`. |
| 6  | Verificar a tela de confirmação (`/success`). | Tela de sucesso exibe "Pedido Aprovado!" com ícone verde. |

#### Resultados Esperados
- A regra de mitigação de risco por entrada elevada sobrepõe o score baixo, resultando na aprovação do pedido.

#### Critérios de Aceitação
- Pedido salvo com status `APROVADO`.
- Tela exibe "Pedido Aprovado!".

---

### CT29 - Exceção de Entrada Alta (>= 50%) com Score Médio

#### Objetivo
Garantir que a regra de entrada superior a 50% aprove imediatamente pedidos de clientes com score mediano (501 a 700), sem necessidade de aguardar análise manual.

#### Pré-Condições
- Veículo de R$ 50.000,00 configurado no checkout.
- CPF de teste com score 620 (faixa de análise).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Preencher o cadastro com o CPF de score 620. | Dados inseridos. |
| 2  | Escolher "Financiamento" e inserir entrada de `30000` (60% do total). | Entrada superior a 50%. |
| 3  | Confirmar o pedido. | Executa verificação. |
| 4  | O sistema constata entrada >= 50% e aprova o pedido de forma imediata. | Status gravado como `APROVADO`. |

#### Resultados Esperados
- Dispensa da fila de análise manual devido ao aporte de entrada significativo.

#### Critérios de Aceitação
- Status final do pedido: `APROVADO`.

---

### CT30 - Pedido com pagamento À Vista ignorando consulta de crédito

#### Objetivo
Verificar que pedidos realizados com a modalidade "À Vista" são aprovados sumariamente sem qualquer consulta à API de análise de crédito, independentemente do CPF do comprador.

#### Pré-Condições
- Usuário no checkout `/order` com qualquer configuração de veículo.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Preencher os dados pessoais com qualquer CPF válido. | Dados preenchidos. |
| 2  | Manter ou selecionar a opção de pagamento "À Vista" (`payment-avista`). | Modalidade à vista ativa. |
| 3  | Aceitar os termos e clicar em "Confirmar Pedido". | Pedido enviado sem invocar a Edge Function `credit-analysis`. |
| 4  | Verificar a velocidade de processamento e a tela de confirmação. | Pedido gerado instantaneamente com status `APROVADO`. |

#### Resultados Esperados
- Pedidos à vista não dependem de pontuação de crédito e são deferidos imediatamente.

#### Critérios de Aceitação
- Status gravado no banco: `APROVADO`.
- Redirecionamento para `/success` confirmando o pedido.

---

### CT31 - Indisponibilidade ou falha de resposta no serviço de análise de crédito

#### Objetivo
Validar o comportamento resiliente do sistema caso a API de análise de crédito apresente erro 500/502/503 ou falha de conexão de rede.

#### Pré-Condições
- Simulação de queda de rede ou endpoint `credit-analysis` indisponível.
- Usuário tentando finalizar compra via Financiamento.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Preencher o formulário completo e optar por Financiamento. | Formulário válido. |
| 2  | Clicar em "Confirmar Pedido". | Sistema tenta contato com o serviço de crédito. |
| 3  | O serviço de crédito retorna erro de servidor ou timeout. | O sistema captura a falha e interrompe o envio do pedido. |
| 4  | Observar a notificação na tela. | É exibido um Toast de erro destrutivo (`toast-error`) com a mensagem: "Falha ao consultar análise de crédito. Verifique seus dados ou tente mais tarde." |
| 5  | Verificar o estado do formulário e botão. | O usuário permanece na página `/order` com todos os dados preenchidos mantidos para nova tentativa. |

#### Resultados Esperados
- O sistema não quebra, não gera pedido inconsistente e orienta o cliente com mensagem clara.

#### Critérios de Aceitação
- Toast com `data-testid="toast-error"` é exibido.
- Nenhum registro corrompido é inserido no banco de dados.

---

### CT32 - Apresentação da tela de sucesso para pedido Aprovado

#### Objetivo
Garantir a correta exibição dos dados do pedido aprovado na página de confirmação (`/success`).

#### Pré-Condições
- Pedido acabou de ser aprovado via pagamento à vista ou crédito aprovado.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Acessar a tela de sucesso via transição legítima de compra aprovada. | Página `/success` exibida com animação de entrada. |
| 2  | Observar o cabeçalho de status. | Ícone circular verde com Check, título "Pedido Aprovado!" e mensagem de sucesso. |
| 3  | Inspecionar o card do veículo. | Exibe miniatura do carro, cor, acabamento interno, tipo de rodas e valor total. |
| 4  | Inspecionar a grade de detalhes do pedido. | Exibe: <br>- Número do Pedido (`order-id`) no padrão `VLO-XXXXXX` <br>- Nome completo do cliente <br>- E-mail cadastrado <br>- Loja de Retirada escolhida |

#### Resultados Esperados
- Todas as informações do pedido são apresentadas com clareza para o comprador.

#### Critérios de Aceitação
- Elemento `order-id` contém código com prefixo `VLO-`.
- A mensagem parabeniza o cliente pela aquisição.

---

### CT33 - Apresentação da tela de aviso para crédito Reprovado

#### Objetivo
Validar que a tela de resultado comunica a reprovação do crédito com clareza e oferece alternativas de prosseguimento.

#### Pré-Condições
- Pedido submetido com crédito reprovado (Score <= 500 sem entrada de 50%).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Chegar à tela `/success` após reprovação. | Exibe ícone circular vermelho com "X". |
| 2  | Verificar o título do status (`success-status`). | Exibe "Crédito Reprovado" em cor vermelha. |
| 3  | Ler o texto explicativo. | Exibe "Infelizmente seu crédito não foi aprovado. Tente novamente com pagamento à vista." |
| 4  | Verificar os botões de ação no rodapé da página. | Botão "Consultar Pedido" (`goto-consultar`) e "Configurar Outro" (`configure-another`) permanecem disponíveis. |

#### Resultados Esperados
- Comunicação transparente e sem bloqueio do cliente na aplicação.

#### Critérios de Aceitação
- Mensagem de orientação para pagamento à vista visível.

---

### CT34 - Acesso direto à rota de confirmação sem pedido ativo (Proteção de Rota)

#### Objetivo
Garantir que a página `/success` não possa ser visualizada sem um pedido válido presente no estado da navegação, redirecionando o usuário para a página inicial.

#### Pré-Condições
- Nenhuma compra foi concluída na sessão ativa do navegador.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Digitar diretamente na barra de endereços do navegador a URL `http://localhost:8080/success` (ou correspondente). | O navegador tenta carregar a rota. |
| 2  | Pressionar Enter. | O componente detecta a ausência de `location.state.order`. |
| 3  | Observar a tela para onde o navegador é redirecionado. | O sistema executa o redirecionamento imediato para a página inicial (`/`). |

#### Resultados Esperados
- Bloqueio de acesso indevido à tela de confirmação vazia.

#### Critérios de Aceitação
- URL final é `/`.
- Nenhuma mensagem de erro quebrada é exibida.

---

### CT35 - Navegação a partir da tela de sucesso para consulta do pedido

#### Objetivo
Validar que o botão "Consultar Pedido" na tela de confirmação transfere o usuário para a tela de busca de pedidos.

#### Pré-Condições
- Usuário na página `/success` após realizar um pedido.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Localizar o botão "Consultar Pedido" (`goto-consultar`). | Botão visível com contorno delineado. |
| 2  | Clicar no botão "Consultar Pedido". | O sistema redireciona para a rota `/lookup`. |
| 3  | Verificar a tela de destino. | Exibe a interface "Consultar Pedido" com campo para inserir o número do pedido. |

#### Resultados Esperados
- Transição imediata para a área de consulta.

#### Critérios de Aceitação
- URL atual passa a ser `/lookup`.

---

### CT36 - Navegação a partir da tela de sucesso para configuração de novo veículo

#### Objetivo
Validar que o botão "Configurar Outro" reseta o estado da configuração anterior e permite montar um novo carro do zero.

#### Pré-Condições
- Usuário na tela de sucesso `/success`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Clicar no botão "Configurar Outro" (`configure-another`). | Navegação para `/configure`. |
| 2  | Verificar as seleções do configurador. | O veículo retorna à configuração inicial de fábrica (Glacier Blue, rodas Aero, sem opcionais, R$ 40.000,00). |

#### Resultados Esperados
- O estado de personalização é resetado limpo para uma nova montagem.

#### Critérios de Aceitação
- Preço reiniciado em `R$ 40.000,00`.

---

### CT37 - Consulta com sucesso de pedido Aprovado pelo código de rastreio

#### Objetivo
Validar que a consulta de um pedido existente com status "APROVADO" retorna todos os dados corretos do veículo, do cliente e o badge verde de aprovação.

#### Pré-Condições
- Existência de um pedido com código válido (ex: `VLO-QNE15F`) cadastrado no banco com status APROVADO.
- Usuário na página `/lookup`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Inserir o código `VLO-QNE15F` no campo "Número do Pedido" (`order-id`). | O botão "Buscar Pedido" é habilitado. |
| 2  | Clicar no botão "Buscar Pedido". | O botão exibe estado de loading temporário ("Buscando..."). |
| 3  | Observar o card de resultado (`order-result-VLO-QNE15F`). | O card é renderizado com animação. |
| 4  | Inspecionar o badge de status. | Exibe fundo verde claro (`bg-green-100`), texto verde escuro (`text-green-700`), ícone de Check e o texto "APROVADO". |
| 5  | Conferir os dados exibidos. | Mostra o modelo Velô Sprint, a cor escolhida, as rodas, o nome do cliente, e-mail, data e forma de pagamento. |

#### Resultados Esperados
- O pedido aprovado é localizado e exibido com todos os dados cadastrais e financeiros protegidos e íntegros.

#### Critérios de Aceitação
- Badge contém o texto `APROVADO` com classe `bg-green-100`.
- O código exibido coincide exatamente com o código pesquisado.

---

### CT38 - Consulta com sucesso de pedido Em Análise pelo código de rastreio

#### Objetivo
Validar a consulta de um pedido com status "EM_ANALISE", confirmando a sinalização visual de cor âmbar e ícone de relógio.

#### Pré-Condições
- Pedido com status "EM_ANALISE" existente no sistema (ex: `VLO-P13BFS`).
- Usuário na página `/lookup`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Digitar o código `VLO-P13BFS` no campo de busca. | Código inserido. |
| 2  | Clicar em "Buscar Pedido". | Requisição enviada ao backend Supabase. |
| 3  | Verificar o badge de status retornado. | Exibe fundo âmbar (`bg-amber-100`), texto âmbar (`text-amber-700`), ícone de relógio (`lucide-clock`) e o texto "EM_ANALISE". |

#### Resultados Esperados
- Identificação precisa de que a proposta encontra-se sob auditoria de crédito.

#### Critérios de Aceitação
- O elemento `role="status"` exibe o texto `EM_ANALISE`.

---

### CT39 - Consulta com sucesso de pedido Reprovado pelo código de rastreio

#### Objetivo
Validar a consulta de um pedido cujo financiamento foi recusado, exibindo a sinalização visual vermelha de reprovação.

#### Pré-Condições
- Pedido reprovado existente na base (ex: `VLO-8XRTQ1`).
- Usuário na página `/lookup`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Inserir o código `VLO-8XRTQ1` no campo de pesquisa. | Código preenchido. |
| 2  | Clicar em "Buscar Pedido". | Carregamento realizado. |
| 3  | Avaliar a etiqueta de status. | Apresenta badge vermelho (`bg-red-100 text-red-700`), ícone de cancelamento ("X") e o texto "REPROVADO". |

#### Resultados Esperados
- Status reprovado informado com clareza.

#### Critérios de Aceitação
- O elemento `role="status"` exibe `REPROVADO` com estilo destrutivo/alerta.

---

### CT40 - Consulta com código de pedido inexistente

#### Objetivo
Garantir que a tentativa de consultar um código de pedido inexistente exiba uma mensagem amigável de erro sem quebrar a aplicação.

#### Pré-Condições
- Usuário na página `/lookup`.
- Código aleatório inexistente (ex: `VLO-ZZZ999`).

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Digitar o código `VLO-ZZZ999` no campo "Número do Pedido". | Código digitado. |
| 2  | Clicar no botão "Buscar Pedido". | Executa busca no banco de dados. |
| 3  | Observar o resultado da busca. | Nenhum card de dados de pedido é exibido. É renderizado um card de alerta com ícone de erro. |
| 4  | Ler a mensagem de retorno. | Exibe o título "Pedido não encontrado" e a descrição "Verifique o número do pedido e tente novamente". |

#### Resultados Esperados
- Tratamento gracioso para buscas sem resultado.

#### Critérios de Aceitação
- Título exibido: "Pedido não encontrado".
- Descrição: "Verifique o número do pedido e tente novamente".

---

### CT41 - Submissão de busca com campo de código vazio

#### Objetivo
Verificar que o botão de pesquisa de pedidos permanece inativo quando nenhum caractere for inserido no campo de código.

#### Pré-Condições
- Usuário na página `/lookup`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Acessar a página com o campo de busca em branco. | O botão "Buscar Pedido" encontra-se desabilitado (`disabled`). |
| 2  | Digitar espaços em branco ("   "). | O botão permanece desabilitado devido ao tratamento `.trim()`. |
| 3  | Inserir ao menos um caractere alfanumérico. | O botão torna-se imediatamente habilitado para clique. |

#### Resultados Esperados
- Prevenção de requisições vazias desnecessárias ao banco de dados.

#### Critérios de Aceitação
- Botão "Buscar Pedido" possui atributo `disabled` enquanto o input estiver vazio.

---

### CT42 - Consulta com código em minúsculas ou com espaços adjacentes

#### Objetivo
Validar a robustez do mecanismo de busca ao normalizar códigos digitados com letras minúsculas ou espaços em branco antes ou depois do texto.

#### Pré-Condições
- Pedido cadastrado com código `VLO-QNE15F`.
- Usuário na página `/lookup`.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Digitar no campo de busca o código em caracteres minúsculos com espaços: `  vlo-qne15f   `. | Texto inserido com caracteres minúsculos e espaços. |
| 2  | Clicar em "Buscar Pedido". | A função sanitiza com `.trim().toUpperCase()` e localiza o registro `VLO-QNE15F`. |
| 3  | Verificar o card de resultado. | O pedido é exibido com sucesso exatamente como se tivesse sido digitado em maiúsculas sem espaços. |

#### Resultados Esperados
- O sistema é tolerante a variações de digitação do cliente.

#### Critérios de Aceitação
- O pedido correspondente é retornado e exibido sem falhas.

---

### CT43 - Acesso a rotas inexistentes (Página 404 Not Found)

#### Objetivo
Garantir que URLs inválidas ou não mapeadas no roteador sejam capturadas pela rota coringa (`*`), exibindo a página 404 com opção de retorno à Home.

#### Pré-Condições
- Aplicação ativa em ambiente web.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Digitar na barra de endereços do navegador uma rota arbitrária (ex: `/rota-que-nao-existe`). | A requisição é processada pelo React Router. |
| 2  | Observar a página apresentada. | É exibida a tela de erro com o número "404", a mensagem "Oops! Page not found" e o link "Return to Home". |
| 3  | Clicar no link "Return to Home". | O usuário é reconduzido em segurança para a Landing Page (`/`). |

#### Resultados Esperados
- Ausência de tela branca ou erros não tratados para caminhos inexistentes.

#### Critérios de Aceitação
- Título "404" visível.
- Link de retorno conduz à raiz `/`.

---

### CT44 - Visualização e navegação nas páginas de Termos de Uso e Privacidade

#### Objetivo
Validar que as páginas de Termos de Uso (`/termos`) e Política de Privacidade (`/privacidade`) estão acessíveis e apresentam o conteúdo legal completo.

#### Pré-Condições
- Aplicação aberta em qualquer página com rodapé visível.

#### Passos

| Id | Ação | Resultado Esperado |
|:---|:-----|:-------------------|
| 1  | Rolar até o rodapé e clicar em "Termos de Uso". | A rota `/termos` é carregada exibindo as seções de Aceitação, Uso do Site, Reservas e Lei Aplicável. |
| 2  | Clicar no link "← Voltar para a página inicial". | Retorna à Landing Page. |
| 3  | Clicar no rodapé em "Política de Privacidade". | A rota `/privacidade` é carregada exibindo as diretrizes de tratamento de dados pessoais (LGPD). |

#### Resultados Esperados
- Páginas institucionais de conformidade jurídica plenamente funcionais e legíveis.

#### Critérios de Aceitação
- Ambas as rotas carregam com código de resposta HTTP 200 e textos legais completos.

