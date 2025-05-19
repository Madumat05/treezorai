
const ProblemsSection = () => {
  const problems = [
    {
      title: "Leads ignorados?",
      description: "Potenciais clientes esperando enquanto sua equipe está ocupada com tarefas manuais.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      title: "Equipe sobrecarregada?",
      description: "Colaboradores focados em tarefas operacionais em vez de estratégicas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Processos manuais demais?",
      description: "Desperdício de tempo e recursos com atividades que poderiam ser automatizadas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Atendimento lento?",
      description: "Clientes esperando respostas enquanto oportunidades de venda são perdidas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Baixa conversão de leads?",
      description: "Potenciais vendas que não se concretizam por falhas no processo de acompanhamento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      )
    },
    {
      title: "Tempo perdido com rotinas?",
      description: "Horas valiosas consumidas por tarefas que não agregam valor real ao negócio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <section id="problems" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Problemas que <span className="gradient-text">Resolvemos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Identificamos e eliminamos os gargalos que impedem sua empresa de crescer.
            Reconhece algum desses desafios?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 card-hover animated-element"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#solutions" className="btn-primary">
            Conheça nossas soluções
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
