import { motion } from "framer-motion";
import { Check } from "lucide-react";

const analysisPoints = [
  "Saúde Mental",
  "Histórico Psicológico",
  "Queixas Atuais",
  "Impacto Funcional",
  "Eventos de Vida Significativos",
  "Desenvolvimento Pessoal",
  "Dinâmica dos Relacionamentos",
  "Motivação e Metas para o Futuro",
  "Expectativas",
  "Mecanismos de Enfrentamento"
];

const MethodologySection = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Analysis points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">
              O que vamos analisar
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-8">
              Uma análise <span className="text-accent italic">completa</span> da sua jornada
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {analysisPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Deliverable */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card p-10 rounded-2xl border border-border relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <span className="text-3xl">📋</span>
                </div>
                
                <h3 className="font-serif text-3xl font-medium mb-4">
                  Seu Plano Personalizado
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Ao final da sessão, você receberá um plano personalizado e completo 
                  para alcançar a <strong className="text-accent">vida plena e abundante</strong> que você merece, 
                  deixando de lado a ansiedade, depressão e tristeza que tiram a sua paz.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>Diagnóstico completo da sua situação atual</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>Mapeamento das suas necessidades específicas</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>Plano de ação para transformação</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-cta mt-8 w-full"
                >
                  Quero meu plano personalizado
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
