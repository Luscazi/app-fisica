import React, { useEffect, useState, useContext } from 'react';
import { Text, View } from 'react-native';
import API from '../Services/API';
import Questao from './Questao';
import AppContext from '../Contexts/AppContext';

const Questoes = (props) => {
  const { navigation } = props;
  const dados = props.route.params;
  const [questoes, setQuestoes] = useState([]);
  const [atual, setAtual] = useState({});
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [respostas, setRespostas] = useState([]);

  const context = useContext(AppContext);

  // trasforma as questões em um array
  function listarQuestoes() {
    const vetor = [];
    for (let i = 0; i < questoes.length; i++) {
      vetor.push({
        questao: questoes[i].id,
        resposta: respostas[i],
      });
    }
    return vetor;
  }

  function recentes(u) {
    dados.ultimaTentativa = u;
    context.getItem().then((item) => {
      if (item) {
        const obj = JSON.parse(item);
        const antigo = obj.dados.filter((i) => dados.id !== i.id);
        // const antigo = obj.dados;
        context.setRecentes({ dados: [dados, ...antigo] });
        context.setItem(JSON.stringify({ dados: [dados, ...antigo] }));
      } else {
        context.setRecentes({ dados: [dados] });
        context.setItem(JSON.stringify({ dados: [dados] }));
      }
    });
  }

  // retorna a resposta para o servidor
  const enviarRespostas = async () => {
    if (respostas.length === questoes.length && respostas.length > 0) {
      const res = await API.post('questao/correcao', {
        categoria: dados.id,
        usuario: context.token,
        questoes: listarQuestoes(),
      });
      context.categoriasHook.atualizar();
      recentes(parseInt((res.data.acertos / questoes.length) * 100));
    }
  };

  // se o número de questoes respondida for igual
  // ao número de questoes retorna para o server
  useEffect(() => {
    if (respostas.length >= questoes.length) {
      enviarRespostas();
    }
  }, [respostas]);

  // recebe um objeto
  const definirAtual = (data) => {
    setAtual(data);
  };

  // recebe um número
  const atualizador = (n) => {
    setIndice(n);
    if (n && n < questoes.length) {
      definirAtual(questoes[n]);
    }
  };

  // função principal
  const main = async () => {
    const { data } = await API.get(`questao/random/${dados.id}`);
    setQuestoes(data);
    definirAtual(data[0]);
  };

  // iniciador da função principal
  useEffect(() => {
    main();
  }, []);

  if (atual) {
    return (
      <Questao
        questao={atual}
        proxima={atualizador}
        indice={indice}
        total={questoes.length}
        navigation={navigation}
        totalAcertos={acertos}
        setAcertos={setAcertos}
        setRespostas={setRespostas}
        respostas={respostas}
      />
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center' }}>Sem Conteudo</Text>
    </View>
  );
};

export default Questoes;

// const response = await API.get(`questao/random/1`);
