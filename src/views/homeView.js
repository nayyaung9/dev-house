import { elements } from './base';
import data from '../data';
import * as utils from '../utils/stats';
import axios from 'axios';

export const renderHome = () => {

  const tags = utils.tags().map((resultTags) => {
    return `<a class="ui large label">${resultTags.name}</a>`;
  });

  const users = data.map(({ name, emoji, description }) => {
    return `
      <div class="column">
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg" />
              <div class="header">
                ${name} ${emoji}
              </div>
              <div class="meta">
                ${description}
              </div>
              <div class="description">
                Elliot requested permission to view your contact details
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
  });


  const markup = `
    <div class="ui container">
      <h2 class="ui center aligned icon header">
        <i class="connectdevelop icon"></i>
        Myanmar Dev-House
      </h2>
      <div class="tags_panel">${tags.join("")}</div>
     
      <div class="ui four column grid">
        <div class="row">${users.join("")}</div>
      </div>
    </div>
  `;

  elements.app.innerHTML = markup
}
