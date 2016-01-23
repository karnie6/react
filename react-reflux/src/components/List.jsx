var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/action.jsx');
var IngredientStore = require('../reflux/ingredient-store.jsx');

var List = React.createClass({
    mixins:[Reflux.listenTo(IngredientStore, 'onChange')],
    getInitialState: function() {
        return {ingredients:[], value: ''};
    },
    componentWillMount: function() {
      Actions.getIngredients();
    },
    onChange: function(event, data) {
      this.setState({ingredients: data});
    },
    onInputChange: function(e) {
      this.setState({value: e.target.value});
    },
    onClick: function(e) {
      Actions.postIngredient(this.state.value);
      this.setState({value: ''});
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<div>
          <input placeholder="Add ingredient" value={this.state.value} onChange={this.onInputChange}/>
          <button onClick={this.onClick}>Add Item</button>
          <ul>{listItems}</ul>
        </div>);
    }
});

module.exports = List;
