import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-light py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl lg:text-6xl font-medium mb-6">
            Pronta para transformar sua{" "}
            <span className="text-secondary italic">vida?</span>
          </h2>

          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Não espere mais para dar o primeiro passo. Agende sua sessão 
            diagnóstica e receba seu plano personalizado para uma vida 
            plena e abundante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-cta flex items-center gap-2 text-lg px-10 py-5"
            >
              Quero agendar minha sessão
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground mt-6"
          >
            <span className="text-secondary font-semibold">⚡ Apenas 5 vagas</span>{" "}
            disponíveis por mês
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
