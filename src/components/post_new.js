import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class Postnew extends Component{
    renderField(field){
        const { meta: { touched , error } } = field; 
        const className= `form-group ${touched && error ? 'has-danger' : ''}`

        //field.meta.error gives access to the returned error obj from validate function
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">{touched ? error: ''}</div>
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/'); 
        }); 
    }

    render(){
        const { handleSubmit } = this.props


        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" component={this.renderField} label="Title for Post" />
                <Field name="categories" component={this.renderField} label="Categories"/>
                <Field name="content" component={this.renderField} label="Post Content"/>
                <button className="btn btn-primary" type="submit">Submit</button>
                <Link to="/" className = "btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors={};
    // Validate the inputs from 'values'
    if (!values.title || values.title.length < 3){
        errors.title= "Enter a title longer than 3 characters!"; 
    }
    if (!values.categories){
        errors.categories= "Enter a categories!"; 
    }
    if (!values.content){
        errors.content= "Enter a content!"; 
    }

    // if errors is empty, the form is fine to submit
    // if errors has *any* properties, redux form assumes form is invalid
    return errors; 
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(Postnew)
); 