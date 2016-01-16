var React = require('react');

var Story = React.createClass({
  render: function() {
    return(<div>
      <h1>{this.props.title}</h1>
      <h3>{this.props.subTitle}</h3>
      <p>{this.props.text}</p>
      <img src={this.props.imageUrl}/>
      <p>{this.props.location}</p>
      </div>);
  }


});

module.exports = Story;
