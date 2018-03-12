/**
 * @file 文件介绍
 * @author imcooder@gmail.com
 */
/* eslint-disable fecs-camelcase */
/*jshint esversion: 6 */
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
            if (idx >= obj.length || idx < 0) {
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
}
/**
 * 
 * @param {*} input 
 * @param {*} array 
 */
function del(input, path) {
    if (!input) {
        return;
    }
    if (!Array.isArray(path)) {
        return;
    }
    if (path.length === 0) {
        return;
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
            if (idx >= obj.length || idx < 0) {
                return;
            }
            if (path.length === 0) {
                obj.splice(idx, 1);
                return;
            }
            obj = obj[idx];
        } else {
            if (!_.isObject(obj)) {
                throw new Error('not map');
            }
            if (!_.has(obj, name)) {
                return;
            }
            if (path.length === 0) {
                delete obj[name];
                return;
            }
            obj = obj[name];
        }
    }
    return obj;
}

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
    getEx: function(input, path, def) {
        if (!path) {
            return def;
        }
        if (!_.isString(path)) {
            return def;
        }
        path = path.split('/');
        let ret = def;
        try {
            ret = get(input, path);
        } catch (error) {
            ret = def;
        }
        return ret;
    },
    delete: function(input, path) {
        if (!path) {
            return input;
        }
        if (!_.isString(path)) {
            return input;
        }
        path = path.split('/');
        del(input, path);
        return input;
    },
    deleteEx: function(input, path) {
        if (!path) {
            return input;
        }
        if (!_.isString(path)) {
            return input;
        }
        path = path.split('/');
        try {
            del(input, path);
        } catch (error) {
        }
        return input;
    },
    setEx: function(input, path, value) {

    },
};
