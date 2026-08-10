import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, lede }) {
  return (
    <section className="page-hero blueprint">
      <div className="container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {lede}
          </motion.p>
        )}
      </div>
    </section>
  )
}
