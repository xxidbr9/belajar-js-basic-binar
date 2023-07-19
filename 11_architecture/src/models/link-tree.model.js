class LinkTreeModel {
  links = [];
  constructor() {
    this.links = [
      { name: "binar", link: "https://www.binaracademy.com" },
      { name: "fb", link: "https://www.facebook.com" }
    ];
  }

  insert(name, link) {
    this.links.push({ name, link });
  }

  findAll() {
    return this.links;
  }

  findByName(name) {
    return this.links.find(value => value.name === name);
  }

  delete(name) {
    this.links = this.links.filter(value => value.name !== name);
    return;
  }

  edit(name, newName, newLink) {
    const finnedLinkIndex = this.links.findIndex(value => value.name === name);
    if (finnedLinkIndex < 0) return;

    this.links[finnedLinkIndex] = {
      name: newName || name,
      link: newLink
    };
    return;
  }
}

module.exports = LinkTreeModel;
