import { useRef, useState } from 'react'
import './contact.scss'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}
function Contact() {
  const ref = useRef()
  const isInView = useInView(ref, { margin: '-100px' })

  const [error, setError] = useState(false)
  const [succes, setSuccess] = useState(false)

  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_7exyp6c', 'template_x2gw4di', formRef.current, {
        publicKey: 'kHoFerd0hdRI9omjz',
      })
      .then(
        () => {
          setSuccess(true)
          console.log('SUCCESS!')
        },
        (error) => {
          setError(true)
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <motion.div
      ref={ref}
      className="Contact"
      id="Contact"
      variants={variants}
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together </motion.h1>
        <motion.div className="item" variants={variants}>
          <h3>Email</h3>
          <span>smsaif767@gmail.com</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h3>Address</h3>
          <span>New Friends Colony, New Delhi</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h3>Phone</h3>
          <span>+917324923485</span>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          animate={isInView && { opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32 32">
            <motion.path
              // eslint-disable-next-line react/no-unknown-property
              initial={{ pathLength: 0 }}
              // eslint-disable-next-line react/no-unknown-property
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 
2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604
 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655
  3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701
   3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 
   10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019
    12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357
     15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 
     15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345
      20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
              strokeWidth={0.2}
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="from_name" />
          <input type="text" required placeholder="Email" name="user_email" />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            id=""
          ></textarea>
          <button>Submit</button>
          {error && <p>Error</p>}
          {succes && <p>Succes</p>}
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Contact
