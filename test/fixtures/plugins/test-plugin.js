exports.store = {
  myStoreFunction: function() {},

  Model: function(a, b, callback) {
    if (typeof b === 'function') {
      callback = b
      b = ''
    }
    return this.callParent(a + b, callback)
  }
}

exports.definition = {
  myDefinitionFunction: function() {}
}
