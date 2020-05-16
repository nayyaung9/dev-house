import data from '../data';
import axios from 'axios';

function merge(prop) {
  return function (acc, obj) {
    return [...obj[prop], ...acc];
  };
}

function countInstances(acc, tag) {
  acc[tag] = acc[tag] ? acc[tag] + 1 : 1;
  return acc;
}

export const tags = () => {
  const allTags = data.reduce(merge('tags'), []);
  const counts = allTags.reduce(countInstances, {});
  // sort and filter for any tags that only have 1
  const tags = Object.entries(counts)
    .sort(([, countA], [, countB]) => countB - countA)
    // Only show the tag if this topic has 3 or more people in it
    .filter(([, count]) => count >= 3)
    .map(([name, count]) => ({ name, count }));
  return [{ name: 'all', count: data.length }, ...tags];
}
