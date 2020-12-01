let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/^'|'$|(\s+')|('\s+)/g, '"'));
