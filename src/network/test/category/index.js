import saveCategory from "./save_category";

export default class Category {
  async save_category(newCategory) {
    return saveCategory(newCategory)
  }
}