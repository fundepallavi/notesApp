import React, { Component } from "react";
import { Col ,  Row, Button} from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import "./index.css";
import * as actions from "../../actions";
import { connect } from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import Modal from 'react-bootstrap/Modal'

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // edit  
      setShow : false,
      
      // update  
      title: this.props.title,
      content: this.props.content
    };
  }
 
  
  removeNotes = (id) => {  
    this.props.removeNotes(id);
  };

  updateNotes = (id, title, content) => {   
    this.setState({   setShow : true, id : id, title : title, content : content});
       
  }

  // handleChange*  
  handleChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState({ state });
  };

  handleClose = () => this.setState({ setShow : false });
  handleShow = () => this.setState({ setShow : true });

  donePost = () => {  
    this.props.updateNotes(this.state.id, this.state.title, this.state.content);
    this.setState({   setShow : false});
  };

  // 
   
  render() {   
  
    return (
      <div>

        <Grid spacing={10} className="notes_container" >
         
          {this.props.notes.map((notes, index) => (
            <Row key={ notes.id }>
              <Col md={12}>
            <div className="notes" key={ notes.id }  >
              <b>{ notes.title }</b>
              <div style={{float : 'right'}}>
                <a href='javascript:void(0)' onClick={() => { this.updateNotes(notes.id, notes.title, notes.content) }} > <i class="fa fa-edit" aria-hidden="true" ></i></a>
                <a href='javascript:void(0)'  onClick={ () => this.removeNotes(notes.id) }> <i class="fa fa-trash" aria-hidden="true" ></i></a>
              </div>   
              <br />
              <span>{ notes.content }</span>
            </div>
            </Col>
            </Row>
          ))}
          
        </Grid>

        <Modal show={this.state.setShow} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
            
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
              </form>
              </div>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.donePost}>
                Save Changes
              </Button>
            </Modal.Footer>
            
            </Modal>                    
      
     </div> 
    );
  }
}

// redux 

const mapDispatchToProps = dispatch => {
  return {
    removeNotes: id => {
      dispatch(actions.removeNotes(id));
    },
    updateNotes: (id, title, content) => {
      dispatch(actions.updateNotes(id, title, content));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(List);
 
