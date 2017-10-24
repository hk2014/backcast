var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.videos = new Videos(window.exampleVideoData);
    console.log('before');
    this.render();
    this.videoPlayer = new VideoPlayerView();

    this.videoPlayer.render();
    this.videoList = new VideoListView({collection: this.videos});
    this.videoList.render();
    console.log('after');
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
