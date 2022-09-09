"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const exercise2_1 = __importDefault(require("./exercise2"));
const exercise3_1 = __importDefault(require("./exercise3"));
const monthNames = Object.values(exercise2_1.default);
const month = readline_sync_1.default.keyInSelect(monthNames, 'Select a month');
console.log('🚀 ~ file: exercise4.ts ~ line 7 ~ month', month);
const seasonNames = Object.values(exercise3_1.default);
const mapMonths = (start, end) => monthNames.slice(start - 1, end);
const MonthsBySeasonInHemisphere = {
    North: {
        Autumn: mapMonths(9, 12),
        Winter: ['Dezembro', 'Janeiro', 'Fevereiro', 'Março'],
        Spring: mapMonths(3, 6),
        Summer: mapMonths(6, 9),
    },
    South: {
        Autumn: mapMonths(3, 6),
        Winter: mapMonths(6, 9),
        Spring: mapMonths(9, 12),
        Summer: ['Dezembro', 'Janeiro', 'Fevereiro', 'Março'],
    },
};
const hemisphere = readline_sync_1.default.keyInSelect(['North', 'South'], 'Select a hemisphere');
console.log('🚀 ~ file: exercise4.ts ~ line 31 ~ hemisphere', hemisphere);
const monthsBySeason = Object.values(MonthsBySeasonInHemisphere)[hemisphere];
Object.entries(monthsBySeason).map((entry) => {
    const [season, months] = entry;
    if (months.includes(monthNames[month]))
        console.log(season);
});
