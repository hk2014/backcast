var VideoListEntryView = Backbone.View.extend({

  //model: Video,
  render: function() {
    //console.log(this.model);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  // initialize: function () {
  //   this.listenTo(this.model,)
  // },
  events: {
    'click' : 'select'
  },
  select: function() {

    this.model.select();
  },
  template: templateURL('src/templates/videoListEntry.html')

});
