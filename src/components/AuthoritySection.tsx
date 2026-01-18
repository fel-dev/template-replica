import { motion } from "framer-motion";
import heroImage from "@/assets/hero-therapist.jpg";

const stats = [
  { number: "6+", label: "Anos de clínica" },
  { number: "3.800+", label: "Horas de atendimento" },
  { number: "500+", label: "Vidas transformadas" },
];

const AuthoritySection = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 rounded-lg"></div>
              <img
                src={heroImage}
                alt="Tatiana Pacher"
                className="relative z-10 rounded-lg w-full"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">
                Sobre mim
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
                Tatiana Pacher
              </h2>
              <p className="text-2xl text-accent font-serif italic mb-4">
                Psicóloga Clínica
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Há mais de 6 anos dedico minha vida a ajudar pessoas a encontrarem 
                seu caminho para uma vida mais plena e equilibrada.
              </p>
              <p>
                Com mais de 3.800 horas de atendimento clínico, desenvolvi uma 
                metodologia única que combina ciência e acolhimento para 
                proporcionar transformações reais e duradouras.
              </p>
              <p>
                Meu compromisso é criar um espaço seguro onde você possa se 
                redescobrir e construir a vida abundante que merece.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-3xl lg:text-4xl text-accent font-semibold">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
