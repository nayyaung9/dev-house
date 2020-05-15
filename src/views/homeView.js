import { elements } from './base';
import data from '../data';

export const renderHome = () => {
  const users = data.map((item, index) => {
    return `<li>${item.name}</li>`
  })
  const markup = `
    <div>
      Myanmar Dev-House
      <ul>${users}</ul>
    </div>
  `;

  elements.app.innerHTML = markup
}
