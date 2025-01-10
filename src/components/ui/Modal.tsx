'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { CgClose } from "react-icons/cg";

type ModalProps = {
  children: React.ReactNode // Content to be displayed inside the modal
  trigger?: React.ReactNode // Trigger element to open the modal
  onClose?: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  //  const [isModalOpen, setModalOpen] = useState(false)

  // const toggleModal = () => {
  //   setModalOpen((prev) => !prev) // Toggle modal open/close
  // }

  return (
    <>
      {/* Render Trigger */}
      {/* <div onClick={toggleModal}>{trigger}</div> */}

      {/* Modal */}
      {/* {isModalOpen && ( */}
    <AnimatePresence>
          <motion.div
            className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Close modal when clicking outside
          >
            <motion.div
            // style={{ width:300px, height }}
              className="bg-white dark:bg-black px-5 rounded shadow-lg w-[400px] h-[450px] relative overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
            >
              {children}
              {/* Close Button */}
             
                <CgClose  onClick={onClose} className='  absolute top-3 right-3  text-black dark:text-white hover:cursor-pointer ' />
            </motion.div>
          </motion.div>
      </AnimatePresence>
      {/* )} */}
    </>
  )
}

export default Modal
