const divertissement = [
    {title: 'Piscinas Infantil', subtitle:'Piscina para crianças com profundidade crescente entre 20cm e 60cm',img:'piscinainfantil.jpeg'},
    {title: 'Salão de Jogos', subtitle:'Com mesas de bilhar, sinuca , ping-pong, pebolim e air hockey.',img:'20231115_100403.jpg'},
    {title: 'Campo de Futebol e Volei', subtitle:'Um campo gramado de futebol e um campo gramado de volei',img:'campoDeFutebol.jpeg'},
    {title: 'Salão de Festas', subtitle:'Salão fechado para festas e eventos com capacidade para 180 pessoas sentadas',img:'salãoDeFestas.jpeg'},
    {title: 'Salão Cerimonial', subtitle:'Salão fechado para realização de casamentos, cultos e apresentações',img:'salaoCerimonial.jpeg'},
    {title: 'Playground Infantil', subtitle:'Playground no gramado para as crianças',img:'playgroundInfantil.jpeg'},
    {title: 'Alimentação', subtitle:'Possibilidade de contratar nosso buffet',img:'alimentaçao.jpeg'},
    {title: 'Fogueira de Inverno', subtitle:'Fogueira de inverno com banco circular ',img:'IMG-20210306-WA0020.jpg'},
    {title: 'Casinha de Boneca', subtitle:'Casinha de boneca para visitação',img:'CasaDeBoneca.jpeg'},
    {title: 'Lago', subtitle:'Lago com possibilidade limitada de pesca para grupo pequeno ',img:'Lago.jpeg'},
    {title: 'Espaço Pet', subtitle: 'Local para acomodar seu animal de estimação', img: '20231115_115023.jpg'}
]
const homeImages = [
    {title: 'Piscina principal', subtitle:' Piscina principal com profundidade crescente entre 0,80 m e 2,00 m',img:'HomeImage.jpg'},
    {title: 'Espaço Pet', subtitle: 'Local para acomodar seu animal de estimação', img: '20231115_115023.jpg'},
    {title: 'Salão de Jogos', subtitle:'Com mesas de bilhar, sinuca , ping-pong, pebolim e air hockey.',img:'20231115_100403.jpg'},
    {title: 'Piscinas Infantil', subtitle:'Piscina para crianças com profundidade crescente entre 20cm e 60cm',img:'piscinainfantil.jpeg'},
]
const questionsAndAnswers = [
    {
      question: "Qual o valor da diária?",
      answer: "Os preços dependem da demanda e disponibilidade em cada data, entre em contato no nosso WhatsApp para consultar."
    },
    {
      question: "Qual o mínimo de pessoas?",
      answer: "O mínimo de pessoas para reservas é de 60 pessoas pagantes."
    },
    {
      question: "Quantas pessoas o espaço acomoda?",
      answer: "Nosso espaço tem capacidade para acomodar até 110 pessoas em camas. Se precisar de mais informações ou quiser fazer uma reserva, estou à disposição!"
    },
    {
      question: "Qual o valor para casamento?",
      answer: "Para locação para casamentos, o valor é de R$5.400,00 independente do total de pessoas. O sítio é liberado na sexta-feira após as 17:00 horas para decorador e buffet, se houver. Além disso, oferecemos uma cortesia de hospedagem para 50 pessoas da família no domingo, com direito ao uso das piscinas e todos os espaços do sítio. Caso ultrapasse 50 pessoas no domingo, haverá custo adicional por pessoa. Estamos à disposição para esclarecer qualquer dúvida ou para auxiliar na reserva."
    },
    {
      question: "Qual o valor para aniversário?",
      answer: "Para locação para aniversários, o valor é de R$4.800,00 independente do total de pessoas. O sítio é liberado na sexta-feira após as 17:00 horas para decorador e buffet, se houver. Além disso, oferecemos uma cortesia de hospedagem para 50 pessoas da família no domingo, com direito ao uso das piscinas e todos os espaços do sítio. Em caso de ultrapassar 50 pessoas no domingo, será cobrado R$30,00 por pessoa adicional. Estamos à disposição para esclarecer qualquer dúvida ou para auxiliar na reserva."
    },
    {
      question: "Pode levar pet?",
      answer: "Com certeza, aceitamos pets! Dispomos de um espaço dedicado para eles. A taxa é de R$30,00 por pet, por diária, e a alimentação fica a cargo do responsável pelo animal. Se tiver mais dúvidas ou quiser agendar, estamos à disposição!"
    },
    {
      question: "Pode levar caixa som?",
      answer: "Não é permitido trazer caixas de som, no entanto, o sítio oferece caixas de som na área de churrasqueira e no salão de festas! Caso tenha mais perguntas ou queira fazer uma reserva, estamos à disposição para ajudar!"
    },
    {
      question: "É permitido o uso de narguilé?",
      answer: "Não é permitido o uso de narguilé!"
    },
    {
      question: "Qual o valor da diária com alimentação inclusa?",
      answer: "O valor com alimentação inclusa é de R$135 por pessoa, e isso inclui café da manhã, almoço, chá da tarde e jantar. Caso tenha mais dúvidas ou queira fazer uma reserva, estamos à disposição para ajudar!"
    },
    {
      question: "É permitido som alto?",
      answer: "O som é permitido, mas apenas até 50 decibéis nas áreas externas."
    }
  ];

const gallery = [
    {img: '/IMG-20230109-WA0019.jpg'},
    {img: '/IMG-20230109-WA0025.jpg'},
    {img: '/IMG-20230109-WA0028.jpg'},
    {img: '/IMG-20230109-WA0031.jpg'},
    {img: '/IMG-20230109-WA0036.jpg'},
    {img: '/IMG-20230109-WA0040.jpg'},
    {img: '/IMG-20230109-WA0042.jpg'},
    {img: '/IMG-20230109-WA0047.jpg'},
    {img: '/IMG-20230109-WA0051.jpg'},
    {img: '/IMG-20230109-WA0065.jpg'},
    {img: '/IMG-20230109-WA0069.jpg'},
    {img: '/IMG-20230109-WA0070.jpg'},
    {img: '/20231115_100250.jpg'},
    {img: '/20231115_100403.jpg'},
    {img: '/20231115_100531.jpg'},
    {img: '/20231115_100848.jpg'},
    {img: '/20231115_100947.jpg'},
    {img: '/20231115_101126.jpg'},
    {img: '/20231115_101128.jpg'},
    {img: '/20231115_115019 copy.jpg'},
    {img: '/20231115_115019.jpg'},
    {img: '/20231115_115118.jpg'},
    {img: '/20231115_115252.jpg'},
    {img: '/20231115_115318.jpg'},
    {img: '/20231115_115335.jpg'},
    {img: '/20231115_115738.jpg'},
    {img: '/IMG-20210306-WA0020.jpg'},
    {img: '/IMG-20210306-WA0023.jpg'},
    {img: '/IMG-20210306-WA0024.jpg'},
    {img: '/20231115_113328.jpg'},
    {img: '/20231115_113426.jpg'},
    {img: '/20231115_113430.jpg'},
    {img: '/20231115_113548.jpg'},
    {img: '/20231115_114137.jpg'},
    {img: '/20231115_114727.jpg'},
    {img: '/IMG-20211130-WA0028.jpg'},
    {img: '/IMG-20211130-WA0031.jpg'},
    {img: '/IMG-20211130-WA0032.jpg'},
    {img: '/IMG-20211130-WA0038.jpg'},
    {img: '/IMG-20211130-WA0039.jpg'},
    {img: '/IMG-20211213-WA0030.jpg'},
    {img: '/IMG-20230109-WA0012.jpg'},
    {img: '/IMG-20230109-WA0013.jpg'},
    {img: '/IMG-20230109-WA0018.jpg'},
]