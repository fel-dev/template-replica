import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Clara",
    text: "A sessão mudou completamente minha perspectiva. Finalmente entendi padrões que me sabotavam há anos. O plano personalizado me deu clareza e direção.",
    rating: 5
  },
  {
    name: "Fernanda S.",
    text: "Estava perdida e sem esperança. A Dra. Tatiana me acolheu e me ajudou a enxergar um caminho. Hoje me sinto mais leve e confiante.",
    rating: 5
  },
  {
    name: "Carolina M.",
    text: "Profissional incrível! A análise foi profunda e sensível. Recebi um plano que realmente faz sentido para minha realidade. Super recomendo!",
    rating: 5
  }
];

const SocialProofSection = () => {
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
          <p className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium">
            O que dizem <span className="text-secondary italic">minhas clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background p-8 rounded-xl shadow-lg border border-border relative"
            >
              <Quote className="w-10 h-10 text-accent/30 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-serif text-accent font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
