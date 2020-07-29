import React from 'react';
import CreationModal from './CreationModal.js';

class EmbeddingForm extends React.Component {
  constructor(props) {
    super(props);
    this.menuItems = props.menuItems;
    this.state = {
      values: [],
      createMode: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  // Handles showing and hiding modal for dataset uploads
  showModal() {
    this.setState({ createMode: true });
  }

  hideModal() {
    this.setState({ createMode: false });
  }

  render() {
    return (
      <div className="form-wrapper">
        <CreationModal show={this.state.createMode} close={this.hideModal} />
        <div className="form">
          <form className="embedding-form" onSubmit={this.handleSubmit}>
            {this.menuItems.map(menuItem => (
              <label key={menuItem.title} className="form-category">
                <span className="category-title">{menuItem.title}:</span>
                <select value={this.state.values[menuItem.index]}>
                  {menuItem.values.map(value => (
                    <option className="form-option" key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            ))}
            <button type="submit" className="form-submit">
              Submit
            </button>
          </form>
        </div>
        <button
          type="button"
          className="create-dataset-button"
          onClick={this.showModal}
        >
          Create a new dataset
        </button>
      </div>
    );
  }
}

export default EmbeddingForm;