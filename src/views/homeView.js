import { elements } from './base';
import data from '../data';
import * as utils from '../utils/stats';

export const renderHome = () => {
  const users = data.map((item, index) => {
    return `<li>${item.name}</li>`;
  });

  const tags = utils.tags().map((resultTags) => {
    return `<a class="ui image label" style="background-color: #b8c1ec; ">${resultTags.name}</a>`;
  });

  const markup = `
    <div class="ui container">
      Myanmar Dev-House
      <br />
 
      ${tags.join("")}

     
      <ul>${users.join("")}</ul>
    </div>
  `;

  elements.app.innerHTML = markup
}
