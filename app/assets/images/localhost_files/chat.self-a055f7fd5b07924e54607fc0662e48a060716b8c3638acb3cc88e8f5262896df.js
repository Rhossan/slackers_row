(function() {
  App.chat = App.cable.subscriptions.create("ChatChannel", {
    connected: function() {},
    disconnected: function() {},
    received: function(data) {}
  });

}).call(this);
