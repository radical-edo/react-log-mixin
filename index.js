'use strict';

const isDevelopment = function isDevelopment(host) {
  return contains(host, '.lvh') || contains(host, 'localhost') || contains(host, '127.0.0.1');
};

const contains = function contains(string, partial) {
  return -1 < string.indexOf(partial);
};

const LogMixin = {
  log(message) {
    if (isDevelopment(window.location.hostname)) {
      console.debug(message);
    }
  }
};

module.exports = LogMixin;
