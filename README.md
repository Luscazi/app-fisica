Keystore credentials
  Keystore password: -
  Key alias:         -
  Key password:      -

## API Calls

Servidor: https://estudefisica.herokuapp.com/

Entre no link acima para fazer o cadastro das categorias e questões.

### GET /api/categoria/{usuario}

Obtém as categorias contendo a nota do usuário. Passar o ExpoDevice como parâmetro na URL.

### GET /api/questao/random/{categoria}

Obtém questões aleatórias de uma categoria. Passar o id da categoria.

### POST /api/questao/correcao

Envia a tentativa do usuário para registro. Lembre-se de recarregar as categorias para obter o novo desempenho do usuário na categoria.