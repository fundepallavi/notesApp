import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Col , Row, Button} from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "./index.css";
import "../css/notes.css"
import  List  from './List/index.jsx'

class noteDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      showForm : 'false',
    };
  }

  // handleChange  
  handleChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState({ state });
  };

  addNotes = () => {  
    this.setState({showForm: 'true'});
      
}

  // submit  
  handleSubmit = event => {  
    event.preventDefault();
    this.props.addNotes(this.state.title, this.state.content);
  };

  render() { console.log("oo", this.state)
    const show = this.state.showForm;
    return (
      <div className="container page">
      <div className="row">
      <hr></hr>
      <div className="split left">
        <List notes={this.props.allNotes} />
      </div>
      <div class="divider"></div>
       
      <div className="split right">
      <Row>
        <Col style={{marginTop : '40px'}}>
          <Button variant="outline-secondary" style={{float: 'right', marginRight: '20px'}}  onClick={this.addNotes}> + Add Note</Button>
        </Col>
      </Row>
      <br />
      <br />
       { show==='true' && 
        <form onSubmit={this.handleSubmit} >
          <label>Title :</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.title}
            type="text"
            placeholder="Add title"
            name="title"
            required
            style={{width : '97%' }}
          />
          <br />
          <br />
          <label>Body : </label>
          <br />
          <textarea
            onChange={this.handleChange}
            value={this.state.content}
            type="text"
            placeholder="Add content"
            name="content"
            required
            style={{width : '97%' }}
            rows="8"
          />
          <br />
          <br />
          <Button style={{float : 'right' , marginRight : '20px'}} type="submit">Save</Button>
        </form>
          }
         </div>
       </div>
       </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    allNotes: state.notes
  };
};

//redux  dispatch  
const mapDispatchToProps = dispatch => {
  return {
    addNotes: (title, content) => {
      dispatch(actions.addNotes(title, content));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(noteDetails);
 


