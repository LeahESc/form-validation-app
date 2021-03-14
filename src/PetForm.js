import React from 'react'
import { useFormik } from 'formik'
import { Formik, Form, Field, ErrorMessage } from "formik";


const PetForm = () => ( 
    
    // const formik = useFormik({
    //     initialValues: { 
    //         name: '',
    //         breed: '',
    //         age: ''
    //     }
    // })
    
    // render() {
    //     return ( 
    <div>
    <Formik
        initialValues={{name: '', breed: '', age: ''}}
        validate={values => {
            let errors = {}
            if(values.name === ''){
                errors.name = "Name is required"
            }
            if (values.breed === '') {
                errors.breed = "Breed is required"
            } else if (values.breed.length < 3){
                errors.breed = "Breed must be at least 3 characters long"
            }
            if (values.age === ''){
                errors.age = "Age is required"
            } 
                    // else if (!ageTest.test(values.age)){
                    //     errors.age = "Age must be a number"
                    // }
            return errors 
        }}
        onSubmit={( values, { setSubmitting }) => {
            alert("Form is validated! Submitting the form...")
            setSubmitting(false)
        }}>
        {({ values, 
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            }) => ( 
                <form onSubmit={handleSubmit}> 
                    <input 
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                    <input 
                    type="breed"
                    name="breed"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.breed}
                    />
                    {errors.breed && touched.breed & errors.breed}
                    <input 
                    type="age"
                    name="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    />
                    {errors.age && touched.age && errors.age}
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </form>    
            )}
    </Formik> 
    </div>
)

export default PetForm;













//                     {() => (
//                         <Form>
//                             <label htmlFor="name">Name:</label>
//                             <Field 
//                                 type="name"
//                                 name="name"
//                                 className={ `form-control ${
//                                     touched.name && errors.name ? "is-invalid" : ""}`
                                
//                                 }
//                             />
//                             <ErrorMessage 
//                                 component="div"
//                                 name="name"
//                                 className="invalid-feedback"
//                             />
//                             <label htmlFor="Breed">Breed:</label>
//                             <Field 
//                                 type="breed"
//                                 name="breed"
//                                 className={ `form-control ${ 
//                                     touched.breed && errors.breed ? "is-invalid" : ""}`
//                                 }
//                             />
//                             <ErrorMessage 
//                                 component="div"
//                                 name="breed"
//                                 className="invalid-feedback"
//                             />
//                             <label htmlFor="Age">Age:</label>
//                             <Field 
//                                 type="age"
//                                 name="age"
//                                 className={ `form-control ${
//                                     touched.age && errors.age ? "is-invalid" : "" }`     
//                                 }
//                             />
//                             <ErrorMessage 
//                                 component="div"
//                                 name="breed"
//                                 className="invalid-feedback"
//                             />
//                         </Form>
//                     )}
//             </Formik>  
//             </div>
//         )
//     }
// }
