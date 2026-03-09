import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="section-contact" className="bg-quiko-dark py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h4 className="font-oswald text-2xl md:text-3xl font-semibold text-primary mb-3">
            Connect
          </h4>
          <div className="section-separator mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h6 className="font-oswald text-sm font-semibold text-secondary-foreground mb-1">Office</h6>
              <p className="text-secondary-foreground/70 font-opensans text-sm">
                #23 C/A, J.C Industrial Layout, 3rd Main, 1st Stage, Yelachenahalli, Kanakapura Road, Bangalore – 560062
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h6 className="font-oswald text-sm font-semibold text-secondary-foreground mb-1">Mail</h6>
              <a
                href="mailto:info@quikolasers.com"
                className="text-secondary-foreground/70 font-opensans text-sm hover:text-primary transition-colors"
              >
                info@quikolasers.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h6 className="font-oswald text-sm font-semibold text-secondary-foreground mb-1">Phone</h6>
              <p className="text-secondary-foreground/70 font-opensans text-sm">
                +91-8095544429 / 9620199838
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h6 className="font-oswald text-sm font-semibold text-secondary-foreground mb-1">Business Hours</h6>
              <p className="text-secondary-foreground/70 font-opensans text-sm">
                Monday-Saturday : 9am to 7pm
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://quikolasers.com/associate/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-oswald text-sm font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors tracking-wider uppercase"
          >
            Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
