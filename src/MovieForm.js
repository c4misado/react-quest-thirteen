import React from 'react';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          comment: '',
          poster: '',
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }

      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      submitForm(e) {
        e.preventDefault();
        this.configuration();
      }

      configuration = () => {
      const url = "https://post-a-form.herokuapp.com/api/movies";
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      };
      fetch(url, config)
      .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`Film #${res} has been successfully added!`);
          }
        }).catch(e => {
          console.error(e);
          alert('There was an error when adding the employee.');
        });
      }

      render() {
          return (
            <div className="MovieForm">
            <h1>Favorite Movie</h1>
          
            <form onSubmit={this.submitForm}>
              <fieldset>
                <legend>Information</legend>
                <div className="form-data">
                  <label htmlFor="title">Film title: </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                  />
                </div>
                <div className="form-data">
                  <label htmlFor="poster">URL: </label>
                  <input
                    type="poster"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                  />
                </div>
                <div className="form-data">
                  <label htmlFor="comment">Comment: </label>
                  <textarea
                    type="text"
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.comment}
                  />
                </div>

                <hr />
                <div className="form-data">
                  <input type="submit" value="Send"/>
                </div>
              </fieldset>
            </form>
          </div>
          )
      }
}
      


export default MovieForm;