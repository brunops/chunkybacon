var CB = (function() {
  return {
    each: function(arr, callback) {
      for (var i = 0; i < arr.length; ++i) {
        arr[i] = callback(arr[i]);
      }
      return arr;
    }
  };
})();
