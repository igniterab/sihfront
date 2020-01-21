import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    //button style
    const butstyle = {
      
       

    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <h1>Here's some content for the modal</h1> <br />
           
           <a href={this.props.videoLink}><b>Video clip</b></a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            
           <a href={"http://www.google.com/maps/place/".concat(this.props.latitude).concat(",").concat(this.props.longitude)}><b>Map snippet</b></a><br /> 
          <h2>Device Info :</h2><br />
          {this.props.deviceinfo.email}
          {this.props.deviceinfo.emergency_no}
          {this.props.deviceinfo.model}
          {this.props.deviceinfo.color}
         
           
           <br />
 
          <div className="footer">
            <button onClick={this.props.onClose} style={butstyle}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;