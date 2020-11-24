class Group {
  constructor(iterable) {
    if (!iterable[Symbol.iterator])
      throw new Error("The argument is not iterable");

    if (typeof iterable === "object") {
      this.collection = [];

      for (const item of iterable) {
        if (!this.has(item)) {
          this.collection.push(item);
        }
      }
    } else {
      this.collection = [iterable];
    }
  }

  has(item) {
    return this.collection.indexOf(item) !== -1;
  }

  add(item) {
    if (!this.has(item)) this.collection.push(item);

    return item;
  }

  delete(deleteItem) {
    if (this.has(deleteItem)) {
      this.collection = this.collection.filter((item) => item !== deleteItem);
    }

    return this.collection;
  }

  get length() {
    return this.collection.length;
  }

  static from(iterable) {
    return new Group(iterable);
  }
}

console.log(new Group("DASSD").delete("DASSD"));
