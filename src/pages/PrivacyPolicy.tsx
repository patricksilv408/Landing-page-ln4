import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";

const PrivacyPolicy = () => {
  const lastUpdatedDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-off-white text-charcoal font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32">
        <article className="prose prose-lg max-w-4xl mx-auto prose-h1:font-serif prose-h2:font-serif prose-a:text-alphaville-green hover:prose-a:text-alphaville-green/80 prose-strong:text-charcoal">
          <h1>Política de Privacidade</h1>
          <p className="lead">Última atualização: {lastUpdatedDate}</p>
          
          <p>A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).</p>

          <h2>1. Quem Somos</h2>
          <p>Este site é operado por <strong>Derlon de Almeida Alves Junior</strong> (CRECI 25.820), corretor de imóveis associado à imobiliária <strong>Imóvel Fácil</strong> (CRECI 1626J), com endereço comercial na <strong>Rua Jorge Amado, 49 — Shopping Camaçari Open Center — Centro — Camaçari/BA</strong>.</p>
          <p>Para os fins da LGPD, atuamos como <strong>Controlador</strong> dos dados pessoais coletados através deste site para a divulgação do empreendimento <strong>Alphaville Litoral Norte 4</strong>.</p>
          <p>Nosso Encarregado pela Proteção de Dados (DPO) pode ser contatado através dos seguintes canais:</p>
          <ul>
            <li><strong>E-mail:</strong> <a href="mailto:derlonalvesimoveis@gmail.com">derlonalvesimoveis@gmail.com</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/5571992117523" target="_blank" rel="noopener noreferrer">(71) 99211-7523</a></li>
          </ul>

          <h2>2. Quais Dados Coletamos</h2>
          <p>Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:</p>
          <ul>
            <li><strong>Dados de Contato:</strong> Nome, e-mail e telefone/WhatsApp, fornecidos por você ao preencher formulários de contato ou ao iniciar uma conversa conosco.</li>
            <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de dispositivo e navegador, páginas visitadas, origem do tráfego e cookies, coletados automaticamente durante sua visita.</li>
            <li><strong>Dados de Comunicação:</strong> O conteúdo das mensagens trocadas conosco através de formulários, e-mail ou WhatsApp.</li>
          </ul>
          <p><strong>Não solicitamos dados pessoais sensíveis</strong> (como origem racial ou étnica, convicção religiosa, opinião política, etc.). Caso você nos envie voluntariamente tais dados (por exemplo, em uma simulação de financiamento), eles serão utilizados estritamente para a finalidade informada e protegidos com segurança.</p>

          <h2>3. Como Coletamos Seus Dados</h2>
          <p>A coleta de dados ocorre das seguintes formas:</p>
          <ul>
            <li><strong>Diretamente de você:</strong> Quando você preenche e envia formulários em nosso site ou nos contata via WhatsApp.</li>
            <li><strong>Automaticamente:</strong> Através de cookies e tecnologias similares que coletam informações sobre sua navegação. O uso de cookies não essenciais (analíticos e de marketing) depende do seu consentimento.</li>
          </ul>

          <h2>4. Finalidades e Bases Legais</h2>
          <p>Utilizamos seus dados pessoais para as seguintes finalidades, com base nas permissões da LGPD:</p>
          <ul>
            <li><strong>Atendimento e Venda:</strong> Para responder suas solicitações, fornecer informações sobre o Alphaville Litoral Norte 4, agendar visitas e realizar simulações. (Base legal: Execução de diligências pré-contratuais e Legítimo Interesse).</li>
            <li><strong>Comunicação e Marketing:</strong> Para enviar novidades e ofertas sobre o empreendimento, sempre com a opção de você se descadastrar a qualquer momento. (Base legal: Consentimento e/ou Legítimo Interesse).</li>
            <li><strong>Melhoria do Site:</strong> Para analisar como nosso site é utilizado e otimizar a experiência do usuário. (Base legal: Consentimento, para cookies não essenciais).</li>
            <li><strong>Obrigações Legais:</strong> Para cumprir determinações legais ou judiciais.</li>
          </ul>

          <h2>5. Compartilhamento de Dados</h2>
          <p>Seus dados pessoais não são vendidos ou alugados. O compartilhamento ocorre apenas com provedores de serviços estritamente necessários para nossa operação (como serviços de hospedagem de site, segurança e plataformas de comunicação/CRM), sempre garantindo que o mínimo de dados seja compartilhado e que existam contratos que assegurem a proteção das suas informações.</p>

          <h2>6. Cookies e Tecnologias Similares</h2>
          <p>Cookies são pequenos arquivos de texto armazenados em seu dispositivo. Usamos as seguintes categorias:</p>
          <ul>
            <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site. Não exigem consentimento.</li>
            <li><strong>Cookies Analíticos e de Marketing:</strong> Ajudam a entender o desempenho do site e a personalizar a comunicação. São ativados apenas com o seu consentimento, que pode ser gerenciado através do nosso banner de cookies.</li>
          </ul>

          <h2>7. Armazenamento e Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou destruição. Seus dados podem ser processados no Brasil ou no exterior, sempre em conformidade com as diretrizes da LGPD.</p>

          <h2>8. Retenção dos Dados</h2>
          <p>Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, bem como para atender a obrigações legais ou regulatórias. Após esse período, eles serão eliminados de forma segura ou anonimizados.</p>

          <h2>9. Seus Direitos como Titular dos Dados</h2>
          <p>A LGPD garante a você diversos direitos sobre seus dados pessoais. Você pode solicitar a qualquer momento:</p>
          <ul>
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos seus dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Portabilidade dos dados a outro fornecedor;</li>
            <li>Informação sobre com quem compartilhamos seus dados;</li>
            <li>Revisão de decisões automatizadas.</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato com nosso DPO através do e-mail <strong><a href="mailto:derlonalvesimoveis@gmail.com">derlonalvesimoveis@gmail.com</a></strong> ou pelo <strong><a href="https://wa.me/5571992117523" target="_blank" rel="noopener noreferrer">WhatsApp (71) 99211-7523</a></strong>.</p>

          <h2>10. Crianças e Adolescentes</h2>
          <p>Nosso site não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de crianças e adolescentes. Caso tenhamos conhecimento da coleta de tais dados sem o consentimento adequado dos responsáveis, procederemos com a exclusão imediata.</p>

          <h2>11. WhatsApp e Comunicações</h2>
          <p>Ao clicar em nossos links para o WhatsApp, você será redirecionado para a plataforma, que possui suas próprias políticas de privacidade, sob responsabilidade da Meta. Você pode solicitar a interrupção de nossas comunicações a qualquer momento.</p>

          <h2>12. Alterações Desta Política</h2>
          <p>Podemos atualizar esta Política de Privacidade periodicamente. A nova versão será publicada nesta página com a data de atualização revisada. Recomendamos que você a revise com frequência.</p>

          <h2>13. Contato</h2>
          <p>Se tiver qualquer dúvida sobre esta política ou sobre como tratamos seus dados, por favor, entre em contato com nosso Encarregado pela Proteção de Dados (DPO):</p>
          <ul>
            <li><strong>E-mail:</strong> <a href="mailto:derlonalvesimoveis@gmail.com">derlonalvesimoveis@gmail.com</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/5571992117523" target="_blank" rel="noopener noreferrer">(71) 99211-7523</a></li>
          </ul>
        </article>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default PrivacyPolicy;