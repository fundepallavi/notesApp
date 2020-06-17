import React, { Component } from "react";
import { Col ,  Row} from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import "./index.css";
import * as actions from "../../actions";
import { connect } from "react-redux";
 

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // edit  
      isEdit: false,
      // update  
      title: this.props.title,
      content: this.props.content
    };
  }
 
  
  removeNotes = (id) => {  
    this.props.removeNotes(id);
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
              
              <button style={{float: 'right'}} onClick={ () => this.removeNotes(notes.id) }>x</button>
               
              <br />
              <span>{ notes.content }</span>
            </div>
            </Col>
            </Row>
          ))}
          
        </Grid>
         
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
 
