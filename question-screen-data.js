/**
 * Conteúdo — NR 11 Logística para Todos · Leroy Merlin
 * Gerado a partir do roteiro "Roteiro NR 11 — Logística para Todos" (35 slides do SESMT).
 *
 * Tipos: cover | content | video | image | quiz-intro | question | order | match | compare | reflect | finale
 *
 * Vídeos: SEM embed — só nome + scene/brief no frame "Vídeo a gravar".
 *         Depois cole embed/playerId Panda em cada tela type:"video".
 * Fotos: assets/fotos/mNpM.png (módulo N, pergunta M).
 *
 * Atividades por módulo (formatos do motor do curso):
 *  M1 Crachá Liberado?     → 6 question (confirmar): liberar ou barrar
 *  M2 Vista o Operador     → match (tarefa → EPI exigido)
 *  M3 Checklist Relâmpago  → 10 question (duelo): conforme ou não conforme
 *  M4 Pode Parar Aqui?     → 6 question (cartoes): local proibido
 *  M5 Balança da Decisão   → 8 question (lista): sozinho, com colega ou com equipamento
 *  M6 Na Medida            → 7 question: medidas e limites
 */
window.QUESTION_SCREEN_SESSION = {
  "meta": {
    "title": "NR 11 – Logística para todos",
    "brand": "TecnoCursos",
    "musicSrc": "musica/musica_foco.mp3"
  },
  "modules": [
    {
      "id": 1,
      "title": "Logística para todos: equipamentos e quem pode operar",
      "meta": "Vídeos + texto · desafio Crachá Liberado?",
      "titleUnlock": {
        "title": "OPERADOR HABILITADO",
        "body": "Você sabe quem pode operar cada equipamento e o que é exigido.",
        "icon": "🪪"
      },
      "screens": [
        {
          "id": "m1-cover",
          "type": "cover",
          "title": "Módulo 1 — Logística para todos: equipamentos e quem pode operar",
          "subtitle": "Objetivos do treinamento, os cinco equipamentos da Logística e do Drive e a formação exigida para cada um.",
          "transcript": "Módulo 1: Logística para Todos: Equipamentos e Quem Pode Operar.",
          "image": "assets/fotos/capamodulo1.png",
          "imageAlt": "Capa do Módulo 1: equipamentos e quem pode operar na Logística e no Drive"
        },
        {
          "id": "m1-v-abertura",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Logística segura começa por você",
          "duration": "0:40",
          "scene": "Abertura com o instrutor Lucas + takes na logística da Leroy Merlin",
          "brief": "Lucas se apresenta; cortes rápidos: paleteira manual, pedestre na faixa pintada, operador afivelando o cinto; título do treinamento sobre o galpão.",
          "body": "Todo dia, toneladas de mercadorias passam pela logística e pelo Drive. Este treinamento existe para prevenir acidentes, conscientizar, reduzir custos, aumentar a produtividade e promover bem-estar e segurança no trabalho.",
          "transcript": "Vídeo de abertura: logística segura começa por você."
        },
        {
          "id": "m1-objetivos",
          "type": "content",
          "skin": "agents",
          "banner": "assets/fotos/pagina5.png",
          "bannerAlt": "Cinco ícones em verde: escudo, lâmpada, cofrinho, gráfico em alta e capacete",
          "kicker": "📄 Texto",
          "title": "Objetivos do treinamento",
          "cards": [
            {
              "icon": "🛡️",
              "lead": "Objetivo 1",
              "title": "Prevenção de acidentes",
              "body": "agir antes que o risco vire ocorrência"
            },
            {
              "icon": "💡",
              "lead": "Objetivo 2",
              "title": "Conscientização dos colaboradores",
              "body": "cada pessoa faz parte da segurança"
            },
            {
              "icon": "💰",
              "lead": "Objetivo 3",
              "title": "Redução de custos",
              "body": "menos acidentes, menos perdas e paradas"
            },
            {
              "icon": "📈",
              "lead": "Objetivo 4",
              "title": "Maior produtividade",
              "body": "operação segura é operação que flui"
            },
            {
              "icon": "🤝",
              "lead": "Objetivo 5",
              "title": "Bem-estar e segurança",
              "body": "um ambiente de trabalho melhor para todos"
            }
          ],
          "transcript": "Objetivos do treinamento: prevenção de acidentes, conscientização, redução de custos, maior produtividade, bem-estar e segurança."
        },
        {
          "id": "m1-v-equipamentos",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Os cinco equipamentos da Logística e do Drive",
          "duration": "0:45",
          "scene": "Filmagem real — um plano por equipamento, todos parados",
          "brief": "Empilhadeira, empilhadeira elétrica patolada, paleteira manual, transpaleteira elétrica e PTA, cada um com o nome em legenda; último plano com os cinco lado a lado.",
          "body": "Cinco equipamentos fazem o trabalho pesado: empilhadeira (a gás ou elétrica), empilhadeira elétrica patolada, paleteira manual, transpaleteira elétrica e PTA. Cada um tem suas regras, e nem todo mundo pode operar todos.",
          "transcript": "Vídeo: os cinco equipamentos da logística e do Drive."
        },
        {
          "id": "m1-quem-opera",
          "type": "content",
          "steps": true,
          "stepSkin": "equip",
          "stepUnit": "Equipamento",
          "stepNext": "Próximo equipamento",
          "stepFinish": "Concluir",
          "kicker": "📄 Texto",
          "title": "Quem pode operar o quê",
          "items": [
            {
              "image": "assets/fotos/p7-1a.png",
              "icon": "🚜",
              "title": "Empilhadeira a gás",
              "text": "CNH + treinamento teórico e prático."
            },
            {
              "image": "assets/fotos/p7-1b.png",
              "icon": "🔋",
              "title": "Empilhadeira elétrica",
              "text": "CNH + treinamento teórico e prático."
            },
            {
              "image": "assets/fotos/p7-2.png",
              "icon": "🔌",
              "title": "Empilhadeira elétrica patolada",
              "text": "Sem CNH: treinamento teórico e prático. CNH não exigida."
            },
            {
              "image": "assets/fotos/p7-3.png",
              "icon": "🛒",
              "title": "Paleteira / transpaleteira elétrica",
              "text": "NR 11 Operador de Paleteira (teoria e prática) + carteirinha.",
              "warn": "Atenção: não está autorizada a operação da transpaleteira no modo embarcado."
            },
            {
              "image": "assets/fotos/p7-4.png",
              "icon": "🏗️",
              "title": "Plataforma elevatória (PTA)",
              "text": "NR 35 e NR 18 (teoria e prática) + carteirinha."
            },
            {
              "image": "assets/fotos/p7-5.png",
              "icon": "🌬️",
              "title": "Manipulador de sacaria a vácuo",
              "text": "Formação de NR 12 obrigatória."
            }
          ],
          "transcript": "Quem pode operar cada equipamento: a formação exigida e a carteirinha."
        },
        {
          "id": "m1-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Crachá liberado?",
          "count": 6,
          "minCorrect": 5,
          "icon": "🪪",
          "body": "6 casos cronometrados. Veja o crachá do colaborador e o equipamento que ele quer usar: <strong>libere</strong> ou <strong>barre</strong>. Mínimo de <strong>5 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 1: Crachá Liberado?."
        },
        {
          "id": "m1-q1",
          "type": "question",
          "variant": "confirmar",
          "question": "Caso 1 de 6 · CNH e treinamento teórico e prático de empilhadeira. Quer operar a empilhadeira a gás.",
          "alternatives": [
            {
              "id": "a",
              "text": "Liberar",
              "correct": true
            },
            {
              "id": "b",
              "text": "Barrar",
              "correct": false
            }
          ],
          "explanation": "Liberado: CNH e treinamento teórico e prático completos.",
          "review": "Habilitação da empilhadeira",
          "transcript": "Caso 1 de 6 · CNH e treinamento teórico e prático de empilhadeira. Quer operar a empilhadeira a gás.",
          "image": "assets/fotos/m1p1.png",
          "imageAlt": "Ilustração: Caso 1 de 6 · CNH e treinamento teórico e prático de empilhadeira. Quer operar a"
        },
        {
          "id": "m1-q2",
          "type": "question",
          "variant": "confirmar",
          "question": "Caso 2 de 6 · Treinamento teórico e prático, mas sem CNH. Quer operar a empilhadeira elétrica.",
          "alternatives": [
            {
              "id": "a",
              "text": "Liberar",
              "correct": false
            },
            {
              "id": "b",
              "text": "Barrar",
              "correct": true
            }
          ],
          "explanation": "Barrado: a CNH é obrigatória para empilhadeira. A única exceção é a empilhadeira patolada.",
          "review": "CNH para empilhadeira",
          "transcript": "Caso 2 de 6 · Treinamento teórico e prático, mas sem CNH. Quer operar a empilhadeira elétrica.",
          "image": "assets/fotos/m1p2.png",
          "imageAlt": "Ilustração: Caso 2 de 6 · Treinamento teórico e prático, mas sem CNH. Quer operar a empilhad"
        },
        {
          "id": "m1-q3",
          "type": "question",
          "variant": "confirmar",
          "question": "Caso 3 de 6 · Treinamento teórico e prático, sem CNH. Quer operar a empilhadeira elétrica patolada.",
          "alternatives": [
            {
              "id": "a",
              "text": "Liberar",
              "correct": true
            },
            {
              "id": "b",
              "text": "Barrar",
              "correct": false
            }
          ],
          "explanation": "Liberado: a patolada não exige CNH, só o treinamento teórico e prático.",
          "review": "Exceção da empilhadeira patolada",
          "transcript": "Caso 3 de 6 · Treinamento teórico e prático, sem CNH. Quer operar a empilhadeira elétrica patolada.",
          "image": "assets/fotos/m1p3.png",
          "imageAlt": "Ilustração: Caso 3 de 6 · Treinamento teórico e prático, sem CNH. Quer operar a empilhadeira"
        },
        {
          "id": "m1-q4",
          "type": "question",
          "variant": "confirmar",
          "question": "Caso 4 de 6 · Fez só a teoria da NR 11 de paleteira, sem a prática e sem carteirinha. Quer operar a paleteira elétrica.",
          "alternatives": [
            {
              "id": "a",
              "text": "Liberar",
              "correct": false
            },
            {
              "id": "b",
              "text": "Barrar",
              "correct": true
            }
          ],
          "explanation": "Barrado: a formação é teoria e prática, e é preciso ter a carteirinha.",
          "review": "Formação da paleteira elétrica",
          "transcript": "Caso 4 de 6 · Fez só a teoria da NR 11 de paleteira, sem a prática e sem carteirinha. Quer operar a paleteira elétrica.",
          "image": "assets/fotos/m1p4.png",
          "imageAlt": "Ilustração: Caso 4 de 6 · Fez só a teoria da NR 11 de paleteira, sem a prática e sem carteirinha."
        },
        {
          "id": "m1-q5",
          "type": "question",
          "variant": "confirmar",
          "question": "Caso 5 de 6 · NR 35 e NR 18 (teoria e prática) e carteirinha em dia. Quer usar a plataforma elevatória (PTA).",
          "alternatives": [
            {
              "id": "a",
              "text": "Liberar",
              "correct": true
            },
            {
              "id": "b",
              "text": "Barrar",
              "correct": false
            }
          ],
          "explanation": "Liberado: as duas formações e a carteirinha em dia.",
          "review": "Requisitos da PTA",
          "transcript": "Caso 5 de 6 · NR 35 e NR 18 (teoria e prática) e carteirinha em dia. Quer usar a plataforma elevatória (PTA).",
          "image": "assets/fotos/m1p5.png",
          "imageAlt": "Ilustração: Caso 5 de 6 · NR 35 e NR 18 (teoria e prática) e carteirinha em dia. Quer usar a"
        },
        {
          "id": "m1-q6",
          "type": "question",
          "variant": "confirmar",
          "question": "Caso 6 de 6 · NR 11 de paleteira e carteirinha. Quer operar a transpaleteira no modo embarcado.",
          "alternatives": [
            {
              "id": "a",
              "text": "Liberar",
              "correct": false
            },
            {
              "id": "b",
              "text": "Barrar",
              "correct": true
            }
          ],
          "explanation": "Barrado: o modo embarcado não está autorizado para ninguém, por razões de segurança.",
          "review": "Modo embarcado da transpaleteira",
          "transcript": "Caso 6 de 6 · NR 11 de paleteira e carteirinha. Quer operar a transpaleteira no modo embarcado.",
          "image": "assets/fotos/m1p6.png",
          "imageAlt": "Ilustração: Caso 6 de 6 · NR 11 de paleteira e carteirinha. Quer operar a transpaleteira no "
        }
      ]
    },
    {
      "id": 2,
      "title": "EPI: sua primeira barreira",
      "meta": "Vídeo + fotos + texto · desafio Vista o Operador",
      "titleUnlock": {
        "title": "EPI EM DIA",
        "body": "Você sabe qual proteção usar em cada tarefa.",
        "icon": "🦺"
      },
      "screens": [
        {
          "id": "m2-cover",
          "type": "cover",
          "title": "Módulo 2 — EPI: sua primeira barreira",
          "subtitle": "Os EPIs obrigatórios na Logística, as responsabilidades do colaborador e os óculos com grau.",
          "transcript": "Módulo 2: EPI: Sua Primeira Barreira.",
          "image": "assets/fotos/capamodulo2.png",
          "imageAlt": "Capa do Módulo 2: EPI — sua primeira barreira"
        },
        {
          "id": "m2-v-epi",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "EPI: obrigatório e de acordo com a tarefa",
          "duration": "0:50",
          "scene": "Lucas em câmera + cortes de demonstração real",
          "brief": "Quatro responsabilidades aparecem como texto na tela: usar, guardar e conservar, higienizar, comunicar. Cortes: inspeção do capacete e EPIs guardados no armário.",
          "body": "O EPI é de uso obrigatório e varia conforme o local e a tarefa. Suas responsabilidades: usar adequadamente, guardar e conservar, higienizar e comunicar quando impróprio. Antes de cada atividade, avalie se estão em condições de uso.",
          "transcript": "Vídeo: EPI obrigatório e de acordo com a tarefa."
        },
        {
          "id": "m2-foto-epis",
          "type": "content",
          "skin": "agents",
          "layout": "gallery",
          "kicker": "📷 Foto",
          "title": "Os EPIs da Logística, um a um",
          "cards": [
            {
              "icon": "⛑️",
              "thumbs": [
                "assets/fotos/p17-1.png"
              ],
              "title": "Capacete de segurança com jugular"
            },
            {
              "icon": "🥽",
              "thumbs": [
                "assets/fotos/p17-2.png"
              ],
              "title": "Óculos de segurança (empilhadeira)"
            },
            {
              "icon": "🧤",
              "thumbs": [
                "assets/fotos/p17-3.png"
              ],
              "title": "Luva de proteção (atividades manuais)"
            },
            {
              "icon": "🥾",
              "thumbs": [
                "assets/fotos/p17-4.png"
              ],
              "title": "Calçado de segurança"
            },
            {
              "icon": "🦺",
              "thumbs": [
                "assets/fotos/p17-5.png"
              ],
              "title": "Cinta lombar"
            },
            {
              "icon": "🎧",
              "thumbs": [
                "assets/fotos/p17-6.png"
              ],
              "title": "Protetor auricular (empilhadeira a gás)"
            }
          ],
          "transcript": "Foto: os EPIs da logística. Capacete com jugular, óculos, luva, calçado, cinta lombar e protetor auricular."
        },
        {
          "id": "m2-responsabilidades",
          "type": "content",
          "layout": "resp",
          "kicker": "📄 Texto",
          "title": "Responsabilidades com o EPI",
          "cards": [
            {
              "icon": "🧤",
              "title": "Usar",
              "body": "Use adequadamente, conforme a tarefa."
            },
            {
              "icon": "🗄️",
              "title": "Guardar e conservar",
              "body": "Cuide do equipamento e guarde no lugar certo."
            },
            {
              "icon": "🧼",
              "title": "Higienizar",
              "body": "Mantenha o EPI limpo."
            },
            {
              "icon": "📣",
              "title": "Comunicar",
              "body": "Avise quando estiver impróprio para uso."
            }
          ],
          "transcript": "Responsabilidades do colaborador com o EPI: usar, guardar, higienizar e comunicar."
        },
        {
          "id": "m2-oculos-checagem",
          "type": "content",
          "layout": "resp",
          "kicker": "📄 Texto",
          "title": "Dois cuidados que não podem faltar",
          "items": [
            {
              "icon": "👓",
              "title": "Óculos com grau",
              "text": "a empresa fornece. Entregue a receita médica atualizada ao seu líder, que envia ao RH para fazer a solicitação.",
              "image": "assets/fotos/oculos grau.png",
              "imageAlt": "Óculos de segurança com grau"
            },
            {
              "icon": "🔎",
              "title": "Antes da atividade",
              "text": "avalie os EPIs e veja se estão em condições de uso.",
              "image": "assets/fotos/verificar.png",
              "imageAlt": "Verificação dos EPIs antes da atividade"
            }
          ],
          "transcript": "Óculos com grau: a empresa fornece; entregue a receita ao líder. Antes da atividade, avalie se os EPIs estão em condições de uso."
        },
        {
          "id": "m2-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Vista o operador",
          "count": 1,
          "minCorrect": 1,
          "icon": "🦺",
          "body": "Ligue cada <strong>tarefa</strong> ao <strong>EPI</strong> que ela exige. Só avança com todos os pares certos.",
          "transcript": "Desafio do módulo 2: Vista o Operador."
        },
        {
          "id": "m2-match",
          "type": "match",
          "title": "Vista o operador",
          "body": "Toque numa tarefa e depois no EPI que ela exige.",
          "leftTitle": "Tarefa",
          "rightTitle": "EPI exigido",
          "pairs": [
            {
              "ex": "Operar empilhadeira a gás",
              "body": "Protetor auricular"
            },
            {
              "ex": "Operar qualquer empilhadeira",
              "body": "Óculos de segurança"
            },
            {
              "ex": "Atividades manuais",
              "body": "Luva de proteção"
            },
            {
              "ex": "Movimentar cargas",
              "body": "Cinta lombar, ajustada só durante o esforço"
            },
            {
              "ex": "Usar a escada para abastecer ou pegar",
              "body": "Capacete de segurança com jugular"
            }
          ],
          "review": "EPI exigido em cada tarefa",
          "transcript": "Ligue cada tarefa ao EPI que ela exige."
        }
      ]
    },
    {
      "id": 3,
      "title": "Empilhadeira e PTA: operação segura",
      "meta": "Vídeos + texto · desafio Checklist Relâmpago",
      "titleUnlock": {
        "title": "CHECKLIST SEM FALHA",
        "body": "Você reconhece uma operação segura e a que não é.",
        "icon": "✅"
      },
      "screens": [
        {
          "id": "m3-cover",
          "type": "cover",
          "title": "Módulo 3 — Empilhadeira e PTA: operação segura",
          "subtitle": "Riscos, limite de velocidade, regras de operação, checklist diário, troca de baterias e plataforma elevatória.",
          "transcript": "Módulo 3: Empilhadeira e PTA: Operação Segura.",
          "image": "assets/fotos/capamodulo3.png",
          "imageAlt": "Capa do Módulo 3: empilhadeira e PTA — operação segura"
        },
        {
          "id": "m3-v-riscos",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Os riscos da empilhadeira",
          "duration": "1:05",
          "scene": "Lucas em câmera + animações estilo Pixar (acidente não se filma)",
          "brief": "Tombamento, colisão, atropelamento e queda de carga em animação, sempre parando antes do impacto. No fim, \"6 km/h\" ocupa a tela.",
          "body": "Tombamento, colisão, atropelamento, queda e falta de manutenção são os riscos principais. A velocidade máxima no Drive e na Logística é de 6 km/h.",
          "transcript": "Vídeo: os riscos da empilhadeira."
        },
        {
          "id": "m3-riscos",
          "type": "content",
          "steps": true,
          "stepSkin": "risk",
          "stepUnit": "Risco",
          "stepNext": "Próximo risco",
          "stepFinish": "Ver avisos importantes",
          "kicker": "📄 Texto",
          "title": "Riscos da empilhadeira e suas causas",
          "items": [
            {
              "icon": "⚠️",
              "title": "Tombamentos",
              "text": "Excesso de carga, manobras arriscadas, obstáculos no caminho.",
              "image": "assets/fotos/tombamento.png",
              "imageAlt": "Tombamentos de empilhadeira"
            },
            {
              "icon": "💥",
              "title": "Colisões",
              "text": "Pontos cegos, excesso de velocidade.",
              "image": "assets/fotos/colisao.png",
              "imageAlt": "Colisões com empilhadeira"
            },
            {
              "icon": "🚶",
              "title": "Atropelamentos",
              "text": "Falta de sinalização, distração, pontos cegos, perda de controle.",
              "image": "assets/fotos/atropelamento.png",
              "imageAlt": "Atropelamentos"
            },
            {
              "icon": "📦",
              "title": "Quedas",
              "text": "Material sem stretch, falta do cinto de segurança.",
              "image": "assets/fotos/quedas.png",
              "imageAlt": "Quedas de material ou operador"
            }
          ],
          "transcript": "Os riscos da empilhadeira e suas causas: tombamentos, colisões, atropelamentos e quedas."
        },
        {
          "id": "m3-riscos-avisos",
          "type": "content",
          "layout": "resp-risk",
          "kicker": "📄 Texto",
          "title": "Dois avisos que salvam a operação",
          "items": [
            {
              "icon": "🔧",
              "title": "Falta de manutenção",
              "text": "transforma qualquer equipamento em um risco."
            },
            {
              "icon": "🐢",
              "title": "Velocidade máxima",
              "text": "6 km/h no Drive e na Logística."
            }
          ],
          "transcript": "Falta de manutenção transforma qualquer equipamento em risco. Velocidade máxima: seis quilômetros por hora."
        },
        {
          "id": "m3-v-operacao",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Operação segura, do checklist ao estacionamento",
          "duration": "1:10",
          "scene": "Filmagem real acompanhando um operador em sequência",
          "brief": "Checklist assinado, cinto afivelado, celular guardado, palete com stretch, garfos baixos, redução diante de piso molhado sinalizado.",
          "body": "Faça o checklist, use o cinto, não use o celular, respeite capacidade e altura da carga, fixe a carga, não ande com garfos erguidos e cheque o piso. Empilhadeira a gás não entra na loja nem em lugares fechados.",
          "transcript": "Vídeo: operação segura, do checklist ao estacionamento."
        },
        {
          "id": "m3-operacao",
          "type": "content",
          "layout": "quickcards",
          "qcStyle": "checklist",
          "kicker": "📄 Texto",
          "title": "Regras de operação",
          "items": [
            {
              "icon": "📋",
              "title": "Checklist",
              "text": "Faça antes de iniciar a atividade.",
              "image": "assets/fotos/27.1.png",
              "imageAlt": "Checklist antes de iniciar a atividade"
            },
            {
              "icon": "🔒",
              "title": "Cinto de segurança",
              "text": "Use sempre. Celular, nunca durante a operação.",
              "image": "assets/fotos/27.2.png",
              "imageAlt": "Cinto de segurança na operação"
            },
            {
              "icon": "⚖️",
              "title": "Capacidade e altura",
              "text": "Transporte só a quantidade permitida e não exceda a altura da carga.",
              "image": "assets/fotos/27.3.png",
              "imageAlt": "Capacidade e altura da carga"
            },
            {
              "icon": "🍴",
              "title": "Garfos",
              "text": "Fixe a carga e não ande com os garfos erguidos.",
              "image": "assets/fotos/27.4.png",
              "imageAlt": "Garfos da empilhadeira"
            },
            {
              "icon": "🎁",
              "title": "Carga solta",
              "text": "Amarre com fitilho ou fita stretch.",
              "image": "assets/fotos/27.5.png",
              "imageAlt": "Carga amarrada com stretch"
            },
            {
              "icon": "💧",
              "title": "Piso",
              "text": "Cheque sempre, pode estar molhado ou oleoso. Velocidade constante e carga estável.",
              "image": "assets/fotos/27.6.png",
              "imageAlt": "Atenção ao piso molhado ou oleoso"
            },
            {
              "icon": "🚫",
              "title": "Empilhadeira a gás",
              "text": "Proibida dentro da loja e em lugares fechados.",
              "image": "assets/fotos/27.7.png",
              "imageAlt": "Empilhadeira a gás proibida em locais fechados"
            }
          ],
          "transcript": "Regras de operação segura da empilhadeira."
        },
        {
          "id": "m3-v-baterias",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Processo seguro de troca de baterias",
          "duration": "a definir",
          "scene": "Filmagem real na área de troca e carga de baterias",
          "brief": "Roteiro a completar com o passo a passo oficial do SESMT (slides de troca de baterias). Fecha com a conferência da trava de segurança.",
          "body": "A troca de baterias tem um processo seguro, definido pelo SESMT, que deve ser seguido passo a passo. Ao terminar, confira se a bateria está bem fixa e se a trava de segurança está no lugar.",
          "transcript": "Vídeo: processo seguro de troca de baterias."
        },
        {
          "id": "m3-checklist-pta",
          "type": "content",
          "layout": "duo",
          "kicker": "📄 Texto",
          "title": "Checklist diário e plataforma elevatória",
          "cards": [
            {
              "icon": "📋",
              "thumbs": ["assets/fotos/p29.1.png"],
              "lead": "Todos os dias",
              "title": "Checklist diário",
              "body": "Obrigatório em empilhadeira e PTA, antes de iniciar a atividade."
            },
            {
              "icon": "🏗️",
              "thumbs": ["assets/fotos/p29.2.png"],
              "lead": "NR 35 + NR 18",
              "title": "PTA",
              "body": "Só opera quem fez NR 35 e NR 18 (teoria e prática) e tem a carteirinha."
            }
          ],
          "items": [
            {
              "icon": "🪪",
              "title": "Equipamento motorizado:",
              "text": "Só depois de participar das formações e possuir a carteirinha correspondente."
            }
          ],
          "transcript": "Checklist diário obrigatório e requisitos para usar a plataforma elevatória."
        },
        {
          "id": "m3-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Checklist relâmpago",
          "count": 10,
          "minCorrect": 8,
          "icon": "✅",
          "body": "10 situações, uma de cada vez. Marque <strong>Conforme</strong> ou <strong>Não conforme</strong> antes do tempo acabar. Mínimo de <strong>8 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 3: Checklist Relâmpago."
        },
        {
          "id": "m3-q1",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 1 de 10 · Operador com o cinto de segurança afivelado.",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": true
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": false
            }
          ],
          "explanation": "Cinto de segurança é obrigatório na operação.",
          "review": "Cinto de segurança",
          "transcript": "Situação 1 de 10 · Operador com o cinto de segurança afivelado.",
          "image": "assets/fotos/m3p1.png",
          "imageAlt": "Ilustração: Situação 1 de 10 · Operador com o cinto de segurança afivelado."
        },
        {
          "id": "m3-q2",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 2 de 10 · Deslocamento com os garfos erguidos.",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": false
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": true
            }
          ],
          "explanation": "Não ande com os garfos erguidos.",
          "review": "Posição dos garfos",
          "transcript": "Situação 2 de 10 · Deslocamento com os garfos erguidos.",
          "image": "assets/fotos/m3p2.png",
          "imageAlt": "Ilustração: Situação 2 de 10 · Deslocamento com os garfos erguidos."
        },
        {
          "id": "m3-q3",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 3 de 10 · Palete de peças soltas amarrado com fitilho e fita stretch.",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": true
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": false
            }
          ],
          "explanation": "Peças soltas devem ser amarradas com fitilho ou fita stretch.",
          "review": "Fixação da carga",
          "transcript": "Situação 3 de 10 · Palete de peças soltas amarrado com fitilho e fita stretch.",
          "image": "assets/fotos/m3p3.png",
          "imageAlt": "Ilustração: Situação 3 de 10 · Palete de peças soltas amarrado com fitilho e fita stretch."
        },
        {
          "id": "m3-q4",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 4 de 10 · Empilhadeira a gás circulando dentro da loja.",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": false
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": true
            }
          ],
          "explanation": "Empilhadeira a gás não é permitida dentro da loja e em lugares fechados.",
          "review": "Empilhadeira a gás em local fechado",
          "transcript": "Situação 4 de 10 · Empilhadeira a gás circulando dentro da loja.",
          "image": "assets/fotos/m3p4.png",
          "imageAlt": "Ilustração: Situação 4 de 10 · Empilhadeira a gás circulando dentro da loja."
        },
        {
          "id": "m3-q5",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 5 de 10 · Operador respondendo mensagem no celular em movimento.",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": false
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": true
            }
          ],
          "explanation": "Não use o celular durante a operação.",
          "review": "Celular na operação",
          "transcript": "Situação 5 de 10 · Operador respondendo mensagem no celular em movimento.",
          "image": "assets/fotos/m3p5.png",
          "imageAlt": "Ilustração: Situação 5 de 10 · Operador respondendo mensagem no celular em movimento."
        },
        {
          "id": "m3-q6",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 6 de 10 · Checklist preenchido antes de iniciar a atividade.",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": true
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": false
            }
          ],
          "explanation": "O checklist diário é obrigatório antes de começar.",
          "review": "Checklist diário",
          "transcript": "Situação 6 de 10 · Checklist preenchido antes de iniciar a atividade.",
          "image": "assets/fotos/m3p6.png",
          "imageAlt": "Ilustração: Situação 6 de 10 · Checklist preenchido antes de iniciar a atividade."
        },
        {
          "id": "m3-q7",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 7 de 10 · Velocímetro marcando 10 km/h no Drive.",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": false
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": true
            }
          ],
          "explanation": "A velocidade máxima no Drive e na Logística é 6 km/h.",
          "review": "Velocidade máxima",
          "transcript": "Situação 7 de 10 · Velocímetro marcando 10 km/h no Drive.",
          "image": "assets/fotos/m3p7.png",
          "imageAlt": "Ilustração: Situação 7 de 10 · Velocímetro marcando 10 km/h no Drive."
        },
        {
          "id": "m3-q8",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 8 de 10 · Carga dentro da capacidade e da altura permitidas.",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": true
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": false
            }
          ],
          "explanation": "Transporte só a quantidade permitida e respeite a altura da carga.",
          "review": "Capacidade e altura da carga",
          "transcript": "Situação 8 de 10 · Carga dentro da capacidade e da altura permitidas.",
          "image": "assets/fotos/m3p8.png",
          "imageAlt": "Ilustração: Situação 8 de 10 · Carga dentro da capacidade e da altura permitidas."
        },
        {
          "id": "m3-q9",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 9 de 10 · Equipamento em manutenção sendo usado \"só dessa vez\".",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": false
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": true
            }
          ],
          "explanation": "Equipamento em manutenção não deve ser utilizado.",
          "review": "Equipamento em manutenção",
          "transcript": "Situação 9 de 10 · Equipamento em manutenção sendo usado \"só dessa vez\".",
          "image": "assets/fotos/m3p9.png",
          "imageAlt": "Ilustração: Situação 9 de 10 · Equipamento em manutenção sendo usado \"só dessa vez\"."
        },
        {
          "id": "m3-q10",
          "type": "question",
          "variant": "duelo",
          "question": "Situação 10 de 10 · Operador reduz a velocidade e confere o piso molhado antes de passar.",
          "alternatives": [
            {
              "id": "a",
              "text": "Conforme",
              "correct": true
            },
            {
              "id": "b",
              "text": "Não conforme",
              "correct": false
            }
          ],
          "explanation": "Cheque sempre o estado do piso, que pode estar molhado ou oleoso.",
          "review": "Estado do piso",
          "transcript": "Situação 10 de 10 · Operador reduz a velocidade e confere o piso molhado antes de passar.",
          "image": "assets/fotos/m3p10.png",
          "imageAlt": "Ilustração: Situação 10 de 10 · Operador reduz a velocidade e confere o piso molhado antes d"
        }
      ]
    },
    {
      "id": 4,
      "title": "Paleteiras e pedestres: dividindo o mesmo piso",
      "meta": "Vídeos + texto · desafio Pode Parar Aqui?",
      "titleUnlock": {
        "title": "PISTA LIVRE",
        "body": "Você sabe onde parar o equipamento e como circular a pé.",
        "icon": "🚧"
      },
      "screens": [
        {
          "id": "m4-cover",
          "type": "cover",
          "title": "Módulo 4 — Paleteiras e pedestres: dividindo o mesmo piso",
          "subtitle": "Transpaleteira elétrica, paleteira manual, onde nunca estacionar e as regras do pedestre.",
          "transcript": "Módulo 4: Paleteiras e Pedestres: Dividindo o Mesmo Piso.",
          "image": "assets/fotos/capamodulo4.png",
          "imageAlt": "Capa do Módulo 4: paleteiras e pedestres — dividindo o mesmo piso"
        },
        {
          "id": "m4-v-transpaleteira",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Transpaleteira elétrica: inspeção a cada turno",
          "duration": "0:55",
          "scene": "Filmagem real — close nos pontos de inspeção",
          "brief": "Limpeza, placas de aviso e identificação, nível e fixação da bateria, trava de segurança e etiqueta de manutenção. Fecha com o operador conduzindo a pé.",
          "body": "A transpaleteira elétrica carrega palete de até 1.500 kg. Inspecione no início de cada turno: limpeza, placas, bateria e trava. Equipamento na manutenção não se usa. Só opera quem tem NR 11 e carteirinha, e nunca no modo embarcado.",
          "transcript": "Vídeo: transpaleteira elétrica, inspeção a cada turno."
        },
        {
          "id": "m4-v-manual",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Paleteira manual: empurre, não puxe",
          "duration": "0:40",
          "scene": "Filmagem real — plano lateral acompanhando o colaborador",
          "brief": "Colaborador empurra a paleteira em ritmo de caminhada e para sem movimento brusco, sem pé na roda.",
          "body": "Velocidade de uma pessoa caminhando, parada sem movimentos bruscos (nada de pé na roda nem girar a manopla de uma vez) e, sempre que possível, empurrar em vez de puxar.",
          "transcript": "Vídeo: paleteira manual, empurre e não puxe."
        },
        {
          "id": "m4-v-pedestres",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Pedestres na Logística",
          "duration": "0:45",
          "scene": "Lucas em câmera + cenas reais de pedestres em conduta correta",
          "brief": "Pedestre na faixa pintada com celular guardado, parando diante de área isolada; gráfico de 5 m entre pedestre e equipamento em elevação.",
          "body": "Ande só nas faixas de pedestres, sem celular, longe de equipamento em movimento e respeitando áreas isoladas. Na elevação de carga, distância mínima de 5 metros.",
          "transcript": "Vídeo: pedestres na logística."
        },
        {
          "id": "m4-estacionar",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Onde nunca estacionar",
          "cards": [
            {
              "icon": "🚪",
              "title": "Saída de emergência",
              "body": "Nunca obstrua."
            },
            {
              "icon": "🧯",
              "title": "Hidrantes e extintor",
              "body": "Mantenha livres."
            },
            {
              "icon": "⚡",
              "title": "Painéis elétricos",
              "body": "Acesso sempre desimpedido."
            },
            {
              "icon": "🚶",
              "title": "Trânsito de pessoas",
              "body": "Não bloqueie faixas e passagens."
            },
            {
              "icon": "🛣️",
              "title": "Ruas de acesso",
              "body": "Não estacione no meio da circulação."
            },
            {
              "icon": "🗄️",
              "title": "Prateleiras",
              "body": "Não bloqueie o acesso a elas."
            }
          ],
          "items": [
            {
              "icon": "💦",
              "title": "Sprinkler:",
              "text": "nunca armazene produtos com altura que obstrua o sprinkler."
            },
            {
              "icon": "🚶",
              "title": "Pedestres:",
              "text": "só nas faixas, sem celular, longe do equipamento em movimento, em áreas isoladas e a 5 m na elevação."
            }
          ],
          "transcript": "Onde nunca estacionar o equipamento, a regra do sprinkler e as regras do pedestre."
        },
        {
          "id": "m4-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Pode parar aqui?",
          "count": 6,
          "minCorrect": 5,
          "icon": "🚧",
          "body": "6 situações. Em cada uma, escolha o <strong>local onde é proibido</strong> deixar o equipamento. Mínimo de <strong>5 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 4: Pode Parar Aqui?."
        },
        {
          "id": "m4-q1",
          "type": "question",
          "variant": "cartoes",
          "question": "Onde é proibido deixar a transpaleteira?",
          "alternatives": [
            {
              "id": "a",
              "text": "Em frente à saída de emergência",
              "correct": true
            },
            {
              "id": "b",
              "text": "Na vaga demarcada para equipamentos",
              "correct": false
            },
            {
              "id": "c",
              "text": "Na área de espera sinalizada",
              "correct": false
            },
            {
              "id": "d",
              "text": "No ponto de carga de bateria",
              "correct": false
            }
          ],
          "explanation": "Saída de emergência nunca pode ser obstruída.",
          "review": "Saída de emergência",
          "transcript": "Onde é proibido deixar a transpaleteira?",
          "image": "assets/fotos/m4p1.png",
          "imageAlt": "Ilustração: Onde é proibido deixar a transpaleteira?"
        },
        {
          "id": "m4-q2",
          "type": "question",
          "variant": "cartoes",
          "question": "Qual destes locais NÃO pode ser obstruído pelo equipamento?",
          "alternatives": [
            {
              "id": "a",
              "text": "Corredor sem uso, fora da circulação",
              "correct": false
            },
            {
              "id": "b",
              "text": "Vaga demarcada para equipamentos",
              "correct": false
            },
            {
              "id": "c",
              "text": "Hidrante e extintor de incêndio",
              "correct": true
            },
            {
              "id": "d",
              "text": "Área de espera sinalizada",
              "correct": false
            }
          ],
          "explanation": "Hidrantes e extintores precisam estar sempre livres e acessíveis.",
          "review": "Hidrantes e extintores",
          "transcript": "Qual destes locais NÃO pode ser obstruído pelo equipamento?",
          "image": "assets/fotos/m4p2.png",
          "imageAlt": "Ilustração: Qual destes locais NÃO pode ser obstruído pelo equipamento?"
        },
        {
          "id": "m4-q3",
          "type": "question",
          "variant": "cartoes",
          "question": "Onde NÃO se deve parar a paleteira?",
          "alternatives": [
            {
              "id": "a",
              "text": "Vaga demarcada para equipamentos",
              "correct": false
            },
            {
              "id": "b",
              "text": "Em frente ao painel elétrico",
              "correct": true
            },
            {
              "id": "c",
              "text": "Área de espera sinalizada",
              "correct": false
            },
            {
              "id": "d",
              "text": "Ao lado da bancada de embalagem, fora da passagem",
              "correct": false
            }
          ],
          "explanation": "Painéis elétricos precisam de acesso desimpedido.",
          "review": "Painéis elétricos",
          "transcript": "Onde NÃO se deve parar a paleteira?",
          "image": "assets/fotos/m4p3.png",
          "imageAlt": "Ilustração: Onde NÃO se deve parar a paleteira?"
        },
        {
          "id": "m4-q4",
          "type": "question",
          "variant": "cartoes",
          "question": "Qual situação é proibida?",
          "alternatives": [
            {
              "id": "a",
              "text": "Equipamento na vaga demarcada",
              "correct": false
            },
            {
              "id": "b",
              "text": "Equipamento parado sobre a faixa de pedestres",
              "correct": true
            },
            {
              "id": "c",
              "text": "Equipamento na área de espera",
              "correct": false
            },
            {
              "id": "d",
              "text": "Equipamento recolhido no ponto de carga",
              "correct": false
            }
          ],
          "explanation": "Não bloqueie o trânsito de pessoas nem as faixas de pedestres.",
          "review": "Trânsito de pessoas",
          "transcript": "Qual situação é proibida?",
          "image": "assets/fotos/m4p4.png",
          "imageAlt": "Ilustração: Qual situação é proibida?"
        },
        {
          "id": "m4-q5",
          "type": "question",
          "variant": "cartoes",
          "question": "Onde nunca deixar o equipamento estacionado?",
          "alternatives": [
            {
              "id": "a",
              "text": "No meio da rua de acesso",
              "correct": true
            },
            {
              "id": "b",
              "text": "Na vaga demarcada",
              "correct": false
            },
            {
              "id": "c",
              "text": "Na área de espera sinalizada",
              "correct": false
            },
            {
              "id": "d",
              "text": "No ponto de carga",
              "correct": false
            }
          ],
          "explanation": "Ruas de acesso são de circulação, e não de estacionamento.",
          "review": "Ruas de acesso",
          "transcript": "Onde nunca deixar o equipamento estacionado?",
          "image": "assets/fotos/m4p5.png",
          "imageAlt": "Ilustração: Onde nunca deixar o equipamento estacionado?"
        },
        {
          "id": "m4-q6",
          "type": "question",
          "variant": "cartoes",
          "question": "Qual armazenagem é proibida?",
          "alternatives": [
            {
              "id": "a",
              "text": "Altura que obstrui o sprinkler",
              "correct": true
            },
            {
              "id": "b",
              "text": "Altura com folga até o sprinkler",
              "correct": false
            },
            {
              "id": "c",
              "text": "Palete no rack, dentro do limite",
              "correct": false
            },
            {
              "id": "d",
              "text": "Palete strechado e fitilhado",
              "correct": false
            }
          ],
          "explanation": "Nunca armazene produtos com altura que obstrua o sprinkler.",
          "review": "Sprinkler",
          "transcript": "Qual armazenagem é proibida?",
          "image": "assets/fotos/m4p6.png",
          "imageAlt": "Ilustração: Qual armazenagem é proibida?"
        }
      ]
    },
    {
      "id": 5,
      "title": "Movimentação manual, manipulador a vácuo e estilete",
      "meta": "Vídeos + texto · desafio Balança da Decisão",
      "titleUnlock": {
        "title": "CORPO E CARGA",
        "body": "Você decide bem quando levantar sozinho, pedir ajuda ou usar equipamento.",
        "icon": "⚖️"
      },
      "screens": [
        {
          "id": "m5-cover",
          "type": "cover",
          "title": "Módulo 5 — Movimentação manual, manipulador a vácuo e estilete",
          "subtitle": "Postura e limites de peso, o manipulador de sacaria do Drive e o uso correto do estilete.",
          "transcript": "Módulo 5: Movimentação Manual, Manipulador a Vácuo e Estilete.",
          "image": "assets/fotos/capamodulo5.png",
          "imageAlt": "Capa do Módulo 5: movimentação manual, manipulador a vácuo e estilete"
        },
        {
          "id": "m5-v-manual",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Movimentação manual de cargas",
          "duration": "1:10",
          "scene": "Lucas em câmera + três cortes de demonstração de técnica",
          "brief": "Agachar com a coluna reta e a carga junto ao corpo; dois colegas erguendo juntos; ajuste e afrouxamento da cinta lombar. Nenhuma lesão é mostrada.",
          "body": "Pegue a carga de frente, sem torcer o tronco, o mais perto do corpo. Acima de 25 kg ou sem boa pega, peça ajuda. Mercadoria comprida e de difícil pega, a partir de 15 kg. Cinta lombar só durante o esforço. Cargas pesadas: transpaleteira elétrica.",
          "transcript": "Vídeo: movimentação manual de cargas."
        },
        {
          "id": "m5-v-vacuo",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Manipulador de sacaria a vácuo no Drive",
          "duration": "0:55",
          "scene": "Filmagem real no Drive — área isolada e close da ventosa",
          "brief": "Só o operador dentro da marcação pintada; ventosa prende o saco por vácuo; cliente e colaboradores aguardam fora da linha.",
          "body": "O manipulador reduz a fadiga, ganha performance e elimina o contato direto com a carga. Exige formação de NR 12. A área deve ser isolada, com sinalização no piso e placas, e só o operador fica nela.",
          "transcript": "Vídeo: manipulador de sacaria a vácuo no Drive."
        },
        {
          "id": "m5-foto-estilete",
          "type": "image",
          "layout": "stack",
          "kicker": "📷 Foto",
          "title": "Uso do estilete: forma correta",
          "image": "assets/fotos/m5-estilete.png",
          "imageAlt": "Estilete homologado sendo usado da forma correta e da forma incorreta",
          "imageFit": "contain",
          "bullets": [
            "O estilete não é um EPI, mas você é o responsável pela conservação e pelo uso adequado.",
            "Use apenas ferramentas homologadas para corte de embalagens."
          ],
          "transcript": "Foto: uso do estilete, forma correta. O estilete não é um EPI, mas você é responsável pelo uso adequado."
        },
        {
          "id": "m5-regras",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Regras da movimentação manual",
          "items": [
            {
              "icon": "🙋",
              "title": "Acima de 25 kg ou sem boa pega:",
              "text": "peça ajuda a um colega e redobre a atenção com a postura."
            },
            {
              "icon": "📏",
              "title": "Mercadoria comprida e de difícil pega:",
              "text": "peça ajuda a partir de 15 kg."
            },
            {
              "icon": "🏋️",
              "title": "Postura:",
              "text": "apanhe a carga de frente, sem torcer o tronco e o mais próximo do corpo."
            },
            {
              "icon": "🧰",
              "title": "Ferramentas:",
              "text": "use EPIs e ferramentas homologadas para movimentar, abastecer e cortar embalagens."
            },
            {
              "icon": "🪜",
              "title": "Escada:",
              "text": "no abastecimento ou na pega, use o capacete."
            },
            {
              "icon": "🩹",
              "title": "Cinta lombar:",
              "text": "ajuste só durante a movimentação e afrouxe os velcros nas pausas."
            },
            {
              "icon": "🛒",
              "title": "Cargas mais pesadas:",
              "text": "use a transpaleteira elétrica."
            }
          ],
          "transcript": "Regras da movimentação manual de cargas."
        },
        {
          "id": "m5-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Balança da decisão",
          "count": 8,
          "minCorrect": 6,
          "icon": "⚖️",
          "body": "8 cargas. Para cada uma, decida: levantar <strong>sozinho</strong>, <strong>com um colega</strong> ou <strong>com equipamento</strong>. Mínimo de <strong>6 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 5: Balança da Decisão."
        },
        {
          "id": "m5-q1",
          "type": "question",
          "variant": "lista",
          "question": "Carga 1 de 8 · Caixa de 8 kg, boa pega, prateleira ao lado.",
          "alternatives": [
            {
              "id": "a",
              "text": "Sozinho",
              "correct": true
            },
            {
              "id": "b",
              "text": "Com um colega",
              "correct": false
            },
            {
              "id": "c",
              "text": "Com equipamento",
              "correct": false
            }
          ],
          "explanation": "Leve, boa pega e distância curta: basta a postura correta.",
          "review": "Carga leve",
          "transcript": "Carga 1 de 8 · Caixa de 8 kg, boa pega, prateleira ao lado.",
          "image": "assets/fotos/m5p1.png",
          "imageAlt": "Ilustração: Carga 1 de 8 · Caixa de 8 kg, boa pega, prateleira ao lado."
        },
        {
          "id": "m5-q2",
          "type": "question",
          "variant": "lista",
          "question": "Carga 2 de 8 · Caixa de 30 kg, boa pega, prateleira ao lado.",
          "alternatives": [
            {
              "id": "a",
              "text": "Sozinho",
              "correct": false
            },
            {
              "id": "b",
              "text": "Com um colega",
              "correct": true
            },
            {
              "id": "c",
              "text": "Com equipamento",
              "correct": false
            }
          ],
          "explanation": "Acima de 25 kg, peça ajuda a um colega.",
          "review": "Carga acima de 25 kg",
          "transcript": "Carga 2 de 8 · Caixa de 30 kg, boa pega, prateleira ao lado.",
          "image": "assets/fotos/m5p2.png",
          "imageAlt": "Ilustração: Carga 2 de 8 · Caixa de 30 kg, boa pega, prateleira ao lado."
        },
        {
          "id": "m5-q3",
          "type": "question",
          "variant": "lista",
          "question": "Carga 3 de 8 · Perfil metálico comprido de 18 kg, difícil de segurar.",
          "alternatives": [
            {
              "id": "a",
              "text": "Sozinho",
              "correct": false
            },
            {
              "id": "b",
              "text": "Com um colega",
              "correct": true
            },
            {
              "id": "c",
              "text": "Com equipamento",
              "correct": false
            }
          ],
          "explanation": "Mercadoria comprida e de difícil pega, acima de 15 kg: peça ajuda.",
          "review": "Carga comprida e de difícil pega",
          "transcript": "Carga 3 de 8 · Perfil metálico comprido de 18 kg, difícil de segurar.",
          "image": "assets/fotos/m5p3.png",
          "imageAlt": "Ilustração: Carga 3 de 8 · Perfil metálico comprido de 18 kg, difícil de segurar."
        },
        {
          "id": "m5-q4",
          "type": "question",
          "variant": "lista",
          "question": "Carga 4 de 8 · Caixa de 12 kg, boa pega, destino a 20 metros.",
          "alternatives": [
            {
              "id": "a",
              "text": "Sozinho",
              "correct": false
            },
            {
              "id": "b",
              "text": "Com um colega",
              "correct": false
            },
            {
              "id": "c",
              "text": "Com equipamento",
              "correct": true
            }
          ],
          "explanation": "Para distâncias acima de 2 m, use carrinho ou paleteira manual.",
          "review": "Distância acima de 2 metros",
          "transcript": "Carga 4 de 8 · Caixa de 12 kg, boa pega, destino a 20 metros.",
          "image": "assets/fotos/m5p4.png",
          "imageAlt": "Ilustração: Carga 4 de 8 · Caixa de 12 kg, boa pega, destino a 20 metros."
        },
        {
          "id": "m5-q5",
          "type": "question",
          "variant": "lista",
          "question": "Carga 5 de 8 · Palete fechado de 600 kg.",
          "alternatives": [
            {
              "id": "a",
              "text": "Sozinho",
              "correct": false
            },
            {
              "id": "b",
              "text": "Com um colega",
              "correct": false
            },
            {
              "id": "c",
              "text": "Com equipamento",
              "correct": true
            }
          ],
          "explanation": "Carga pesada em palete: transpaleteira elétrica.",
          "review": "Palete pesado",
          "transcript": "Carga 5 de 8 · Palete fechado de 600 kg.",
          "image": "assets/fotos/m5p5.png",
          "imageAlt": "Ilustração: Carga 5 de 8 · Palete fechado de 600 kg."
        },
        {
          "id": "m5-q6",
          "type": "question",
          "variant": "lista",
          "question": "Carga 6 de 8 · Saco de 50 kg no Drive.",
          "alternatives": [
            {
              "id": "a",
              "text": "Sozinho",
              "correct": false
            },
            {
              "id": "b",
              "text": "Com um colega",
              "correct": false
            },
            {
              "id": "c",
              "text": "Com equipamento",
              "correct": true
            }
          ],
          "explanation": "Sacaria no Drive: manipulador a vácuo, por operador com NR 12.",
          "review": "Sacaria no Drive",
          "transcript": "Carga 6 de 8 · Saco de 50 kg no Drive.",
          "image": "assets/fotos/m5p6.png",
          "imageAlt": "Ilustração: Carga 6 de 8 · Saco de 50 kg no Drive."
        },
        {
          "id": "m5-q7",
          "type": "question",
          "variant": "lista",
          "question": "Carga 7 de 8 · Chapa de madeira inteira.",
          "alternatives": [
            {
              "id": "a",
              "text": "Sozinho",
              "correct": false
            },
            {
              "id": "b",
              "text": "Com um colega",
              "correct": false
            },
            {
              "id": "c",
              "text": "Com equipamento",
              "correct": true
            }
          ],
          "explanation": "Use o carrinho de transporte de chapas, conforme o informativo do SESMT.",
          "review": "Chapas de madeira",
          "transcript": "Carga 7 de 8 · Chapa de madeira inteira.",
          "image": "assets/fotos/m5p7.png",
          "imageAlt": "Ilustração: Carga 7 de 8 · Chapa de madeira inteira."
        },
        {
          "id": "m5-q8",
          "type": "question",
          "variant": "lista",
          "question": "Carga 8 de 8 · Caixa de 10 kg, boa pega, 1 metro de deslocamento.",
          "alternatives": [
            {
              "id": "a",
              "text": "Sozinho",
              "correct": true
            },
            {
              "id": "b",
              "text": "Com um colega",
              "correct": false
            },
            {
              "id": "c",
              "text": "Com equipamento",
              "correct": false
            }
          ],
          "explanation": "Dentro dos limites: pegue de frente, junto ao corpo, sem torcer o tronco.",
          "review": "Carga dentro dos limites",
          "transcript": "Carga 8 de 8 · Caixa de 10 kg, boa pega, 1 metro de deslocamento."
        }
      ]
    },
    {
      "id": 6,
      "title": "Armazenagem, docas e encerramento",
      "meta": "Vídeos + texto · desafio Na Medida",
      "titleUnlock": {
        "title": "MEDIDA CERTA",
        "body": "Você domina as medidas e regras da armazenagem e das docas.",
        "icon": "📐"
      },
      "screens": [
        {
          "id": "m6-cover",
          "type": "cover",
          "title": "Módulo 6 — Armazenagem, docas e encerramento",
          "subtitle": "Palete aéreo, longarinas e palete PBR, equipamento certo para cada produto, docas e manuais de segurança.",
          "transcript": "Módulo 6: Armazenagem, Docas e Encerramento.",
          "image": "assets/fotos/capamodulo6.png",
          "imageAlt": "Capa do Módulo 6: armazenagem, docas e encerramento"
        },
        {
          "id": "m6-v-armazenagem",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Palete aéreo e armazenagem segura",
          "duration": "1:15",
          "scene": "Filmagem real com cotas gráficas sobre a imagem",
          "brief": "Palete stretchado e fitilhado no alto do rack; cotas de 50 cm, 1 m e 50 cm; placa de capacidade da longarina; palete PBR em bom estado e tocos apoiados.",
          "body": "Paletes aéreos stretchados e fitilhados; altura até 50 cm do limitador; 1 m do sistema de incêndio e da infraestrutura elétrica; 50 cm da parede. Verifique a capacidade das longarinas e o estado do palete PBR.",
          "transcript": "Vídeo: palete aéreo e armazenagem segura."
        },
        {
          "id": "m6-v-docas",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Equipamento certo e segurança nas docas",
          "duration": "0:55",
          "scene": "Filmagem real em dois blocos: corredor de estoque e doca",
          "brief": "Colaborador usa carrinho em vez de carregar no braço; rampa elevada e livre; caminhão encosta, a rampa apoia na carroceria e a paleteira elétrica atravessa.",
          "body": "Use o equipamento adequado, confira antes de usar, não arraste mercadorias e use carrinho ou paleteira acima de 2 m. Na doca, a rampa não guarda produtos, fica elevada quando parada e só se usa apoiada no caminhão.",
          "transcript": "Vídeo: equipamento certo e segurança nas docas."
        },
        {
          "id": "m6-armazenagem",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Armazenagem: medidas e cuidados",
          "cards": [
            {
              "icon": "📏",
              "title": "Altura",
              "body": "Até 50 cm acima do limitador do rack."
            },
            {
              "icon": "🔥",
              "title": "Sistema de incêndio e elétrica",
              "body": "Empilhar a 1 m de distância."
            },
            {
              "icon": "🧱",
              "title": "Parede",
              "body": "Manter 50 cm de distância."
            },
            {
              "icon": "🪵",
              "title": "Palete PBR",
              "body": "1,20 m × 1,00 m, padrão nacional."
            }
          ],
          "items": [
            {
              "icon": "🔩",
              "title": "Longarinas:",
              "text": "verifique a capacidade de carga antes de armazenar. O vão é de 1,00 m."
            },
            {
              "icon": "🪵",
              "title": "Tocos:",
              "text": "são eles que ficam apoiados na longarina, e não as ripas."
            },
            {
              "icon": "🔎",
              "title": "Palete PBR:",
              "text": "sem ripas quebradas e sem tocos faltando."
            }
          ],
          "transcript": "Medidas e cuidados da armazenagem em racks."
        },
        {
          "id": "m6-docas",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Dicas de equipamentos e docas",
          "items": [
            {
              "icon": "🧰",
              "title": "Equipamento:",
              "text": "use o adequado para cada produto e verifique as condições antes de usar."
            },
            {
              "icon": "🚫",
              "title": "Não arraste",
              "text": "mercadorias pelo piso. Peça ajuda em mercadorias comprida e de difícil pega."
            },
            {
              "icon": "🛒",
              "title": "Distâncias acima de 2 m:",
              "text": "use carrinhos ou paleteiras manuais."
            },
            {
              "icon": "⛔",
              "title": "Rampa da doca:",
              "text": "não guarde produtos nela e deixe elevada quando não estiver em uso."
            },
            {
              "icon": "🚚",
              "title": "Uso da rampa:",
              "text": "somente apoiada no caminhão, para a correta distribuição de peso."
            },
            {
              "icon": "🔌",
              "title": "Na doca:",
              "text": "prefira a paleteira elétrica à manual."
            }
          ],
          "transcript": "Dicas de equipamentos e de segurança nas docas."
        },
        {
          "id": "m6-manuais",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Manuais de segurança e SESMT",
          "items": [
            {
              "icon": "📘",
              "title": "Manual de segurança — Logística:",
              "text": "disponível no Google Drive, pasta SESMT para todos - LMB, subpasta MANUAIS."
            },
            {
              "icon": "📗",
              "title": "Manual de segurança — Drive:",
              "text": "disponível na mesma pasta, subpasta MANUAIS."
            },
            {
              "icon": "✉️",
              "title": "Dúvidas:",
              "text": "sesmt@leroymerlin.com.br"
            }
          ],
          "transcript": "Os manuais de segurança da Logística e do Drive estão no Google Drive. Dúvidas: SESMT."
        },
        {
          "id": "m6-v-encerramento",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Logística segura é com você",
          "duration": "0:35",
          "scene": "Lucas em câmera, mesmo enquadramento da abertura",
          "brief": "Um corte de apoio: equipe reunida no início do turno, todos de EPI. E-mail do SESMT em texto na tela.",
          "body": "Agora você sabe quem pode operar cada equipamento, quais EPIs usar, como circular, levantar peso e armazenar com segurança. Nada disso funciona sozinho: depende de você, todos os dias.",
          "transcript": "Vídeo de encerramento: logística segura é com você."
        },
        {
          "id": "m6-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Na medida",
          "count": 7,
          "minCorrect": 5,
          "icon": "📐",
          "body": "7 medidas do treinamento. Escolha o valor correto em cada uma. Mínimo de <strong>5 acertos</strong> para concluir.",
          "transcript": "Desafio do módulo 6: Na Medida."
        },
        {
          "id": "m6-q1",
          "type": "question",
          "question": "Qual é a velocidade máxima no Drive e na Logística?",
          "alternatives": [
            {
              "id": "a",
              "text": "3 km/h",
              "correct": false
            },
            {
              "id": "b",
              "text": "6 km/h",
              "correct": true
            },
            {
              "id": "c",
              "text": "10 km/h",
              "correct": false
            },
            {
              "id": "d",
              "text": "15 km/h",
              "correct": false
            }
          ],
          "explanation": "A velocidade máxima é de 6 km/h.",
          "review": "Velocidade máxima",
          "transcript": "Qual é a velocidade máxima no Drive e na Logística?",
          "image": "assets/fotos/m6p1.png",
          "imageAlt": "Ilustração: Qual é a velocidade máxima no Drive e na Logística?"
        },
        {
          "id": "m6-q2",
          "type": "question",
          "question": "A que distância mínima o pedestre fica do equipamento em elevação?",
          "alternatives": [
            {
              "id": "a",
              "text": "1 metro",
              "correct": false
            },
            {
              "id": "b",
              "text": "2 metros",
              "correct": false
            },
            {
              "id": "c",
              "text": "5 metros",
              "correct": true
            },
            {
              "id": "d",
              "text": "10 metros",
              "correct": false
            }
          ],
          "explanation": "Distância mínima de 5 metros.",
          "review": "Distância do pedestre na elevação",
          "transcript": "A que distância mínima o pedestre fica do equipamento em elevação?",
          "image": "assets/fotos/m6p2.png",
          "imageAlt": "Ilustração: A que distância mínima o pedestre fica do equipamento em elevação?"
        },
        {
          "id": "m6-q3",
          "type": "question",
          "question": "Quanto a carga do palete aéreo pode passar do limitador do rack?",
          "alternatives": [
            {
              "id": "a",
              "text": "Até 20 cm",
              "correct": false
            },
            {
              "id": "b",
              "text": "Até 50 cm",
              "correct": true
            },
            {
              "id": "c",
              "text": "Até 1 metro",
              "correct": false
            },
            {
              "id": "d",
              "text": "Não há limite",
              "correct": false
            }
          ],
          "explanation": "A altura não pode ultrapassar 50 cm do limitador do rack.",
          "review": "Altura do palete aéreo",
          "transcript": "Quanto a carga do palete aéreo pode passar do limitador do rack?",
          "image": "assets/fotos/m6p3.png",
          "imageAlt": "Ilustração: Quanto a carga do palete aéreo pode passar do limitador do rack?"
        },
        {
          "id": "m6-q4",
          "type": "question",
          "question": "Qual a distância do empilhamento até o sistema de incêndio e a infraestrutura elétrica?",
          "alternatives": [
            {
              "id": "a",
              "text": "10 cm",
              "correct": false
            },
            {
              "id": "b",
              "text": "50 cm",
              "correct": false
            },
            {
              "id": "c",
              "text": "1 metro",
              "correct": true
            },
            {
              "id": "d",
              "text": "2 metros",
              "correct": false
            }
          ],
          "explanation": "Mantenha 1 metro de distância.",
          "review": "Distância do sistema de incêndio",
          "transcript": "Qual a distância do empilhamento até o sistema de incêndio e a infraestrutura elétrica?",
          "image": "assets/fotos/m6p4.png",
          "imageAlt": "Ilustração: Qual a distância do empilhamento até o sistema de incêndio e a infraestrutura el"
        },
        {
          "id": "m6-q5",
          "type": "question",
          "question": "E a distância do empilhamento até a parede?",
          "alternatives": [
            {
              "id": "a",
              "text": "10 cm",
              "correct": false
            },
            {
              "id": "b",
              "text": "25 cm",
              "correct": false
            },
            {
              "id": "c",
              "text": "50 cm",
              "correct": true
            },
            {
              "id": "d",
              "text": "1 metro",
              "correct": false
            }
          ],
          "explanation": "Mantenha 50 cm de distância da parede.",
          "review": "Distância da parede",
          "transcript": "E a distância do empilhamento até a parede?",
          "image": "assets/fotos/m6p5.png",
          "imageAlt": "Ilustração: E a distância do empilhamento até a parede?"
        },
        {
          "id": "m6-q6",
          "type": "question",
          "question": "Qual a capacidade máxima da transpaleteira elétrica?",
          "alternatives": [
            {
              "id": "a",
              "text": "500 kg",
              "correct": false
            },
            {
              "id": "b",
              "text": "1.000 kg",
              "correct": false
            },
            {
              "id": "c",
              "text": "1.500 kg",
              "correct": true
            },
            {
              "id": "d",
              "text": "3.000 kg",
              "correct": false
            }
          ],
          "explanation": "Transporta cargas em palete de até 1.500 kg.",
          "review": "Capacidade da transpaleteira",
          "transcript": "Qual a capacidade máxima da transpaleteira elétrica?",
          "image": "assets/fotos/m6p6.png",
          "imageAlt": "Ilustração: Qual a capacidade máxima da transpaleteira elétrica?"
        },
        {
          "id": "m6-q7",
          "type": "question",
          "question": "Quais as medidas do palete PBR padrão nacional?",
          "alternatives": [
            {
              "id": "a",
              "text": "0,80 m × 0,80 m",
              "correct": false
            },
            {
              "id": "b",
              "text": "1,00 m × 1,00 m",
              "correct": false
            },
            {
              "id": "c",
              "text": "1,20 m × 1,00 m",
              "correct": true
            },
            {
              "id": "d",
              "text": "1,20 m × 1,20 m",
              "correct": false
            }
          ],
          "explanation": "O palete PBR mede 1,20 m × 1,00 m.",
          "review": "Medidas do palete PBR",
          "transcript": "Quais as medidas do palete PBR padrão nacional?",
          "image": "assets/fotos/m6p7.png",
          "imageAlt": "Ilustração: Quais as medidas do palete PBR padrão nacional?"
        },
        {
          "id": "m6-finale",
          "type": "finale",
          "kicker": "🏆 Conclusão",
          "eyebrow": "Certificado de conclusão",
          "title": "Parabéns",
          "body": "Você concluiu o treinamento NR 11 – Logística para Todos.",
          "quote": "Segurança é ter as pessoas em primeiro lugar, em cada movimento.",
          "chips": [
            "NR 11",
            "Logística para Todos",
            "Leroy Merlin"
          ],
          "transcript": "Parabéns. Você finalizou o NR 11, Logística para Todos."
        }
      ]
    }
  ]
};
