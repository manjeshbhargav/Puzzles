function Hash () {
  this.table = {};
}

Hash.legit = key => (key !== undefined && key !== null);

Hash.prototype = {
  size () {
    return Object.keys(this.table).length;
  },
  keys () {
    return Object.keys(this.table);
  },
  has (key) {
    return this.table.hasOwnProperty(key);
  },
  get (key) {
    if (Hash.legit(key) && this.has(key)) {
      return this.table[key];
    }
    return null;
  },
  set (key, value) {
    if (Hash.legit(key)) {
      this.table[key] = value;
    }
  },
  remove (key) {
    if (Hash.legit(key)) {
      delete(this.table[key]);
    }
  },
  clear () {
    this.table = {};
  }
};

module.exports = Hash;