
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Sobre a <span className="gradient-text">Treezor.ai</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            A Treezor.ai é especializada em criar soluções de automação sob medida com inteligência artificial
            para empresas que valorizam seu tempo. Não vendemos tecnologia, entregamos 
            <span className="text-treezor-purple font-semibold"> liberdade estratégica</span>, 
            <span className="text-treezor-purple font-semibold"> produtividade</span> e 
            <span className="text-treezor-purple font-semibold"> crescimento</span> para 
            gestores e equipes que desejam focar no que realmente importa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-treezor-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Automação Inteligente</h3>
              <p className="text-gray-600 text-center">Soluções sob medida que automatizam processos repetitivos da sua empresa.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-treezor-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Presença Confiável</h3>
              <p className="text-gray-600 text-center">Acompanhamento contínuo e suporte para maximizar os resultados.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-treezor-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Tempo Recuperado</h3>
              <p className="text-gray-600 text-center">Devolvemos tempo valioso para você focar no crescimento do seu negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
