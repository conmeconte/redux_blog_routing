import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 

class Postnew extends Component{
    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
            </div>
        )
    }



    render(){
        return (
            <form>
                <Field name="title" component={this.renderField} label="Title for Post" />
                <Field name="tags" component={this.renderField} label="Tags"/>
                <Field name="content" component={this.renderField} label="Post Content"/>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(Postnew); 