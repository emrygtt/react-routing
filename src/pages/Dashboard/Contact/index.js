import React from 'react'
import { Formik, Field, Form, useFormik } from 'formik';
import validations from "./validations"
import './styles.css'


const Contact = () => {

 /**
  * isSubmitting = submit butonuna tıkladıgında true döner
  * touched = herhangi bir inputtan ayrıldıgındaa touched objesine true olarak eklenir.
  * 
  */
  const {handleChange, handleSubmit, handleBlur, values, isSubmitting, errors, touched } = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit:async (values, bag) => {
      await new Promise((r) => {setTimeout(r, 1000)}) // 1 second delay

      if(values.email === "emryigit97@gmail.com") {
        return bag.setErrors({email: 'Bu Mail Adresi Kullanılıyor.'})
      }
      console.log(values) 
      bag.resetForm(); // submitten sonra form resetlenecek
    },
    validationSchema: validations
  })


  console.log("touched ", touched)
  return (
    <div>
      <h2>ILETISIM</h2>
        <form className='form' onSubmit={handleSubmit}>
          <div>
          <label htmlFor="firstName">First Name</label>
          <input 
          id="firstName" 
          name="firstName" 
          placeholder="Emre"
          value={values.firstName}
          disabled={isSubmitting}
          onChange={handleChange('firstName')}
          onBlur={handleBlur("firstName")}
          />
          {errors.firstName && touched.firstName &&
            <div className='error'>
              {errors.firstName}
            </div>
          }
          </div>
          <div>
          <label htmlFor="lastName">Last Name</label>
          <input 
          id="lastName" 
          name="lastName" 
          placeholder="Yigit"
          value={values.lastName}
          disabled={isSubmitting}
          onChange={handleChange('lastName')}
          onBlur={handleBlur("lastName")}

          />
            {errors.lastName && touched.lastName &&
              <div className='error'>
                {errors.lastName}
              </div>
            }
          </div>
          <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="emryigit97@gmail.com"
            value={values.email}
            type="email"
            disabled={isSubmitting}
            onChange={handleChange('email')}
            onBlur={handleBlur("email")}

          />
            {errors.email && touched.email &&
              <div className='error'>
                {errors.email}
              </div>
            }
          </div>
          <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="React Form with Formik & Yup"
            value={values.message}
            type="message"
            disabled={isSubmitting}
            onChange={handleChange('message')}
            onBlur={handleBlur("message")}
          />
            {errors.message && touched.message &&
              <div className='error'>
                {errors.message}
              </div>
            }
          </div>
          <button disabled={isSubmitting} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact



        {/*Without Hook formik  */}
        
      {/* <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }}
      onSubmit={async (values) => {
        console.log(values)
      }}
    >
      {({handleSubmit, handleChange}) => (
        <form className='form' onSubmit={handleSubmit}>
          <div>
          <label htmlFor="firstName">First Name</label>
          <input 
          id="firstName" 
          name="firstName" 
          placeholder="Jane" 
          onChange={handleChange('firstName')}
          />
          </div>
          <div>
          <label htmlFor="lastName">Last Name</label>
          <input 
          id="lastName" 
          name="lastName" 
          placeholder="Doe" 
          onChange={handleChange('lastName')}
          />
          </div>
          <div>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            onChange={handleChange('email')}
          />
          </div>
          <div>
          <label htmlFor="email">Email</label>
          <textarea
            id="message"
            name="message"
            placeholder="message.."
            type="message"
            onChange={handleChange('message')}
          />
          </div>
          <button type="submit">Submit</button>
        </form>
      )
      }
    </Formik> */}