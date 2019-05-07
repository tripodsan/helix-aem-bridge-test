module.exports = class ModelAdapter {
  use() {
    return this.resource.list;
  }
};