
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,Text,View} from 'react-native';
interface props{}

interface use{
   email: string;
   ps:string;
   surname ?: string;
   fistName ?: string;
   status ?: string;
   born ?: string;
}

class auth extends React.Component <PropsType,StateType> {
    constructor(props:PropsType) {
      super(props);
      this.state = {email: '',px:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Le nom a été soumis : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email :
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label>

          <label>
          mot de passe :
          <input type="text" value={this.state.pw} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  }