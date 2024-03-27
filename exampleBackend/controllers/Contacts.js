'use strict';

var utils = require('../utils/writer.js');
var Contacts = require('../service/ContactsService');

module.exports.addContact = function addContact (req, res, next, body) {
  Contacts.addContact(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addContact = function addContact (req, res, next, body) {
  Contacts.addContact(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteContact = function deleteContact (req, res, next, contactId) {
  Contacts.deleteContact(contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findContactByStatus = function findContactByStatus (req, res, next) {
  Contacts.findContactByStatus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContactById = function getContactById (req, res, next, contactId) {
  Contacts.getContactById(contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateContact = function updateContact (req, res, next, body) {
  Contacts.updateContact(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateContact = function updateContact (req, res, next, body) {
  Contacts.updateContact(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
