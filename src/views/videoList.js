var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    for (var i = 0; i < this.collection.length; i++) {
      var videoListEntry = new VideoListEntryView({model: this.collection.models[i]});
      this.$el.children().append(videoListEntry.render().el);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
