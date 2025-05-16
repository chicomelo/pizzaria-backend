"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const content = (0, fs_1.readFileSync)('package.json', 'utf-8');
console.log(content);
