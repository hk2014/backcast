var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.videos = new Videos(window.exampleVideoData);
    this.videoPlayer = new VideoPlayerView(this.videos.models[0]);
    this.videoList = new VideoListView({collection: this.videos});
    this.render();
    this.$el.append(this.videoPlayer.render().el);
    this.$el.append(this.videoList.render().el);

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
