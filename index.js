/**
 * @file 文件介绍
 * @author imcooder@gmail.com
 */
/* eslint-disable fecs-camelcase */
/* eslint-disable */
var _ = require('underscore');
/**
 * 
 * @param {*} input 
 * @param {*} array 
 */
function get(input, path) {
    if (!input) {
        return null;
    }
    if (!Array.isArray(path)) {
        return null;
    }
    if (path.length === 0) {
        return input;
    }
    let obj = input;
    while (path.length) {
        let name = path.shift();
        let matches = /^\[(\d+)\]$/gi.exec(name);
        if (matches) {
            if (!Array.isArray(obj)) {
                throw new Error('not array');
            }
            let idx = matches[1];
            if (idx >= obj.length) {
                throw new Error('not exist');
            }
            obj = obj[idx];
        } else {
            if (!_.isObject(obj)) {
                throw new Error('not map');
            }
            if (!_.has(obj, name)) {
                throw new Error('not exist');
            }
            obj = obj[name];
        }
    }
    return obj;
};

module.exports = {
    get: function(input, path) {
        if (!path) {
            return null;
        }
        if (!_.isString(path)) {
            return null;
        }
        path = path.split('/');
        let ret = get(input, path);
        return ret;
    },
    getEx: function(input, path) {
        if (!path) {
            return null;
        }
        if (!_.isString(path)) {
            return null;
        }
        path = path.split('/');
        let ret = undefined;
        try {
            ret = get(input, path);
        } catch (error) {
            ret = undefined;
        }
        return ret;
    },
    setEx: function(input, path, value) {

    },
};