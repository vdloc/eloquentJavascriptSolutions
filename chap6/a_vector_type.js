class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    if (!(vector instanceof Vec)) throw new Error("Invalid vector argument");
    return new Vec(vector.x + this.x, vector.y + this.y);
  }

  minus(vector) {
    if (!(vector instanceof Vec)) throw new Error("Invalid vector argument");
    return new Vec(this.x - vector.x, this.y - vector.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}
