String.prototype.digit = function () {
  return this.match(/^\d$/) ? true : false;
};