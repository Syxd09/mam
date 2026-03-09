import { motion } from "framer-motion";
import { Cog, Star, Users, Hourglass } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "TECH-SAVVY",
    desc: "With the latest and advanced fibre optic laser technologies, we believe in offering the best output for all of our clients' requirements.",
    direction: "right" as const,
  },
  {
    icon: Star,
    title: "QUALITY",
    desc: "With a team of qualified and experienced personnel, we offer optimum solutions with rigid quality controls at every step.",
    direction: "left" as const,
  },
  {
    icon: Users,
    title: "COMPETITIVE",
    desc: "With the strong desire to have a long-term and recurring business relationship, we offer the best and competitive quotes.",
    direction: "left" as const,
  },
  {
    icon: Hourglass,
    title: "JUST-IN-TIME",
    desc: "With our skilled work force, planned manufacturing process and the motivation to get the work done, we serve on-time, every time.",
    direction: "right" as const,
  },
];

const FeatureBoxes = () => {
  return (
    <section className="bg-quiko-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: feature.direction === "right" ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="feature-overlay-box bg-secondary/30 border border-secondary p-8 text-center min-h-[200px] flex flex-col items-center justify-center"
            >
              <feature.icon className="w-10 h-10 text-secondary-foreground mb-4" />
              <h5 className="font-oswald text-lg font-semibold text-secondary-foreground tracking-wider">
                {feature.title}
              </h5>
              <div className="section-separator mx-auto mt-3" />

              <div className="overlay-content text-center">
                <feature.icon className="w-8 h-8 text-primary-foreground mb-3 mx-auto" />
                <h5 className="font-oswald text-lg font-semibold text-primary-foreground mb-2">
                  {feature.title}
                </h5>
                <p className="text-sm text-primary-foreground/80 font-opensans">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBoxes;
