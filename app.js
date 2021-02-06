"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('colors.ts');
const { mostrarMenu, pause } = require('./helpers/messages');
console.clear();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Hola mundo'.green);
    let opt = '';
    do {
        opt = yield mostrarMenu();
        console.log({ opt });
        if (opt !== '0') {
            yield pause();
        }
        else {
            console.log('\nGracias por usar la app'.bold);
        }
    } while (opt !== '0');
});
main();
