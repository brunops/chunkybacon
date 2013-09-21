var CB = (function() {
  return {
    each: function(arr, callback) {
      for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
      }
    },

    map: function(arr, callback) {
      CB.each(arr, function(e, i) {
        arr[i] = callback(e, i);
      });
      return arr;
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
    }
  };
})();
