// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

let userMenuState = {}; // Objeto para guardar o estado do menu de cada usuário

client.on('message', async msg => {
    const chat = await msg.getChat();
    const userId = msg.from;

    // Verificar se o usuário digitou "0" a qualquer momento para resetar o menu
    if (msg.body.toLowerCase() === '0') {
        userMenuState[userId] = 'main'; // Reseta o estado para o menu principal
        await client.sendMessage(msg.from, 'Voltando ao menu principal...');
        await delay(1000);
        await client.sendMessage(msg.from, 'Por favor, digite uma das opções abaixo:\n\n*[ 1 ]* - 🏠 Consulta em domicílio: Como funciona?\n*[ 2 ]* - 🦷 Profilaxia Periodontal: O que é?\n*[ 3 ]* - 🐕 Vacinação de cães\n*[ 4 ]* - 🐈 Vacinação de gatos\n*[ 5 ]* - 💰 Valores');
        return; // Retorna para evitar que o restante do código seja executado
    }
    // Verificar se o usuário digitou "bot" a qualquer momento para resetar o menu
    if (msg.body.toLowerCase() === 'bot') {
        userMenuState[userId] = 'main'; // Reseta o estado para o menu principal
        await client.sendMessage(msg.from, 'Voltando ao menu principal...');
        await delay(1000);
        await client.sendMessage(msg.from, 'Por favor, digite uma das opções abaixo:\n\n*[ 1 ]* - 🏠 Consulta em domicílio: Como funciona?\n*[ 2 ]* - 🦷 Profilaxia Periodontal: O que é?\n*[ 3 ]* - 🐕 Vacinação de cães\n*[ 4 ]* - 🐈 Vacinação de gatos\n*[ 5 ]* - 💰 Valores');
        return; // Retorna para evitar que o restante do código seja executado
    }
    // Verificar se o usuário digitou "assistente" a qualquer momento para resetar o menu
    if (msg.body.toLowerCase() === 'assistente') {
        userMenuState[userId] = 'main'; // Reseta o estado para o menu principal
        await client.sendMessage(msg.from, 'Voltando ao menu principal...');
        await delay(1000);
        await client.sendMessage(msg.from, 'Por favor, digite uma das opções abaixo:\n\n*[ 1 ]* - 🏠 Consulta em domicílio: Como funciona?\n*[ 2 ]* - 🦷 Profilaxia Periodontal: O que é?\n*[ 3 ]* - 🐕 Vacinação de cães\n*[ 4 ]* - 🐈 Vacinação de gatos\n*[ 5 ]* - 💰 Valores');
        return; // Retorna para evitar que o restante do código seja executado
    }
    // Verificar se o usuário digitou "assistente virtual" a qualquer momento para resetar o menu
    if (msg.body.toLowerCase() === 'assistente virtual') {
        userMenuState[userId] = 'main'; // Reseta o estado para o menu principal
        await client.sendMessage(msg.from, 'Voltando ao menu principal...');
        await delay(1000);
        await client.sendMessage(msg.from, 'Por favor, digite uma das opções abaixo:\n\n*[ 1 ]* - 🏠 Consulta em domicílio: Como funciona?\n*[ 2 ]* - 🦷 Profilaxia Periodontal: O que é?\n*[ 3 ]* - 🐕 Vacinação de cães\n*[ 4 ]* - 🐈 Vacinação de gatos\n*[ 5 ]* - 💰 Valores');
        return; // Retorna para evitar que o restante do código seja executado
    }
    // Verificar se o usuário digitou "encerrar" a qualquer momento para encerrar o bot
    if (msg.body.toLowerCase() === 'encerrar') {
        await delay(1200); // Delay to simulate a pause before finalizing
        userMenuState[userId] = 'finalr';
        await delay(1000);
        await client.sendMessage(msg.from, 'Assistente virtual encerrado.');
        setTimeout(async () => {
            userMenuState[userId] = 'main'                    
        }, 86400000); // 24h delay before re-activating the menu options
    }
    // Verificar se o usuário digitou "Encerrar" a qualquer momento para encerrar o bot
    if (msg.body.toLowerCase() === 'Encerrar') {
        await delay(1200); // Delay to simulate a pause before finalizing
        userMenuState[userId] = 'finalr';
        await delay(1000);
        await client.sendMessage(msg.from, 'Assistente virtual encerrado.');
        setTimeout(async () => {
            userMenuState[userId] = 'main'                    
        }, 86400000); // 24h delay before re-activating the menu options
    }
    // Verificar se o usuário digitou "ENCERRAR" a qualquer momento para encerrar o bot
    if (msg.body.toLowerCase() === 'ENCERRAR') {
        await delay(1200); // Delay to simulate a pause before finalizing
        userMenuState[userId] = 'finalr';
        await delay(1000);
        await client.sendMessage(msg.from, 'Assistente virtual encerrado.');
        setTimeout(async () => {
            userMenuState[userId] = 'main'                    
        }, 86400000); // 24h delay before re-activating the menu options
    }
    // Verificar se o usuário digitou "encerrar" a qualquer momento para encerrar o bot
    if (msg.body.toLowerCase() === '"encerrar"') {
        await delay(1200); // Delay to simulate a pause before finalizing
        userMenuState[userId] = 'finalr';
        await delay(1000);
        await client.sendMessage(msg.from, 'Assistente virtual encerrado.');
        setTimeout(async () => {
            userMenuState[userId] = 'main'                    
        }, 86400000); // 24h delay before re-activating the menu options
    }

    if (!userMenuState[userId]) {
        userMenuState[userId] = 'main'; // Estado inicial do menu
    }

    // Menu principal
    if (userMenuState[userId] === 'main') {
        if (msg.body.match(/(menu|Menu|dia|tarde|noite|oii|Vacina|vacina|consulta|veterinario|robo|assistente|virtual|ia|ai|gpt|oie|Oie|oiiii|oi|ooi|hey|Hey|olá|ola|opa|salve|calabreso|beleza|ok|Oii|oi|Oi|Olá|olá|ola|Ola|opções|opção|opcao|Boa|Bom|boa|bom|boa tarde|Boa tarde|Boa Tarde|bom dia|Bom dia|Bom Dia|Boa noite|oii|oie|Oie|oiiii|oi|ooi|hey|Hey|olá|ola|opa|salve|calabreso|beleza|ok|Oii|Boa Noite|boa noite|oii|oie|Oie|oiiii|oi|ooi|hey|Hey|olá|ola|opa|salve|calabreso|beleza|ok|Oii)/i) && msg.from.endsWith('@c.us')) {
            await delay(1200); // delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1200); // Delay de 3 segundos
            const contact = await msg.getContact(); // Pegando o contato
            const name = contact.pushname; // Pegando o nome do contato
            await client.sendMessage(msg.from, '🏡Olá, ' + name.split(" ")[0] + '!\nSou o assistente virtual da *My Home Vet*. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n*[ 1 ]* - 🏠 Consulta em domicílio: Como funciona?\n*[ 2 ]* - 🦷 Profilaxia Periodontal: O que é?\n*[ 3 ]* - 🐕 Vacinação de cães\n*[ 4 ]* - 🐈 Vacinação de gatos\n*[ 5 ]* - 💰 Valores\n\n\n*[ 0 ]* - 🔙 Voltar ao menu principal\n\nDigite "*encerrar*" à qualquer momento para finalizar o assistente virtual.');
            return; // Retorna para evitar que o restante do código seja executado
        }

        // Verificar se o input é uma opção válida (1 a 5)
        if (['1', '2', '3', '4', '5'].includes(msg.body)) {
            // Processar as opções do menu principal
            if (msg.body === '1') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '🏠 *Consultas Veterinárias no Conforto do Seu Lar!* 🐾\n\n🔹 *O que é a Consulta Veterinária Domiciliar?* \nA consulta veterinária domiciliar é uma forma prática e confortável de garantir o bem-estar do seu pet sem sair de casa. Ofereço um atendimento completo, diagnosticando e tratando diversas condições de saúde, além de fornecer orientações preventivas para manter seu animal saudável e feliz. \n\n🔹 *Benefícios da Consulta em Casa:* \n • *Conforto e Tranquilidade:* Seu pet permanece em um ambiente familiar, evitando o estresse de deslocamentos e clínicas veterinárias. \n• *Atendimento Personalizado:* Cada consulta é adaptada às necessidades específicas do seu pet, com um cuidado atento e detalhado. \n• *Menor Exposição a Doenças:* Ao evitar o contato com outros animais em ambientes clínicos, seu pet tem menos risco de contrair doenças contagiosas. \n• *Atenção Exclusiva:* Foco total nas necessidades do seu pet, sem interrupções comuns em ambientes de clínica.');
                await delay(1000);
                await chat.sendStateTyping();
                await delay(1000);
                await client.sendMessage(msg.from, '🔹 *O Atendimento:*\n Durante a consulta, realizo uma anamnese completa e um exame clínico detalhado para identificar possíveis problemas de saúde e fornecer orientações sobre cuidados preventivos. Planejo cada consulta para durar até 2 horas, assegurando atenção total às necessidades do seu pet e um atendimento sem pressa. Durante a consulta, está incluída a aferição da pressão arterial e da glicemia do seu pet, o que permite uma avaliação mais precisa da saúde do seu animal. Se necessário, também realizo a coleta de sangue em casa para exames laboratoriais, facilitando o diagnóstico e o monitoramento de condições de saúde sem a necessidade de deslocamento para uma clínica. \n• *Vacinação e Vermifugação:* Caso seu pet esteja clinicamente bem, podemos atualizar as vacinas e realizar o controle de parasitas para protegê-lo contra doenças sérias e potencialmente graves. Esses procedimentos são feitos conforme necessário para assegurar a saúde contínua do seu pet. Se tiver interesse ou dúvidas sobre vacinas, vermífugos ou coleiras repelentes, por favor, informe-me com antecedência para que eu possa preparar o material necessário. \n\n🔹 *Suporte e Monitoramento Continuado:* \n• Após a consulta, realizo o acompanhamento remoto da evolução do tratamento para garantir o bem-estar contínuo do seu pet. \n• Caso o pet precise de suporte adicional presencial para a mesma queixa dentro de um prazo de 30 dias, será considerado um retorno, e somente a taxa de deslocamento será cobrada.');
                await delay(1000);
                await chat.sendStateTyping();
                await delay(1000);
                await client.sendMessage(msg.from, 'Gostaria de agendar uma Consulta em domicílio?\n\n*[ 1 ]* - ✅ Sim, por favor.\n*[ 2 ]* - ❌ No momento não, obrigado.\n\n*[ 0 ]* - 🔙 Voltar ao menu principal');
                userMenuState[userId] = 'submenu1'; // Mudar para o submenu da opção 1
                return; // Retorna para impedir a execução de qualquer código adicional
            }
            else if (msg.body === '2') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '🦷 *Cuidados Dentários para Seu Pet, no Conforto de Casa!* 🐶\n\n🔹 *O que é a Profilaxia Periodontal?*\nA profilaxia periodontal é a limpeza dental completa, removendo o tártaro e a placa bacteriana que se acumulam nos dentes e gengivas dos cães. Este procedimento é fundamental para prevenir doenças periodontais, que podem causar diversos problemas de saúde para o seu pet.\n\n🔹 *Benefícios do Tratamento:*\n• Conforto e Segurança: Realizo o procedimento no conforto da sua casa, reduzindo o estresse do seu pet ao evitar deslocamentos e ambientes desconhecidos.\n• Sem Anestesias ou Sedativos: A profilaxia periodontal é feita sem a necessidade de anestesia, eliminando os riscos associados aos sedativos e garantindo uma recuperação imediata.\n• Prevenção de Doenças: Manter a higiene bucal em dia previne doenças periodontais, mau hálito, inflamação nas gengivas, perda de dentes e infecções que podem afetar outros órgãos vitais.\n\n🔹 *Vantagens de Não Utilizar Anestesias:*\n• Menor Risco: Sem os riscos associados à anestesia, especialmente importante para pets idosos ou com condições de saúde pré-existentes.\n• Recuperação Rápida: Seu pet estará ativo e normal imediatamente após o procedimento, sem a necessidade de um período de recuperação.\n• Menos Estresse: Evita o estresse causado pela recuperação da anestesia e por idas ao consultório, proporcionando um ambiente mais tranquilo para o seu pet.');
                await delay(1000);
                await chat.sendStateTyping();
                await delay(1000);
                await client.sendMessage(msg.from, '🔹 *Informações Importantes:*\n• Periodicidade: Recomenda-se a limpeza dental regular, a cada 6 meses a 1 ano, dependendo das condições específicas do seu pet.\n• Cuidados Diários: Escovação regular e uma dieta apropriada também são essenciais para manter a saúde bucal do seu cão.\n• Avaliação Prévia: _Nem todos os pets são aptos para realizar a profilaxia periodontal sem sedação. A aceitação e comportamento do animal são fundamentais._ Uma avaliação presencial durante a consulta é necessária para determinar a saúde periodontal e o comportamento do seu pet antes de iniciar o tratamento.');
                await delay(1000);
                await chat.sendStateTyping();
                await delay(1000);
                await client.sendMessage(msg.from, 'Gostaria de agendar uma Consulta em domicílio?\n\n*[ 1 ]* - ✅ Sim, por favor.\n*[ 2 ]* - ❌ No momento não, obrigado.\n\n*[ 0 ]* - 🔙 Voltar ao menu principal');
                userMenuState[userId] = 'submenu2'; // Mudar para o submenu da opção 2
                return;
            }
            else if (msg.body === '3') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '🐕 *Vacinação de Cães* \n\nA vacinação é uma medida preventiva fundamental para garantir a saúde e o bem-estar dos cães. As vacinas ajudam a proteger os animais contra várias doenças graves, muitas das quais podem ser fatais ou causar complicações de longo prazo. Além disso, a vacinação contribui para a saúde pública ao reduzir a disseminação de doenças zoonóticas, que são aquelas que podem ser transmitidas entre animais e humanos. Ao vacinar seu animal de estimação, você não apenas protege a vida dele, mas também ajuda a criar uma comunidade mais segura e saudável para todos.');
                await delay(1000);
                await chat.sendStateTyping();
                await delay(1000);
                await client.sendMessage(msg.from, 'Tem alguma dúvida em relação à vacinação ou gostaria de agendar a aplicação de vacina?\n\n*[ 1 ]* - 🐕💉 Quais vacinas estão disponíveis para cães?\n*[ 2 ]* - 🦠 Detalhes sobre as principais doenças prevenidas pelas vacinas obrigatórias e recomendadas.\n*[ 3 ]* - 📅 Quero agendar um horário para vacinar meu cão.\n*[ 4 ]* - 💰 Valores\n\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu3'; // Mudar para o submenu da opção 3
                return;
            }
            else if (msg.body === '4') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '🐈 *Vacinação de Gatos* \n\nA vacinação é uma medida preventiva fundamental para garantir a saúde e o bem-estar dos gatos. As vacinas ajudam a proteger os animais contra várias doenças graves, muitas das quais podem ser fatais ou causar complicações de longo prazo. Além disso, a vacinação contribui para a saúde pública ao reduzir a disseminação de doenças zoonóticas, que são aquelas que podem ser transmitidas entre animais e humanos. Ao vacinar seu animal de estimação, você não apenas protege a vida dele, mas também ajuda a criar uma comunidade mais segura e saudável para todos.');
                await delay(1000);
                await chat.sendStateTyping();
                await delay(1000);
                await client.sendMessage(msg.from, 'Tem alguma dúvida em relação à vacinação ou gostaria de agendar a aplicação de vacina?\n\n*[ 1 ]* - 🐈💉 Quais vacinas disponíveis para gatos?\n*[ 2 ]* - 🦠 Detalhes sobre as principais doenças prevenidas pelas vacinas obrigatórias e recomendadas.\n*[ 3 ]* - 📅 Quero agendar um horário para vacinar meu gato.\n*[ 4 ]* - 💰 Valores\n\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu4'; // Mudar para o submenu da opção 4
                return;
            }
            else if (msg.body === '5') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '🔹 *Valores:*\n\n• *De Segunda a Sexta-Feira:* R$ 150,00 + taxa de deslocamento.\n• *Sábados, Domingos e Feriados:* R$ 180,00 + taxa de deslocamento.\n• *Pagamento:* Dinheiro, PIX ou Cartão (_com taxa da máquina_)');
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Gostaria de agendar um atendimento?\n\n*[ 1 ]* - ✅ Sim, por favor.\n*[ 2 ]* - ❌ No momento não, obrigado.\n\n*[ 0 ]* - 🔙 Voltar ao menu principal');
                userMenuState[userId] = 'submenu5'; // Mudar para o submenu da opção 5
                return;
            }
                               
        } else {
            // Input inválido - enviar mensagem de erro
            await client.sendMessage(msg.from, '❌ *Opção inválida.* \nPor favor, digite uma das opções válidas: \n *[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]* - *[ 0 ]* 🔙 Voltar ao menu principal.\nSe tiver dúvidas, escreva sua pergunta e entraremos em contato o mais breve possível.\n⚠️ _Em caso de emergência, recomendamos procurar imediatamente o hospital veterinário 24 horas mais próximo._');
            return;
        }
    }
     // Submenu da opção 1
     if (userMenuState[userId] === 'submenu1') {
        if (['1', '2'].includes(msg.body)) {
            if (msg.body === '1') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Para agendar uma consulta em domicílio, por favor, informe sua disponibilidade e o CEP da residência, em breve entraremos em contato para definir um horário. 😉');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'final'; // Voltar ao menu principal
            } else if (msg.body === '2') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Ok, qualquer dúvida pode digitar que em breve iremos lhe responder. 😉');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'final'; // Voltar ao menu principal
            }
            return;                            
        }else {
            await client.sendMessage(msg.from, '❌ *Opção inválida.*\nPor favor, digite *[ 1 ]* para "Sim", *[ 2 ]* para "Não", ou *[ 0 ]* para voltar ao menu principal.🔙');
            return;
        }
    }
    

    // Submenu da opção 2
    if (userMenuState[userId] === 'submenu2') {
        if (['1', '2'].includes(msg.body)) {
            if (msg.body === '1') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Para agendar uma consulta em domicílio, por favor, informe sua disponibilidade e o CEP da residência, em breve entraremos em contato para definir um horário. 😉');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'final'; // Voltar ao menu principal
            } 
            else if (msg.body === '2') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Ok, qualquer dúvida pode digitar e em breve iremos lhe responder. 😉');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'final'; // Voltar ao menu principal
            }
            return;
        } else if (msg.body === '0') {
            userMenuState[userId] = 'main';
            await client.sendMessage(msg.from, 'Voltando ao menu principal...');
            await delay(1000);
            await client.sendMessage(msg.from, 'Por favor, digite uma das opções abaixo:\n\n*[ 1 ]*🏠 Consulta em domicílio: Como funciona?\n*[ 2 ]* - 🦷 Profilaxia Periodontal: O que é?\n*[ 3 ]* - 🐕 Vacinação de cães\n*[ 4 ]* - 🐈 Vacinação de gatos\n*[ 5 ]* - 💰 Valores');
            return;     
        } else {
            await client.sendMessage(msg.from, '❌ *Opção inválida.*\nPor favor, digite *[ 1 ]* para "Sim", *[ 2 ]* para "Não", ou *[ 0 ]* para voltar ao menu principal.🔙');
            return;
        }
    }

    // Submenu da opção 3
    if (userMenuState[userId] === 'submenu3') {
        if (['1', '2', '3', '4', '9',].includes(msg.body)) {
            if (msg.body === '1') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '🔹 *Vacinas Essenciais (Obrigatórias)*\n\n• *V10 (Polivalente)* - Protege contra: Cinomose, Parvovirose, Hepatite Infecciosa, Adenovirose Respiratória, Parainfluenza Canina, Coronavirose, Leptospirose(4 cepas).\n\n• *Raiva (Antirrábica)* - Vacina obrigatória por lei, a antirrábica protege seu cão contra o vírus da raiva, uma doença fatal que pode ser transmitida aos humanos.\n\n🔹 *Vacinas Não Essenciais (Recomendadas)*\n\n• *Gripe Canina* - Protege contra a "Tosse dos Canis" uma doença altamente contagiosa entre cães. Recomendável especialmente para cães que frequentam pet shops, parques ou tem contato com cães de terceiros. Além disso, muitos hotéis e creches para cães exigem a vacinação contra gripe canina.\n\n• *Giárdia* - Previne a infecção causada pelo protozoário Giardia e reduz a excreção dos cistos do protozoário. Além disso, muitos hotéis e creches para cães exigem a vacinação contra giárdia.');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 9 ]* 🔙 Voltar ao menu anterior.\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu3'; // Voltar ao menu principal
            } else if (msg.body === '2') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '*Doenças Protegidas por Vacinas em Cães*\n\n*Cinomose* é uma infecção viral extremamente contagiosa e muitas vezes letal que se espalha entre os cães através de secreções como tosse, espirros e outras excreções corporais. Os sintomas da cinomose podem incluir problemas respiratórios (como tosse e espirros), problemas oculares (secreção nos olhos) e sinais neurológicos (como convulsões, paralisias e espasmos).\n\n*Parvovirose* é uma doença viral grave transmitida através do contato com fezes infectadas. A doença causa vômito severo, diarreia com sangue, letargia e perda de apetite, podendo ser fatal especialmente em filhotes.\n\n*Hepatite Infecciosa Canina* é uma doença viral causada pelo adenovírus canino tipo 1 (CAV-1), transmitida através do contato com secreções de animais infectados. Os sinais clínicos incluem febre, dor abdominal, vômito e icterícia.\n\n*Adenovirose Respiratória* (Adenovírus Tipo 2) é outra doença viral que pode afetar os cães, transmitida através de secreções respiratórias. Os sintomas incluem tosse, febre e secreção nasal, e pode predispor os cães a outras infecções respiratórias.\n\n*Parainfluenza Canina* é causada pelo vírus da parainfluenza canina e é transmitida por aerossóis de tosse de animais infectados. Pode causar tosse, febre e secreção nasal.');
                await delay(1000);
                await client.sendMessage(msg.from, '*Coronavirose* é uma infecção viral que afeta o sistema gastrointestinal dos cães. Os sintomas incluem vômito, diarreia e desidratação, podendo ser particularmente perigosa para filhotes.\n\n*Leptospirose* é causada por bactérias do gênero Leptospira e é transmitida pelo contato com a urina de animais infectados, água ou solo contaminados. Os sinais clínicos incluem febre, icterícia, dor muscular, e podem levar a insuficiência renal e hepática.\n\n*Raiva* é uma doença viral fatal transmitida principalmente pela mordida de animais infectados. Os sinais clínicos incluem mudança de comportamento, paralisia, agressividade e salivação excessiva.\n\n*Tosse dos Canis* é um complexo respiratório que pode ser causado por vários agentes, incluindo o vírus da parainfluenza canina e a bactéria Bordetella bronchiseptica. Transmitida pelo contato próximo entre cães, a doença se manifesta principalmente como tosse persistente, mas também pode causar febre e secreção nasal.n\n*Giardíase* é uma infecção causada pelo protozoário Giardia, transmitida pelo contato com água, alimentos ou fezes contaminadas. Os sintomas incluem diarreia, perda de peso e desidratação.');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 9 ]* 🔙 Voltar ao menu anterior.\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu3'; // Voltar ao menu principal
            } else if (msg.body === '3') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Para agendar a vacinação em domicílio, por gentileza, informe sua disponibilidade, a quantidade de animais a serem vacinados e o CEP da residência. Em breve entraremos em contato para definir o horário. 😉');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'final'; // Voltar ao menu principal
            } else if (msg.body === '4') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '🔹 *Vacinas Disponíveis e Valores* 🔹\n\n*• V10 (Polivalente)* \n💰 R$85,00 + Taxa de deslocamento\n• *Raiva (Antirrábica)* \n💰 R$55,00 + Taxa de deslocamento\n• *Gripe Canina (Tosse dos Canis)* \n💰 R$85,00 + Taxa de deslocamento\n• *Giárdia*\n💰 R$85,00 + Taxa de deslocamento\n\n🛵 _A Taxa de deslocamento é única, independente da quantidade de animais ou vacinas a serem aplicadas._');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 9 ]* 🔙 Voltar ao menu anterior.\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu3'; // Voltar ao menu principal
            } else if (msg.body === '9') {
                // Voltar ao menu 3
                await delay(1000);
                await chat.sendStateTyping();
                await delay(1000);
                await client.sendMessage(msg.from, 'Tem alguma dúvida em relação à vacinação ou gostaria de agendar a aplicação de vacina?\n\n*[ 1 ]* - 🐕💉 Quais vacinas estão disponíveis para cães?\n*[ 2 ]* - 🦠 Detalhes sobre as principais doenças prevenidas pelas vacinas obrigatórias e recomendadas.\n*[ 3 ]* - 📅 Quero agendar um horário para vacinar meu cão.\n*[ 4 ]* - 💰 Valores\n\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu3'; // Mantenha no submenu 3
            }
             return;        
        } else {
            await client.sendMessage(msg.from, '❌ *Opção inválida.*\nPor favor, digite *[ 1 ]*, *[ 2 ]*, *[ 3 ]* ou *[ 4 ]* para uma opção válida.\n\n*[ 9 ]* 🔙 Voltar ao menu anterior*\n*[ 0 ]* para voltar ao menu principal.🔙');
            return;
        }
    }

    // Submenu da opção 4
    if (userMenuState[userId] === 'submenu4') {
        if (['1', '2', '3', '9'].includes(msg.body)) {
            if (msg.body === '1') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '🔹 *Vacinas Essenciais (Obrigatórias)*\n\n• *V4 (Polivalente felina)* - Protege contra: Panleucopenia Felina, Rinotraqueíte Viral Felia, Calicivirose Felina e Clamidiose Felina\n\n• *Raiva (Antirrábica)* - Vacina obrigatória por lei, a antirrábica protege seu gato contra o vírus da raiva, uma doença fatal que pode ser transmitida aos humanos. \n\n🔹 *Vacinas Não Essenciais (Recomendadas)* \n\n• *V5 (Polivalente felina + FeLV)* - Protege contra todas as doenças cobertas pela V4, além de incluir a proteção contra a Leucemia Felina (FeLV).');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 9 ]* 🔙 Voltar ao menu anterior.\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu4'; // Voltar ao menu principal
            } else if (msg.body === '2') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '*Doenças Protegidas por Vacinas em Gatos*\n\n*Panleucopenia Felina* é uma doença viral grave causada pelo parvovírus felino, transmitida através do contato com fezes, urina ou secreções nasais de animais infectados. Os sinais clínicos incluem febre, vômito, diarreia, desidratação e letargia.\n\n*Rinotraqueíte Viral Felina* é causada pelo herpesvírus felino tipo 1 e é transmitida pelo contato direto com secreções de animais infectados. Pode causar espirros, secreção ocular e nasal, e febre.\n\n*Calicivirose Felina* é causada pelo calicivírus felino e é transmitida pelo contato direto com secreções de animais infectados. Os sinais clínicos incluem úlceras orais, espirros, secreção nasal e febre.\n\n*Clamidiose Felina* é causada pela bactéria Chlamydophila felis e é transmitida pelo contato direto com secreções oculares de animais infectados. Os sinais clínicos incluem conjuntivite, secreção ocular e espirros.\n\n*Raiva* em gatos é similar à raiva em cães, sendo uma doença viral fatal transmitida pela mordida de animais infectados. Os sinais clínicos incluem mudança de comportamento, paralisia, agressividade e salivação excessiva.\n\n*Leucemia Felina (FeLV)* é causada pelo vírus da leucemia felina, transmitida através do contato com saliva, secreções nasais, urina, fezes e leite de animais infectados. Pode causar anemia, perda de peso, febre e problemas gastrointestinais. A doença suprime o sistema imunológico do gato, tornando-o mais suscetível a outras infecções e doenças. A vacinação é crucial para prevenir a infecção pelo FeLV, especialmente em gatos que têm acesso ao ar livre ou que convivem com outros gatos.');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 9 ]* 🔙 Voltar ao menu anterior.\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu4'; // Voltar ao menu principal
            } else if (msg.body === '3') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Para agendar a vacinação em domicílio, por gentileza, informe sua disponibilidade, a quantidade de animais a serem vacinados e o CEP da residência. Em breve entraremos em contato para definir o horário. 😉');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'final'; // Voltar ao menu principal
            } else if (msg.body === '4') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '🔹 *Vacinas Disponíveis e Valores* 🔹\n\n*• V4 (Polivalente)* \n💰 R$80,00 + Taxa de deslocamento\n*• V5 (Polivalente)* \n💰 R$125,00 + Taxa de deslocamento \n• Raiva (Antirrábica) \n💰 R$55,00 + Taxa de deslocamento\n\n🛵 _A Taxa de deslocamento é única, independente da quantidade de animais ou vacinas a serem aplicadas._');
                await delay(1200);
                await client.sendMessage(msg.from, '*[ 9 ]* 🔙 Voltar ao menu anterior.\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu4'; // Voltar ao menu principal
            } else if (msg.body === '9') {
                // Voltar ao menu 4
                await delay(1000);
                await chat.sendStateTyping();
                await delay(1000);
                await client.sendMessage(msg.from, 'Tem alguma dúvida em relação à vacinação ou gostaria de agendar a aplicação de vacina?\n\n*[ 1 ]* - 🐈💉 Quais vacinas disponíveis para gatos?\n*[ 2 ]* - 🦠 Detalhes sobre as principais doenças prevenidas pelas vacinas obrigatórias e recomendadas.\n*[ 3 ]* - 📅 Quero agendar um horário para vacinar meu gato.\n*[ 4 ]* - 💰 Valores\n\n*[ 0 ]* 🔙 Voltar ao menu principal.');
                userMenuState[userId] = 'submenu4'; // Mantenha no submenu 4
            }
            return;        
        } else {
            await client.sendMessage(msg.from, '❌ *Opção inválida.*\nPor favor, digite *[ 1 ]*, *[ 2 ]* ou *[ 3 ]* para uma opção válida. Ou *[ 0 ]* para voltar ao menu principal.🔙');
            return;
        }
    }

    // Submenu da opção 5
    if (userMenuState[userId] === 'submenu5') {
        if (['1', '2'].includes(msg.body)) {
            if (msg.body === '1') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Para agendar um atendimento, por gentileza, informe sua disponibilidade e o CEP da residência. Em breve entraremos em contato para definir um horário. 😉');
                userMenuState[userId] = 'final'; // Voltar ao menu principal
            } else if (msg.body === '2') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Ok, qualquer dúvida pode digitar e em breve iremos lhe responder. 😉');
                userMenuState[userId] = 'final'; // Voltar ao menu principal
            }
            return;       
        }else {
            // Input inválido no submenu - enviar mensagem de erro
            await client.sendMessage(msg.from, '❌ *Opção inválida.*\nPor favor, digite *[ 1 ]* para "Sim", *[ 2 ]* para "Não", ou *[ 0 ]* para voltar ao menu principal.🔙');
            return;
        }
    }
    // Final
    if (userMenuState[userId] === 'final') {
        if (['sfgsfg', '2dxfhghfbs'].includes(msg.body)) {
            if (msg.body === 'sfgsfg') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Para agendar um atendimento, por gentileza, informe sua disponibilidade e o CEP da residência. Em breve entraremos em contato para definir um horário. 😉');
                userMenuState[userId] = 'submenu5'; // Voltar ao menu principal
            } else if (msg.body === '2dxfhghfbs') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, 'Ok, qualquer dúvida pode digitar e em breve iremos lhe responder. 😉');
                userMenuState[userId] = 'submenu5'; // Voltar ao menu principal
            }
            return;
        }
    // Final de verdade
             if (userMenuState[userId] === 'finalr') {
            // Set a timeout to re-activate the menu options after 20 seconds
                setTimeout(async () => {
                    userMenuState[userId] = 'main'                    
                }, 86400000); // 24h seconds delay before re-activating the menu options
            }
        
        if (['sexo', 'anal'].includes(msg.body)) {
            if (msg.body === 'sexo') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '👀');
                userMenuState[userId] = 'finalr'; // Voltar ao menu principal
            } else if (msg.body === 'anal') {
                await delay(1200);
                await chat.sendStateTyping();
                await delay(1200);
                await client.sendMessage(msg.from, '👀');
                userMenuState[userId] = 'finalr'; 
            }
            return;
        } else if (msg.body === 'encerrar') {
            userMenuState[userId] = 'finalr';
            return;
        }
    }
});