const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

const withBoxUnlocked = (body) => {
  let isBoxUnlocked = false;

  try {
    box.content;
    isBoxUnlocked = true;
  } catch (e) {
    if (e) {
      box.unlock();
    }
    try {
      body();
    } catch (err) {
      throw new Error(err);
    }
  } finally {
    if (!isBoxUnlocked) {
      box.lock();
    }
  }
};

withBoxUnlocked(function () {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
