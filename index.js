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
            let idx = matches[1];
            if (!Array.isArray(obj)) {
                return null;
            }
            if (idx >= obj.length) {
                return null;
            }
            obj = obj[idx];
        } else {
            if (!_.isObject(obj)) {
                return null;
            }
            if (!_.has(obj, name)) {
                return null;
            }
            obj = obj[name];
        }
    }
    return obj;
};

module.exports = {
    getEx: function(input, path) {
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
    setEx: function(input, path, value) {

    },
};