import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import './style.css';

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <h1>React Video Modal</h1>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='kXYiU_JCYtU' onClose={() => this.setState({isOpen: false})} />
        <button className="button1" onClick={this.openModal}>Click Me</button>
          </React.Fragment>
    );
  }
}

export default videoModal;
