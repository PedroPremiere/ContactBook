'use strict';


/**
 * Add a new contact to the store
 * Add a new contact to the store
 *
 * body Contact Create a new contact in the store
 * returns Contact
 **/
exports.addContact = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "100-100-100",
  "name" : "Vladan Kovacevic",
  "id" : "550e8400-e29b-41d4-a716-446655440000",
  "favorite" : true,
  "createDate" : "createDate"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new contact to the store
 * Add a new contact to the store
 *
 * body Contact Create a new contact in the store
 * returns Contact
 **/
exports.addContact = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "100-100-100",
  "name" : "Vladan Kovacevic",
  "id" : "550e8400-e29b-41d4-a716-446655440000",
  "favorite" : true,
  "createDate" : "createDate"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a contact
 * delete a contact
 *
 * contactId UUID contactId to delete
 * no response value expected for this operation
 **/
exports.deleteContact = function(contactId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds all Contact
 * Multiple status values can be provided with comma separated strings
 *
 * returns List
 **/
exports.findContactByStatus = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "phone" : "100-100-100",
  "name" : "Vladan Kovacevic",
  "id" : "550e8400-e29b-41d4-a716-446655440000",
  "favorite" : true,
  "createDate" : "createDate"
}, {
  "phone" : "100-100-100",
  "name" : "Vladan Kovacevic",
  "id" : "550e8400-e29b-41d4-a716-446655440000",
  "favorite" : true,
  "createDate" : "createDate"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find pet by ID
 * Returns a single Contact
 *
 * contactId UUID ID of Contact to return
 * returns Contact
 **/
exports.getContactById = function(contactId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "100-100-100",
  "name" : "Vladan Kovacevic",
  "id" : "550e8400-e29b-41d4-a716-446655440000",
  "favorite" : true,
  "createDate" : "createDate"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing contact
 * Update an existing contact by Id
 *
 * body Contact Update an existent contact in the store
 * returns Contact
 **/
exports.updateContact = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "100-100-100",
  "name" : "Vladan Kovacevic",
  "id" : "550e8400-e29b-41d4-a716-446655440000",
  "favorite" : true,
  "createDate" : "createDate"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing contact
 * Update an existing contact by Id
 *
 * body Contact Update an existent contact in the store
 * returns Contact
 **/
exports.updateContact = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "100-100-100",
  "name" : "Vladan Kovacevic",
  "id" : "550e8400-e29b-41d4-a716-446655440000",
  "favorite" : true,
  "createDate" : "createDate"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

