import { motion } from "framer-motion";
import { Heart, Brain, Frown, Moon, AlertCircle, Users } from "lucide-react";

const audienceItems = [
  {
    icon: Brain,
    title: "Ansiedade constante",
    description: "Você sente que sua mente não para e vive preocupada com o futuro"
  },
  {
    icon: Moon,
    title: "Insônia e cansaço",
    description: "Dificuldade para dormir ou acordar já cansada, sem energia"
  },
  {
    icon: Frown,
    title: "Tristeza persistente",
    description: "Uma sensação de vazio ou melancolia que não passa"
  },
  {
    icon: Heart,
    title: "Baixa autoestima",
    description: "Você se cobra demais e sente que nunca é suficiente"
  },
  {
    icon: Users,
    title: "Relacionamentos difíceis",
    description: "Conflitos frequentes ou dificuldade em se conectar com outros"
  },
  {
    icon: AlertCircle,
    title: "Falta de propósito",
    description: "Sensação de estar perdida, sem saber qual caminho seguir"
  }
];

const TargetAudienceSection = () => {
  return (
    <section className="section-light py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-4">
            A sessão é <span className="text-secondary italic">exclusiva</span> para você que...
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Se você se identifica com algum desses pontos, essa sessão foi feita especialmente para você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-xl shadow-lg border border-border hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
