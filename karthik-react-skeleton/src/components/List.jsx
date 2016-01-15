var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  getInitialState: function() {
      return {items: [], prompt: ''};
  },
  handleChange: function(e) {
    this.setState({prompt: e.target.value});
  },
  handlePress: function(e) {
    var currentItems = this.state.items;
    var currentPrompt = this.state.prompt;
    currentItems.push({"id": this.state.prompt, "name": currentPrompt});
    this.setState({items: currentItems, prompt: ''});

//    this.setState{items:}
  },
  render: function() {
    var createItem = function(item) {
      return <ListItem name={item.name} key={item.id}/>
    };
  //   var items = {this.props.item.map()}
   return (
     <div>
     <input type="text" value={this.state.prompt} onChange={this.handleChange} />
     <button onClick={this.handlePress}>Add!</button>
     <ul>{this.state.items.map(createItem)}</ul>
   </div>);
  }
});

module.exports = List;
