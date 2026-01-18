import { motion } from "framer-motion";
import heroImage from "@/assets/hero-therapist.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-accent uppercase tracking-[0.3em] text-sm font-medium"
              >
                Sessão Diagnóstica
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-serif text-5xl lg:text-7xl font-medium leading-tight"
              >
                Plano para uma{" "}
                <span className="text-accent italic">Vida Plena</span>{" "}
                e Abundante
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-lg"
            >
              Descubra o caminho para uma transformação profunda. 
              Uma sessão exclusiva onde vamos analisar sua história 
              e criar um plano personalizado para você alcançar 
              a paz e equilíbrio que merece.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-cta">
                Quero agendar minha sessão
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent/30 border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-secondary/50 border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-primary border-2 border-background"></div>
              </div>
              <span>
                <strong className="text-accent">Apenas 5 vagas</strong> disponíveis por mês
              </span>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent opacity-60"></div>
              
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={heroImage}
                  alt="Tatiana Pacher - Psicóloga"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-xl border border-border"
            >
              <p className="text-accent font-serif text-2xl font-semibold">+6 anos</p>
              <p className="text-muted-foreground text-sm">de experiência clínica</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
