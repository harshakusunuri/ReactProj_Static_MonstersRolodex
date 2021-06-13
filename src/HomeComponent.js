import React, { Component, useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { CardList } from './components/card-list/card-list.component';
import {Header} from './components/header/header.component';
import {SearchBox} from './components/search-box/search-box.component'  

import Lifecycles from './lifecycles.component'

class HomeComponent extends Component {

    constructor(props){
        super(props);
        this.state={name:'Before Click Text',
        email1: '',
        password1: '',
        monsters:[ ] ,
        searchField:'',
        title:'Monsters Rolodex',
        count:19,
        showChild: true,
        text: '',
        

    };
    this.props=props;

    //this.handleChange=this.handleChange.bind(this);
    
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users').then(respone=>respone.json())
      .then(users=>this.setState({monsters:users}))
    }

    handleSubmit = event => {
       //event.preventDefault();
        this.setState({ email1: '', password1: '' });
        console.log("After");
      };
    
      // handleChange = event => {
        handleChange=(e)=>{
        const { value, name } = e.target;
    
        this.setState({ [name]: value });
      };
      handleIncrementButton=()=>{
        this.setState((prevState,prevProps)=>{ 
           return{ count: prevState.count+ prevProps.increment }},
             ()=> console.log(this.state.count));


      }
    render(){
      const {monsters, searchField,title}=this.state;
      const filteredMonsters= monsters.filter(monster=>
        monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <div class='home-component'>
        <h1> {title}</h1>

       
       {/* <input type='search' placeholder='search monster' onChange={e=> this.setState({searchField:e.target.value}) } />   */}
       
       <SearchBox placeholder='Search monsters ' handleChange={e=> this.setState({searchField:e.target.value}) } />
      {  /*   placeholder='Type in to change the title'       ,title:e.target.value */           }
       <CardList monsters={filteredMonsters}/>
            <button onClick={this.handleIncrementButton} >{this.state.count}</button>
    
           <button type='text' onClick={(()=> this.setState({name:'Changed After Click'}))} >{this.state.name} </button>
           <div>
           <button
           onClick={() =>
             this.setState(state => ({
               showChild: !state.showChild
             }))
           }
         >
           Toggle Lifecycles
         </button>
         <button
           onClick={() =>
             this.setState(state => ({
               text: state.text + '_hello'
             }))
           }
         >
           Update Text
         </button>
         {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
         </div>

            <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId='email1'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                        name='email1'
                        type='email'
                        placeholder='Enter Email'
                        value={this.email1}
                        onChange={this.handleChange}
                    >
                </Form.Control>
            </Form.Group>


            <Form.Group controlId='password1'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type='password'
                name='password1'
                placeholder='Enter Password'
                value={this.password1}
                        onChange={this.handleChange}
            >
            </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
                Sign In
            </Button>
          </Form>

          </div>
    );
  }
}
export default HomeComponent
