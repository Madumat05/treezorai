
const ValueSection = () => {
  return (
    <section id="value" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a <span className="gradient-text">Treezor.ai</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nosso compromisso vai além da tecnologia. Focamos em entregar valor real para o seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-4xl mx-auto">
          {/* Before/After comparison */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-red-500">Antes da Treezor.ai</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Tempo desperdiçado com tarefas repetitivas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Leads perdidos por falta de acompanhamento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Equipe sobrecarregada com processos manuais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Inconsistência no atendimento ao cliente</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-green-500">Com a Treezor.ai</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tempo liberado para atividades estratégicas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Acompanhamento sistemático de todas as oportunidades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Equipe focada em atividades de alto valor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Experiência do cliente consistente e de alta qualidade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Value propositions */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover animated-element" data-aos="fade-up">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-treezor-purple/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">A gente não vende IA. A gente devolve seu tempo.</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Nossa missão é transformar horas perdidas em processos repetitivos em tempo valioso para você crescer seu negócio e focar no que realmente importa.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover animated-element" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-treezor-purple/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Cada automação é feita sob medida para você.</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Não oferecemos soluções pré-prontas. Desenvolvemos automações exclusivas que se adaptam perfeitamente ao seu negócio e processos específicos.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover animated-element" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-treezor-purple/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Resultados mensuráveis para seu negócio.</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Trabalhamos com metas claras e entregamos dashboards para você acompanhar o impacto real das automações no seu negócio.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover animated-element" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-treezor-purple/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Sua equipe focada no que importa. O resto, a gente automatiza.</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Liberamos o potencial da sua equipe para atividades estratégicas, enquanto as tarefas rotineiras são automatizadas com precisão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
