var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "text":"ham"}, {"id":2, "text":"cheese"}];

var List = React.createClass({

  render: function() {

    var createItem = function(text, index) {
      return <ListItem key={index+text} ingredient={text} />
    }
/*    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    }); */

    return (<ul>{this.props.items.map(createItem)}</ul>);
  }

});

module.exports = List;
