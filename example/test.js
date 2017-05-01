/**
 * @file 文件介绍
 * @author imcooder@gmail.com
 */
/* eslint-disable fecs-camelcase */
/*jshint esversion: 6 */
const jsonSelect = require('../index');
const _ = require('underscore');

let a = {
    level1: 'name',
    level2: 100,
    level3: [
        1,
        2,
        3,
        4,
        5,
    ],
    level4: [{
        name: 'sub',
    }],
    'level5': {
        name: 'test',
        objs: [{
            name: 'sub'
        }]
    }
};


console.log('level1:', jsonSelect.getEx(a, 'level1'));
console.log('level3/[2]:', jsonSelect.getEx(a, 'level3/[2]'));
console.log('level4/sub:', jsonSelect.getEx(a, 'level4/sub'));
console.log('level4/[0]/name:', jsonSelect.getEx(a, 'level4/[0]/name'));
console.log('level4/sub/[0]/name:', jsonSelect.getEx(a, 'level4/sub/[0]/name'));
console.log('level5/objs/[0]:', jsonSelect.getEx(a, 'level5/objs/[0]'));
console.log('level5/objs/[0]/name:', jsonSelect.getEx(a, 'level5/objs/[0]/name'));