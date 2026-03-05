import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const educationData = [
    {
      degree: 'BSc (Hons) in Software Engineering',
      institution: 'Bcas Campus (Solent University, UK)',
    },
    {
      degree: 'HND in Computer Software Development',
      institution: 'Bcas Campus (Pearson)',
    },
    {
      degree: 'A-Level – Completed',
      institution: 'Vigneswara College, Jaffna',
    },
    {
      degree: 'O-Level – Completed',
      institution: 'Vigneswara College, Jaffna',
    },
  ];

  return (
    <section
      id="education"
      ref={inViewRef}
      className="relative pt-6 pb-10 md:pt-10 md:pb-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 50% at 90% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 70% 60% at 10% 80%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 60% 50% at 90% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header - Left Aligned */}
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-6 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full text-xs font-light text-purple-300 uppercase tracking-wider mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
            }}
          >
            Academic Background
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Education
          </motion.h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-indigo-400/30 pb-8 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-500 rounded-full border-2 border-black"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                style={{
                  boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
                }}
              />

              {/* Education Card */}
              <motion.div
                className="p-6 bg-white/5 border border-indigo-400/20 rounded-lg backdrop-blur-sm group"
                whileHover={{
                  scale: 1.02,
                  borderColor: 'rgba(99, 102, 241, 0.5)',
                  boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-indigo-300/80 font-light">
                    {edu.institution}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
