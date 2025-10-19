
window.addEventListener('DOMContentLoaded', loadData);

const db = {
    "times": [
        {
            "id": 1,
            "nome": "Clube Atlético Mineiro",
            "escudo_url": "https://jpimg.com.br/uploads/2023/04/conheca-a-historia-do-atletico-mineiro-no-brasileirao.jpg",
            "descricao": "Um dos clubes mais tradicionais do Brasil, campeão da Libertadores e bicampeão Brasileiro.",
            "em_destaque": true,
            "ano_fundacao": 1908,
            "estadio": "Arena MRV",
            "mascote": "Galo Doido",
            "principais_titulos": "1x Libertadores, 2x Brasileirão, 2x Copa do Brasil",
            "cor_primaria": "#000000", 
            "cor_secundaria": "#FFFFFF", // Branco
            "classe_css": "atletico-mg", 
            "historia": "O Clube Atlético Mineiro, fundado em 1908, é uma potência do futebol mineiro e brasileiro. Conhecido por sua torcida apaixonada, a 'Massa Atleticana', o Galo viveu momentos de glória, culminando na conquista da Copa Libertadores em 2013, liderado por Ronaldinho Gaúcho. Sua nova casa, a Arena MRV, reforça a modernidade e a ambição do clube.",
            "fotos_vinculadas": [
                {
                    "img_url": "https://jpimg.com.br/uploads/2023/04/conheca-a-historia-do-atletico-mineiro-no-brasileirao.jpg",
                    "titulo": "Escudo Oficial"
                },
                {
                    "img_url": "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/08/53138040273_4ee0c48b1b_o.jpg?w=1200&h=900&crop=1",
                    "titulo": "Arena MRV"
                },
                {
                    "img_url": "https://i.ytimg.com/vi/k7szExweSGg/sddefault.jpg",
                    "titulo": "Time Campeão Libertadores 2013"
                },
                {
                    "img_url": "https://s2-ge.glbimg.com/RdPQnpGhxCtx2zCS5VdaoAelj60=/0x0:1500x944/924x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2013/07/25/rever_taca_libertadores_ribolli.jpg",
                    "titulo": "Comemoração do Título"
                }
            ]
        },
        {
            "id": 2,
            "nome": "Clube de Regatas do Flamengo",
            "escudo_url": "https://cartolafcmix.com/wp-content/uploads/2021/04/Escudo-Flamengo-scaled.jpg",
            "descricao": "O clube de maior torcida do Brasil, com uma história rica em títulos nacionais e internacionais.",
            "em_destaque": true,
            "ano_fundacao": 1895,
            "estadio": "Maracanã (Administração)",
            "mascote": "Urubu",
            "principais_titulos": "2x Libertadores, 1x Mundial, 8x Brasileirão",
            "cor_primaria": "#CB2B2F", // Vermelho
            "cor_secundaria": "#FFFFFF", // Branco
            "classe_css": "flamengo", // Classe para estilos específicos
            "historia": "Fundado em 1895 para disputas de remo, o Flamengo só entrou no futebol em 1912. Rapidamente se tornou uma força nacional, vivendo seu auge na 'Era Zico' nos anos 80, quando conquistou o mundo. Recentemente, retomou o protagonismo com títulos da Libertadores e do Brasileirão, arrastando multidões em todo o país.",
            "fotos_vinculadas": [
                {
                    "img_url": "https://cartolafcmix.com/wp-content/uploads/2021/04/Escudo-Flamengo-scaled.jpg",
                    "titulo": "Escudo Oficial"
                },
                {
                    "img_url": "https://maracana-web-prod-bkt.s3.amazonaws.com/images/posts/9-nota-oficial-complexo-maracana.png",
                    "titulo": "Estádio Maracanã"
                },
                {
                    "img_url": "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2017/07/06/595e9945d46cc.jpeg",
                    "titulo": "Zico, o Maior Ídolo"
                },
                {
                    "img_url": "https://eusouflamengo.com.br/wp-content/uploads/2024/06/Foto-Flamengo-Campeao-Copa-Libertadores-da-America-2019-00.jpg",
                    "titulo": "Time Campeão Libertadores 2019"
                }
            ]
        },
        {
            "id": 3,
            "nome": "Sport Club Corinthians Paulista",
            "escudo_url": "https://www.enfoquems.com.br/wp-content/uploads/2020/09/corinthians_p000Pmj_widexl.jpeg",
            "descricao": "Conhecido como o 'Time do Povo', possui uma das torcidas mais fiéis e engajadas do país.",
            "em_destaque": false,
            "ano_fundacao": 1910,
            "estadio": "Neo Química Arena",
            "mascote": "Mosqueteiro",
            "principais_titulos": "1x Libertadores, 2x Mundial, 7x Brasileirão",
            "cor_primaria": "#222222", 
            "cor_secundaria": "#FFFFFF", 
            "classe_css": "corinthians", 
            "historia": "O Corinthians foi fundado em 1910 por operários do bairro Bom Retiro. Sua história é marcada por lutas, superação e uma forte identidade popular, refletindo a garra de sua torcida. O clube alcançou o topo do mundo ao vencer o Mundial de Clubes da FIFA em 2000 e 2012, consolidando sua posição entre os gigantes.",
            "fotos_vinculadas": [
                {
                    "img_url": "https://www.enfoquems.com.br/wp-content/uploads/2020/09/corinthians_p000Pmj_widexl.jpeg",
                    "titulo": "Escudo Oficial"
                },
                {
                    "img_url": "https://identidadecorinthiana.com/wp-content/uploads/2021/05/idcsccp-identidade-corinthiana-corinthians-neo-quimica-arena-.jpeg",
                    "titulo": "Neo Química Arena"
                },
                {
                    "img_url": "https://cdn.meutimao.com.br/_upload/jogador/socrates-brasileiro-sampaio-de-s-v-de-oliveira_0_corinthians.jpg",
                    "titulo": "Ídolo Sócrates (Democracia Corinthiana)"
                },
                {
                    "img_url": "https://a.espncdn.com/photo/2020/1117/r777229_1296x729_16-9.jpg",
                    "titulo": "Campeão Mundial 2012"
                }
            ]
        },
        {
            "id": 4,
            "nome": "Sociedade Esportiva Palmeiras",
            "escudo_url": "https://jpimg.com.br/uploads/2023/04/conheca-a-historia-do-palmeiras-no-campeonato-brasileiro.jpg",
            "descricao": "Um dos clubes mais vitoriosos do futebol brasileiro, conhecido por suas conquistas recentes na Libertadores.",
            "em_destaque": true,
            "ano_fundacao": 1914,
            "estadio": "Allianz Parque",
            "mascote": "Periquito / Porco",
            "principais_titulos": "3x Libertadores, 12x Brasileirão, 4x Copa do Brasil",
            "cor_primaria": "#00643C", 
            "cor_secundaria": "#FFFFFF", 
            "classe_css": "palmeiras", 
            "historia": "A Sociedade Esportiva Palmeiras, fundada em 1914 como Palestra Italia, possui uma das trajetórias mais gloriosas do futebol nacional. Com uma torcida fervorosa e um estádio moderno, o Allianz Parque, o clube tem dominado o cenário recente, conquistando múltiplos títulos da Libertadores e do Campeonato Brasileiro, firmando-se como uma força imbatível.",
            "fotos_vinculadas": [
                {
                    "img_url": "https://jpimg.com.br/uploads/2023/04/conheca-a-historia-do-palmeiras-no-campeonato-brasileiro.jpg",
                    "titulo": "Escudo Oficial"
                },
                {
                    "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f8/9b/e9/fachada-principal-do.jpg?w=1200&h=-1&s=1",
                    "titulo": "Allianz Parque"
                },
                {
                    "img_url": "https://culturaefutebol.wordpress.com/wp-content/uploads/2021/01/palmeiras.jpg",
                    "titulo": "Time Campeão da Libertadores"
                },
                {
                    "img_url": "https://www.moneyreport.com.br/wp-content/uploads/2023/12/torcida-palmeiras-mundial-gq-scaled.webp",
                    "titulo": "Torcida Palmeirense"
                }
            ]
        },
        {
            "id": 5,
            "nome": "São Paulo Futebol Clube",
            "escudo_url": "https://lncimg.lance.com.br/uploads/2024/09/sao-paulo-escudo_7510_1280x960-aspect-ratio-512-320.jpg",
            "descricao": "O único clube brasileiro tricampeão mundial, conhecido por sua organização e grandes feitos.",
            "em_destaque": true,
            "ano_fundacao": 1930,
            "estadio": "Morumbi",
            "mascote": "Santo Paulo",
            "principais_titulos": "3x Mundial, 3x Libertadores, 6x Brasileirão",
            "cor_primaria": "#FF0000", // Vermelho (ou #E83F3B)
            "cor_secundaria": "#FFFFFF", 
            "classe_css": "sao-paulo", 
            "historia": "O São Paulo Futebol Clube, fundado em 1930, é sinônimo de excelência e conquistas notáveis no futebol mundial. É o único clube brasileiro tricampeão mundial interclubes, um feito que o coloca em um patamar de elite. Seu icônico estádio, o Morumbi, é palco de grandes batalhas e celebrações históricas da torcida tricolor, que vibra a cada gol e vitória.",
            "fotos_vinculadas": [
                {
                    "img_url": "https://lncimg.lance.com.br/uploads/2024/09/sao-paulo-escudo_7510_1280x960-aspect-ratio-512-320.jpg",
                    "titulo": "Escudo Oficial"
                },
                {
                    "img_url": "https://esportes.r7.com/resizer/F5dAkYCDuzsSZNypzRVWpQ6cDXo=/arc-photo-newr7/arc2-prod/public/F3T2HOCWF5LY7BWJVJ562B32TQ.jpg",
                    "titulo": "Estádio do Morumbi"
                },
                {
                    "img_url": "https://i.imgur.com/o2Z9Z6O.jpeg",
                    "titulo": "Rogério Ceni, o Mítico Goleiro"
                },
                {
                    "img_url": "https://i.imgur.com/D9tXF6c.jpeg",
                    "titulo": "Comemoração do Mundial"
                }
            ]
        }
    ]
};

function loadData() {
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/') {
        renderHomePage();
    } else if (path.includes('detalhes.html')) {
        renderDetalhesPage();
    }
}


function renderHomePage() {
    const times = db.times;
    
    // Seção 1: Carrossel de Destaques
    const carouselInner = document.getElementById('carousel-inner');
    const carouselIndicators = document.getElementById('carousel-indicators');
    
    const destaques = times.filter(time => time.em_destaque);
    
    destaques.forEach((time, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
       
        const carouselImage = time.fotos_vinculadas.length > 1 ? time.fotos_vinculadas[1].img_url : time.escudo_url;

        carouselItem.innerHTML = `
            <img src="${carouselImage}" class="d-block w-100 carousel-img" alt="${time.nome}">
            <div class="carousel-caption d-none d-md-block text-center p-3 rounded-3 carousel-caption-${time.classe_css}">
                <h5 class="fw-bold">${time.nome}</h5>
                <p>${time.descricao}</p>
                <a href="detalhes.html?id=${time.id}" class="btn btn-${time.classe_css}">Ver Detalhes</a>
            </div>
        `;
        carouselInner.appendChild(carouselItem);
        
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.dataset.bsTarget = '#carouselDestaques';
        indicator.dataset.bsSlideTo = index;
        if (index === 0) {
            indicator.className = 'active';
            indicator.ariaCurrent = 'true';
        }
        indicator.ariaLabel = `Slide ${index + 1}`;
        carouselIndicators.appendChild(indicator);
    });
    
    
    const cardsContainer = document.getElementById('cards-container');
    
    times.forEach(time => {
        const col = document.createElement('div');
        col.className = 'col';
        
        col.innerHTML = `
            <div class="card h-100 shadow-sm border-${time.classe_css}">
                <img src="${time.escudo_url}" class="card-img-top card-escudo ${time.classe_css}-bg-light" alt="${time.nome}">
                <div class="card-body">
                    <h5 class="card-title text-${time.classe_css}-primary fw-bold">${time.nome}</h5>
                    <p class="card-text">${time.descricao}</p>
                </div>
                <div class="card-footer">
                    <a href="detalhes.html?id=${time.id}" class="btn btn-outline-${time.classe_css} w-100">Ver Detalhes</a>
                </div>
            </div>
        `;
        cardsContainer.appendChild(col);
    });
}


function renderDetalhesPage() {
    const params = new URLSearchParams(window.location.search);
    const timeId = parseInt(params.get('id'));
    
    if (!timeId) {
        document.getElementById('detalhes-container').innerHTML = 
            "<p class='text-danger'>ID do time não fornecido. Volte para a página inicial.</p>";
        return;
    }
    
    const time = db.times.find(t => t.id === timeId);
    
    if (!time) {
        document.getElementById('detalhes-container').innerHTML = 
            "<p class='text-danger'>Time não encontrado.</p>";
        return;
    }
    
    
    document.body.style.backgroundColor = time.cor_primaria;
    document.body.style.color = time.cor_secundaria; 

    
    document.getElementById('time-nome').textContent = time.nome;
    document.getElementById('time-nome').classList.add(`text-${time.classe_css}-secondary`); 
    document.getElementById('time-imagem-principal').src = time.escudo_url;
    document.getElementById('time-imagem-principal').alt = time.nome;
    document.getElementById('time-imagem-principal').classList.add(`border-${time.classe_css}`); 

    document.getElementById('time-historia').textContent = time.historia;
    document.getElementById('detalhe-fundacao').textContent = time.ano_fundacao;
    document.getElementById('detalhe-estadio').textContent = time.estadio;
    document.getElementById('detalhe-mascote').textContent = time.mascote;
    document.getElementById('detalhe-titulos').textContent = time.principais_titulos;

  
    document.querySelectorAll('.detalhes-header').forEach(header => {
        header.classList.add(`text-${time.classe_css}-secondary`);
    });
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.style.backgroundColor = time.cor_secundaria;
        item.style.color = time.cor_primaria;
        item.style.borderColor = time.cor_primaria; 
    });
    document.querySelectorAll('.list-group-item strong').forEach(item => {
        item.style.color = time.cor_primaria; 
    });


   
    const fotosContainer = document.getElementById('fotos-container');
    
    time.fotos_vinculadas.forEach(foto => {
        const col = document.createElement('div');
        col.className = 'col';
        
        col.innerHTML = `
            <div class="card h-100 text-center shadow-sm border-${time.classe_css}">
                <img src="${foto.img_url}" class="card-img-top foto-vinculada" alt="${foto.titulo}">
                <div class="card-body bg-${time.classe_css}-light">
                    <h6 class="card-title text-${time.classe_css}-primary fw-bold">${foto.titulo}</h6>
                </div>
            </div>
        `;
        fotosContainer.appendChild(col);
    });
}
