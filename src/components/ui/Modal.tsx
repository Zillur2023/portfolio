import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div>
        {children}
    </motion.div>
  )
}

export default Modal