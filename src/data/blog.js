export const blogCategories = [
  { slug: 'protecao', label: 'Proteção e conservação' },
  { slug: 'estetica', label: 'Estética e recuperação' },
  { slug: 'personalizacao', label: 'Personalização automotiva' },
];

export const blogPosts = [
  {
    slug: 'ppf-automotivo-para-que-serve-e-o-que-proteger',
    title: 'PPF automotivo: para que serve e quais partes do carro proteger?',
    description: 'Entenda como funciona o filme de proteção de pintura (PPF), onde pode ser aplicado e o que avaliar antes de escolher o serviço.',
    category: 'Proteção e conservação',
    categorySlug: 'protecao',
    readTime: '5 min de leitura',
    date: '2026-11-07',
    image: '/media/ppf/ppf-01.jpeg',
    imageAlt: 'Aplicação de filme de proteção PPF na pintura de um veículo',
    intro: 'Pequenas marcas de pedras, atritos e uso diário podem comprometer a aparência da pintura. O PPF é uma película transparente desenvolvida para criar uma camada física de proteção sobre áreas do veículo.',
    sections: [
      { heading: 'O que é PPF automotivo?', paragraphs: [
        'PPF é a sigla de Paint Protection Film, um filme transparente aplicado sobre partes da carroceria. Sua função é ajudar a preservar a pintura contra agressões leves do uso cotidiano, como pequenos impactos de detritos e riscos superficiais compatíveis com as características do material.',
        'Ele não torna a pintura indestrutível e não substitui cuidados de condução ou manutenção. O nível de proteção depende do filme escolhido, da preparação da superfície e da qualidade da instalação.'
      ]},
      { heading: 'Quais partes do carro podem receber PPF?', paragraphs: [
        'A aplicação pode ser planejada para o veículo inteiro ou concentrada nas regiões mais expostas. A escolha depende do uso do carro, do orçamento e das áreas que o proprietário deseja preservar.'
      ], bullets: ['Para-choque dianteiro e capô, sujeitos a detritos da pista.', 'Retrovisores e bordas de portas, que podem sofrer atritos.', 'Maçanetas e áreas de contato frequente.', 'Soleiras e outras regiões definidas após avaliação.']},
      { heading: 'PPF ou vitrificação: qual é a diferença?', paragraphs: [
        'Embora os dois serviços estejam relacionados à conservação, eles não fazem a mesma coisa. O PPF é uma película física aplicada sobre a superfície. A vitrificação utiliza um produto de proteção aplicado à pintura, sem formar uma película espessa de proteção contra impactos.',
        'Em alguns projetos, as soluções podem ser consideradas em conjunto, desde que os produtos e a sequência de aplicação sejam compatíveis.'
      ]},
      { heading: 'O que avaliar antes da aplicação?', paragraphs: [
        'Antes de contratar, vale conferir a procedência e as características do filme, quais áreas estão incluídas, como será feita a preparação da pintura e quais são as orientações de limpeza e manutenção. Peça que o escopo seja explicado com clareza e considere a condição atual do veículo.',
        'Na Mcqueen Studio, em São José dos Campos, a indicação das áreas é feita a partir da avaliação do veículo e da necessidade apresentada pelo proprietário.'
      ]}
    ],
    faqs: [
      { q: 'O PPF protege contra qualquer risco?', a: 'Não. O filme ajuda a reduzir danos superficiais e impactos leves compatíveis com suas características, mas não impede todos os riscos, batidas ou danos à pintura.' },
      { q: 'É possível aplicar PPF somente em algumas partes?', a: 'Sim. A aplicação pode ser parcial, priorizando as regiões mais expostas ou de maior interesse para o proprietário.' },
      { q: 'O PPF muda a cor do veículo?', a: 'O PPF transparente é projetado para preservar a aparência da pintura, mas o acabamento final depende do filme escolhido e da condição da superfície.' }
    ],
    related: ['vitrificacao-automotiva-quanto-dura-e-quando-vale-a-pena', 'polimento-automotivo-quando-fazer-e-o-que-pode-corrigir'],
    service: '/ppf-automotivo/'
  },
  {
    slug: 'vitrificacao-automotiva-quanto-dura-e-quando-vale-a-pena',
    title: 'Vitrificação automotiva: quanto dura e quando vale a pena?',
    description: 'Saiba o que é vitrificação automotiva, quais fatores influenciam sua durabilidade e como cuidar da pintura depois da aplicação.',
    category: 'Proteção e conservação',
    categorySlug: 'protecao',
    readTime: '5 min de leitura',
    date: '2026-11-07',
    image: '/media/entrada/IMG_2255.jpeg',
    imageAlt: 'Veículo em registro fotográfico de estética automotiva',
    intro: 'A vitrificação é procurada por quem deseja valorizar o acabamento e facilitar os cuidados com a pintura. Para entender se vale a pena, é importante saber o que o processo entrega e o que influencia sua durabilidade.',
    sections: [
      { heading: 'O que é vitrificação automotiva?', paragraphs: [
        'A vitrificação é um processo de proteção da pintura que envolve a preparação da superfície e a aplicação de um produto específico. O objetivo é formar uma camada de proteção compatível com o produto utilizado, contribuindo para o acabamento e para a manutenção da pintura.',
        'O resultado não é uma blindagem contra riscos ou impactos. A vitrificação também não corrige, por conta própria, defeitos que já existem na pintura.'
      ]},
      { heading: 'Quanto tempo dura a vitrificação?', paragraphs: [
        'Não existe um prazo único que sirva para todos os veículos. A durabilidade varia conforme a formulação do produto, a preparação e a aplicação, a exposição ao sol e à chuva, a frequência de uso e os produtos utilizados nas lavagens.',
        'Por isso, desconfie de promessas universais. O prazo informado deve estar associado ao produto específico e às condições de manutenção recomendadas pelo aplicador.'
      ]},
      { heading: 'A pintura precisa ser polida antes?', paragraphs: [
        'Nem todo veículo precisa do mesmo nível de correção. A avaliação inicial identifica marcas, contaminações e o estado do verniz. Quando necessário e tecnicamente adequado, o polimento pode ser indicado para melhorar a superfície antes da proteção.',
        'A preparação deve respeitar a espessura e as condições do verniz. O objetivo não é remover material sem necessidade, mas deixar a superfície em condição adequada para receber o produto.'
      ]},
      { heading: 'Como cuidar depois da aplicação?', paragraphs: [
        'Siga o intervalo de cura e as instruções específicas fornecidas pelo profissional e pelo fabricante do produto. Depois, mantenha lavagens regulares com produtos adequados, evite métodos abrasivos e não deixe resíduos agressivos por longos períodos.',
        'A vitrificação pode fazer sentido para quem valoriza o cuidado contínuo da pintura e está disposto a seguir as recomendações de manutenção. A avaliação do veículo ajuda a definir se esse é o tratamento mais indicado.'
      ]}
    ],
    faqs: [
      { q: 'Vitrificação evita riscos?', a: 'Não elimina o risco de riscos. É uma proteção superficial e não substitui um filme físico como o PPF nas situações em que se busca proteção contra impactos leves.' },
      { q: 'Precisa fazer polimento antes?', a: 'Depende da condição da pintura e do resultado esperado. A necessidade deve ser definida após avaliação.' },
      { q: 'Posso lavar o carro logo depois?', a: 'O prazo de espera varia conforme o produto. Siga a orientação específica recebida no momento da aplicação.' }
    ],
    related: ['ppf-automotivo-para-que-serve-e-o-que-proteger', 'como-recuperar-o-brilho-da-pintura-com-cuidado'],
    service: '/vitrificacao-automotiva/'
  },
  {
    slug: 'polimento-automotivo-quando-fazer-e-o-que-pode-corrigir',
    title: 'Polimento automotivo: quando fazer e o que pode corrigir?',
    description: 'Entenda quando o polimento pode melhorar a pintura, quais marcas são compatíveis com a correção e por que a avaliação é indispensável.',
    category: 'Estética e recuperação',
    categorySlug: 'estetica',
    readTime: '5 min de leitura',
    date: '2026-11-07',
    image: 'https://images.pexels.com/photos/5233279/pexels-photo-5233279.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Profissional realizando polimento técnico na pintura de um automóvel branco',
    intro: 'Perda de brilho, marcas circulares e pequenos riscos podem deixar a pintura com aparência opaca. O polimento automotivo pode melhorar alguns desses sinais, mas o procedimento correto começa sempre pelo diagnóstico da superfície.',
    sections: [
      { heading: 'O que o polimento automotivo faz?', paragraphs: [
        'O polimento é um processo de correção da camada superficial do verniz por meio de abrasivos e máquinas apropriadas. Quando bem indicado, pode reduzir marcas leves, melhorar a uniformidade do reflexo e recuperar parte do brilho da pintura.',
        'O resultado depende da profundidade dos defeitos, da espessura do verniz, do tipo de tinta e do histórico de cuidados do veículo.'
      ]},
      { heading: 'Quais marcas podem ser corrigidas?', paragraphs: [
        'Marcas superficiais de lavagem, micro riscos e sinais leves de oxidação podem ser compatíveis com algum nível de polimento. Já riscos que atravessam o verniz ou chegam à base da pintura podem exigir outro tipo de reparo.',
        'Uma avaliação visual e técnica ajuda a separar o que pode ser melhorado com polimento daquilo que precisa de repintura ou intervenção diferente.'
      ]},
      { heading: 'Polimento técnico ou polimento de refino?', paragraphs: [
        'O processo pode envolver diferentes etapas, conforme o estado da pintura e o resultado possível. Uma correção mais intensa não deve ser escolhida automaticamente: quanto maior a abrasividade, maior a necessidade de critério e controle.',
        'Em alguns casos, uma etapa de refino é suficiente para melhorar o acabamento. Em outros, pode ser necessário um processo em etapas. A decisão deve considerar a condição real do verniz.'
      ]},
      { heading: 'Com que frequência devo polir o carro?', paragraphs: [
        'Polimento não é uma rotina de lavagem nem deve ser repetido em intervalos fixos sem avaliação. Como o processo pode remover uma pequena quantidade de verniz, o ideal é realizá-lo apenas quando houver necessidade e possibilidade técnica.',
        'Hábitos de lavagem corretos e uma proteção adequada ajudam a preservar o resultado e a reduzir a necessidade de novas correções.'
      ]}
    ],
    faqs: [
      { q: 'Polimento remove qualquer risco?', a: 'Não. A correção depende da profundidade do risco. Marcas que ultrapassam o verniz podem não ser removidas com segurança por polimento.' },
      { q: 'O polimento tira verniz?', a: 'O polimento de correção remove uma quantidade controlada da camada superficial. Por isso, precisa ser indicado e executado com critério.' },
      { q: 'Carro novo precisa de polimento?', a: 'Nem sempre. A pintura deve ser inspecionada antes de qualquer correção para evitar procedimentos desnecessários.' }
    ],
    related: ['como-recuperar-o-brilho-da-pintura-com-cuidado', 'vitrificacao-automotiva-quanto-dura-e-quando-vale-a-pena'],
    service: '/polimento-automotivo/'
  },
  {
    slug: 'como-recuperar-o-brilho-da-pintura-com-cuidado',
    title: 'Como recuperar o brilho da pintura sem comprometer o verniz?',
    description: 'Veja por que a pintura perde brilho, quais cuidados ajudam na conservação e quando procurar uma avaliação profissional.',
    category: 'Estética e recuperação',
    categorySlug: 'estetica',
    readTime: '4 min de leitura',
    date: '2026-11-07',
    image: '/media/entrada/IMG_2147.jpeg',
    imageAlt: 'Veículo registrado em trabalho de estética automotiva',
    intro: 'A pintura pode perder o aspecto uniforme com o tempo por causa de lavagens inadequadas, exposição ambiental e resíduos acumulados. Recuperar o brilho exige identificar a causa antes de escolher qualquer produto ou procedimento.',
    sections: [
      { heading: 'Por que a pintura perde brilho?', paragraphs: [
        'A exposição ao sol, chuva, poluição, seiva de árvores, fezes de aves e lavagens com materiais inadequados pode alterar a aparência da superfície. Marcas de lavagem e contaminações também espalham a luz de forma irregular, deixando o reflexo menos definido.',
        'Nem toda perda de brilho significa que o verniz está danificado. Às vezes, uma limpeza técnica e a remoção de contaminantes já melhoram o aspecto.'
      ]},
      { heading: 'Comece pela lavagem correta', paragraphs: [
        'Use produtos próprios para automóveis, luvas ou materiais limpos e macios, e separe os itens usados nas rodas daqueles utilizados na carroceria. Evite esfregar a pintura a seco e não utilize esponjas ásperas ou produtos domésticos sem indicação para veículos.',
        'A secagem também merece atenção: panos limpos e adequados reduzem o atrito e ajudam a evitar novas marcas.'
      ]},
      { heading: 'Quando o polimento é indicado?', paragraphs: [
        'Se a superfície apresenta micro riscos, marcas de lavagem ou perda de uniformidade que não desaparecem após a limpeza, pode ser necessário avaliar um polimento. O profissional deve verificar a profundidade das marcas e as condições do verniz antes de indicar a correção.',
        'Polir sem diagnóstico ou repetir o procedimento apenas para buscar mais brilho pode remover verniz desnecessariamente.'
      ]},
      { heading: 'Proteção e manutenção', paragraphs: [
        'Depois de corrigir a superfície, uma proteção compatível pode ajudar na conservação e facilitar a rotina de limpeza. A escolha entre cera, vitrificação ou PPF depende do objetivo: realçar o acabamento, adicionar uma proteção superficial ou criar uma barreira física em áreas específicas.',
        'O cuidado contínuo é tão importante quanto o serviço inicial. Siga as orientações de lavagem e manutenção indicadas para o produto aplicado.'
      ]}
    ],
    faqs: [
      { q: 'Cera recupera pintura riscada?', a: 'A cera pode realçar temporariamente o brilho, mas não corrige riscos profundos. Marcas persistentes precisam de avaliação.' },
      { q: 'Posso usar detergente comum para lavar o carro?', a: 'O mais indicado é utilizar produtos desenvolvidos para lavagem automotiva, seguindo as instruções do fabricante.' },
      { q: 'Como saber se o verniz ainda permite polimento?', a: 'A condição da pintura deve ser avaliada por um profissional. Não é seguro definir isso apenas pela aparência em uma foto.' }
    ],
    related: ['polimento-automotivo-quando-fazer-e-o-que-pode-corrigir', 'vitrificacao-automotiva-quanto-dura-e-quando-vale-a-pena'],
    service: '/polimento-automotivo/'
  },
  {
    slug: 'envelopamento-automotivo-tipos-vantagens-e-cuidados',
    title: 'Envelopamento automotivo: tipos, vantagens e cuidados',
    description: 'Conheça as possibilidades do envelopamento automotivo, o que considerar na escolha da película e como cuidar do acabamento.',
    category: 'Personalização automotiva',
    categorySlug: 'personalizacao',
    readTime: '5 min de leitura',
    date: '2026-11-07',
    image: '/media/entrada/envelopamento-do-teto.jpeg',
    imageAlt: 'Projeto de envelopamento automotivo no teto de um veículo',
    intro: 'O envelopamento permite mudar detalhes ou transformar o visual do veículo sem recorrer necessariamente à pintura. O resultado depende da escolha do material, da preparação e da qualidade da aplicação.',
    sections: [
      { heading: 'O que é envelopamento automotivo?', paragraphs: [
        'É a aplicação de uma película adesiva desenvolvida para uso automotivo sobre partes da carroceria ou em áreas específicas. O projeto pode ser parcial, como teto, retrovisores e detalhes, ou mais amplo, conforme o material e as condições do veículo.',
        'Envelopamento decorativo não deve ser confundido com PPF. Os materiais têm finalidades diferentes: um é voltado à personalização visual e o outro à proteção física da pintura.'
      ]},
      { heading: 'Quais são as possibilidades?', paragraphs: [
        'A variedade de cores, texturas e acabamentos permite criar projetos discretos ou marcantes. A disponibilidade depende das linhas de películas e dos fornecedores.'
      ], bullets: ['Teto em acabamento preto ou outra cor.', 'Retrovisores, maçanetas e detalhes externos.', 'Faixas e elementos de personalização.', 'Envelopamento parcial ou de áreas maiores, conforme avaliação.']},
      { heading: 'O que observar antes de envelopar?', paragraphs: [
        'A pintura precisa estar em condição adequada para receber a película. Repinturas, verniz solto, ferrugem, riscos profundos e peças danificadas podem interferir na aderência ou no acabamento.',
        'Também é importante alinhar o escopo: material, áreas incluídas, acabamento nas bordas, cuidados posteriores e condições para remoção. Peça uma avaliação presencial quando houver dúvidas sobre a superfície.'
      ]},
      { heading: 'Como conservar o envelopamento?', paragraphs: [
        'Siga as instruções específicas do fabricante da película e do aplicador. Em geral, a limpeza deve ser feita com produtos adequados e materiais macios, sem abrasivos ou solventes não recomendados.',
        'Evite direcionar jatos de alta pressão muito próximos às bordas e remova contaminantes assim que possível. O tempo de vida útil varia conforme o material, a exposição e a manutenção.'
      ]}
    ],
    faqs: [
      { q: 'Envelopamento protege a pintura?', a: 'A película pode funcionar como uma barreira superficial, mas o envelopamento decorativo não deve ser tratado como equivalente ao PPF, que é desenvolvido especificamente para proteção de pintura.' },
      { q: 'É possível envelopar somente o teto?', a: 'Sim. O teto é uma das áreas comuns em projetos parciais de personalização.' },
      { q: 'A película pode ser removida?', a: 'A remoção depende do material, do tempo de aplicação e da condição da pintura. Deve ser feita com técnica adequada para reduzir o risco de danos.' }
    ],
    related: ['envelopamento-de-teto-vale-a-pena', 'ppf-automotivo-para-que-serve-e-o-que-proteger'],
    service: '/envelopamento-automotivo/'
  },
  {
    slug: 'envelopamento-de-teto-vale-a-pena',
    title: 'Envelopamento de teto: vale a pena mudar o visual do carro?',
    description: 'Entenda como funciona o envelopamento de teto, quais acabamentos considerar e os cuidados para manter o resultado.',
    category: 'Personalização automotiva',
    categorySlug: 'personalizacao',
    readTime: '4 min de leitura',
    date: '2026-11-07',
    image: '/media/entrada/envelopamento-do-teto.jpeg',
    imageAlt: 'Envelopamento de teto em veículo',
    intro: 'O envelopamento de teto é uma das formas de personalizar o veículo sem alterar toda a carroceria. A mudança pode criar contraste com a cor original e destacar o desenho do automóvel.',
    sections: [
      { heading: 'Como funciona o envelopamento de teto?', paragraphs: [
        'O processo consiste em preparar a área e aplicar uma película automotiva sobre o teto. O acabamento pode variar conforme a cor e a textura escolhidas, como opções brilhantes, foscas ou outras disponíveis no catálogo do fornecedor.',
        'A qualidade visual depende do estado da pintura, da escolha do material, do recorte e do acabamento das bordas.'
      ]},
      { heading: 'Quais são as vantagens?', paragraphs: [
        'A principal vantagem é a personalização: o teto pode ganhar contraste e mudar a percepção visual do conjunto sem a necessidade de pintar a peça. Por ser um serviço localizado, também permite alterar apenas um detalhe do veículo.',
        'A película não corrige defeitos existentes na pintura e não deve ser aplicada sobre superfícies sem avaliação.'
      ]},
      { heading: 'Preto brilhante ou fosco?', paragraphs: [
        'O acabamento brilhante costuma criar um visual mais próximo de uma superfície pintada e polida. O fosco oferece contraste mais discreto e uma aparência diferente. A escolha depende da cor do veículo, do estilo desejado e da disponibilidade do material.',
        'Sempre que possível, compare amostras físicas sob diferentes condições de luz antes de decidir.'
      ]},
      { heading: 'Quanto tempo dura e como cuidar?', paragraphs: [
        'A durabilidade depende da qualidade da película, da exposição ao tempo, da preparação e da manutenção. Não há um prazo único aplicável a todos os materiais e veículos.',
        'Para conservar o acabamento, utilize produtos de limpeza compatíveis, evite abrasivos e respeite as orientações de lavagem fornecidas pelo aplicador. A avaliação prévia também ajuda a identificar se a pintura está apta a receber o envelopamento.'
      ]}
    ],
    faqs: [
      { q: 'Envelopar o teto altera a documentação do veículo?', a: 'Mudanças de cor que caracterizem alteração relevante do veículo podem ter regras específicas. Antes de realizar uma alteração, confirme a exigência aplicável ao seu caso junto ao órgão de trânsito.' },
      { q: 'Posso envelopar teto com pintura danificada?', a: 'É necessário avaliar a superfície. Pintura descascando, verniz solto ou danos podem comprometer a aplicação e a remoção futura.' },
      { q: 'O envelopamento de teto pode ser removido?', a: 'Sim, mas a remoção deve considerar o tipo de película, o tempo de uso e o estado da pintura.' }
    ],
    related: ['envelopamento-automotivo-tipos-vantagens-e-cuidados', 'como-recuperar-o-brilho-da-pintura-com-cuidado'],
    service: '/envelopamento-automotivo/'
  }
];

export const getPost = (slug) => blogPosts.find((post) => post.slug === slug);
