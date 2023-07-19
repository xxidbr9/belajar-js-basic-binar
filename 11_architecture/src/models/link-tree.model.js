class LinkTreeModel {
  links = [];
  constructor() {
    this.links = [
      { name: "binar", link: "https://www.binaracademy.com" },
      { name: "fb", link: "https://www.facebook.com" }
    ];
  }

  insert(name, link) {
    const newLink = { name, link };
    this.links.push(newLink);
    return newLink;
  }

  findAll() {
    return this.links;
  }

  findByName(name) {
    const finnedLink = this.links.find(value => value.name === name);
    if (!finnedLink) return;
    return finnedLink;
  }

  delete(name) {
    const deletedLink = this.links.find(value => value.name === name);
    if (!deletedLink) return;

    this.links = this.links.filter(value => value.name !== name);
    return deletedLink;
  }

  edit(name, newName, newLink) {
    const finnedLinkIndex = this.links.findIndex(value => value.name === name);
    if (finnedLinkIndex < 0) return;
    const editedData = {
      name: newName || this.links[finnedLinkIndex].name,
      link: newLink || this.links[finnedLinkIndex].link
    };

    this.links[finnedLinkIndex] = editedData;

    return editedData;
  }
}

module.exports = LinkTreeModel;
