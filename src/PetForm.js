import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";


export default class PetForm extends Component {
    
    
    render() {
        return ( 
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
                    } else if (!ageTest.test(values.age)){
                        errors.age = "Age must be a number"
                    }
                    return errors 
                }}
                onSubmit={({ setSubmitting }) => {
                    alert("Form is validated! Submitting the form...")
                    setSubmitting(false)
                }}>
                    {() => (
                        <Form>
                            <label htmlFor="name">Name:</label>
                            <Field 
                                type="name"
                                name="name"
                                className={ `form-control ${
                                    touched.name && errors.name ? "is-invalid" : ""}`
                                
                                }
                            />
                            <ErrorMessage 
                                component="div"
                                name="name"
                                className="invalid-feedback"
                            />
                            <label htmlFor="Breed">Breed:</label>
                            <Field 
                                type="breed"
                                name="breed"
                                className={ `form-control ${ 
                                    touched.breed && errors.breed ? "is-invalid" : ""}`
                                }
                            />
                            <ErrorMessage 
                                component="div"
                                name="breed"
                                className="invalid-feedback"
                            />
                            <label htmlFor="Age">Age:</label>
                            <Field 
                                type="age"
                                name="age"
                                className={ `form-control ${
                                    touched.age && errors.age ? "is-invalid" : "" }`     
                                }
                            />
                            <ErrorMessage 
                                component="div"
                                name="breed"
                                className="invalid-feedback"
                            />
                        </Form>
                    )}
            </Formik>  
            </div>
        )
    }
}
