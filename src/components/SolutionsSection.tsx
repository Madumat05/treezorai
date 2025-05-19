
const SolutionsSection = () => {
  const solutions = [
    {
      title: "Automação de Atendimento",
      description: "Assistentes virtuais que atendem, qualificam e encaminham leads 24/7, garantindo que nenhuma oportunidade seja perdida.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Fluxos de Vendas Inteligentes",
      description: "Sistemas que acompanham leads, enviam lembretes e qualificam clientes em potencial automaticamente.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Integração de Sistemas",
      description: "Conectamos suas ferramentas existentes para criar um ecossistema que funciona harmoniosamente, eliminando silos de informação.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Agentes de IA Personalizados",
      description: "Assistentes virtuais treinados no contexto do seu negócio, capazes de interagir com clientes e resolver questões em tempo real.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-treezor-purple/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossas <span className="gradient-text">Soluções</span> Sob Medida
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desenvolvemos soluções personalizadas que se adaptam ao contexto do seu negócio,
            não ferramentas genéricas. Cada automação é criada para atender exatamente às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col items-start card-hover animated-element"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="mb-6 p-4 bg-treezor-purple/10 rounded-lg">{solution.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Nossa abordagem é diferente</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-treezor-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Entendemos o seu negócio</h4>
                <p className="text-gray-600">Antes de propor qualquer solução, mergulhamos profundamente no seu contexto e necessidades específicas.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-treezor-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Desenvolvemos de forma personalizada</h4>
                <p className="text-gray-600">Criamos soluções exclusivas que atendem exatamente às necessidades da sua empresa, não pacotes genéricos.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-treezor-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Acompanhamos os resultados</h4>
                <p className="text-gray-600">Nossa parceria vai além da implementação, com monitoramento contínuo e otimizações constantes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
