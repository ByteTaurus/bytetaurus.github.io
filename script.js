const quizModules = {
  historia: {
    title: "Historia da Inteligencia",
    description: "Evolucao historica dos servicos de inteligencia no mundo e no Brasil.",
    questions: [
      {
        text: "Qual era o objetivo principal do SIS (MI6) ao ser fundado em 1909?",
        answers: [
          "Apoiar a resistencia local na Franca",
          "Monitorar as ambicoes economicas e militares alemas",
          "Criar o Servico Nacional de Informacoes",
          "Treinar agentes americanos no Camp X",
          "Combater o comunismo na America Latina"
        ],
        correctIndex: 1,
        reference:
          "O SIS (MI6) foi fundado em 1909 com foco inicial no monitoramento das ambicoes alemas no contexto pre-I Guerra Mundial."
      },
      {
        text: "O SOE (Special Operations Executive), criado por Churchill em 1940, diferenciava-se da espionagem pura por qual motivo?",
        answers: [
          "Focava apenas em criptografia de dados",
          "Era um orgao puramente diplomatico",
          "Tinha carater operacional, visando sabotagem e propaganda",
          "Dedicava-se exclusivamente a protecao da familia real",
          "Foi criado para combater crimes ciberneticos"
        ],
        correctIndex: 2,
        reference:
          "O SOE diferenciava-se por ser operacional, com o objetivo de realizar sabotagem e apoiar a resistencia contra ocupacoes."
      },
      {
        text: "Qual foi a principal caracteristica do surgimento do OSS (EUA) em 1941?",
        answers: [
          "Independencia total de qualquer outra nacao",
          "Foco exclusivo em inteligencia domestica",
          "Dependencia inicial da doutrina britanica e treinamento conjunto",
          "Criacao por meio de um golpe de Estado",
          "Substituicao imediata da CIA"
        ],
        correctIndex: 2,
        reference:
          "O OSS teve como ponto fundamental a dependencia inicial da doutrina britanica e o treinamento conjunto em locais como o Camp X."
      },
      {
        text: "A Operacao Fortitude, que garantiu o sucesso do Dia D, e um exemplo classico de:",
        answers: [
          "Falha de comunicacao interna",
          "Uso de inteligencia humana (HUMINT) e desinformacao",
          "Ataque direto de forca bruta contra Berlim",
          "Desenvolvimento de armas nucleares",
          "Tratado de paz entre Alemanha e Reino Unido"
        ],
        correctIndex: 1,
        reference:
          "A Operacao Fortitude utilizou agentes humanos e desinformacao para enganar o alto comando alemao sobre o local do desembarque aliado."
      },
      {
        text: "Qual e considerado o primeiro registro legal e ancestral da inteligencia de Estado no Brasil (1927)?",
        answers: [
          "Servico Nacional de Informacoes (SNI)",
          "Agencia Brasileira de Inteligencia (ABIN)",
          "Conselho de Defesa Nacional (CDN)",
          "Sistema Brasileiro de Inteligencia (SISBIN)",
          "Policia Federal"
        ],
        correctIndex: 2,
        reference:
          "O Conselho de Defesa Nacional (CDN), criado em 1927 no governo Washington Luiz, e o marco inicial da inteligencia de Estado no Brasil."
      },
      {
        text: "O que motivou a criacao do SFICI (Servico Federal de Informacoes e Contrainformacoes) em 1946?",
        answers: [
          "A necessidade de monitorar redes sociais",
          "A experiencia da II Guerra Mundial e a busca por um corpo tecnico permanente",
          "O fim da Guerra Fria",
          "A descoberta de minas de ouro na Amazonia",
          "A criacao da Organizacao das Nacoes Unidas"
        ],
        correctIndex: 1,
        reference:
          "A criacao do SFICI foi motivada pela experiencia adquirida na II Guerra Mundial, visando profissionalizar a inteligencia."
      },
      {
        text: "O SNI (Servico Nacional de Informacoes), criado em 1964, fundamentava-se em qual doutrina?",
        answers: [
          "Doutrina do Livre Mercado",
          "Doutrina de Seguranca Nacional (DSN)",
          "Doutrina da Nao-Intervencao",
          "Doutrina Monroe",
          "Doutrina Truman"
        ],
        correctIndex: 1,
        reference:
          "O SNI baseava-se na Doutrina de Seguranca Nacional (DSN), gestada na ESG, com foco na assessoria a Presidencia."
      },
      {
        text: "O que representou a criacao do SISNI em 1975 no cenario da inteligencia brasileira?",
        answers: [
          "A extincao de todos os servicos secretos",
          "A transicao de um orgao central para uma rede nacional integrada",
          "O inicio da cooperacao com a KGB russa",
          "A proibicao do uso de tecnologias estrangeiras",
          "A criacao de uma policia unica para todo o pais"
        ],
        correctIndex: 1,
        reference:
          "Em 1975, a concepcao de sistema evoluiu com o SISNI, passando de um orgao isolado para uma rede de integracao de informacoes."
      },
      {
        text: "Qual foi a consequencia direta do governo Collor para a inteligencia brasileira em 1990?",
        answers: [
          "O aumento do orcamento para espionagem",
          "A criacao da ABIN",
          "A extincao do SNI e um consequente vacuo institucional",
          "A mudanca da capital para Brasilia",
          "A unificacao das policias civis e militares"
        ],
        correctIndex: 2,
        reference:
          "A extincao do SNI pelo governo Collor desarticulou a inteligencia de Estado ate o final da decada de 90."
      },
      {
        text: "Em 1999, o cenario de inteligencia no Brasil foi modernizado com a criacao de qual orgao?",
        answers: [
          "SNI",
          "SFICI",
          "ABIN (Agencia Brasileira de Inteligencia)",
          "CDN",
          "ESG"
        ],
        correctIndex: 2,
        reference:
          "A modernizacao da inteligencia brasileira ocorreu em 1999 com a criacao da ABIN e do SISBIN."
      }
    ]
  },
  ti: {
    title: "Tecnologia da Informacao e Ciberseguranca",
    description: "Triade CID, OPSEC, criptografia, proxy, VPN e seguranca cibernetica.",
    questions: [
      {
        text: "Qual e a relacao correta entre Seguranca Cibernetica e Seguranca da Informacao?",
        answers: [
          "Sao areas totalmente distintas e sem ligacao.",
          "A Seguranca da Informacao faz parte da Seguranca Cibernetica.",
          "A Seguranca Cibernetica faz parte da Seguranca da Informacao.",
          "A Seguranca Cibernetica cuida apenas de arquivos em papel.",
          "A Seguranca da Informacao foca apenas em ataques de hackers."
        ],
        correctIndex: 2,
        reference: "A Seguranca Cibernetica faz parte da Seguranca da Informacao."
      },
      {
        text: "A triada fundamental da seguranca da informacao e conhecida pela sigla CID. O que significa cada letra?",
        answers: [
          "Controle, Identificacao e Dados.",
          "Confidencialidade, Integridade e Disponibilidade.",
          "Criptografia, Invasao e Dispositivo.",
          "Conexao, Internet e Desempenho.",
          "Codigo, Informacao e Digital."
        ],
        correctIndex: 1,
        reference: "TRIADE (CID) - CONFIDENCIALIDADE, INTEGRIDADE e DISPONIBILIDADE."
      },
      {
        text: "Qual propriedade limita o acesso a informacao apenas a entidades legitimas e autorizadas?",
        answers: [
          "Disponibilidade",
          "Confidencialidade",
          "Integridade",
          "Autenticidade",
          "Elasticidade"
        ],
        correctIndex: 1,
        reference: "Confidencialidade - propriedade que limita o acesso a informacao tao somente as entidades legitimas."
      },
      {
        text: "Quando ocorre uma 'Perda de Integridade'?",
        answers: [
          "Quando o sistema fica fora do ar.",
          "Quando uma senha e esquecida.",
          "Quando uma pessoa nao autorizada efetua alteracoes na informacao original.",
          "Quando o computador e desligado incorretamente.",
          "Quando a internet cai."
        ],
        correctIndex: 2,
        reference: "Perda de integridade - acontece quando uma determinada informacao fica exposta a manuseio por uma pessoa nao autorizada, que efetua alteracoes."
      },
      {
        text: "A propriedade que garante que a informacao esteja sempre acessivel para o uso legitimo e a:",
        answers: [
          "Confidencialidade",
          "Integridade",
          "Disponibilidade",
          "Autenticidade",
          "Criptografia"
        ],
        correctIndex: 2,
        reference: "Disponibilidade - propriedade que garante que a informacao esteja sempre disponivel para o uso legitimo."
      },
      {
        text: "O que e 'Autenticidade' no contexto da TI?",
        answers: [
          "A velocidade de processamento dos dados.",
          "A garantia de que a informacao provem da fonte anunciada e nao foi camuflada.",
          "O uso de softwares originais e licenciados.",
          "A capacidade de um sistema nunca falhar.",
          "O preco de mercado de um equipamento."
        ],
        correctIndex: 1,
        reference: "Autenticidade - propriedade que garante que a informacao provem da fonte anunciada e que nao foi camuflada."
      },
      {
        text: "O que caracteriza a 'Irretratabilidade' (Nao-repudio)?",
        answers: [
          "A capacidade de apagar dados sem deixar rastros.",
          "O direito de um usuario mudar sua senha a qualquer momento.",
          "A impossibilidade de negar a autoria de uma transacao ou mensagem.",
          "O backup automatico de arquivos em nuvem.",
          "A limpeza fisica de componentes de hardware."
        ],
        correctIndex: 2,
        reference: "Irretratabilidade - propriedade que garante a impossibilidade de negar a autoria de uma transacao."
      },
      {
        text: "De acordo com a regra de Backup 3-2-1, quantas copias dos dados voce deve ter no total?",
        answers: [
          "1 copia",
          "2 copias",
          "3 copias",
          "5 copias",
          "10 copias"
        ],
        correctIndex: 2,
        reference: "Backup 3-2-1: 3 copias dos dados / 2 midias diferentes / 1 copia fora do local."
      },
      {
        text: "Na regra 3-2-1, quantas copias devem ser mantidas fora do local fisico original (off-site)?",
        answers: [
          "1 copia",
          "2 copias",
          "3 copias",
          "Todas as copias",
          "Nenhuma copia"
        ],
        correctIndex: 0,
        reference: "Backup 3-2-1: 3 copias dos dados / 2 midias diferentes / 1 copia fora do local."
      },
      {
        text: "Qual e a definicao correta de OPSEC segundo o material?",
        answers: [
          "E um software antivirus de alta performance.",
          "E o sigilo absoluto de todas as informacoes da empresa.",
          "E o controle inteligente da informacao (nao necessariamente apenas sigilo).",
          "E a manutencao fisica de servidores.",
          "E um curso de digitacao rapida."
        ],
        correctIndex: 2,
        reference: "OPSEC nao e sigilo. E o controle inteligente da informacao."
      },
      {
        text: "Qual metodo de infiltracao foca na manipulacao psicologica e exploracao do fator humano?",
        answers: [
          "Ataque de Forca Bruta",
          "Engenharia Social",
          "Invasao por Firewall",
          "Quebra de Criptografia",
          "Instalacao de Hardware"
        ],
        correctIndex: 1,
        reference: "Engenharia Social: Manipulacao psicologica / Exploracao do fator humano / Nao depende de falha tecnica."
      },
      {
        text: "O que e um Endereco IP?",
        answers: [
          "O nome do fabricante do computador.",
          "O preco da conexao de internet.",
          "Um endereco exclusivo que identifica um dispositivo na Internet ou rede local.",
          "Uma senha de acesso ao roteador.",
          "O registro de propriedade de um software."
        ],
        correctIndex: 2,
        reference: "Endereco IP e um endereco exclusivo que identifica um dispositivo na Internet ou em uma rede local."
      },
      {
        text: "Como e representado visualmente um endereco IP comum?",
        answers: [
          "Uma sequencia de letras aleatorias.",
          "Um codigo de barras.",
          "Uma sequencia de quatro numeros separados por pontos (ex: 192.158.1.38).",
          "O nome completo do usuario.",
          "Uma data e hora."
        ],
        correctIndex: 2,
        reference: "O endereco IP e representado por um conjunto de quatro numeros: por exemplo, 192.158.1.38."
      },
      {
        text: "Qual e a funcao de um 'Proxy'?",
        answers: [
          "Aumentar a memoria RAM do computador.",
          "Excluir virus automaticamente.",
          "Agir como um mediador/servidor entre o usuario e a internet, criando uma barreira.",
          "Traduzir sites estrangeiros.",
          "Carregar a bateria de dispositivos moveis."
        ],
        correctIndex: 2,
        reference: "Proxy e uma especie de mediador entre voce e a internet, criando uma especie de barreira de protecao."
      },
      {
        text: "Qual e a principal diferenca de protecao entre Proxy e VPN citada no texto?",
        answers: [
          "O Proxy e mais lento que a VPN.",
          "A VPN e gratuita e o Proxy e pago.",
          "No Proxy a informacao esta protegida entre usuario e servidor; na VPN, o texto diz que nao esta protegida nesse trecho.",
          "O Proxy esconde o IP e a VPN nao.",
          "Nao ha diferenca tecnica alguma."
        ],
        correctIndex: 2,
        reference: "Proxy - a informacao esta protegida entre o usuario e o servidor proxy (criptografada) / VPN - a informacao nao esta protegida entre o usuario e o servidor VPN."
      },
      {
        text: "O que acontece com o seu endereco IP de conexao ao usar um Proxy ou VPN?",
        answers: [
          "Ele fica visivel para todos os sites.",
          "Passa a ser o endereco IP do servidor utilizado.",
          "Ele e desativado permanentemente.",
          "Ele muda para o nome do usuario.",
          "Ele e dobrado para aumentar a seguranca."
        ],
        correctIndex: 1,
        reference: "Em ambos os casos o endereco IP de conexao com a internet passa a ser o IP do servidor."
      },
      {
        text: "O que e Criptografia?",
        answers: [
          "A tecnica de apagar arquivos definitivamente.",
          "A tecnica de transformar dados em um formato ilegivel, acessivel apenas com a chave correta.",
          "O processo de baixar arquivos da nuvem.",
          "A organizacao de pastas no computador.",
          "A traducao de codigos de programacao."
        ],
        correctIndex: 1,
        reference: "Criptografia e a tecnica de proteger informacoes por meio da transformacao dos dados em um formato ilegivel."
      },
      {
        text: "Como funciona a funcao de Hash Criptografico?",
        answers: [
          "Ela aumenta o tamanho do arquivo original.",
          "Ela permite recuperar o texto original a partir do codigo gerado.",
          "Transforma qualquer bloco de dados em uma serie de caracteres de comprimento fixo.",
          "Ela serve para compactar fotos e videos.",
          "Ela identifica a localizacao fisica do usuario."
        ],
        correctIndex: 2,
        reference: "Hash e um algoritmo matematico que transforma qualquer bloco de dados em uma serie de caracteres de comprimento fixo."
      },
      {
        text: "Na funcao Hash, se voce inserir dados de tamanhos diferentes, o que acontece com o comprimento do resultado (saida)?",
        answers: [
          "O resultado tera o mesmo tamanho da entrada.",
          "O resultado sera sempre maior que a entrada.",
          "O resultado tera sempre o mesmo comprimento fixo.",
          "O resultado sera proporcional ao tempo de processamento.",
          "O resultado sera uma imagem."
        ],
        correctIndex: 2,
        reference: "Independentemente do comprimento dos dados de entrada, o valor hash tera sempre o mesmo comprimento."
      },
      {
        text: "A Seguranca Cibernetica visa garantir que os sistemas resistam a eventos ocorridos em qual espaco?",
        answers: [
          "Espaco sideral.",
          "Espaco fisico (escritorios).",
          "Espaco cibernetico.",
          "Espaco juridico.",
          "Espaco aereo."
        ],
        correctIndex: 2,
        reference: "Seguranca Cibernetica visa garantir que os sistemas de informacao sejam capazes de resistir a eventos no espaco cibernetico."
      }
    ]
  },
  armas: {
    title: "Legislacao de Armas e Normas Institucionais",
    description: "Portaria 167 - COLOG/2024, Portaria Conjunta COLOG 01/2024 e normas institucionais correlatas.",
    questions: [
      {
        text: "De acordo com a Portaria 167 - COLOG/2024, qual o numero maximo de armas de fogo que os integrantes das Policias Militares (da ativa e da inatividade), CBM e GSI/PR podem adquirir para uso pessoal?",
        answers: ["2 armas.", "4 armas.", "6 armas.", "8 armas."],
        correctIndex: 1,
        reference: "Gabarito: B. O limite previsto e de 4 armas para uso pessoal."
      },
      {
        text: "De acordo com o Art. 2o, §7o, da Portaria 167 - COLOG/2024, assinale o orgao responsavel que podera autorizar os policiais militares, em carater excepcional, a aquisicao de armas de fogo em quantidade superior ao limite estabelecido:",
        answers: ["Secretaria de Seguranca Publica (SSP).", "Comandante-Geral da respectiva instituicao.", "Comando Logistico (COLOG).", "Diretoria de Fiscalizacao de Produtos Controlados (DFPC)."],
        correctIndex: 2,
        reference: "Gabarito: C. A autorizacao excepcional e atribuida ao COLOG."
      },
      {
        text: "De acordo com o Art. 35 da Portaria 167 - COLOG/2024, na hipotese de falecimento ou interdicao do proprietario de arma de fogo, quem devera providenciar a transferencia de propriedade da arma ou a entrega da arma a Policia Federal?",
        answers: ["O Comandante da Unidade onde o militar servia.", "O administrador da heranca ou o curador.", "O conjuge sobrevivente, exclusivamente.", "O orgao de inteligencia da corporacao."],
        correctIndex: 1,
        reference: "Gabarito: B. A responsabilidade recai sobre o administrador da heranca ou curador."
      },
      {
        text: "De acordo com a Portaria Conjunta COLOG no 01/2024, em qual situacao o limite de armas de fogo de uso restrito podera ser ultrapassado pelos integrantes dos orgaos e instituicoes de que trata o Art. 34 do Decreto no 9.847/2019?",
        answers: ["Quando o militar for promovido ao oficialato.", "Transferencia de propriedade por heranca, legado ou interdicao do proprietario.", "Mediante comprovacao de ameaca a integridade fisica.", "Para instrutores de tiro devidamente certificados."],
        correctIndex: 1,
        reference: "Gabarito: B. O excesso e admitido nessa hipotese de transferencia de propriedade."
      },
      {
        text: "Conforme Art. 1o da Portaria PMERJ no 254/2005 (IR-22), para o estudo da autorizacao de aquisicao de arma de fogo, de qual secao e obrigatorio o parecer para analisar a situacao judiciaria e disciplinar do requerente?",
        answers: ["P/1 (Secao de Pessoal).", "P/2 (Secao de Inteligencia).", "Secao de Assuntos Internos (atual Assessoria de Justica e Disciplina - AJD).", "Centro de Suprimento e Manutencao de Armamento e Municao (CSM-AM)."],
        correctIndex: 2,
        reference: "Gabarito: C. O parecer obrigatorio e da Secao de Assuntos Internos/AJD."
      },
      {
        text: "De acordo com a legislacao vigente, assinale abaixo o item que NAO e mais classificado como Produto Controlado pelo Exercito (PCE):",
        answers: ["Granadas de fumaca.", "Colete balistico de nivel III.", "Luneta (Mira telescopica).", "Silenciadores."],
        correctIndex: 2,
        reference: "Gabarito: C. Luneta/mira telescopica nao permanece classificada como PCE na referencia adotada no questionario."
      },
      {
        text: "Qual das opcoes de nomenclatura de calibre de arma de fogo abaixo NAO pertence a familia do calibre .38 SPL (apresentando dimensoes e caracteristicas de projeto distintas)?",
        answers: [".357 Magnum.", ".38 Long Colt.", ".45 ACP.", ".38 Short Colt."],
        correctIndex: 2,
        reference: "Gabarito: C. O .45 ACP nao pertence a familia do .38 SPL."
      },
      {
        text: "Assinale a alternativa que representa um armamento classificado como 'nao portatil', que devido ao seu peso e dimensoes precisa ser transportado ou usado com auxilio de tripe (fixo ou movel) ou veiculo automotor para estabilizacao do tiro:",
        answers: ["Carabina de repeticao.", "Pistola semiautomatica.", "Fuzil de precisao (Sniper).", "Metralhadora."],
        correctIndex: 3,
        reference: "Gabarito: D. Metralhadora e armamento classificado como nao portatil."
      }
    ]
  },
  concessionarias: {
    title: "Concessionárias",
    description: "Concessao e permissao de servicos publicos, licitacao e atividade clandestina em comunicacoes.",
    questions: [
      {
        text: "Segundo o Art. 175 da Constituicao Federal, a prestacao de servicos publicos pelo poder publico, sob regime de concessao ou permissao, deve ser feita sempre atraves de:",
        answers: ["Contratacao direta", "Indicacao politica", "Licitacao", "Sorteio publico", "Acordo verbal"],
        correctIndex: 2,
        reference: "Art. 175 da CF: incumbe ao poder publico, sempre atraves de licitacao, a prestacao de servicos publicos."
      },
      {
        text: "Quem sao as entidades consideradas como Poder Concedente de acordo com a Lei 8.897/1995?",
        answers: ["Apenas as empresas privadas", "A Uniao, os Estados e os Municipios", "Apenas a Policia Militar e Civil", "Organizacoes Internacionais", "Os usuarios do servico publico"],
        correctIndex: 1,
        reference: "Paragrafo unico: a Uniao, os Estados e os Municipios sao o poder concedente."
      },
      {
        text: "O que caracteriza um servico ou contrato como Precario no ambito das concessoes?",
        answers: ["Um servico que e gratuito para toda a populacao", "Quando o poder concedente pode revisar ou cancelar o contrato por servico mal executado", "Um contrato que dura para sempre, sem possibilidade de interrupcao", "Quando a empresa privada decide o preco sem consultar o governo", "Um servico prestado apenas em areas rurais"],
        correctIndex: 1,
        reference: "Precario: o poder concedente pode revisar ou cancelar o contrato por servico mal executado."
      },
      {
        text: "Qual e a principal diferenca mencionada entre Concessao e Permissao quanto ao executor do servico?",
        answers: ["Na concessao nao ha contrato", "A permissao e exclusiva para empresas estrangeiras", "Na permissao, aceita-se a prestacao por pessoa fisica", "A concessao nao exige licitacao", "Nao existe diferenca tecnica entre elas"],
        correctIndex: 2,
        reference: "Diferenca: na permissao, admite-se pessoa fisica na prestacao do servico."
      },
      {
        text: "O cancelamento de um contrato de forma unilateral pelo poder concedente e considerado um:",
        answers: ["Ato bilateral", "Crime de responsabilidade", "Ato unilateral", "Erro administrativo grave", "Acordo de cavalheiros"],
        correctIndex: 2,
        reference: "Observacao: ato unilateral, podendo o poder concedente cancelar a qualquer momento de forma unilateral."
      },
      {
        text: "De acordo com a Lei Geral das Comunicacoes (9.472/1997), uma atividade desenvolvida sem a competente concessao ou autorizacao e considerada:",
        answers: ["Experimental", "Clandestina", "Educativa", "Temporaria", "Facultativa"],
        correctIndex: 1,
        reference: "Considera-se clandestina a atividade desenvolvida sem a competente concessao, permissao ou autorizacao."
      },
      {
        text: "Tambem e considerada clandestina a atividade desenvolvida por quem utiliza fios, cabos ou equipamentos sabendo que sao:",
        answers: ["De ultima geracao", "Importados legalmente", "Produto de crime", "Doados pelo governo", "Comprados em leilao oficial"],
        correctIndex: 2,
        reference: "Tambem e clandestina a atividade com uso de fios, cabos ou equipamentos por quem saiba ou deva saber ser produto de crime."
      },
      {
        text: "O poder publico pode prestar servicos publicos de duas formas principais: diretamente ou sob regime de:",
        answers: ["Terceirizacao informal", "Concessao ou permissao", "Voluntariado", "Doacao de ativos", "Emprestimo de funcionarios"],
        correctIndex: 1,
        reference: "Incumbe ao poder publico, diretamente ou sob regime de concessao ou permissao, a prestacao dos servicos."
      },
      {
        text: "A Lei 8.897 de 13 de fevereiro de 1995 e conhecida como:",
        answers: ["Lei Geral de Telecomunicacoes", "Codigo Civil", "Lei Geral das Concessionarias", "Lei de Licitacoes e Contratos", "Constituicao Federal"],
        correctIndex: 2,
        reference: "Lei 8.897 de 13FEV1995: Lei geral das concessionarias."
      },
      {
        text: "No contexto das comunicacoes, o uso de qual recurso exige autorizacao para nao ser considerado clandestino?",
        answers: ["Energia solar", "Papel timbrado", "Radiofrequencia e exploracao de satelite", "Veiculos de transporte", "Mobiliario de escritorio"],
        correctIndex: 2,
        reference: "E necessaria concessao, permissao ou autorizacao para uso de radiofrequencia e exploracao de satelite."
      }
    ]
  },
  isp: {
    title: "Organizacao de Inteligencia de Seguranca Publica (ISP)",
    description: "PNISP, canais de ligacao, classificacao de agencias e niveis de estrutura de inteligencia.",
    questions: [
      {
        text: "O que e a PNISP dentro do contexto da seguranca publica?",
        answers: ["Um plano de policiamento ostensivo", "O estatuto interno da Policia Militar", "A Politica Nacional de Inteligencia de Seguranca Publica", "Um software de monitoramento de cameras", "Um codigo de etica para agentes civis"],
        correctIndex: 2,
        reference: "PNISP e a Politica Nacional de Inteligencia de Seguranca Publica, documento orientador da atividade de inteligencia."
      },
      {
        text: "Qual canal e criado especificamente para facilitar a troca de conhecimentos e atender ao principio da oportunidade, sem criar vinculacoes hierarquicas?",
        answers: ["Canal de Comando", "Canal de Logistica", "Canal Tecnico", "Canal de Operacoes", "Canal de Etica"],
        correctIndex: 2,
        reference: "O Canal Tecnico estabelece ligacoes diretas entre as Agencias de Inteligencia sem criar vinculacoes organicas ou de chefia."
      },
      {
        text: "O Canal de Comando estabelece ligacoes baseadas fundamentalmente em qual natureza?",
        answers: ["Natureza tecnica", "Natureza financeira", "Natureza hierarquica", "Natureza externa", "Natureza comercial"],
        correctIndex: 2,
        reference: "O Canal de Comando estabelece ligacoes fundamentalmente de natureza hierarquica entre as chefias dos organismos."
      },
      {
        text: "Como sao classificadas as agencias que pertencem a estrutura do Executivo do RJ e participam diretamente na producao de conhecimentos de ISP?",
        answers: ["Agencias Efetivas", "Agencias Especiais", "Agencias Afins", "Agencias Externas", "Agencias de Apoio"],
        correctIndex: 0,
        reference: "Agencias Efetivas pertencem ao Executivo do RJ e participam diretamente da producao de conhecimentos."
      },
      {
        text: "O NI/DETRAN e o BM2/CBMERJ sao exemplos de quais tipos de agencias?",
        answers: ["Agencias Efetivas", "Agencias Especiais", "Agencias Afins", "Agencias Internacionais", "Agencias de Fiscalizacao"],
        correctIndex: 1,
        reference: "Agencias Especiais pertencem ao Executivo do RJ e participam direta ou indiretamente da atividade de inteligencia."
      },
      {
        text: "As agencias que nao pertencem a estrutura do Poder Executivo do Estado do Rio de Janeiro sao chamadas de:",
        answers: ["Agencias Efetivas", "Agencias Especiais", "Agencias Afins", "Agencias Fantasmas", "Agencias de Comando"],
        correctIndex: 2,
        reference: "Agencias Afins nao pertencem ao Executivo do RJ, mas participam indiretamente da atividade de inteligencia."
      },
      {
        text: "Qual classe de agencia possui o ciclo de producao de conhecimento completo e estrutura organizacional de mais alto nivel?",
        answers: ["Classe A (AIA)", "Classe B (AIB)", "Classe C (AIC)", "Classe D (AID)", "Classe Especial"],
        correctIndex: 0,
        reference: "Classe A (AIA) e de mais alto nivel hierarquico, com estrutura completa e ciclo de producao completo."
      },
      {
        text: "Uma agencia de nivel intermediario, com estrutura parcial e recursos medianos, pertence a qual classe?",
        answers: ["Classe A", "Classe B (AIB)", "Classe C", "Classe Primaria", "Classe Secundaria"],
        correctIndex: 1,
        reference: "Classe B (AIB) corresponde a niveis intermediarios, com estrutura parcial e recursos medianos."
      },
      {
        text: "As agencias de Classe C (AIC) possuem um ciclo de producao de conhecimento limitado a quais etapas?",
        answers: ["Planejamento e Execucao", "Infiltracao e Prisao", "Reuniao de Dados e sua Utilizacao", "Compra de materiais e Logistica", "Monitoramento e Escuta"],
        correctIndex: 2,
        reference: "Classe C (AIC) tem ciclo limitado a reuniao de dados e sua utilizacao (formalizacao, difusao e arquivamento)."
      },
      {
        text: "Qual destes e um exemplo de Agencia de Inteligencia Classe A (AIA)?",
        answers: ["P2 de um Batalhao comum", "AIA da CGPM", "NuInt de uma UPP", "Uma delegacia de bairro", "Um posto do DETRAN"],
        correctIndex: 1,
        reference: "Exemplos de Classe A incluem AIA do 3o CPA, AIA do COE e AIA da CGPM."
      },
      {
        text: "O NuInt da 1a UPP/19o BPM e classificado como uma agencia de qual nivel?",
        answers: ["Classe A", "Classe B", "Classe C", "Agencia Afim", "Agencia Efetiva Superior"],
        correctIndex: 1,
        reference: "NuInt da 1a UPP/19o BPM e exemplo de Classe B (AIB)."
      },
      {
        text: "Quais os problemas da atividade de Seguranca Publica que a PNISP visa organizar?",
        answers: ["Salarios e beneficios", "Cores das fardas e modelos de viaturas", "Sistemas, Estruturas, Doutrinas, Planos e Recursos", "Escalas de ferias e folgas", "Apenas o recrutamento de novos policiais"],
        correctIndex: 2,
        reference: "A PNISP organiza problemas ligados a sistemas, estruturas, doutrinas, planos e recursos humanos e materiais."
      },
      {
        text: "A PNISP e elaborada com base em quais pilares fundamentais?",
        answers: ["Apenas no Codigo Penal", "Politica Nacional de Inteligencia e Politica Nacional de Seguranca Publica", "Decretos municipais", "Manuais de instrucao de tiro", "Regulamentos de transito"],
        correctIndex: 1,
        reference: "A PNISP e elaborada com base na Politica Nacional de Inteligencia e na Politica Nacional de Seguranca Publica e Desenvolvimento Social."
      },
      {
        text: "Uma agencia com estrutura organizacional reduzida e recursos apenas suficientes e da classe:",
        answers: ["Classe A", "Classe B", "Classe C", "Classe Especial", "Agencia Afim"],
        correctIndex: 2,
        reference: "Classe C (AIC) possui estrutura reduzida e recursos humanos e materiais apenas suficientes."
      },
      {
        text: "O Ministerio Publico (CSI/MPRJ) e classificado como que tipo de agencia no sistema do RJ?",
        answers: ["Agencia Efetiva", "Agencia Especial", "Agencia Afim", "Agencia Tecnica", "Agencia Hierarquica"],
        correctIndex: 2,
        reference: "CSI/MPRJ e exemplo de Agencia Afim por nao pertencer ao Executivo do Estado."
      }
    ]
  },
  ssiSipmerj: {
    title: "Organizacao da SSI e SIPMERJ",
    description: "Fases da inteligencia no Brasil, evolucao da SSI e classificacoes no sistema de inteligencia.",
    questions: [
      {
        text: "De acordo com a ABIN, a historia da Inteligencia no Brasil e dividida em quantas fases?",
        answers: ["2 fases", "3 fases", "4 fases", "5 fases", "6 fases"],
        correctIndex: 2,
        reference: "A historia da atividade de inteligencia no Brasil e dividida, basicamente, em 4 fases."
      },
      {
        text: "Qual fase e conhecida como a Fase Embrionaria?",
        answers: ["1927 a 1964", "1964 a 1990", "1990 a 1999", "1999 ate hoje", "1889 a 1930"],
        correctIndex: 0,
        reference: "1a fase: Fase Embrionaria (1927 a 1964)."
      },
      {
        text: "A 2a fase (Bipolaridade) esteve diretamente atrelada a qual contexto historico?",
        answers: ["Revolucao Industrial", "Primeira Guerra Mundial", "Guerra Fria", "Globalizacao", "Era Digital"],
        correctIndex: 2,
        reference: "A fase da bipolaridade (1964 a 1990) esteve atrelada ao contexto da Guerra Fria."
      },
      {
        text: "O que marcou o inicio da 4a fase (Contemporanea) em 1999?",
        answers: ["A extincao do SNI", "A criacao da Policia Federal", "A criacao da Agencia Brasileira de Inteligencia (ABIN)", "A unificacao das policias", "O surgimento da internet"],
        correctIndex: 2,
        reference: "A 4a fase contemporanea (1999 ate hoje) foi iniciada com a criacao da ABIN."
      },
      {
        text: "Em que ano a PM2 se desvinculou do Estado Maior Geral (EMG) para virar a CI/PMERJ?",
        answers: ["1975", "1993", "2000", "2009", "2019"],
        correctIndex: 3,
        reference: "Em 2009 a PM2 se desvincula do EMG e passa a CI/PMERJ."
      },
      {
        text: "Em qual ano a CI/PMERJ passou a se chamar SSI (Subsecretaria de Inteligencia)?",
        answers: ["2010", "2015", "2018", "2019", "2024"],
        correctIndex: 3,
        reference: "Em 2019 a CI/PMERJ virou SSI."
      },
      {
        text: "O que ocorreu de importante em 1975 para as forcas policiais do Rio de Janeiro?",
        answers: ["A criacao da ABIN", "A extincao da Guarda Municipal", "A unificacao das policias militares (criacao da PMERJ)", "A criacao do servico de radio-patrulha", "O fim do servico secreto"],
        correctIndex: 2,
        reference: "Em 1975 ocorreu a unificacao das policias militares, com criacao da PMERJ."
      },
      {
        text: "Quando foi criada a Corregedoria da PMERJ?",
        answers: ["1975", "1980", "1993", "2009", "2019"],
        correctIndex: 2,
        reference: "Em 24AGO1993 foi criada a Corregedoria da PMERJ."
      },
      {
        text: "O que significa a sigla SIPMERJ?",
        answers: ["Sistema de Informacao Privada da PMERJ", "Sistema de Inteligencia da Policia Militar do Estado do Rio de Janeiro", "Sindicato Interno da Policia Militar", "Secretaria de Inteligencia Policial e Militar", "Sistema de Inquerito Policial Militar"],
        correctIndex: 1,
        reference: "SIPMERJ significa Sistema de Inteligencia da Policia Militar do Estado do Rio de Janeiro."
      },
      {
        text: "De acordo com os Fundamentos Base, o que e considerado imprescindivel e decisivo para a atividade?",
        answers: ["O uso de drones e satelites", "O orcamento financeiro", "As fontes humanas", "O armamento pesado", "A propaganda governamental"],
        correctIndex: 2,
        reference: "1o Fundamento Base: as fontes humanas sao imprescindiveis e decisivas."
      },
      {
        text: "Qual e a condicao citada como necessaria para justificar a existencia da atividade de Inteligencia?",
        answers: ["A existencia de leis complexas", "O apoio da opiniao publica", "A existencia de um adversario/inimigo/rival", "A falta de tecnologia no pais", "A realizacao de eleicoes"],
        correctIndex: 2,
        reference: "2o Fundamento Base: a atividade de inteligencia se justifica se houver adversario, inimigo ou rival."
      },
      {
        text: "A atividade de Inteligencia busca estar na vanguarda de que?",
        answers: ["Das redes sociais", "Dos desfiles militares", "Da inovacao e incorporacao de novas tecnologias", "Das construcoes de novos batalhoes", "Das reformas judiciarias"],
        correctIndex: 2,
        reference: "3o Fundamento Base: a atividade busca estar na vanguarda da inovacao e incorporacao de novas tecnologias."
      },
      {
        text: "No organograma da SSI, a qual diretoria a Divisao de Informatica (D5) esta subordinada?",
        answers: ["Diretoria de Operacoes (D4)", "Diretoria de Inteligencia (D2)", "Diretoria de Contra Inteligencia (DCINT - D3)", "Diretoria Executiva", "Diretoria de Gestao de Recursos (D1)"],
        correctIndex: 2,
        reference: "No organograma, a Divisao de Informatica D5 esta subordinada a DCINT (D3)."
      },
      {
        text: "Qual diretoria no organograma e responsavel pela Inteligencia Cibernetica?",
        answers: ["D1", "D2", "D4", "D6", "D7"],
        correctIndex: 3,
        reference: "DCIBER e a Diretoria de Inteligencia Cibernetica (D6)."
      },
      {
        text: "Qual diretoria no organograma e responsavel pelo Ensino e Pesquisa (CEINT)?",
        answers: ["D1", "D3", "D5", "D6", "D7"],
        correctIndex: 4,
        reference: "CEINT e o Centro de Ensino e Pesquisa de Inteligencia (D7)."
      },
      {
        text: "A sigla SISBIN refere-se a qual sistema?",
        answers: ["Sistema Interno de Seguranca", "Sistema Brasileiro de Inteligencia", "Sistema de Informacao de Seguranca Brasileira", "Sociedade Internacional de Busca de Informacoes", "Servico Integrado de Seguranca em Brasilia"],
        correctIndex: 1,
        reference: "SISBIN significa Sistema Brasileiro de Inteligencia."
      },
      {
        text: "O que caracteriza a 3a fase (Transicao) da inteligencia no Brasil?",
        answers: ["Reavaliacao e autocritica para adequacao a novos contextos", "Expansao militar para outros paises", "Foco total em inteligencia cibernetica", "Criacao do primeiro codigo penal", "Dominio total da tecnologia 5G"],
        correctIndex: 0,
        reference: "A 3a fase de transicao foi marcada por reavaliacao e autocritica para adequacao a novos contextos governamentais."
      },
      {
        text: "Qual das siglas abaixo representa o Subsistema de Inteligencia de Seguranca Publica?",
        answers: ["SISBIN", "SIPMERJ", "SISP", "SSI", "CI"],
        correctIndex: 2,
        reference: "SISP significa Subsistema de Inteligencia de Seguranca Publica."
      },
      {
        text: "A DINT corresponde a qual numeracao de diretoria no organograma?",
        answers: ["D1", "D2", "D3", "D4", "D6"],
        correctIndex: 1,
        reference: "DINT e a Diretoria de Inteligencia (D2)."
      },
      {
        text: "A DOP e a diretoria responsavel por qual area?",
        answers: ["Recursos Humanos", "Inteligencia Cibernetica", "Ensino", "Operacoes", "Contra Inteligencia"],
        correctIndex: 3,
        reference: "DOP corresponde a Diretoria de Operacoes (D4)."
      }
    ]
  },
  inteligenciaFinanceira: {
    title: "Inteligencia Financeira",
    description: "Lavagem de dinheiro, COAF, RIF, sinais de atipicidade e investigacao patrimonial.",
    questions: [
      {
        text: "O que consiste a Inteligencia Financeira?",
        answers: ["No emprestimo de dinheiro para policiais", "Na producao de conhecimento para detectar fluxos financeiros atipicos", "Na venda de acoes na bolsa de valores", "No aumento do limite de cartoes de credito", "Na fiscalizacao de impostos residenciais"],
        correctIndex: 1,
        reference: "Consiste na producao de conhecimento estatal com a finalidade de detectar fluxos financeiros atipicos."
      },
      {
        text: "Qual e a finalidade principal da Inteligencia Financeira?",
        answers: ["Facilitar o credito bancario", "Identificar, prevenir e reprimir a lavagem de dinheiro", "Criar novas moedas digitais", "Cobrar dividas de empresas falidas", "Fiscalizar o trabalho escravo"],
        correctIndex: 1,
        reference: "A finalidade e identificar, prevenir e reprimir a lavagem de dinheiro."
      },
      {
        text: "Na inteligencia financeira, o que significa Ocultar?",
        answers: ["Mostrar publicamente a origem do dinheiro", "Esconder a origem ilicita para dificultar o rastreio", "Gastar todo o dinheiro em um unico dia", "Doar o dinheiro para instituicoes de caridade", "Guardar o dinheiro em um cofre em casa"],
        correctIndex: 1,
        reference: "Ocultar e esconder a propria origem ilicita para dificultar o rastreio pela autoridade."
      },
      {
        text: "O que significa Dissimular para a inteligencia financeira?",
        answers: ["Contar a verdade sobre a transacao", "Simular ou modificar caracteristicas, como superfaturar", "Esquecer onde o dinheiro foi guardado", "Perder os recibos de compra", "Pagar as contas em dia"],
        correctIndex: 1,
        reference: "Dissimular e simular, transformar ou modificar caracteristicas de valores e operacoes."
      },
      {
        text: "Qual e o objetivo do metodo Follow the Money?",
        answers: ["Seguir os passos fisicos do suspeito", "Investigar e responsabilizar lideres de organizacoes criminosas pelo rastro do dinheiro", "Distribuir dinheiro para a populacao", "Aumentar a arrecadacao de impostos", "Monitorar a inflacao do pais"],
        correctIndex: 1,
        reference: "Busca investigacao e responsabilizacao de lideres de organizacoes criminosas por meio do fluxo financeiro."
      },
      {
        text: "Quais sao as tres fases da Lavagem de Dinheiro?",
        answers: ["Inicio, Meio e Fim", "Planejamento, Execucao e Fuga", "Colocacao, Ocultacao e Integracao", "Coleta, Analise e Difusao", "Deposito, Saque e Transferencia"],
        correctIndex: 2,
        reference: "As fases classicas sao Colocacao, Ocultacao e Integracao."
      },
      {
        text: "O que caracteriza a fase de Colocacao?",
        answers: ["O retorno do dinheiro com aparencia de limpo", "A introducao do recurso ilicito na economia formal", "O uso de paraisos fiscais", "O julgamento dos criminosos", "A apreensao dos bens pela policia"],
        correctIndex: 1,
        reference: "Colocacao e a introducao do recurso ilicito na economia formal."
      },
      {
        text: "O que caracteriza a fase de Integracao?",
        answers: ["O primeiro deposito no banco", "A saida do dinheiro para o exterior", "O retorno do dinheiro a economia com aparencia de limpo", "A destruicao das provas fisicas", "A divisao do dinheiro entre os socios"],
        correctIndex: 2,
        reference: "Integracao e o retorno do dinheiro com aparencia de limpo ao circuito formal."
      },
      {
        text: "E necessario realizar as tres fases para que o crime de lavagem de dinheiro seja consumado?",
        answers: ["Sim, as tres sao obrigatorias", "Nao, basta a consumacao de qualquer ato destinado a ocultar ou dissimular", "Sim, mas apenas se o valor for alto", "Nao, o crime so ocorre na fase de integracao", "Sim, desde que haja um contrato assinado"],
        correctIndex: 1,
        reference: "Nao. Basta a pratica de qualquer ato destinado a ocultar ou dissimular para consumacao."
      },
      {
        text: "O que e o COAF?",
        answers: ["Um banco privado", "A Unidade de Inteligencia Financeira do Brasil", "Uma delegacia de policia civil", "Um software de computador", "Um tribunal de justica"],
        correctIndex: 1,
        reference: "O COAF e a unidade de inteligencia financeira do Brasil."
      },
      {
        text: "Qual e a principal funcao do COAF?",
        answers: ["Prender criminosos em flagrante", "Receber, analisar e disseminar informacoes de inteligencia financeira", "Fabricar papel moeda", "Definir a taxa de juros do pais", "Auditar as contas do Presidente"],
        correctIndex: 1,
        reference: "Atua no recebimento, analise e disseminacao de comunicacoes para prevencao e combate a lavagem."
      },
      {
        text: "O que significa a sigla RIF?",
        answers: ["Relatorio de Investigacao Federal", "Relatorio de Inteligencia Financeira", "Registro de Imposto de Fronteira", "Recibo de Investimento Fixo", "Reducao de Inflacao Futura"],
        correctIndex: 1,
        reference: "RIF significa Relatorio de Inteligencia Financeira."
      },
      {
        text: "O que o RIF contem em seu texto?",
        answers: ["Provas definitivas para condenacao", "Indicios e nao provas de ilicitos", "A sentenca do juiz", "Fotos de satelite dos esconderijos", "Lista de nomes de todos os policiais do Brasil"],
        correctIndex: 1,
        reference: "O RIF traz indicios de ilicitos, nao prova definitiva."
      },
      {
        text: "Qual destes e um indicio geral de lavagem de dinheiro?",
        answers: ["Pagamento de contas via boleto", "Movimentacao financeira incompativel com a renda", "Uso de cartao de debito para compras pequenas", "Recebimento de salario em conta poupanca", "Ter mais de uma conta bancaria"],
        correctIndex: 1,
        reference: "Movimentacao incompativel com a renda e indicio geral de lavagem de dinheiro."
      },
      {
        text: "Depositos fracionados sao considerados indicios de lavagem de dinheiro?",
        answers: ["Nao, e uma pratica comum e segura", "Sim, pois visam evitar alertas automaticos de valores altos", "Apenas se forem feitos em moedas estrangeiras", "Somente se o banco for internacional", "Nao, desde que sejam feitos no caixa eletronico"],
        correctIndex: 1,
        reference: "Depositos fracionados podem ser usados para evitar controles automaticos e sao indicio relevante."
      },
      {
        text: "Qual o foco da Investigacao Tradicional?",
        answers: ["Descapitalizacao da quadrilha", "Busca por autoria e materialidade, com prisao e apreensao", "Recuperacao de ativos no exterior", "Analise de notas fiscais eletronicas", "Monitoramento de bolsas de valores"],
        correctIndex: 1,
        reference: "A investigacao tradicional prioriza autoria e materialidade, com medidas como prisao e apreensao."
      },
      {
        text: "Qual o foco da Investigacao Financeira?",
        answers: ["Apenas a prisao fisica do suspeito", "A descapitalizacao e recuperacao de ativos", "O treinamento de tiro dos agentes", "A contagem fisica do dinheiro apreendido", "A verificacao de antecedentes criminais"],
        correctIndex: 1,
        reference: "A investigacao financeira busca descapitalizacao e recuperacao de ativos ilicitos."
      },
      {
        text: "Qual setor tem o dever de monitorar transacoes atipicas e reportar ao COAF?",
        answers: ["Apenas as igrejas", "Instituicoes financeiras, corretoras e setores de luxo", "Supermercados de bairro", "Escolas de ensino fundamental", "Academias de ginastica"],
        correctIndex: 1,
        reference: "Setores obrigados, como instituicoes financeiras e outros segmentos sensiveis, devem monitorar e reportar atipicidades ao COAF."
      },
      {
        text: "Compras de alto valor sem lastro, origem do dinheiro, sao indicios de:",
        answers: ["Sucesso empresarial legitimo", "Lavagem de dinheiro", "Erro do sistema bancario", "Boa gestao financeira pessoal", "Economia de impostos"],
        correctIndex: 1,
        reference: "Compras de alto valor sem lastro economico configuram indicio de lavagem de dinheiro."
      },
      {
        text: "O uso recorrente de dinheiro vivo para grandes transacoes e considerado:",
        answers: ["Uma forma de ganhar descontos", "Um indicio de lavagem de dinheiro", "Pratica recomendada para seguranca", "Direito de privacidade absoluta", "Metodo mais rapido de pagamento"],
        correctIndex: 1,
        reference: "Uso recorrente de dinheiro em especie em operacoes elevadas e indicio relevante."
      },
      {
        text: "O que sao Socios Laranjas?",
        answers: ["Socios que trabalham com agricultura", "Pessoas que emprestam o nome para ocultar os verdadeiros donos", "Socios que investem apenas em moedas estrangeiras", "Funcionarios que ganham comissao por vendas", "Socios que possuem menos de 1% da empresa"],
        correctIndex: 1,
        reference: "Socio laranja e pessoa usada formalmente para ocultar os beneficiarios reais de empresa ou bens."
      },
      {
        text: "Notas fiscais frias sao indicios de lavagem de dinheiro em empresas?",
        answers: ["Nao, sao apenas erros contabeis", "Sim, sao usadas para justificar entradas de dinheiro ilicito", "Apenas se a empresa for de tecnologia", "Nao, se o imposto for pago", "Sim, mas apenas se o valor for em dolar"],
        correctIndex: 1,
        reference: "Notas fiscais frias podem dissimular origem de recursos ilicitos e sao indicio de lavagem."
      },
      {
        text: "Uma queda brusca no giro de uma empresa apos uma operacao policial sugere:",
        answers: ["Que os clientes ficaram com medo", "Que a empresa dependia do fluxo de dinheiro ilicito", "Que os funcionarios entraram em greve", "Que o mercado financeiro entrou em crise", "Que a policia confiscou o estoque"],
        correctIndex: 1,
        reference: "Queda brusca de giro apos intervencao pode indicar dependencia de fluxo financeiro ilicito."
      },
      {
        text: "Qual a diferenca de geracoes nas leis de lavagem de dinheiro?",
        answers: ["Referem-se a idade dos criminosos", "Referem-se a evolucao da abrangencia dos crimes antecedentes", "Referem-se a tecnologia dos computadores usados", "Referem-se ao tempo de pena de prisao", "Referem-se ao numero de paises envolvidos"],
        correctIndex: 1,
        reference: "As geracoes tratam da evolucao legislativa da abrangencia dos crimes antecedentes e do alcance do tipo penal."
      },
      {
        text: "A venda de produtos com precos muito acima do mercado pode indicar:",
        answers: ["Alta qualidade do produto", "Dissimulacao para justificar entrada de dinheiro ilicito", "Falta de concorrencia", "Inflacao alta no setor", "Estrategia de marketing agressiva"],
        correctIndex: 1,
        reference: "Superfaturamento pode ser tecnica de dissimulacao para inserir recursos ilicitos na economia formal."
      },
      {
        text: "Qual e a Unidade de Inteligencia Financeira, UIF, no Brasil?",
        answers: ["Receita Federal", "COAF", "Banco Central", "Policia Federal", "Ministerio da Fazenda"],
        correctIndex: 1,
        reference: "O COAF exerce o papel de unidade de inteligencia financeira no Brasil."
      },
      {
        text: "O RIF espontaneo e aquele que:",
        answers: ["O COAF produz por iniciativa propria ao detectar atipicidades", "A policia pede atraves de ordem judicial", "O suspeito envia para se confessar", "O banco envia por engano", "O juiz redige durante a audiencia"],
        correctIndex: 0,
        reference: "O RIF pode ser espontaneo, quando produzido de oficio, ou a pedido de autoridade competente."
      },
      {
        text: "No combate a lavagem de dinheiro, o que e uma Barreira de Protecao?",
        answers: ["Muros fisicos em volta dos bancos", "Medidas para evitar que o dinheiro do crime contamine a economia legal", "Senhas de alta complexidade nos aplicativos", "Vigilancia armada nas ruas", "Limite de saque no caixa eletronico"],
        correctIndex: 1,
        reference: "Barreira de protecao e o conjunto de medidas para separar o dinheiro do crime da economia formal."
      },
      {
        text: "O uso de Paraisos Fiscais e comum em qual fase?",
        answers: ["Colocacao", "Ocultacao", "Integracao", "Investigacao", "Julgamento"],
        correctIndex: 1,
        reference: "Paraisos fiscais sao tecnicas classicas da fase de ocultacao, para dificultar rastreabilidade."
      },
      {
        text: "Empresas recem-criadas com alto giro financeiro imediato sao:",
        answers: ["Exemplos de empreendedorismo de sucesso", "Indicios de lavagem de dinheiro", "Beneficiarias de subsidios do governo", "Erros de digitacao no sistema", "Obrigadas a pagar menos impostos"],
        correctIndex: 1,
        reference: "Empresa recem-criada com giro elevado sem lastro aparente e indicio de lavagem de dinheiro."
      }
    ]
  },
  contrainteligencia: {
    title: "Contrainteligencia",
    description: "Conceitos de CI, seguranca ativa, salvaguarda, credenciamento e neutralizacao de acoes adversas.",
    questions: [
      {
        text: "Como se define o ramo da Contrainteligencia (CI)?",
        answers: ["Ramo que foca apenas na espionagem estrangeira", "Ramo que produz conhecimentos para proteger a atividade de Inteligencia e a instituicao", "Ramo responsavel pela compra de armamentos", "Setor focado em propaganda politica", "Departamento de relacoes publicas da PM"],
        correctIndex: 1,
        reference: "CI e o ramo da ISP voltado a proteger a atividade de Inteligencia e a instituicao por meio de producao de conhecimento."
      },
      {
        text: "Qual e a finalidade de identificar e neutralizar acoes adversas na CI?",
        answers: ["Aumentar o numero de prisoes em flagrante", "Salvaguardar dados e conhecimentos sigilosos", "Promover agentes por bravura", "Melhorar a imagem da policia na internet", "Reduzir gastos com tecnologia"],
        correctIndex: 1,
        reference: "A finalidade e salvaguardar dados e conhecimentos sigilosos e neutralizar acoes adversas."
      },
      {
        text: "A quem se estende a responsabilidade pelas acoes de preservacao da seguranca?",
        answers: ["Apenas aos servidores especialistas em TI", "Somente aos comandantes de batalhoes", "A todos os servidores das AISP", "Apenas aos agentes infiltrados", "Exclusivamente a Secretaria de Seguranca"],
        correctIndex: 2,
        reference: "As acoes de seguranca nao se restringem aos especialistas e se estendem a todos os servidores das AISP."
      },
      {
        text: "O que e o Acesso no contexto da Contrainteligencia?",
        answers: ["O ato de ligar um computador", "A possibilidade de uma pessoa ingressar em area protegida ou ter contato com dado sigiloso", "A senha de rede Wi-Fi da unidade", "O direito de portar arma de fogo", "A entrada franca em eventos publicos"],
        correctIndex: 1,
        reference: "Acesso e a oportunidade de ingresso em area protegida ou contato com dado e conhecimento sigiloso."
      },
      {
        text: "O acesso a dados sigilosos deriva de qual condicao oficial?",
        answers: ["Idade superior a 21 anos", "Tempo de servico na policia", "Credenciamento e autorizacao oficial de autoridade competente", "Popularidade entre os colegas de farda", "Aprovacao em teste de tiro"],
        correctIndex: 2,
        reference: "O acesso deriva de autorizacao oficial emanada por autoridade competente, mediante credenciamento."
      },
      {
        text: "O que e Comprometimento na atividade de inteligencia?",
        answers: ["A dedicacao total do agente ao servico", "A perda de seguranca resultante do acesso de pessoa nao autorizada a dado sigiloso", "O cumprimento de todas as missoes no prazo", "A assinatura de um contrato de trabalho", "A protecao absoluta de um segredo"],
        correctIndex: 1,
        reference: "Comprometimento e a perda de seguranca decorrente do acesso nao autorizado a dado ou conhecimento sigiloso."
      },
      {
        text: "No segmento da Seguranca Ativa, a Contraespionagem serve para:",
        answers: ["Criar perfis falsos em redes sociais", "Detectar e neutralizar operacoes de Inteligencia adversas", "Comprar equipamentos de escuta", "Monitorar o transito nas grandes cidades", "Realizar a escolta de autoridades"],
        correctIndex: 1,
        reference: "Contraespionagem e medida ativa destinada a detectar e neutralizar operacoes de inteligencia adversas."
      },
      {
        text: "O que caracteriza a Espionagem?",
        answers: ["O uso de drones para filmar eventos", "Operacao clandestina para obtencao de dados sigilosos visando beneficiar Estados ou grupos", "A leitura de jornais estrangeiros", "O registro de patentes industriais", "A fiscalizacao de fronteiras"],
        correctIndex: 1,
        reference: "Espionagem e operacao clandestina adversa para obter dados e conhecimentos sigilosos em beneficio de interesses externos."
      },
      {
        text: "Qual e o objetivo das medidas de Contrassabotagem?",
        answers: ["Consertar maquinas quebradas", "Detectar e neutralizar atos de sabotagem contra instituicoes ou ativos", "Impedir a entrada de pessoas sem farda", "Vigiar as redes sociais de politicos", "Limpar as instalacoes da agencia"],
        correctIndex: 1,
        reference: "Contrassabotagem atua para detectar e neutralizar atos de sabotagem contra pessoas, documentos e instalacoes."
      },
      {
        text: "Como se define a Sabotagem?",
        answers: ["Um erro cometido por descuido do funcionario", "Ato deliberado para inutilizar ou adulterar ativos, instalacoes ou conhecimentos", "A falta de verba para operacoes", "A demora na entrega de um relatorio", "O uso de software pirata no escritorio"],
        correctIndex: 1,
        reference: "Sabotagem e ato deliberado para inutilizar ou adulterar conhecimentos, materiais, instalacoes e ativos institucionais."
      },
      {
        text: "O segmento da Contrainteligencia que detecta e neutraliza acoes terroristas e:",
        answers: ["Contrapassiva", "Contraespionagem", "Contraterrorismo", "Contrasabotagem", "Contrapropaganda"],
        correctIndex: 2,
        reference: "Contraterrorismo e o conjunto de medidas ativas para detectar e neutralizar ameacas e acoes terroristas."
      },
      {
        text: "Segundo o texto, o que e Terrorismo?",
        answers: ["Qualquer briga de rua com mais de 5 pessoas", "Emprego premeditado de violencia fisica ou psicologica para intimidar ou coagir", "O atraso sistematico no pagamento de impostos", "A critica agressiva ao governo nas redes sociais", "O porte ilegal de armas de fogo"],
        correctIndex: 1,
        reference: "Terrorismo e a ameaca ou uso premeditado de violencia fisica e psicologica para intimidar e coagir."
      },
      {
        text: "A manipulacao planejada de informacoes para influenciar grupos em beneficio de um patrocinador e chamada de:",
        answers: ["Educacao", "Publicidade governamental", "Propaganda adversa", "Jornalismo investigativo", "Treinamento de pessoal"],
        correctIndex: 2,
        reference: "Propaganda adversa e a manipulacao planejada de informacoes, ideias e doutrinas para influenciar grupos."
      },
      {
        text: "A Contrainteligencia utiliza quais tipos de medidas?",
        answers: ["Apenas medidas financeiras", "Acoes, normas, medidas e procedimentos de prevencao e obstrucao", "Apenas medidas de ataque fisico", "Somente conselhos verbais", "Apenas demissao de funcionarios suspeitos"],
        correctIndex: 1,
        reference: "A CI se implementa por acoes, normas, medidas e procedimentos voltados a prevencao, obstrucao e neutralizacao."
      },
      {
        text: "Qual verbo abaixo nao representa uma acao comum da CI segundo o texto?",
        answers: ["Proteger", "Prevenir", "Neutralizar", "Divulgar dados sigilosos publicamente", "Obstruir"],
        correctIndex: 3,
        reference: "Divulgar dado sigiloso e oposto a finalidade da CI, que e proteger, prevenir, neutralizar e obstruir."
      },
      {
        text: "A deteccao de desinformacao e uma preocupacao de qual area da CI?",
        answers: ["Seguranca Pessoal", "Contrapropaganda", "Seguranca de Material", "Seguranca de Documentos", "Seguranca de Areas"],
        correctIndex: 1,
        reference: "A contrapropaganda busca detectar e neutralizar propaganda adversa e desinformacao."
      },
      {
        text: "O que a Contrainteligencia visa salvaguardar prioritariamente?",
        answers: ["Os moveis da reparticao", "Dados e conhecimentos sigilosos", "O horario de almoco dos agentes", "A escala de ferias do batalhao", "O estoque de papelaria"],
        correctIndex: 1,
        reference: "A prioridade e salvaguardar dados e conhecimentos sigilosos oriundos da estrutura de ISP."
      },
      {
        text: "A obstrucao na CI tem a finalidade de:",
        answers: ["Trancar todas as portas da unidade para sempre", "Vedar ou impedir o acesso de ameacas a informacao", "Parar o transito durante operacoes", "Impedir que os agentes falem uns com os outros", "Bloquear a internet de todos os cidadaos"],
        correctIndex: 1,
        reference: "Obstrucao envolve vedar, impedir e dificultar a acao adversa sobre informacoes sensiveis."
      },
      {
        text: "O credenciamento e um processo que concede:",
        answers: ["Um aumento salarial", "A autorizacao oficial para acesso a sigilo", "Uma medalha de honra", "O direito de dirigir viaturas", "Aposentadoria especial"],
        correctIndex: 1,
        reference: "Credenciamento e o ato formal que autoriza acesso a conhecimentos sigilosos."
      },
      {
        text: "A CI atua na deteccao de acoes adversas de que natureza?",
        answers: ["Apenas de natureza economica", "Apenas de natureza religiosa", "De qualquer natureza que ameace a inteligencia ou a instituicao", "Apenas de natureza esportiva", "Apenas de natureza climatica"],
        correctIndex: 2,
        reference: "A CI busca identificar e neutralizar acoes adversas de qualquer natureza."
      },
      {
        text: "A neutralizacao na CI busca:",
        answers: ["Matar todos os suspeitos imediatamente", "Desorganizar, confundir ou desinformar a acao adversa", "Dar dinheiro aos espioes para eles pararem", "Ignorar as ameacas ate que elas sumam", "Pedir desculpas aos adversarios"],
        correctIndex: 1,
        reference: "Neutralizar envolve desorganizar, confundir e desinformar a acao adversa."
      },
      {
        text: "Seguranca Ativa na CI envolve:",
        answers: ["Ficar parado esperando o ataque", "Medidas destinadas a detectar e neutralizar operacoes adversas", "Apenas trancar gavetas", "Usar cameras de seguranca passivas", "Contratar vigias para a porta"],
        correctIndex: 1,
        reference: "Seguranca ativa compreende medidas de deteccao e neutralizacao de operacoes adversas."
      },
      {
        text: "Qual o objetivo da Contrapropaganda?",
        answers: ["Fazer comerciais de TV", "Detectar e neutralizar a propaganda adversa e a desinformacao", "Imprimir panfletos de festas", "Criar logotipos para a policia", "Censurar todos os jornais do pais"],
        correctIndex: 1,
        reference: "Contrapropaganda busca neutralizar propaganda adversa, desinformacao e influencias hostis."
      },
      {
        text: "O ato de salvaguardar significa:",
        answers: ["Gastar o dinheiro do orcamento", "Proteger e preservar o que e importante", "Vender informacoes para outros paises", "Jogar documentos fora", "Trocar as lampadas da agencia"],
        correctIndex: 1,
        reference: "Salvaguardar e proteger, guardar e preservar ativos e conhecimentos relevantes."
      },
      {
        text: "A sabotagem pode ter efeitos de que tipo?",
        answers: ["Apenas efeitos visuais", "Apenas efeitos sonoros", "Fisicos e/ou psicologicos", "Apenas efeitos financeiros", "Somente efeitos climaticos"],
        correctIndex: 2,
        reference: "Sabotagem e ato deliberado de efeitos fisicos e/ou psicologicos."
      },
      {
        text: "Inutilizar uma instalacao militar de proposito e um exemplo de:",
        answers: ["Espionagem", "Sabotagem", "Terrorismo", "Propaganda", "Reciclagem"],
        correctIndex: 1,
        reference: "Inutilizacao deliberada de instalacao e caracteristica de sabotagem."
      },
      {
        text: "Quem executa o planejamento das acoes de preservacao da seguranca?",
        answers: ["Empresas de seguranca privada", "A propria secao de Contrainteligencia", "Estagiarios da administracao", "Politicos locais", "O corpo de bombeiros"],
        correctIndex: 1,
        reference: "Cabe a CI planejar e executar as acoes necessarias para preservacao da seguranca."
      },
      {
        text: "A identificacao de um agente infiltrado adversario e uma acao de:",
        answers: ["Inteligencia Financeira", "Contrainteligencia", "Logistica", "Comunicacao Social", "Engenharia"],
        correctIndex: 1,
        reference: "Identificar e neutralizar acoes adversas de organismos ou pessoas e atribuicao da CI."
      },
      {
        text: "O credenciamento esta ligado a superacao de quais medidas?",
        answers: ["Medidas de peso e altura", "Medidas de salvaguarda", "Medidas de velocidade", "Medidas de economia de energia", "Medidas de distancia"],
        correctIndex: 1,
        reference: "O comprometimento pode decorrer da superacao das medidas de salvaguarda, relacionando-se ao controle por credenciamento."
      },
      {
        text: "O termo Doutrina na propaganda adversa refere-se a:",
        answers: ["Um tipo de medicamento", "Conjunto de ideias ou principios manipulados para influenciar pessoas", "Uma regra de transito", "Um manual de informatica", "Uma receita culinaria"],
        correctIndex: 1,
        reference: "Na propaganda adversa, doutrina representa ideias e principios manipulados para influenciar grupos."
      }
    ]
  },
  lai: {
    title: "Lei de Acesso a Informacao (LAI)",
    description: "Prazos de sigilo, direitos do requerente e regras de acesso a informacoes publicas.",
    questions: [
      {
        text: "Qual e o prazo maximo de sigilo para uma informacao classificada como 'Ultrassecreta'?",
        answers: ["5 anos", "10 anos", "15 anos", "20 anos", "25 anos"],
        correctIndex: 4,
        reference: "Ultrassecreto - 25 anos."
      },
      {
        text: "Segundo a LAI, qual o prazo de classificacao para informacoes 'Reservadas'?",
        answers: ["5 anos", "10 anos", "15 anos", "25 anos", "100 anos"],
        correctIndex: 0,
        reference: "Reservado - 5 anos."
      },
      {
        text: "Qual e o prazo de sigilo para informacoes classificadas como 'Secretas'?",
        answers: ["5 anos", "10 anos", "15 anos", "25 anos", "30 anos"],
        correctIndex: 2,
        reference: "Secreto - 15 anos."
      },
      {
        text: "O que o agente publico NAO pode exigir do requerente ao receber um pedido de informacao?",
        answers: [
          "Documento de identificacao.",
          "Endereco para resposta.",
          "Nome completo.",
          "A motivacao (justificativa) para o pedido.",
          "Clareza no que esta sendo solicitado."
        ],
        correctIndex: 3,
        reference: "O agente publico nao pode solicitar motivacao ao requerente."
      },
      {
        text: "Quais tipos de pedidos de informacao NAO serao aceitos pelo orgao publico?",
        answers: [
          "Pedidos feitos por e-mail.",
          "Pedidos escritos a mao.",
          "Pedidos genericos, desproporcionais ou desarrazoados.",
          "Pedidos feitos por pessoas que nao moram na cidade.",
          "Pedidos que envolvam gastos com papel."
        ],
        correctIndex: 2,
        reference: "Nao serao aceitos pedidos genericos, desproporcionais ou desarrazoados."
      },
      {
        text: "Para acessar ou divulgar informacoes sigilosas, quais sao os dois requisitos fundamentais?",
        answers: [
          "Ser parente do autor e ter curso superior.",
          "Ter necessidade de conhecer e estar devidamente credenciado.",
          "Ter mais de 10 anos de servico e ser concursado.",
          "Pagar uma taxa administrativa e assinar um termo.",
          "Ter autorizacao judicial e ser advogado."
        ],
        correctIndex: 1,
        reference: "Para divulgar e acessar: necessidade de conhecer e estar devidamente credenciado."
      }
    ]
  },
  orgAgencia: {
    title: "Organizacao de Agencia de Inteligencia (SIPMERJ)",
    description: "Estrutura hierarquica, recursos humanos e medidas de seguranca das agencias.",
    questions: [
      {
        text: "Qual e a agencia de mais alto nivel dentro da estrutura do SIPMERJ?",
        answers: ["Agencia Classe A", "Agencia Classe B", "Agencia Central (SSI)", "Agencia Regional", "Agencia de Apoio"],
        correctIndex: 2,
        reference: "Agencia Central (SSI) - 2a secao do Estado Maior Geral da PMERJ - e a Agencia de mais alto nivel."
      },
      {
        text: "As 2as secoes dos Comandos Intermediarios sao classificadas como:",
        answers: ["Agencias Classe A", "Agencias Classe B", "Agencias Classe C", "Agencias Especiais", "Agencias de Direcao Geral"],
        correctIndex: 0,
        reference: "Agencias Classe A - As 2as secoes dos comandos intermediarios."
      },
      {
        text: "Qual e a classificacao das agencias que funcionam nas Unidades Operacionais (Batalhoes)?",
        answers: ["Classe A", "Classe B", "Classe C", "Classe D", "Agencia Central"],
        correctIndex: 1,
        reference: "Agencias Classe B - As 2as secoes das unidades operacionais."
      },
      {
        text: "As Agencias Classe C sao compostas por quais setores das Secretarias?",
        answers: [
          "Setores de Limpeza e Manutencao.",
          "Setores de Rancho e Almoxarifado.",
          "Setores de Expediente e Assuntos Sigilosos.",
          "Setores de Relacoes Publicas.",
          "Setores de Transporte e Logistica."
        ],
        correctIndex: 2,
        reference: "Agencias Classe C - Os setores de Expediente e Assuntos Sigilosos das Secretarias."
      },
      {
        text: "Qual e considerado um dos 'principais gargalos' dos recursos humanos nas agencias?",
        answers: ["O excesso de agentes.", "A falta de capacitacao.", "O uso de uniformes.", "A distancia fisica entre os batalhoes.", "O horario de expediente."],
        correctIndex: 1,
        reference: "Um dos principais gargalos dos recursos humanos e a falta de capacitacao."
      },
      {
        text: "Qual e uma consequencia direta da baixa capacitacao dos agentes de inteligencia?",
        answers: [
          "Aumento da velocidade da internet.",
          "Producao de conhecimentos/documentos de baixa qualidade.",
          "Melhora no assessoramento do tomador de decisao.",
          "Reducao de custos operacionais.",
          "Maior seguranca nos dados."
        ],
        correctIndex: 1,
        reference: "A falta de capacitacao implica vulnerabilidade da agencia e producao de conhecimentos/documentos de baixa qualidade."
      },
      {
        text: "O controle de acesso eficiente e a compartimentacao fisica sao considerados:",
        answers: [
          "Gastos desnecessarios.",
          "Medidas basicas de Contrainteligencia (CI).",
          "Atividades de Inteligencia Financeira.",
          "Procedimentos de relacoes publicas.",
          "Normas de higiene do trabalho."
        ],
        correctIndex: 1,
        reference: "Medidas basicas de CI: compartimentacao fisica e controle de acesso eficiente."
      },
      {
        text: "O que a agencia deve identificar para garantir sua seguranca interna?",
        answers: [
          "O preco dos moveis.",
          "Vulnerabilidades (acesso, salvaguarda, gerenciamento de servidor).",
          "A marca dos computadores.",
          "A quantidade de lampadas queimadas.",
          "O cardapio do dia."
        ],
        correctIndex: 1,
        reference: "Identificar vulnerabilidades da agencia: controle de acesso, salvaguarda e destruicao de documentos, acesso a internet."
      },
      {
        text: "Para mitigar falhas, a agencia deve incentivar o que em relacao aos seus agentes?",
        answers: [
          "A transferencia para outros setores.",
          "O uso de redes sociais privadas.",
          "A qualificacao profissional.",
          "O aumento do porte de armas.",
          "A reducao do tempo de servico."
        ],
        correctIndex: 2,
        reference: "Incentivar a qualificacao dos agentes e buscar meios facilitadores de qualificacao dentro da propria agencia."
      },
      {
        text: "A quem as Agencias Classe A se ligam diretamente na estrutura hierarquica do SIPMERJ?",
        answers: [
          "Diretamente aos Batalhoes.",
          "Apenas ao Governador.",
          "A Agencia Central (AC).",
          "A Policia Civil.",
          "As agencias do Governo Federal."
        ],
        correctIndex: 2,
        reference: "Agencias Classe A sao as agencias de nivel imediatamente abaixo da AC, que a ela se ligam."
      }
    ]
  },
  intXcorrecional: {
    title: "Inteligencia x Atividade Correcional",
    description: "Distincoes entre atividade de inteligencia, investigacao e atividade correcional na PMERJ.",
    questions: [
      {
        text: "Qual e a finalidade principal da Atividade de Inteligencia?",
        answers: [
          "Punir culpados por crimes militares.",
          "Realizar prisoes em flagrante de civis.",
          "Assessorar o processo decisorio e antecipar ameacas.",
          "Coletar provas para processos judiciais em andamento.",
          "Fiscalizar o cumprimento de escalas de servico."
        ],
        correctIndex: 2,
        reference: "Finalidade: Assessoramento ao processo decisorio e antecipacao de ameacas."
      },
      {
        text: "A Atividade Correcional atua prioritariamente apos a ocorrencia de um fato. Como essa caracteristica e definida?",
        answers: ["Prospectiva.", "Retrospectiva.", "Preventiva.", "Hipotetica.", "Imaginaria."],
        correctIndex: 1,
        reference: "Atividade Correcional: Atuacao retrospectiva (fatos passados)."
      },
      {
        text: "Qual e o foco da Atividade de Inteligencia em relacao ao tempo?",
        answers: [
          "Futuro (Prospectiva).",
          "Passado (Retrospectiva).",
          "Apenas o presente imediato.",
          "Somente fatos historicos de 1927.",
          "Nenhuma das anteriores."
        ],
        correctIndex: 0,
        reference: "Atividade de Inteligencia: Atuacao prospectiva (foco no futuro/antevisao)."
      },
      {
        text: "A Investigacao (Inquerito Policial Militar) busca especificamente o que?",
        answers: [
          "Evitar que um crime aconteca.",
          "Autoria e materialidade de um crime.",
          "Criar novas doutrinas de seguranca.",
          "Comprar equipamentos de informatica.",
          "Monitorar redes sociais de forma generica."
        ],
        correctIndex: 1,
        reference: "Investigacao: Busca autoria e materialidade (provas)."
      },
      {
        text: "Qual o objetivo da Inteligencia de Seguranca Publica (ISP)?",
        answers: [
          "Expor dados sensiveis para a imprensa.",
          "Produzir conhecimentos para prevenir, neutralizar e reprimir a criminalidade.",
          "Realizar apenas a escolta de autoridades.",
          "Substituir o trabalho do Ministerio Publico.",
          "Gerenciar o pagamento de salarios."
        ],
        correctIndex: 1,
        reference: "ISP: Producao de conhecimentos para prevenir, neutralizar e reprimir a criminalidade e o crime organizado."
      },
      {
        text: "No ambito correcional, a Inteligencia e utilizada para:",
        answers: [
          "Perdoar punicoes disciplinares.",
          "Apoiar a atividade de policia judiciaria militar e processos administrativos.",
          "Dar ordens diretas de prisao aos comandantes.",
          "Vender equipamentos de seguranca.",
          "Recrutar novos policiais civis."
        ],
        correctIndex: 1,
        reference: "Atividade de Inteligencia no Ambito Correcional: Apoio as atividades de policia judiciaria militar."
      },
      {
        text: "Qual documento e o principal 'produto' da Atividade de Inteligencia para o tomador de decisao?",
        answers: [
          "Inquerito Policial Militar (IPM).",
          "Auto de Prisao em Flagrante (APF).",
          "Conhecimento (Relatorios de Inteligencia).",
          "Oficio de solicitacao de ferias.",
          "Nota fiscal de compra."
        ],
        correctIndex: 2,
        reference: "Produto da Inteligencia: Conhecimento."
      },
      {
        text: "Qual unidade e a responsavel pelas acoes correcionais e de policia judiciaria militar na PMERJ?",
        answers: [
          "SSI",
          "Batalhao de Choque",
          "Corregedoria Geral (CGPM).",
          "Diretoria de Financas",
          "Centro de Suprimento"
        ],
        correctIndex: 2,
        reference: "Estrutura da Corregedoria Geral (Unidades Subordinadas)."
      },
      {
        text: "Na distincao entre as atividades, qual delas tem carater SIGILOSO por natureza?",
        answers: [
          "Atividade de Inteligencia.",
          "Atividade Correcional Ostensiva.",
          "Inquerito Policial Publico.",
          "Atendimento ao publico no SAC.",
          "Blitz de transito comum."
        ],
        correctIndex: 0,
        reference: "Natureza: Sigilo (Inteligencia) x Publicidade Relativa (Investigacao)."
      },
      {
        text: "O Inquerito Policial Militar (IPM) e um procedimento de qual natureza?",
        answers: [
          "Inteligencia Prospectiva.",
          "Policia Judiciaria Militar.",
          "Assistencia Social.",
          "Logistica de armamento.",
          "Engenharia de dados."
        ],
        correctIndex: 1,
        reference: "Investigacao (Inquerito Policial Militar)."
      },
      {
        text: "A atividade que 'busca evitar o comprometimento de ativos da instituicao' e a:",
        answers: [
          "Investigacao Correcional.",
          "Contrainteligencia.",
          "Logistica de Transporte.",
          "Assessoria de Imprensa.",
          "Relacoes Externas."
        ],
        correctIndex: 1,
        reference: "Contrainteligencia: Protecao dos ativos da instituicao."
      },
      {
        text: "Qual e a principal diferenca de 'Destinatario' entre as duas atividades?",
        answers: [
          "A Inteligencia foca no Decisor; a Investigacao foca no Juiz/Ministerio Publico.",
          "Ambas focam apenas na imprensa.",
          "A Inteligencia foca no soldado; a Investigacao foca no coronel.",
          "A Investigacao foca no futuro; a Inteligencia foca no passado.",
          "Nao ha diferenca de destinatario."
        ],
        correctIndex: 0,
        reference: "Destinatario: Decisor (Inteligencia) x Autoridade Judiciaria/MP (Investigacao)."
      },
      {
        text: "A 'Busca de Dados' na Inteligencia visa:",
        answers: [
          "Somente prender o infrator.",
          "Transformar dados em conhecimento util para a seguranca.",
          "Aumentar o arquivo morto da unidade.",
          "Divulgar fofocas internas.",
          "Fazer estatistica de transito."
        ],
        correctIndex: 1,
        reference: "Conceito - Atividade de Inteligencia: Obtencao e analise de dados."
      },
      {
        text: "A Atividade Correcional tem como um de seus pilares o 'Controle Interno'. Isso significa:",
        answers: [
          "Controlar quem entra e sai do portao principal.",
          "Fiscalizar a conduta etica e legal dos integrantes da tropa.",
          "Limitar o uso de internet nos computadores.",
          "Controlar o estoque de municao apenas.",
          "Vigiar as familias dos policiais."
        ],
        correctIndex: 1,
        reference: "Atividade Correcional: Controle interno da conduta."
      },
      {
        text: "Qual destas e uma Unidade Subordinada da Corregedoria (DPJM)?",
        answers: [
          "1 BPM",
          "P2",
          "1a DPJM (Delegacia de Policia Judiciaria Militar).",
          "SSI",
          "BOPE"
        ],
        correctIndex: 2,
        reference: "Estrutura da Corregedoria Geral (Unidades Subordinadas - DPJMs)."
      },
      {
        text: "A Atividade de Inteligencia deve ser realizada com base em quais principios?",
        answers: [
          "Etica, Legalidade e Doutrina.",
          "Violencia, Sigilo Absoluto e Forca.",
          "Amizade, Parceria e informalidade.",
          "Opiniao Pessoal, Criatividade e Sorte.",
          "Apenas ordens verbais sem registro."
        ],
        correctIndex: 0,
        reference: "Fundamentos da Atividade de Inteligencia."
      },
      {
        text: "O que significa 'Neutralizacao' no contexto de ISP?",
        answers: [
          "Tornar a pessoa invisivel.",
          "Interromper ou anular uma ameaca ou acao adversa.",
          "Contratar o adversario para trabalhar na policia.",
          "Deixar o crime acontecer para ver onde vai dar.",
          "Esquecer que o problema existe."
        ],
        correctIndex: 1,
        reference: "Finalidade da ISP: Prevenir, NEUTRALIZAR e reprimir."
      },
      {
        text: "'Produzir conhecimentos sobre o fenomeno da criminalidade' e papel da:",
        answers: [
          "Corregedoria Geral (apenas).",
          "Inteligencia de Seguranca Publica (ISP).",
          "Secretaria de Fazenda.",
          "Defensoria Publica.",
          "Guarda Municipal."
        ],
        correctIndex: 1,
        reference: "Conceito - Inteligencia de Seguranca Publica."
      },
      {
        text: "A Investigacao Criminal (ou Correcional) serve para:",
        answers: [
          "Dar conselhos ao criminoso.",
          "Reconstruir a verdade real de um crime ocorrido.",
          "Imaginar crimes que podem acontecer no ano que vem.",
          "Fazer propaganda das acoes da policia.",
          "Nenhuma das anteriores."
        ],
        correctIndex: 1,
        reference: "Investigacao: Carater retrospectivo / Verdade real."
      },
      {
        text: "A quem o Corregedor Geral da PMERJ se reporta diretamente?",
        answers: [
          "Ao Juiz da vara comum.",
          "Ao Comandante de um Batalhao de area.",
          "Ao Secretario de Estado de Policia Militar.",
          "Ao Presidente da Republica.",
          "Ao Prefeito da cidade."
        ],
        correctIndex: 2,
        reference: "Estrutura da Corregedoria Geral (Hierarquia institucional)."
      }
    ]
  },
  fundamentosDoutrinarios: {
    title: "Fundamentos Doutrinários",
    description: "História, doutrina, princípios, canais, fontes e fundamentos da atividade de inteligência.",
    questions: [
      {
        text: "Na história mundial, qual obra é considerada o primeiro tratado sobre a importância da informação para o sucesso militar?",
        answers: ["O Príncipe (Maquiavel)", "A Arte da Guerra (Sun Tzu)", "Da Guerra (Clausewitz)", "Leviatã (Hobbes)", "O Contrato Social (Rousseau)"],
        correctIndex: 1,
        reference: "Sun Tzu (A Arte da Guerra) - primeiro tratado sobre a importância da informação para o sucesso militar."
      },
      {
        text: "Segundo Sun Tzu, o conhecimento prévio é essencial para:",
        answers: ["Aumentar os impostos.", "Vencer batalhas sem precisar lutar.", "Construir fortificações mais altas.", "Treinar recrutas em tempo recorde.", "Comprar armas estrangeiras."],
        correctIndex: 1,
        reference: "A Arte da Guerra (Sun Tzu) - preconizava a importância da informação para o sucesso militar e a obtenção da vitória sem o combate."
      },
      {
        text: "Qual autor é amplamente reconhecido como o pai da análise de inteligência moderna?",
        answers: ["Sun Tzu", "Sherman Kent", "Clausewitz", "Maquiavel", "Washington Luiz"],
        correctIndex: 1,
        reference: "Sherman Kent (pai da análise moderna)."
      },
      {
        text: "Na fase embrionária da inteligência no Brasil, a atividade caracterizou-se por:",
        answers: ["Espionar cidadãos comuns.", "Construção das primeiras estruturas governamentais voltadas para análise de dados.", "Criar uma polícia política secreta.", "Controlar os preços das mercadorias.", "Organizar as eleições sindicais."],
        correctIndex: 1,
        reference: "1ª Fase: FASE EMBRIONÁRIA (1927 a 1964); correspondeu à construção das primeiras estruturas governamentais voltadas para a análise de dados e para a produção de conhecimentos."
      },
      {
        text: "A Atividade de Inteligência é definida formalmente como:",
        answers: ["O uso da força física para obter confissões.", "O exercício permanente e especializado de ações para produção de conhecimentos.", "A guarda ostensiva de prédios públicos.", "O policiamento de trânsito em grandes eventos.", "A investigação de crimes com foco em punição."],
        correctIndex: 1,
        reference: "Entende-se por Inteligência o exercício permanente e especializado de ações orientadas para a produção de conhecimentos e salvaguarda de dados."
      },
      {
        text: "Qual é o objetivo final da Atividade de Inteligência no processo decisório?",
        answers: ["Substituir o tomador de decisão.", "Assessorar o processo decisório, visando a redução de incertezas.", "Ignorar as ameaças externas.", "Publicar relatórios em redes sociais.", "Comprar novos softwares de gestão."],
        correctIndex: 1,
        reference: "Produzir conhecimentos para assessorar o processo decisório, visando a redução de incertezas do tomador de decisão."
      },
      {
        text: "Qual a principal diferença entre a Atividade de Inteligência e a simples coleta de informações?",
        answers: ["A inteligência não usa computadores.", "A inteligência envolve um processo de análise e avaliação dos dados.", "Outras atividades são sempre secretas.", "A inteligência foca apenas no passado.", "Não existe diferença prática."],
        correctIndex: 1,
        reference: "O conhecimento é o produto final da atividade de inteligência após o processamento e análise dos dados coletados."
      },
      {
        text: "O que caracteriza o Hiato da Inteligência no Brasil entre 1990 e 1999?",
        answers: ["Um período de grande investimento em tecnologia.", "A extinção do órgão central e a desarticulação da atividade de Estado.", "A criação de diversas agências estaduais integradas.", "O foco total em inteligência estrangeira.", "A proibição do uso de rádio pelos policiais."],
        correctIndex: 1,
        reference: "3ª Fase: FASE DE TRANSIÇÃO (1990 a 1999); processo de reavaliação e autocrítica para se adequar a novos contextos governamentais de atuação, com a extinção do SNI."
      },
      {
        text: "Uma das consequências negativas do limbo de 1990-1999 para a inteligência foi:",
        answers: ["O excesso de profissionais qualificados.", "A perda de quadros técnicos e da doutrina acumulada.", "O aumento do sigilo absoluto.", "A integração total com a Interpol.", "A digitalização precoce de arquivos."],
        correctIndex: 1,
        reference: "Os prejuízos do Limbo: desconfiança, perda da prática e desatualização."
      },
      {
        text: "Por que é necessário existir uma doutrina na Atividade de Inteligência?",
        answers: ["Para permitir que cada agente trabalhe de forma isolada.", "Para padronizar procedimentos, linguagem e garantir a interoperabilidade.", "Para tornar a atividade pública e transparente.", "Para reduzir a necessidade de treinamento.", "Para facilitar a venda de relatórios."],
        correctIndex: 1,
        reference: "A doutrina permite que agências diferentes usem a mesma linguagem e padrões, garantindo a interoperabilidade e segurança."
      },
      {
        text: "A doutrina atual da Inteligência de Segurança Pública do RJ é:",
        answers: ["Doutrina Francesa.", "DISPERJ.", "Doutrina de Guerra.", "Código Civil.", "Estatuto da Criança."],
        correctIndex: 1,
        reference: "Rio de Janeiro (2015). Decreto nº 45.126... Doutrina de Inteligência de Segurança Pública do Estado do Rio de Janeiro (DISPERJ)."
      },
      {
        text: "O que representa o Relatório Técnico (RT) como inovação doutrinária?",
        answers: ["Um documento de investigação criminal.", "Um produto para atender demandas de conhecimentos técnicos ou especializados.", "Um manual de instruções de rádio.", "O boletim de ocorrência da PM.", "A escala de serviço da agência."],
        correctIndex: 1,
        reference: "Relatório Técnico (RT) - produto para atender demandas de conhecimentos técnicos ou especializados de interesse da ISP."
      },
      {
        text: "Na história mundial, Clausewitz associava a inteligência a qual conceito?",
        answers: ["Certeza absoluta.", "Fricção e nevoeiro da guerra.", "Tecnologia digital.", "Paz perpétua.", "Diplomacia cultural."],
        correctIndex: 1,
        reference: "Clausewitz (Da Guerra) - destacava a incerteza, a fricção e o nevoeiro da guerra, onde a inteligência é imperfeita."
      },
      {
        text: "O Conselho de Defesa Nacional (1927) é considerado o ancestral da inteligência no Brasil por ser:",
        answers: ["O primeiro órgão de polícia civil.", "O primeiro registro legal de um órgão de assessoria em inteligência de Estado.", "Uma escola de espiões estrangeiros.", "Um tribunal de justiça militar.", "Um banco de dados de criminosos."],
        correctIndex: 1,
        reference: "Marcos Iniciais (1927): o Conselho de Defesa Nacional (CDN) como o primeiro registro legal e ancestral da inteligência de Estado."
      },
      {
        text: "Qual a principal diferença de foco temporal entre Inteligência e Investigação?",
        answers: ["Inteligência foca no passado; Investigação no futuro.", "Inteligência foca no futuro (prospectiva); Investigação no passado (retrospectiva).", "Ambas focam apenas no presente.", "Inteligência não tem tempo definido.", "Investigação foca na prevenção."],
        correctIndex: 1,
        reference: "Foco: Investigação (retrospectiva - fatos ocorridos); Inteligência (prospectiva - eventos futuros/antecipação)."
      },
      {
        text: "O destinatário principal da Atividade de Investigação é:",
        answers: ["O Secretário de Segurança.", "O Juiz e o Ministério Público.", "O Comandante do Batalhão.", "O Prefeito da cidade.", "O Diretor da Escola."],
        correctIndex: 1,
        reference: "Destinatário: Investigação -> Juiz de Direito / Ministério Público (Verdade Real)."
      },
      {
        text: "O destinatário principal da Atividade de Inteligência é:",
        answers: ["O Gestor/Decisor.", "O Juiz de Direito.", "O Advogado de defesa.", "A imprensa local.", "O réu do processo."],
        correctIndex: 0,
        reference: "Destinatário: Inteligência -> O Gestor / Tomador de Decisão (Verdade com significado)."
      },
      {
        text: "Sobre a Natureza Executiva da Inteligência Pública, pode-se dizer que ela é:",
        answers: ["Uma atividade de julgamento de crimes.", "Uma atividade auxiliar da administração para assessorar a gestão.", "Uma força de choque para operações especiais.", "Um órgão legislativo.", "Um serviço de atendimento ao cidadão."],
        correctIndex: 1,
        reference: "Natureza: atividade auxiliar da Administração, de caráter essencialmente executivo, para assessorar a gestão pública."
      },
      {
        text: "Qual termo define o momento de crise na inteligência?",
        answers: ["Excesso de confiança entre as agências.", "Falha na proteção de dados ou desvio de finalidade da atividade.", "Compra de computadores novos.", "Mudança de endereço da sede.", "Promoção de oficiais."],
        correctIndex: 1,
        reference: "Crises na Inteligência: resultam do uso para fins políticos/pessoais (desvio de finalidade) ou falhas na proteção de dados."
      },
      {
        text: "O que caracteriza o Canal Técnico?",
        answers: ["A relação de hierarquia direta.", "As ligações diretas entre AI para facilitar a troca de conhecimentos.", "A ordem direta para prisão.", "O uso de rádio na viatura.", "A manutenção de computadores."],
        correctIndex: 1,
        reference: "O Canal Técnico, criado para facilitar a troca de conhecimentos e para atender ao princípio da oportunidade, estabelece as ligações diretas entre as AI."
      },
      {
        text: "Qual a função do Canal de Comando?",
        answers: ["Trocar informações técnicas com outros estados.", "Estabelecer as ligações de natureza hierárquica entre as chefias.", "Consertar os sistemas de TI.", "Comprar munição.", "Organizar festas institucionais."],
        correctIndex: 1,
        reference: "O Canal de Comando estabelece as ligações, fundamentalmente de natureza hierárquica, entre as chefias dos organismos que compõem a instituição."
      },
      {
        text: "A principal diferença entre a DISPERJ 2005 e a DISPERJ 2015 é:",
        answers: ["A mudança de cor do brasão.", "O amadurecimento dos conceitos e melhor definição dos ramos de ISP.", "A extinção do cargo de analista.", "A permissão para redes sociais.", "A redução do sigilo para 2 anos."],
        correctIndex: 1,
        reference: "A DISPERJ 2015 representa o amadurecimento doutrinário, definindo com clareza os Ramos de Inteligência e Contrainteligência."
      },
      {
        text: "O Relatório Técnico (RT) deve ser:",
        answers: ["Prolixo e opinativo.", "Objetivo, técnico e focado em demanda específica.", "Escrito em código secreto.", "Público.", "Um formulário de férias."],
        correctIndex: 1,
        reference: "Relatório Técnico (RT): produto para atender demandas de conhecimentos técnicos ou especializados, objetivo e direto."
      },
      {
        text: "O RT diferencia-se de outros relatórios por:",
        answers: ["Ser sempre mais longo.", "Tratar de conhecimentos técnicos ou especializados de interesse da ISP.", "Não precisar de assinatura.", "Ser feito apenas por estagiários.", "Ter validade curta."],
        correctIndex: 1,
        reference: "RT (Relatório Técnico): para atender demandas de conhecimentos técnicos ou especializados."
      },
      {
        text: "Na inteligência, o dado é o insumo e o produto final da análise é:",
        answers: ["O lixo.", "O subproduto.", "O conhecimento.", "O arquivo esquecido.", "O segredo inútil."],
        correctIndex: 2,
        reference: "Conhecimento: produto final da Atividade de Inteligência resultante da análise de dados."
      },
      {
        text: "O uso do Canal Técnico visa dar:",
        answers: ["Lentidão.", "Oportunidade (agilidade) à troca de dados.", "Mais trabalho aos chefes.", "Sigilo absoluto.", "Lucro financeiro."],
        correctIndex: 1,
        reference: "O Canal Técnico foi criado para facilitar a troca de conhecimentos e para atender ao princípio da oportunidade."
      },
      {
        text: "O que é a Comunidade de Inteligência?",
        answers: ["Grupo de moradores.", "Conjunto de órgãos e agências que cooperam na produção de inteligência.", "Rede social.", "Sindicato.", "Bairro de agentes."],
        correctIndex: 1,
        reference: "Comunidade de Inteligência: sistema integrado por agências que compartilham dados e conhecimentos de interesse comum."
      },
      {
        text: "Qual o papel da confiança na Comunidade de Inteligência?",
        answers: ["Não é necessária.", "É a base para a troca de informações sensíveis.", "Serve para pedir dinheiro.", "Permite faltar ao serviço.", "Só existe entre oficiais."],
        correctIndex: 1,
        reference: "A integração e troca de dados entre as agências baseia-se primordialmente na confiança mútua e necessidade de conhecer."
      },
      {
        text: "O termo altos e baixos da inteligência refere-se a:",
        answers: ["Variação da maré.", "Períodos de maior ou menor valorização e eficácia da atividade na história.", "Uso de elevadores.", "Altura dos agentes.", "Preço do combustível."],
        correctIndex: 1,
        reference: "Evolução Histórica: marcada por altos e baixos, refletindo o contexto político e a valorização da atividade pelo Estado."
      },
      {
        text: "Uma característica essencial da inteligência é a:",
        answers: ["Prolixidade.", "Objetividade (ser útil e direto).", "Subjetividade.", "Lentidão.", "Publicidade total."],
        correctIndex: 1,
        reference: "Objetividade: o conhecimento deve ser direto, isento de subjetivismos e voltado para a utilidade prática."
      },
      {
        text: "Qual característica garante que o relatório chegue ao decisor no tempo certo?",
        answers: ["Estética.", "Oportunidade.", "Criatividade.", "Amizade.", "Paciência."],
        correctIndex: 1,
        reference: "Oportunidade: o conhecimento deve ser difundido a tempo de o usuário dele se utilizar."
      },
      {
        text: "O princípio da imparcialidade exige que o analista:",
        answers: ["Tome partido.", "Produza o conhecimento sem deixar que crenças pessoais influenciem.", "Ajude amigos.", "Escreva o que o chefe quer.", "Ignore dados contrários."],
        correctIndex: 1,
        reference: "O conhecimento produzido deverá ser isento de ideias preconcebidas, subjetivas, distorcidas ou tendenciosas."
      },
      {
        text: "O princípio da segurança na inteligência visa proteger:",
        answers: ["Apenas o prédio.", "Pessoal, dados, conhecimentos e operações.", "Esquinas da cidade.", "Frota de veículos.", "Iluminação pública."],
        correctIndex: 1,
        reference: "Segurança: medidas para salvaguardar dados e conhecimentos sigilosos, pessoal, materiais e instalações."
      },
      {
        text: "Quais são os dois grandes Ramos da ISP?",
        answers: ["Trânsito e Lazer.", "Inteligência e Contrainteligência.", "Ataque e Fuga.", "Polícia Civil e Militar.", "Ciência e Tecnologia."],
        correctIndex: 1,
        reference: "A Atividade de ISP compreende dois ramos: a Inteligência e a Contrainteligência."
      },
      {
        text: "A Contrainteligência tem como função primordial:",
        answers: ["Produzir dados externos.", "Proteger a instituição contra espionagem e vazamentos.", "Policiamento de favelas.", "Investigar corrupção.", "Gerenciar pagamentos."],
        correctIndex: 1,
        reference: "Contrainteligência (CI): ramo que se destina a produzir conhecimentos para proteger a atividade de Inteligência e a instituição."
      },
      {
        text: "O que é uma Fonte de Dados?",
        answers: ["Chafariz.", "Origem de onde se obtêm os dados brutos para análise.", "Nome do chefe.", "Local de armas.", "Site de fake news."],
        correctIndex: 1,
        reference: "Fonte de dados: toda pessoa, objeto ou ocorrência do qual se obtêm dados."
      },
      {
        text: "Qual a principal diferença entre Fonte Humana e Eletrônica?",
        answers: ["Humana é gratuita.", "Humana provém de pessoas; Eletrônica provém de sinais e sistemas digitais.", "Eletrônica nunca erra.", "Humana só de dia.", "Não há diferença."],
        correctIndex: 1,
        reference: "Inteligência Humana: provém do contato com pessoas. Inteligência Eletrônica: utiliza equipamentos para obter dados de sinais."
      },
      {
        text: "Um informante ou colaborador é um exemplo de:",
        answers: ["Fonte Eletrônica.", "Fonte Humana (HUMINT).", "Fonte de Imagem.", "Fonte Aberta.", "Fonte de Sinais."],
        correctIndex: 1,
        reference: "Inteligência Humana (HUMINT): obtida através do contato direto ou indireto com pessoas (agentes, informantes, colaboradores)."
      },
      {
        text: "Uma interceptação de sinal de Wi-Fi é exemplo de:",
        answers: ["Fonte Humana.", "Fonte de Sinais (SIGINT).", "Fonte de Papel.", "Fonte de Fofoca.", "Fonte Espiritual."],
        correctIndex: 1,
        reference: "A Inteligência de Sinais (SIGINT) realiza a obtenção de dados através de sinais eletromagnéticos ou digitais."
      },
      {
        text: "A simplicidade como característica significa que o documento deve ser:",
        answers: ["Pobre em informações.", "De fácil compreensão pelo tomador de decisão.", "Escrito por crianças.", "Sem gráficos.", "Em guardanapos."],
        correctIndex: 1,
        reference: "Simplicidade: o conhecimento deve ser expresso em linguagem clara e acessível, evitando tecnicismos desnecessários."
      },
      {
        text: "O princípio da amplitude orienta que a atividade deve:",
        answers: ["Focar apenas no detalhe.", "Abranger o maior espectro de dados relevantes para a missão.", "Ser divulgada para todos.", "Ter muitos fardados.", "Ocupar espaço físico."],
        correctIndex: 1,
        reference: "Amplitude: a produção de conhecimentos deve ser a mais abrangente possível dentro do tema de interesse."
      },
      {
        text: "Na comunidade de inteligência, o compartilhamento ocorre quando:",
        answers: ["Existe amizade.", "Há necessidade de conhecer e interesse comum.", "Um agente paga outro.", "Dados não são mais secretos.", "O juiz obriga."],
        correctIndex: 1,
        reference: "O acesso e compartilhamento de conhecimentos sigilosos fundamentam-se na necessidade de conhecer."
      },
      {
        text: "O Ramo da Contrainteligência atua na:",
        answers: ["Obtenção de dados sobre gangues.", "Prevenção da sabotagem e comprometimento de informações.", "Escolha de comandantes.", "Vigilância de presos.", "Notícias positivas."],
        correctIndex: 1,
        reference: "Contrainteligência atua na prevenção, detecção e neutralização de espionagem, sabotagem e desinformação."
      },
      {
        text: "Qual destas é uma fonte de Dados Abertos (OSINT)?",
        answers: ["Documento ultrassecreto.", "Redes sociais, jornais e sites públicos.", "Conversa gravada ilegalmente.", "Diário íntimo.", "Arquivo em cofre."],
        correctIndex: 1,
        reference: "Inteligência de Fontes Abertas (OSINT): dados obtidos em meios públicos, como redes sociais, mídia e bancos de dados abertos."
      },
      {
        text: "O princípio da interação preza pela:",
        answers: ["Competição.", "Cooperação e troca entre integrantes do sistema.", "Discussão política.", "Substituição de humanos.", "Independência total."],
        correctIndex: 1,
        reference: "Interação: os órgãos de inteligência devem atuar de forma integrada, trocando conhecimentos para o fortalecimento do sistema."
      },
      {
        text: "A característica de clareza evita que o decisor:",
        answers: ["Tome decisões rápidas.", "Tenha dúvidas ou interprete mal o conhecimento.", "Goste do relatório.", "Promova o analista.", "Peça novos relatórios."],
        correctIndex: 1,
        reference: "Clareza: o conhecimento deve ser inteligível, evitando dubiedades que possam levar ao erro de interpretação."
      },
      {
        text: "A Inteligência de Segurança Pública foca em:",
        answers: ["Invasão de países.", "Criminalidade e ordem pública interna.", "Espionagem industrial internacional.", "Guerras religiosas externas.", "Minérios."],
        correctIndex: 1,
        reference: "ISP: Inteligência de Segurança Pública foca em criminalidade comum, crime organizado e preservação da ordem pública."
      },
      {
        text: "O uso de câmeras de monitoramento urbano é uma fonte:",
        answers: ["Humana.", "De Imagem (IMINT).", "De Boatos.", "Documental.", "De Opinião."],
        correctIndex: 1,
        reference: "Inteligência de Imagens (IMINT): obtenção de dados através de fotografias, vídeos e sensores óticos (câmeras)."
      },
      {
        text: "O princípio da permanência indica que a atividade:",
        answers: ["Só de dia.", "Deve ser contínua para garantir o fluxo de dados.", "Dura 1 ano por agente.", "É castigo.", "Só em guerra."],
        correctIndex: 1,
        reference: "Permanência: a continuidade da produção e busca de dados é essencial para a manutenção da consciência situacional."
      },
      {
        text: "Por que a Contrainteligência é o escudo da instituição?",
        answers: ["Agentes usam escudos físicos.", "Defende a agência contra ataques de inteligências adversas.", "Impede entrada de qualquer pessoa.", "Gasta mais dinheiro.", "Não produz relatórios."],
        correctIndex: 1,
        reference: "Contrainteligência como atividade defensiva (escudo): visa neutralizar a ação de inteligências adversas e proteger ativos."
      },
      {
        text: "Maquiavel contribuía para a ideia de inteligência ao destacar:",
        answers: ["Bondade.", "Necessidade de conhecer a realidade para manter o poder.", "Redes sociais.", "Fim do sigilo.", "Paz."],
        correctIndex: 1,
        reference: "Maquiavel (O Príncipe) destacava que o governante deve conhecer a realidade tal como ela é para manter o Estado."
      },
      {
        text: "Qual a principal característica do trabalho de um Analista de Inteligência?",
        answers: ["Prisões em flagrante.", "Processar e analisar dados para gerar conhecimento.", "Dirigir em perseguição.", "Consertar rádios.", "Atender corregedoria."],
        correctIndex: 1,
        reference: "Analista de Inteligência: responsável pelo ciclo de produção, transformando o dado bruto em conhecimento útil."
      },
      {
        text: "A Verdade Real é uma busca da:",
        answers: ["Inteligência.", "Investigação Criminal.", "Relações Públicas.", "Logística.", "Ensino."],
        correctIndex: 1,
        reference: "A Investigação busca a Verdade Real para fins processuais e judiciais."
      },
      {
        text: "O canal técnico permite que o fluxo de dados seja:",
        answers: ["Interrompido.", "Ágil e focado na especialidade técnica.", "Publicado.", "Vendido.", "Pessoal."],
        correctIndex: 1,
        reference: "Canal Técnico: ligações diretas que garantem a agilidade no fluxo de conhecimentos especializados entre as agências."
      },
      {
        text: "Crise de inteligência por desvio de finalidade ocorre quando:",
        answers: ["Perde a chave.", "A ferramenta é usada para fins políticos ou pessoais.", "Relatório curto.", "Computador quebra.", "Férias."],
        correctIndex: 1,
        reference: "O desvio de finalidade ocorre quando a atividade de inteligência é utilizada para fins diversos do interesse público/Estado."
      },
      {
        text: "A ISP utiliza a Contrainteligência para:",
        answers: ["Atacar países.", "Salvaguardar dados e conhecimentos sigilosos.", "Aumentar criminalidade.", "Expor agentes.", "Substituir guarda."],
        correctIndex: 1,
        reference: "Ramo Contrainteligência: destina-se a salvaguardar dados e conhecimentos sigilosos."
      },
      {
        text: "O princípio da precisão exige que o dado coletado seja:",
        answers: ["Inventado.", "Exato e correspondente à realidade.", "Mentira.", "Opinião do vizinho.", "Boato."],
        correctIndex: 1,
        reference: "Precisão: o dado ou conhecimento deve ser exato e rigorosamente fiel aos fatos observados."
      },
      {
        text: "No ciclo da inteligência, a análise é a fase de:",
        answers: ["Coletar papel.", "Integração e interpretação dos dados.", "Digitação no Word.", "Entrega.", "Destruição."],
        correctIndex: 1,
        reference: "Fase de Análise: processamento que envolve a integração, avaliação e interpretação dos dados coletados."
      },
      {
        text: "Diferença fundamental entre Inteligência de Estado e ISP:",
        answers: ["ISP não usa sigilo.", "O alvo (Estado = soberania; ISP = segurança pública).", "ISP só civil.", "Estado sem PC.", "Nenhuma."],
        correctIndex: 1,
        reference: "Inteligência de Estado foca na soberania e interesses nacionais; ISP foca na segurança interna e ordem pública."
      },
      {
        text: "A Doutrina que instituiu o RT na PMERJ foi:",
        answers: ["Doutrina Francesa.", "DISPERJ 2015.", "Doutrina de Guerra.", "Código Civil.", "Estatuto da Criança."],
        correctIndex: 1,
        reference: "A DISPERJ 2015 trouxe a inovação do Relatório Técnico (RT) para demandas especializadas."
      },
      {
        text: "Risco de não usar o Canal Técnico:",
        answers: ["Velocidade.", "Retardo na circulação de dados e perda da oportunidade.", "Melhor hierarquia.", "Economia de papel.", "Fim de fofocas."],
        correctIndex: 1,
        reference: "A não utilização do Canal Técnico gera retardo burocrático e compromete a oportunidade do conhecimento."
      },
      {
        text: "O RT é classificado como documento de:",
        answers: ["Inteligência Ativa.", "Assessoria Técnica Especializada.", "Investigação de Campo.", "Punição.", "Comunicação Social."],
        correctIndex: 1,
        reference: "RT: documento para assessoramento técnico especializado em temas de interesse da Segurança Pública."
      },
      {
        text: "A Fase de Transição (1990-1999) é marcada pela:",
        answers: ["Estabilidade.", "Incerteza e desarticulação do sistema nacional após extinção do SNI.", "Criação da internet.", "Satélites.", "Extinção da PM."],
        correctIndex: 1,
        reference: "Fase de Transição (1990-1999): caracterizada pela desarticulação da inteligência de Estado após a extinção do SNI."
      },
      {
        text: "A característica da utilidade significa que o conhecimento deve:",
        answers: ["Ser bonito.", "Servir para auxiliar efetivamente a decisão.", "Ser difícil.", "Instagram.", "Guardado sem uso."],
        correctIndex: 1,
        reference: "Utilidade: o conhecimento deve ser relevante e útil para o processo decisório do usuário."
      },
      {
        text: "O princípio da ética na inteligência obriga o agente a:",
        answers: ["Mentir.", "Atuar dentro dos limites da legalidade e moralidade.", "Roubar dados.", "Violência.", "Ignorar a CF."],
        correctIndex: 1,
        reference: "Ética: a atividade deve ser pautada estritamente pelos princípios da legalidade, impessoalidade e moralidade."
      },
      {
        text: "Fontes Humanas (HUMINT) são consideradas:",
        answers: ["Ultrapassadas.", "Imprescindíveis e decisivas, mesmo com a tecnologia.", "Desnecessárias.", "Proibidas.", "Filmes."],
        correctIndex: 1,
        reference: "As fontes humanas são imprescindíveis e decisivas para a Atividade de Inteligência."
      },
      {
        text: "O que é o acesso na inteligência?",
        answers: ["Direito geral.", "Possibilidade de ingressar em dados sigilosos mediante credenciamento.", "Senha Wi-Fi.", "Porta.", "Crachá."],
        correctIndex: 1,
        reference: "Acesso: possibilidade e/ou oportunidade de uma pessoa ingressar em conhecimentos sigilosos mediante credenciamento oficial."
      },
      {
        text: "O Ramo Inteligência, em sentido estrito, foca em:",
        answers: ["Proteger a agência.", "Obter e analisar dados sobre o adversário/criminoso.", "Limpar viaturas.", "Treinar tiro.", "Arquivo morto."],
        correctIndex: 1,
        reference: "Inteligência: ramo destinado a obter e processar dados sobre fatos e situações de interesse do decisor (alvo externo)."
      },
      {
        text: "Investigação busca provas. Inteligência busca:",
        answers: ["Boatos.", "Entender tendências e prevenir ameaças.", "Dinheiro.", "Férias.", "Armas."],
        correctIndex: 1,
        reference: "Enquanto a investigação busca provas para o processo criminal, a inteligência busca antecipar ameaças e tendências."
      },
      {
        text: "A interoperabilidade gerada pela Doutrina permite que:",
        answers: ["Agências usem mesma linguagem e padrões.", "Cada uma tenha sua lei.", "Computadores da mesma marca.", "Uniforme igual.", "Sem sigilo."],
        correctIndex: 0,
        reference: "A doutrina padroniza a atuação, permitindo que diferentes órgãos operem de forma conjunta (interoperabilidade)."
      }
    ]
  }
};

const answerLetters = ["A", "B", "C", "D", "E"];

const displayWordMap = {
  acoes: "ações",
  adequarem: "adequarem",
  adversario: "adversário",
  adversarios: "adversários",
  africa: "áfrica",
  alemas: "alemãs",
  alteracao: "alteração",
  alteracoes: "alterações",
  ambicoes: "ambições",
  america: "américa",
  analitico: "analítico",
  anomalo: "anômalo",
  anomalos: "anômalos",
  autorizacao: "autorização",
  autorizacoes: "autorizações",
  baterias: "baterias",
  brasilia: "brasília",
  britanica: "britânica",
  cabecalho: "cabeçalho",
  caracteristica: "característica",
  caracteristicas: "características",
  cenario: "cenário",
  classico: "clássico",
  coaf: "COAF",
  colecao: "coleção",
  comunicacao: "comunicação",
  comunicacoes: "comunicações",
  concepcao: "concepção",
  confusao: "confusão",
  conexao: "conexão",
  constituicao: "constituição",
  contabeis: "contábeis",
  corrupcao: "corrupção",
  critico: "crítico",
  criticos: "críticos",
  cenario: "cenário",
  decada: "década",
  definicao: "definição",
  desinformacao: "desinformação",
  diferenca: "diferença",
  diferencas: "diferenças",
  diplomático: "diplomático",
  direcao: "direção",
  dissuasao: "dissuasão",
  distribuicao: "distribuição",
  doutrina: "doutrina",
  economicas: "econômicas",
  eletronico: "eletrônico",
  eletronicos: "eletrônicos",
  emissao: "emissão",
  especifico: "específico",
  especificos: "específicos",
  estao: "estão",
  estrangeiro: "estrangeiro",
  etica: "ética",
  evolucao: "evolução",
  experienca: "experiência",
  experiencia: "experiência",
  facilidade: "facilidade",
  fase: "fase",
  fisico: "físico",
  fisicos: "físicos",
  forca: "força",
  frances: "francês",
  franca: "frança",
  funcao: "função",
  funcoes: "funções",
  gestao: "gestão",
  giro: "giro",
  historica: "histórica",
  historia: "história",
  humano: "humano",
  humanos: "humanos",
  imediato: "imediato",
  incompativel: "incompatível",
  indeferimento: "indeferimento",
  informacao: "informação",
  informacoes: "informações",
  inicio: "início",
  instituicao: "instituição",
  instituicoes: "instituições",
  intervencao: "intervenção",
  intuicao: "intuição",
  invalidacao: "invalidação",
  investimento: "investimento",
  legitimacao: "legitimação",
  memoria: "memória",
  metodo: "método",
  modulos: "módulos",
  modulo: "módulo",
  movimentacao: "movimentação",
  mudanca: "mudança",
  nacao: "nação",
  nacional: "nacional",
  nocoes: "noções",
  observacao: "observação",
  ocorrencia: "ocorrência",
  operacionais: "operacionais",
  opiniao: "opinião",
  organizacao: "organização",
  organizacoes: "organizações",
  paraiso: "paraíso",
  paraisos: "paraísos",
  percepcao: "percepção",
  perseguicao: "perseguição",
  possivel: "possível",
  pratica: "prática",
  praticas: "práticas",
  pre: "pré",
  precisao: "precisão",
  preservacao: "preservação",
  previas: "prévias",
  proibicao: "proibição",
  promocao: "promoção",
  propagacao: "propagação",
  proxima: "próxima",
  psicologica: "psicológica",
  psicologicos: "psicológicos",
  publico: "público",
  publica: "pública",
  publicas: "públicas",
  questionario: "questionário",
  questionarios: "questionários",
  raciocinio: "raciocínio",
  razao: "razão",
  real: "real",
  recem: "recém",
  referencia: "referência",
  referencias: "referências",
  relatorio: "relatório",
  resistencia: "resistência",
  rj: "RJ",
  sao: "são",
  satelite: "satélite",
  selecao: "seleção",
  senha: "senha",
  servico: "serviço",
  servicos: "serviços",
  situacao: "situação",
  socio: "sócio",
  socios: "sócios",
  tambem: "também",
  tecnica: "técnica",
  tecnico: "técnico",
  tecnicos: "técnicos",
  tecnologia: "tecnologia",
  teorico: "teórico",
  transito: "trânsito",
  unico: "único",
  uniao: "união",
  usuario: "usuário",
  usuarios: "usuários",
  vacuo: "vácuo",
  valido: "válido",
  versao: "versão",
  violencia: "violência",
  voce: "você",
  acao: "ação",
  acao: "ação",
  acoes: "ações",
  agencia: "agência",
  agencias: "agências",
  alem: "além",
  analise: "análise",
  area: "área",
  areas: "áreas",
  atribuicao: "atribuição",
  atraves: "através",
  basico: "básico",
  cibernetica: "cibernética",
  classificacao: "classificação",
  colocacao: "colocação",
  comunicacoes: "comunicações",
  concessao: "concessão",
  contemporanea: "contemporânea",
  contrainteligencia: "contrainteligência",
  criticas: "críticas",
  deteccao: "detecção",
  difusao: "difusão",
  dissimulacao: "dissimulação",
  embrionaria: "embrionária",
  ensino: "ensino",
  esfera: "esfera",
  espionagem: "espionagem",
  estrategico: "estratégico",
  exploracao: "exploração",
  fisica: "física",
  genero: "gênero",
  hierarquica: "hierárquica",
  historico: "histórico",
  inatividade: "inatividade",
  indicios: "indícios",
  inquerito: "inquérito",
  integracao: "integração",
  inteligencia: "inteligência",
  judiciaria: "judiciária",
  legislacao: "legislação",
  licitacao: "licitação",
  logistica: "logística",
  manutencao: "manutenção",
  municoes: "munições",
  nao: "não",
  numérico: "numérico",
  ocultacao: "ocultação",
  opcao: "opção",
  opcoes: "opções",
  operacao: "operação",
  operacoes: "operações",
  orgao: "órgão",
  orgaos: "órgãos",
  padrao: "padrão",
  pais: "país",
  paraisos: "paraísos",
  permissao: "permissão",
  policial: "policial",
  policia: "polícia",
  politico: "político",
  praticas: "práticas",
  prevencao: "prevenção",
  producao: "produção",
  protecao: "proteção",
  publicos: "públicos",
  publica: "pública",
  publico: "público",
  questao: "questão",
  questoes: "questões",
  raio: "raio",
  reuniao: "reunião",
  secao: "seção",
  secoes: "seções",
  seguranca: "segurança",
  servico: "serviço",
  servicos: "serviços",
  situacao: "situação",
  sociologico: "sociológico",
  tecnico: "técnico",
  tecnologia: "tecnologia",
  transacao: "transação",
  transacoes: "transações",
  transicao: "transição",
  utilizacao: "utilização",
  violencia: "violência"
};

const displayPatterns = Object.entries(displayWordMap).map(([from, to]) => ({
  regex: new RegExp(`\\b${from}\\b`, "gi"),
  to
}));

function applyDisplayAccents(text) {
  if (typeof text !== "string") return text;

  return displayPatterns.reduce((result, { regex, to }) => {
    return result.replace(regex, (match) => {
      if (match[0] === match[0].toUpperCase()) {
        return `${to.charAt(0).toUpperCase()}${to.slice(1)}`;
      }
      return to;
    });
  }, text);
}

const DB_NAME = "cint-quiz-db";
const DB_VERSION = 1;
const SESSION_STORE = "sessions";
const SUMMARY_STORE = "summaries";
const SETTINGS_STORE = "settings";
const MODULE_KEYS = Object.keys(quizModules);
const DEFAULT_MODULE_KEY = MODULE_KEYS[0];

const screens = {
  numerica: document.getElementById("numericaScreen"),
  intro: document.getElementById("introScreen"),
  question: document.getElementById("questionScreen"),
  result: document.getElementById("resultScreen")
};

const welcomeChip = document.getElementById("welcomeChip");
const stepChip = document.getElementById("stepChip");
const timerChip = document.getElementById("timerChip");
const scoreChip = document.getElementById("scoreChip");
const progressTrack = document.querySelector(".progress-track");
const progressFill = document.getElementById("progressFill");
const quizCard = document.getElementById("quizCard");
const themeToggle = document.getElementById("themeToggle");
const topLogoutBtn = document.getElementById("topLogoutBtn");
const logoutModal = document.getElementById("logoutModal");
const logoutModalText = document.getElementById("logoutModalText");
const logoutConfirmBtn = document.getElementById("logoutConfirmBtn");
const logoutCancelBtn = document.getElementById("logoutCancelBtn");

const numericaGrid = document.getElementById("numericaGrid");
const resumePanel = document.getElementById("resumePanel");
const resumeTitle = document.getElementById("resumeTitle");
const resumeText = document.getElementById("resumeText");
const resumeSessionBtn = document.getElementById("resumeSessionBtn");
const restartSessionBtn = document.getElementById("restartSessionBtn");

const startBtn = document.getElementById("startBtn");
const changeStudentBtn = document.getElementById("changeStudentBtn");
const moduleList = document.getElementById("moduleList");
const moduleHint = document.getElementById("moduleHint");
const introDashboard = document.getElementById("introDashboard");
const resultDashboard = document.getElementById("resultDashboard");

const themeMap = document.getElementById("themeMap");
const mapSummary = document.getElementById("mapSummary");
const pauseBtn = document.getElementById("pauseBtn");
const logoutBtn = document.getElementById("logoutBtn");
const pauseBanner = document.getElementById("pauseBanner");
const questionMeta = document.getElementById("questionMeta");
const questionText = document.getElementById("questionText");
const answersList = document.getElementById("answersList");
const questionPanel = document.querySelector(".question-panel");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const resultLine = document.getElementById("resultLine");
const resultTagline = document.getElementById("resultTagline");
const restartBtn = document.getElementById("restartBtn");
const continueJourneyBtn = document.getElementById("continueJourneyBtn");

let state = createFreshState();
let pendingSession = null;
let dashboardCache = createEmptyDashboard();
let timerIntervalId = null;
let dbPromise;
let logoutConfirmAction = null;

function createEmptyDashboard() {
  return {
    generalAttempts: 0,
    generalAccuracy: 0,
    individualTotalScore: 0,
    individualTotalQuestions: 0,
    individualByModule: {}
  };
}

function createModuleProgress(moduleKey) {
  const total = quizModules[moduleKey].questions.length;
  return {
    answers: Array.from({ length: total }, () => []),
    locked: Array(total).fill(false),
    skipped: Array(total).fill(false),
    visited: Array(total).fill(false),
    currentIndex: 0,
    completed: false,
    completionSaved: false,
    completedAt: null
  };
}

function createAllModuleProgress() {
  return MODULE_KEYS.reduce((acc, moduleKey) => {
    acc[moduleKey] = createModuleProgress(moduleKey);
    return acc;
  }, {});
}

function createFreshState(numerica = null) {
  return {
    numerica,
    activeScreen: numerica ? "intro" : "numerica",
    resumeScreen: "intro",
    currentModuleKey: DEFAULT_MODULE_KEY,
    moduleProgress: createAllModuleProgress(),
    timerElapsedMs: 0,
    timerStartedAt: null,
    isPaused: false
  };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeSession(snapshot, numerica) {
  const safeState = createFreshState(numerica);

  if (!snapshot || typeof snapshot !== "object") {
    return safeState;
  }

  safeState.activeScreen = ["intro", "question", "result", "numerica"].includes(snapshot.activeScreen)
    ? snapshot.activeScreen
    : safeState.activeScreen;
  safeState.resumeScreen = ["intro", "question", "result"].includes(snapshot.resumeScreen)
    ? snapshot.resumeScreen
    : "intro";
  safeState.currentModuleKey = MODULE_KEYS.includes(snapshot.currentModuleKey)
    ? snapshot.currentModuleKey
    : DEFAULT_MODULE_KEY;
  safeState.timerElapsedMs = Number(snapshot.timerElapsedMs) || 0;
  safeState.isPaused = Boolean(snapshot.isPaused);

  MODULE_KEYS.forEach((moduleKey) => {
    const source = snapshot.moduleProgress?.[moduleKey] || {};
    const total = quizModules[moduleKey].questions.length;
    safeState.moduleProgress[moduleKey] = {
      answers: Array.from({ length: total }, (_, index) => normalizeAnswerValue(source.answers?.[index])),
      locked: Array.from({ length: total }, (_, index) => Boolean(source.locked?.[index])),
      skipped: Array.from({ length: total }, (_, index) => Boolean(source.skipped?.[index])),
      visited: Array.from({ length: total }, (_, index) => Boolean(source.visited?.[index])),
      currentIndex: clamp(Number(source.currentIndex) || 0, 0, total - 1),
      completed: Boolean(source.completed),
      completionSaved: Boolean(source.completionSaved),
      completedAt: source.completedAt || null
    };
  });

  safeState.numerica = numerica;
  safeState.timerStartedAt = null;
  return safeState;
}

function getSerializableState() {
  return {
    numerica: state.numerica,
    activeScreen: state.activeScreen,
    resumeScreen: state.resumeScreen,
    currentModuleKey: state.currentModuleKey,
    moduleProgress: state.moduleProgress,
    timerElapsedMs: getElapsedMs(),
    isPaused: state.isPaused
  };
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function getDb() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(SESSION_STORE)) {
          db.createObjectStore(SESSION_STORE, { keyPath: "numerica" });
        }
        if (!db.objectStoreNames.contains(SUMMARY_STORE)) {
          db.createObjectStore(SUMMARY_STORE, { keyPath: "id", autoIncrement: true });
        }
        if (!db.objectStoreNames.contains(SETTINGS_STORE)) {
          db.createObjectStore(SETTINGS_STORE, { keyPath: "key" });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  return dbPromise;
}

async function dbGet(storeName, key) {
  const db = await getDb();
  const tx = db.transaction(storeName, "readonly");
  return requestToPromise(tx.objectStore(storeName).get(key));
}

async function dbPut(storeName, value) {
  const db = await getDb();
  const tx = db.transaction(storeName, "readwrite");
  const result = await requestToPromise(tx.objectStore(storeName).put(value));
  await new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
  return result;
}

async function dbDelete(storeName, key) {
  const db = await getDb();
  const tx = db.transaction(storeName, "readwrite");
  tx.objectStore(storeName).delete(key);
  await new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

async function dbGetAll(storeName) {
  const db = await getDb();
  const tx = db.transaction(storeName, "readonly");
  return requestToPromise(tx.objectStore(storeName).getAll());
}

function getCurrentModule() {
  return quizModules[state.currentModuleKey];
}

function getCurrentProgress() {
  return state.moduleProgress[state.currentModuleKey];
}

function getQuestions(moduleKey = state.currentModuleKey) {
  return quizModules[moduleKey].questions;
}

function getAnsweredCount(moduleKey = state.currentModuleKey) {
  return state.moduleProgress[moduleKey].answers.filter((answer) => hasAnswerSelection(answer)).length;
}

function getSkippedCount(moduleKey = state.currentModuleKey) {
  return state.moduleProgress[moduleKey].skipped.filter(Boolean).length;
}

function getVisitedCount(moduleKey = state.currentModuleKey) {
  const progress = state.moduleProgress[moduleKey];
  return progress.visited.filter(Boolean).length;
}

function calculateScore(moduleKey = state.currentModuleKey) {
  const questions = getQuestions(moduleKey);
  return state.moduleProgress[moduleKey].answers.reduce((acc, answerValue, questionIndex) => {
    const selectedIndices = normalizeAnswerValue(answerValue);
    if (selectedIndices.length === 0) return acc;
    return acc + Number(isAnswerCorrect(questions[questionIndex], selectedIndices));
  }, 0);
}

function getElapsedMs() {
  if (!state.timerStartedAt) {
    return state.timerElapsedMs;
  }

  return state.timerElapsedMs + (Date.now() - state.timerStartedAt);
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function normalizeAnswerValue(answer) {
  if (Array.isArray(answer)) {
    return Array.from(new Set(answer.filter((value) => Number.isInteger(value)))).sort((left, right) => left - right);
  }

  if (Number.isInteger(answer)) {
    return [answer];
  }

  return [];
}

function hasAnswerSelection(answer) {
  return normalizeAnswerValue(answer).length > 0;
}

function isAnswerCorrect(question, selectedIndices) {
  return selectedIndices.length === 1 && selectedIndices[0] === question.correctIndex;
}

function runElementAnimation(element, keyframes, options) {
  if (!element?.animate) {
    return Promise.resolve();
  }

  const animation = element.animate(keyframes, {
    duration: 220,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    fill: "forwards",
    ...options
  });

  return animation.finished.catch(() => undefined);
}

async function transitionElement(element, updateFn) {
  if (!element) {
    await updateFn();
    return;
  }

  await runElementAnimation(
    element,
    [
      { opacity: 1, transform: "translateY(0) scale(1)" },
      { opacity: 0, transform: "translateY(18px) scale(0.985)" }
    ],
    { duration: 180 }
  );

  await updateFn();

  element.style.opacity = "0";
  element.style.transform = "translateY(18px) scale(0.985)";
  await runElementAnimation(
    element,
    [
      { opacity: 0, transform: "translateY(18px) scale(0.985)" },
      { opacity: 1, transform: "translateY(0) scale(1)" }
    ],
    { duration: 260 }
  );
  element.style.opacity = "";
  element.style.transform = "";
}

function showNeutralFeedback() {
  feedbackBox.classList.remove("good", "bad");
  feedbackTitle.textContent = "Selecione uma ou mais alternativas";
  feedbackText.textContent = "O resultado só será exibido depois de clicar em Verificar.";
}

function showAnswerFeedback(question, selectedIndices) {
  const isCorrect = isAnswerCorrect(question, selectedIndices);
  feedbackBox.classList.remove("good", "bad");
  feedbackBox.classList.add(isCorrect ? "good" : "bad");
  feedbackBox.classList.remove("is-revealing");
  void feedbackBox.offsetWidth;
  feedbackBox.classList.add("is-revealing");
  feedbackTitle.textContent = isCorrect
    ? "Resposta correta"
    : `Resposta incorreta. Correta: ${answerLetters[question.correctIndex]}) ${applyDisplayAccents(question.answers[question.correctIndex])}`;
  feedbackText.textContent = applyDisplayAccents(question.reference);
}

function setActiveScreen(target, { recordResume = true } = {}) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle("active", key === target);
  });

  state.activeScreen = target;
  if (recordResume && target !== "numerica") {
    state.resumeScreen = target;
  }
}

function updateTimerDisplay() {
  timerChip.innerHTML = `<span class="material-symbols-rounded icon">schedule</span><span>${formatDuration(getElapsedMs())}</span>`;
}

function ensureTimerInterval() {
  if (timerIntervalId) return;
  timerIntervalId = window.setInterval(() => {
    updateTimerDisplay();
  }, 1000);
}

function startTimer() {
  ensureTimerInterval();
  if (state.timerStartedAt || state.isPaused || state.activeScreen !== "question") {
    return;
  }

  state.timerStartedAt = Date.now();
  updateTimerDisplay();
}

function stopTimer() {
  if (!state.timerStartedAt) return;
  state.timerElapsedMs = getElapsedMs();
  state.timerStartedAt = null;
  updateTimerDisplay();
}

function updateHeader() {
  const currentModule = getCurrentModule();
  const currentProgress = getCurrentProgress();
  const total = getQuestions().length;
  const score = calculateScore();

  const welcomeLabel = state.numerica ? `Bem-vindo, ${state.numerica}` : "Bem-vindo";
  welcomeChip.innerHTML = `<span class="material-symbols-rounded icon">badge</span><span>${welcomeLabel}</span>`;
  scoreChip.innerHTML = `<span class="material-symbols-rounded icon">workspace_premium</span><span>Acertos: ${score}</span>`;

  if (state.activeScreen === "numerica") {
    stepChip.innerHTML = `<span class="material-symbols-rounded icon">flag</span><span>Escolha sua numérica</span>`;
  } else if (state.activeScreen === "intro") {
    stepChip.innerHTML = `<span class="material-symbols-rounded icon">flag</span><span>Tema: ${applyDisplayAccents(currentModule.title)}</span>`;
  } else if (state.activeScreen === "question") {
    stepChip.innerHTML = `<span class="material-symbols-rounded icon">flag</span><span>Tema ${applyDisplayAccents(currentModule.title)} • Questão ${currentProgress.currentIndex + 1}/${total}</span>`;
  } else {
    stepChip.innerHTML = `<span class="material-symbols-rounded icon">flag</span><span>Módulo concluído</span>`;
  }

  updateTimerDisplay();
}

function renderProgress() {
  const total = getQuestions().length;
  const traversed = getAnsweredCount() + getSkippedCount();
  const value = total === 0 ? 0 : Math.round((traversed / total) * 100);
  progressFill.style.width = `${value}%`;
  progressTrack.setAttribute("aria-valuenow", String(value));
}

function getQuestionStatus(moduleKey, index) {
  const progress = state.moduleProgress[moduleKey];
  const answer = progress.answers[index];

  if (moduleKey === state.currentModuleKey && state.activeScreen === "question" && progress.currentIndex === index) {
    return "current";
  }

  if (hasAnswerSelection(answer) && progress.locked[index]) {
    return "answered";
  }

  if (progress.skipped[index]) {
    return "skipped";
  }

  return "pending";
}

function renderModuleSelector() {
  moduleList.innerHTML = "";

  MODULE_KEYS.forEach((key) => {
    const module = quizModules[key];
    const button = document.createElement("button");
    const answered = getAnsweredCount(key);
    const skipped = getSkippedCount(key);
    button.type = "button";
    button.className = "module-btn";
    if (state.currentModuleKey === key) {
      button.classList.add("active");
    }
    button.innerHTML = `${applyDisplayAccents(module.title)}<small>${answered}/${module.questions.length} respondidas • ${skipped} puladas</small>`;
    button.addEventListener("click", async () => {
      state.currentModuleKey = key;
      renderApp();
      await saveSession();
    });
    moduleList.appendChild(button);
  });
}

function updateModuleHint() {
  const module = getCurrentModule();
  const answered = getAnsweredCount();
  const skipped = getSkippedCount();
  moduleHint.textContent = `Selecionado: ${applyDisplayAccents(module.title)} • ${answered}/${module.questions.length} respondidas • ${skipped} puladas. ${applyDisplayAccents(module.description)}`;
}

function renderQuestionMap() {
  themeMap.innerHTML = "";
  const totalThemes = MODULE_KEYS.length;
  const completedThemes = MODULE_KEYS.filter((moduleKey) => state.moduleProgress[moduleKey].completed).length;
  const totalQuestions = MODULE_KEYS.reduce((acc, moduleKey) => acc + quizModules[moduleKey].questions.length, 0);
  mapSummary.textContent = `${completedThemes} de ${totalThemes} temas concluídos • ${totalQuestions} questões no total`;

  MODULE_KEYS.forEach((moduleKey) => {
    const module = quizModules[moduleKey];
    const progress = state.moduleProgress[moduleKey];
    const section = document.createElement("section");
    section.className = "theme-section";
    if (moduleKey === state.currentModuleKey) {
      section.classList.add("active");
    }

    const answered = getAnsweredCount(moduleKey);
    const skipped = getSkippedCount(moduleKey);

    const head = document.createElement("div");
    head.className = "theme-head";

    const switchButton = document.createElement("button");
    switchButton.type = "button";
    switchButton.className = "theme-switch";
    switchButton.textContent = applyDisplayAccents(module.title);
    switchButton.addEventListener("click", async () => {
      await transitionElement(questionPanel, async () => {
        markCurrentAsSkippedIfNeeded();
        state.currentModuleKey = moduleKey;
        setActiveScreen("question");
        if (!state.isPaused) {
          startTimer();
        }
        renderApp();
        await saveSession();
      });
    });

    const progressLabel = document.createElement("p");
    progressLabel.className = "theme-progress";
    progressLabel.textContent = `${answered}/${module.questions.length} respondidas • ${skipped} puladas`;

    head.appendChild(switchButton);
    head.appendChild(progressLabel);
    section.appendChild(head);

    if (moduleKey === state.currentModuleKey) {
      const grid = document.createElement("div");
      grid.className = "theme-question-grid";

      module.questions.forEach((_, index) => {
        const button = document.createElement("button");
        button.type = "button";
        const status = getQuestionStatus(moduleKey, index);
        button.className = `question-index-btn ${status}`;
        button.textContent = String(index + 1).padStart(2, "0");
        button.addEventListener("click", async () => {
          await transitionElement(questionPanel, async () => {
            markCurrentAsSkippedIfNeeded();
            progress.currentIndex = index;
            setActiveScreen("question");
            renderApp();
            await saveSession();
          });
        });
        grid.appendChild(button);
      });

      section.appendChild(grid);
    }

    themeMap.appendChild(section);
  });
}

function renderQuestion() {
  const questions = getQuestions();
  const progress = getCurrentProgress();
  const currentQuestion = questions[progress.currentIndex];
  const selectedIndices = normalizeAnswerValue(progress.answers[progress.currentIndex]);
  const questionLocked = Boolean(progress.locked[progress.currentIndex]);

  questionText.textContent = applyDisplayAccents(currentQuestion.text);
  questionMeta.textContent = `Tema ${applyDisplayAccents(getCurrentModule().title)} • ${progress.currentIndex + 1} de ${questions.length} • ${getAnsweredCount()} respondidas • ${getSkippedCount()} puladas`;
  answersList.innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.disabled = state.isPaused || questionLocked;
    button.style.setProperty("--answer-delay", `${index * 70}ms`);
    const letter = answerLetters[index] || "?";
    button.innerHTML = `<span class="answer-letter">${letter}</span><span>${applyDisplayAccents(answer)}</span>`;

    if (selectedIndices.includes(index)) {
      button.classList.add("selected");
    }

    if (questionLocked) {
      if (index === currentQuestion.correctIndex) {
        button.classList.add("correct");
      }

      if (selectedIndices.includes(index) && index !== currentQuestion.correctIndex) {
        button.classList.add("wrong");
      }
    }

    button.addEventListener("click", async () => {
      if (state.isPaused) return;
      const currentSelection = normalizeAnswerValue(progress.answers[progress.currentIndex]);
      const nextSelection = currentSelection.includes(index)
        ? currentSelection.filter((value) => value !== index)
        : [...currentSelection, index].sort((left, right) => left - right);

      progress.answers[progress.currentIndex] = nextSelection;
      progress.visited[progress.currentIndex] = true;
      progress.skipped[progress.currentIndex] = false;
      renderApp();
      await saveSession();
    });

    answersList.appendChild(button);
  });

  if (selectedIndices.length === 0 || !questionLocked) {
    showNeutralFeedback();
  } else {
    showAnswerFeedback(currentQuestion, selectedIndices);
  }

  pauseBanner.hidden = !state.isPaused;
  pauseBtn.innerHTML = state.isPaused
    ? '<span class="material-symbols-rounded icon">play_circle</span><span>Continuar</span>'
    : '<span class="material-symbols-rounded icon">pause_circle</span><span>Pausar</span>';
  prevBtn.disabled = progress.currentIndex === 0;
  if (selectedIndices.length > 0 && !questionLocked) {
    nextBtn.innerHTML = '<span class="material-symbols-rounded icon">fact_check</span><span>Verificar</span>';
  } else {
    nextBtn.innerHTML = progress.currentIndex === questions.length - 1
      ? '<span class="material-symbols-rounded icon">task_alt</span><span>Finalizar</span>'
      : '<span class="material-symbols-rounded icon">arrow_forward</span><span>Próxima</span>';
  }
}

function getTagline(score, total) {
  const ratio = total === 0 ? 0 : score / total;

  if (ratio >= 0.9) {
    return "Excelente desempenho: domínio muito forte deste módulo.";
  }

  if (ratio >= 0.7) {
    return "Ótimo nível: boa consistência geral, com poucos pontos para reforço.";
  }

  if (ratio >= 0.5) {
    return "Bom início: revise os feedbacks para consolidar os conceitos essenciais.";
  }

  return "Nível em desenvolvimento: revise o mapa, retome as puladas e use as referências para evoluir rápido.";
}

async function recordModuleCompletion(moduleKey) {
  const progress = state.moduleProgress[moduleKey];
  if (progress.completionSaved || !state.numerica) {
    return;
  }

  const total = getQuestions(moduleKey).length;
  const score = calculateScore(moduleKey);
  progress.completed = true;
  progress.completedAt = Date.now();
  progress.completionSaved = true;

  await dbPut(SUMMARY_STORE, {
    numerica: state.numerica,
    moduleKey,
    moduleTitle: quizModules[moduleKey].title,
    score,
    total,
    accuracy: total === 0 ? 0 : score / total,
    durationMs: getElapsedMs(),
    completedAt: progress.completedAt
  });
}

async function showResults() {
  stopTimer();
  await recordModuleCompletion(state.currentModuleKey);
  setActiveScreen("result");
  const module = getCurrentModule();
  const total = getQuestions().length;
  const score = calculateScore();
  resultLine.textContent = `Módulo ${applyDisplayAccents(module.title)}: você acertou ${score} de ${total} perguntas.`;
  resultTagline.textContent = getTagline(score, total);
  await saveSession({ refreshDashboard: true });
  await refreshDashboard();
  renderApp();
}

function markCurrentAsSkippedIfNeeded() {
  const progress = getCurrentProgress();
  const currentIndex = progress.currentIndex;
  if (!hasAnswerSelection(progress.answers[currentIndex])) {
    progress.visited[currentIndex] = true;
    progress.skipped[currentIndex] = true;
  }
}

async function goToNext() {
  if (state.isPaused) return;

  const questions = getQuestions();
  const progress = getCurrentProgress();
  const currentIndex = progress.currentIndex;
  const hasSelection = hasAnswerSelection(progress.answers[currentIndex]);
  const isLocked = Boolean(progress.locked[currentIndex]);

  if (hasSelection && !isLocked) {
    progress.locked[currentIndex] = true;
    progress.visited[currentIndex] = true;
    progress.skipped[currentIndex] = false;
    renderApp();
    await saveSession();
    return;
  }

  markCurrentAsSkippedIfNeeded();

  if (progress.currentIndex < questions.length - 1) {
    await transitionElement(questionPanel, async () => {
      progress.currentIndex += 1;
      renderApp();
      await saveSession();
    });
    return;
  }

  await transitionElement(quizCard, async () => {
    await showResults();
  });
}

async function goToPrevious() {
  if (state.isPaused) return;

  const progress = getCurrentProgress();
  markCurrentAsSkippedIfNeeded();
  if (progress.currentIndex > 0) {
    await transitionElement(questionPanel, async () => {
      progress.currentIndex -= 1;
      renderApp();
      await saveSession();
    });
  }
}

function renderDashboard(container) {
  const { generalAttempts, generalAccuracy, individualTotalScore, individualTotalQuestions, individualByModule } = dashboardCache;
  const hasIndividualData = Boolean(state.numerica) && individualTotalQuestions > 0;
  const individualPct = hasIndividualData ? formatPercent(individualTotalScore / individualTotalQuestions) : "--";

  const moduleRows = MODULE_KEYS.map((key) => {
    const mod = individualByModule[key];
    if (!mod) {
      return `<div class="dashboard-module-row dashboard-module-row--empty">
        <span class="dashboard-module-name">${applyDisplayAccents(quizModules[key].title)}</span>
        <span class="dashboard-module-status">Não realizado</span>
      </div>`;
    }
    return `<div class="dashboard-module-row">
      <span class="dashboard-module-name">${applyDisplayAccents(mod.title)}</span>
      <span class="dashboard-module-score">${mod.score}/${mod.total}</span>
      <span class="dashboard-module-pct">${formatPercent(mod.accuracy)}</span>
    </div>`;
  }).join("");

  container.innerHTML = `
    <h3>Dashboard</h3>
    ${state.numerica ? `
    <div class="dashboard-grid" style="margin-top:0.9rem">
      <article class="dashboard-card dashboard-card--highlight" style="grid-column: 1 / -1">
        <p class="dashboard-label">Aluno ${state.numerica} — Total geral</p>
        <p class="dashboard-value">${hasIndividualData ? `${individualTotalScore} / ${individualTotalQuestions}` : "--"}</p>
        <p class="dashboard-note">${hasIndividualData ? `${individualPct} de acertos` : "Nenhum módulo concluído ainda"}</p>
      </article>
    </div>
    <div class="dashboard-module-list">${moduleRows}</div>
    ` : `<p class="dashboard-note" style="margin-top:0.6rem">Selecione um aluno para ver o desempenho individual.</p>`}
    <div class="dashboard-grid" style="margin-top:1rem">
      <article class="dashboard-card">
        <p class="dashboard-label">Geral</p>
        <p class="dashboard-value">${generalAttempts}</p>
        <p class="dashboard-note">Módulos concluídos</p>
      </article>
      <article class="dashboard-card">
        <p class="dashboard-label">Geral</p>
        <p class="dashboard-value">${formatPercent(generalAccuracy)}</p>
        <p class="dashboard-note">Média geral de acertos</p>
      </article>
    </div>
  `;
}

async function refreshDashboard() {
  const summaries = await dbGetAll(SUMMARY_STORE);

  const totalCorrect = summaries.reduce((acc, item) => acc + item.score, 0);
  const totalQuestions = summaries.reduce((acc, item) => acc + item.total, 0);
  const individualSummaries = state.numerica
    ? summaries.filter((item) => item.numerica === state.numerica)
    : [];

  const individualByModule = {};
  MODULE_KEYS.forEach((key) => {
    const records = individualSummaries.filter((item) => item.moduleKey === key);
    if (records.length === 0) {
      individualByModule[key] = null;
      return;
    }
    const latest = records.reduce((a, b) => (b.completedAt > a.completedAt ? b : a));
    individualByModule[key] = {
      title: quizModules[key].title,
      score: latest.score,
      total: latest.total,
      accuracy: latest.total > 0 ? latest.score / latest.total : 0
    };
  });

  const completedModules = Object.values(individualByModule).filter(Boolean);
  const individualTotalScore = completedModules.reduce((acc, m) => acc + m.score, 0);
  const individualTotalQuestions = completedModules.reduce((acc, m) => acc + m.total, 0);

  dashboardCache = {
    generalAttempts: summaries.length,
    generalAccuracy: totalQuestions === 0 ? 0 : totalCorrect / totalQuestions,
    individualTotalScore,
    individualTotalQuestions,
    individualByModule
  };

  renderDashboard(introDashboard);
  renderDashboard(resultDashboard);
}

function renderNumericaSelection() {
  numericaGrid.querySelectorAll(".numerica-btn").forEach((button) => {
    button.classList.toggle("selected", button.dataset.value === state.numerica);
  });

  if (!pendingSession) {
    resumePanel.hidden = true;
    return;
  }

  resumePanel.hidden = false;
  const module = quizModules[pendingSession.snapshot.currentModuleKey] || quizModules[DEFAULT_MODULE_KEY];
  const progress = pendingSession.snapshot.moduleProgress?.[pendingSession.snapshot.currentModuleKey];
  const currentIndex = Number(progress?.currentIndex || 0) + 1;
  resumeTitle.textContent = `Sessão encontrada para o aluno ${pendingSession.numerica}`;
  resumeText.textContent = `Tema atual: ${applyDisplayAccents(module.title)} • retomada prevista na questão ${currentIndex}.`;
}

function renderIntroScreen() {
  renderModuleSelector();
  updateModuleHint();
}

function renderResultScreen() {
  renderDashboard(resultDashboard);
}

function syncTimerWithScreen() {
  if (state.activeScreen === "question" && !state.isPaused) {
    startTimer();
    return;
  }

  stopTimer();
}

function renderApp() {
  setActiveScreen(state.activeScreen, { recordResume: false });
  updateHeader();
  renderProgress();

  if (state.activeScreen === "numerica") {
    renderNumericaSelection();
  }

  if (state.activeScreen === "intro") {
    renderIntroScreen();
  }

  if (state.activeScreen === "question") {
    renderQuestionMap();
    renderQuestion();
  }

  if (state.activeScreen === "result") {
    renderResultScreen();
  }

  syncTimerWithScreen();
}

async function saveSession({ refreshDashboard: shouldRefreshDashboard = false } = {}) {
  if (!state.numerica) return;

  await dbPut(SESSION_STORE, {
    numerica: state.numerica,
    snapshot: getSerializableState(),
    updatedAt: Date.now()
  });

  if (shouldRefreshDashboard) {
    await refreshDashboard();
  }
}

async function selectNumerica(label) {
  const sessionRecord = await dbGet(SESSION_STORE, label);

  if (sessionRecord?.snapshot) {
    state = createFreshState(label);
    state.activeScreen = "numerica";
    pendingSession = sessionRecord;
    await refreshDashboard();
    renderApp();
    return;
  }

  pendingSession = null;
  state = createFreshState(label);
  setActiveScreen("intro");
  await saveSession({ refreshDashboard: true });
  renderApp();
}

async function resumePendingSession() {
  if (!pendingSession) return;

  await transitionElement(quizCard, async () => {
    state = normalizeSession(pendingSession.snapshot, pendingSession.numerica);
    state.activeScreen = state.resumeScreen || "intro";
    state.isPaused = false;
    pendingSession = null;
    await refreshDashboard();
    renderApp();
    await saveSession();
  });
}

async function restartPendingSession() {
  if (!state.numerica) return;

  await transitionElement(quizCard, async () => {
    pendingSession = null;
    state = createFreshState(state.numerica);
    setActiveScreen("intro");
    await saveSession({ refreshDashboard: true });
    renderApp();
  });
}

async function togglePause() {
  state.isPaused = !state.isPaused;
  if (state.isPaused) {
    stopTimer();
  } else if (state.activeScreen === "question") {
    startTimer();
  }
  renderApp();
  await saveSession();
}

async function pauseAndLogout() {
  await transitionElement(quizCard, async () => {
    state.isPaused = true;
    stopTimer();
    state.resumeScreen = "question";
    await saveSession({ refreshDashboard: true });
    setActiveScreen("numerica", { recordResume: false });
    pendingSession = await dbGet(SESSION_STORE, state.numerica);
    renderApp();
  });
}

function openLogoutModal({ fromQuestionScreen = false } = {}) {
  if (!logoutModal) {
    return;
  }

  logoutConfirmAction = async () => {
    if (fromQuestionScreen || state.activeScreen === "question") {
      await pauseAndLogout();
      return;
    }

    await logoutToHome();
  };

  logoutModalText.textContent = "Ao sair, o tempo será pausado e você poderá continuar depois.";
  logoutModal.hidden = false;
  logoutConfirmBtn.focus();
}

function closeLogoutModal() {
  if (!logoutModal) return;
  logoutModal.hidden = true;
  logoutConfirmAction = null;
}

async function confirmLogoutModal() {
  const action = logoutConfirmAction;
  closeLogoutModal();
  if (typeof action === "function") {
    await action();
  }
}

async function logoutToHome() {
  if (!state.numerica) {
    await transitionElement(quizCard, async () => {
      setActiveScreen("numerica", { recordResume: false });
      pendingSession = null;
      renderApp();
    });
    return;
  }

  if (state.activeScreen === "question") {
    await pauseAndLogout();
    return;
  }

  await transitionElement(quizCard, async () => {
    stopTimer();
    state.isPaused = true;
    state.resumeScreen = state.activeScreen === "result" ? "result" : "intro";
    await saveSession({ refreshDashboard: true });
    setActiveScreen("numerica", { recordResume: false });
    pendingSession = await dbGet(SESSION_STORE, state.numerica);
    renderApp();
  });
}

async function resetCurrentModule() {
  await transitionElement(quizCard, async () => {
    state.moduleProgress[state.currentModuleKey] = createModuleProgress(state.currentModuleKey);
    state.activeScreen = "intro";
    state.resumeScreen = "intro";
    await saveSession({ refreshDashboard: true });
    renderApp();
  });
}

function setTheme(mode) {
  document.body.dataset.theme = mode;
  themeToggle.innerHTML = mode === "dark"
    ? '<span class="material-symbols-rounded icon">light_mode</span><span>Modo claro</span>'
    : '<span class="material-symbols-rounded icon">dark_mode</span><span>Modo escuro</span>';
}

async function loadThemePreference() {
  const setting = await dbGet(SETTINGS_STORE, "theme");
  setTheme(setting?.value === "dark" ? "dark" : "light");
}

async function toggleTheme() {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  await dbPut(SETTINGS_STORE, { key: "theme", value: nextTheme });
}

function buildNumericaGrid() {
  numericaGrid.innerHTML = "";
  for (let index = 1; index <= 32; index += 1) {
    const label = String(index).padStart(2, "0");
    const button = document.createElement("button");
    button.className = "numerica-btn";
    button.type = "button";
    button.textContent = label;
    button.dataset.value = label;
    button.addEventListener("click", async () => {
      await selectNumerica(label);
    });
    numericaGrid.appendChild(button);
  }
}

startBtn.addEventListener("click", async () => {
  await transitionElement(quizCard, async () => {
    state.activeScreen = "question";
    state.resumeScreen = "question";
    state.isPaused = false;
    renderApp();
    await saveSession();
  });
});

changeStudentBtn.addEventListener("click", async () => {
  await transitionElement(quizCard, async () => {
    stopTimer();
    await saveSession({ refreshDashboard: true });
    setActiveScreen("numerica", { recordResume: false });
    pendingSession = null;
    renderApp();
  });
});

nextBtn.addEventListener("click", () => {
  void goToNext();
});

prevBtn.addEventListener("click", () => {
  void goToPrevious();
});

pauseBtn.addEventListener("click", () => {
  void togglePause();
});

logoutBtn.addEventListener("click", () => {
  openLogoutModal({ fromQuestionScreen: true });
});

resumeSessionBtn.addEventListener("click", () => {
  void resumePendingSession();
});

restartSessionBtn.addEventListener("click", () => {
  void restartPendingSession();
});

restartBtn.addEventListener("click", () => {
  void resetCurrentModule();
});

continueJourneyBtn.addEventListener("click", async () => {
  await transitionElement(quizCard, async () => {
    state.activeScreen = "intro";
    state.resumeScreen = "intro";
    await saveSession({ refreshDashboard: true });
    renderApp();
  });
});

themeToggle.addEventListener("click", () => {
  void toggleTheme();
});

topLogoutBtn.addEventListener("click", () => {
  openLogoutModal({ fromQuestionScreen: false });
});

logoutCancelBtn.addEventListener("click", () => {
  closeLogoutModal();
});

logoutConfirmBtn.addEventListener("click", () => {
  void confirmLogoutModal();
});

logoutModal.addEventListener("click", (event) => {
  if (event.target === logoutModal) {
    closeLogoutModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !logoutModal.hidden) {
    closeLogoutModal();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    void saveSession();
  }
});

window.addEventListener("pagehide", () => {
  void saveSession();
});

async function initApp() {
  ensureTimerInterval();
  buildNumericaGrid();
  await loadThemePreference();
  await refreshDashboard();
  renderApp();
}

void initApp();
