import {v4 as uuidv4} from 'uuid';

export default function saveCategory(newCategory) {
  newCategory["id"] = uuidv4();
  let items = localStorage.getItem('categories');
  try {
    if (items) {
      let jsonItems = JSON.parse(items);
      jsonItems.push(newCategory);
      localStorage.setItem('categories', JSON.stringify(jsonItems))
      return {error: null, category: newCategory}
    } else {
      localStorage.setItem('categories', JSON.stringify([newCategory]));
      return {error: null, category: newCategory}
    }
  } catch (e) {
    return {error: e, category: {}}
  }
}