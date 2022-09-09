import readline from 'readline-sync';
import Months from './exercise2';

const monthNames = Object.values(Months);
const month = readline.keyInSelect(monthNames, 'Select a month');

const mapMonths = (start: number, end: number) => monthNames.slice(start - 1, end);
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

const hemisphere = readline.keyInSelect(['North', 'South'], 'Select a hemisphere');

const monthsBySeason = Object.values(MonthsBySeasonInHemisphere)[hemisphere];
Object.entries(monthsBySeason).map((entry) => {
  const [season, months] = entry;

  if (months.includes(monthNames[month])) console.log(season);
});
