var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.videos = new Videos(window.exampleVideoData);
    this.videoPlayer = new VideoPlayerView(this.videos.models[0]);
    this.videoList = new VideoListView({collection: this.videos});
    this.render();
    this.$el.find('.player').append(this.videoPlayer.render().el);
    this.$el.find('.list').append(this.videoList.render().el);
    // this.on('select', this.render, this);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
