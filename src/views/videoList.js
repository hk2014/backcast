var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
  
    for (var i = 0; i < this.collection.length; i++) {
      var videoListEntry = new VideoListEntryView(this.collection.models[i]);
      videoListEntry.render();
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
