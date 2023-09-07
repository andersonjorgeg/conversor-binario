# Conversor Binário para Decimal

Este é um projeto React que implementa um Conversor Binário para Decimal simples. Ele permite que os usuários ingressem números binários de até 8 dígitos e converte-os em seus equivalentes decimais. Se a entrada não for válida, o usuário receberá uma mensagem de erro.

## Funcionalidades

- Conversão de números binários para decimais.
- Validação da entrada para garantir que apenas 0s e 1s sejam aceitos.
- Limitação da entrada a 8 dígitos binários.
- Exibição de mensagens de erro quando a entrada é inválida.
- Interface de usuário amigável com feedback visual.

## Como usar

1. Clone este repositório para o seu ambiente local.
2. Certifique-se de ter o ambiente Node.js e npm configurados.
3. Navegue até a pasta raiz do projeto e execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   ```

4. Após a instalação das dependências, você pode iniciar o aplicativo com o seguinte comando:

   ```bash
   npm start
   ```

5. O aplicativo será iniciado e você poderá acessá-lo em seu navegador no endereço `http://localhost:3000` por padrão.

6. Digite um número binário de até 8 dígitos no campo de entrada.

7. Clique no botão "Converter" para ver o equivalente decimal na tela.

8. Se a entrada não for válida, você verá uma mensagem de erro abaixo do campo de entrada.

## Tecnologias Utilizadas

- **Next.js**: O framework JavaScript de código aberto para construção de aplicativos React do lado do servidor (SSR) e estáticos.

- **Tailwind CSS**: Um framework CSS utilitário altamente personalizável para criação de interfaces de usuário responsivas e elegantes.

- **TypeScript**: Uma linguagem de programação tipada que se integra perfeitamente com o JavaScript, fornecendo erros de tipo em tempo de compilação e melhorando a manutenção e escalabilidade do código.

- **npm**: Gerenciador de pacotes para instalação e gerenciamento de dependências do projeto.

## Estrutura do Projeto

- `src/ConversorBinario.js`: O componente React principal que implementa o conversor binário para decimal.
- `src/InputField.js`: Componente de entrada de texto reutilizável.
- `src/utils/binarioParaDecimal.js`: Função que realiza a conversão de binário para decimal.
- `src/index.js`: Ponto de entrada do aplicativo React.
- Outros arquivos no diretório `src` para estilos e recursos.

## Autor

- Anderson Jorge

---

Sinta-se à vontade para personalizar e estender este projeto de acordo com suas necessidades. Divirta-se convertendo números binários para decimais!
