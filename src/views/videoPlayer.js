var VideoPlayerView = Backbone.View.extend({

  model: Video,
  render: function() {
    if (!this.model) {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    }

    return this;
  },
  initialize: function () {
    this.on('select', this.selectVideo, this);
  },
  // select: function(){
  //   this.render();
  // }
  selectVideo: function (video) {
    this.render();
    console.log('triggered');
  },
  template: templateURL('src/templates/videoPlayer.html')

});
