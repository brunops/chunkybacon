var CB = (function() {
  return {
    each: function(arr, callback) {
      for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
      }
    },

    map: function(arr, callback) {
      var new_arr = [];
      this.each(arr, function(e) {
        new_arr.push(callback(e));
      });

      return new_arr;
    },

    inject: function(arr, callback, initial) {
      if (!arr.length) {
        return [];
      }

      // clone arr (superficial)
      var new_arr = arr.slice(0);

      if (typeof initial === 'undefined') {
        initial = new_arr.shift();
      }

      var total = initial;
      this.each(new_arr, function(e) {
        total = callback(e, total);
      });

      return total;
    },

    reverse: function(arr) {
      var new_arr = []
      this.each(arr, function(e) {
        new_arr.unshift(e);
      });

      return new_arr;
    },

    select: function(arr, conditionalCallback) {
      var new_arr = [];

      this.each(arr, function(e) {
        if (!!conditionalCallback(e)) {
          new_arr.push(e);
        }
      });

      return new_arr;
    }
  };
})();

