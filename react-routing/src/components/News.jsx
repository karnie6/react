var React = require('react');
var Story = require('./Story.jsx');



var News = React.createClass({



  render: function() {
    var renderStory = function(story) {
       return (<Story title={story.title} subTitle={story.subTitle} text={story.text} imageUrl={story.imageUrl} location={story.location}/>);
    };

    var stories = [{"title":"TITLE1", "subTitle":"subTitle1", "text":"text1", "imageUrl":"https://1.gravatar.com/avatar/4751e2e9fe7b876958d38f86a718ca91?s=50&d=retro&r=g", location: "New York"}, {
      "title":"TITLE2", "subTitle":"subTitle2", "text":"text2", "imageUrl":"https://1.gravatar.com/avatar/4751e2e9fe7b876958d38f86a718ca91?s=50&d=retro&r=g", location: "Kentucky, USA"
    }];

    return (<div>{stories.map(renderStory)}</div>);
  }
});

module.exports = News;
