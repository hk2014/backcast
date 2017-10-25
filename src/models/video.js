var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.on('changeVideo', this.select, this);
  },

  select: function() {
    console.log('model select');
    this.trigger('select', this);
    //this.
  }

});
