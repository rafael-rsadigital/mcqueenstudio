# Direção de implementação — Mcqueen Studio

## Produto
Site institucional estático em Astro, com CSS próprio e JavaScript leve, criado para apresentar serviços de estética e personalização automotiva em São José dos Campos e converter visitantes em conversas qualificadas pelo WhatsApp.

## Direção visual confirmada
- **Movimento:** fotografia automotiva cinematográfica, editorial e noturna.
- **Princípios:** contraste controlado, respiro, precisão técnica e ritmo de oficina especializada sem aparência de template.
- **Paleta:** preto e grafite como base; branco e cinza para leitura; vermelho Mcqueen como assinatura e sinal de ação.
- **Layout:** blocos assimétricos, linhas de detalhe, seções que alternam imagem e texto e uma navegação com ritmo vertical.
- **Assinaturas:** filete vermelho, etiquetas numeradas e espaços de mídia real com proporção definida.
- **Interações:** filtros e comparador respondem imediatamente, sem bloquear o conteúdo; foco e toque são tratados como primeira classe.
- **Animação:** entrada curta, hover discreto e respeito a `prefers-reduced-motion`.
- **Tipografia:** Manrope para texto e Space Grotesk para títulos, com caixa alta apenas em labels curtos.
- **Essência:** cuidado automotivo autoral para quem valoriza acabamento, personalização e clareza.
- **Voz:** direta, segura e técnica, sem promessas não confirmadas. Ex.: “Seu carro, com uma nova perspectiva.” / “Converse com a equipe e descreva o próximo detalhe.”
- **Marca:** wordmark em caixa baixa com corte visual no “q”, acompanhado por uma linha de vermelho pontual.
- **Cor proprietária:** `#ef233c`, usada com parcimônia para indicar movimento e contato.

## Estrutura
`src/data/site.js` concentra dados editáveis; `src/layouts` define SEO e moldura; `src/components` contém header, rodapé, slots de mídia, cards e interações; `src/pages` mantém rotas estáticas e uma rota de serviço gerada a partir dos dados; `public/media` é a árvore de arquivos JPG/MP4 aguardados do cliente.

## Materiais
As mídias reais não foram inseridas ainda. O site não simula trabalhos da empresa com banco de imagens. Cada slot informa o caminho e o nome esperado no próprio layout para reduzir erro na próxima carga de arquivos.
