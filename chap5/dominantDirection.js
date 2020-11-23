const SCRIPTS = require("./SCRIPTS");
const characterScript = (code) =>
  Object.values(SCRIPTS).find((script) =>
    script.ranges.some(([from, to]) => code >= from && code < to)
  ) || null;

const countBy = (items, groupName) =>
  [...items].reduce((counts, item) => {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name === name);

    known === -1 ? counts.push({ name, count: 1 }) : counts[known].count++;

    return counts;
  }, []);

const dominantDirection = (text) => {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  if (!scripts.length) return;

  let dominantScript = scripts[0];

  for (let script of scripts) {
    dominantScript =
      script.count >= dominantScript.count ? script : dominantScript;
  }

  return SCRIPTS.find((script) => script.name === dominantScript.name)
    .direction;
};

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
