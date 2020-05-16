import { elements } from './base';
import data from '../data';
import * as utils from '../utils/stats';

export const renderHome = () => {

  const tags = utils.tags().map((resultTags) => {
    return `<a class="ui large label" style="margin-top: 5px;">${resultTags.name}</a>`;
  });

  const users = data.map(({
    name,
    emoji,
    url,
    twitter,
    tags,
    description 
  }) => {
    const profile = `https://unavatar.now.sh/twitter/${twitter}`;
    const userUrl = `<a href=${url} target="_blank" class="user_url">${url}</a>`;
    const renderTags = tags => {
      var i, text = "";
      for (i = 0; i < tags.length; i++) {
        text += `<a class="ui large label" style="margin-top: 5px;">${tags[i]}</a>`;
      }
      return text;
    }

    return `
      <div class="four wide column">
        <div class="ui cards">
          <div class="card" style="width: 100% !important;">
            <div class="content">
              <img class="right floated mini ui image" src=${profile} style="width: 50px" />
              <div class="header">
                ${name} ${emoji} <br />
                <span>${userUrl}<span>
              </div>
              <div class="description" style="padding-bottom: 15px;">
                <p>${description}</p>
              </div>
              <div class="meta">${renderTags(tags)}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  });


  const markup = `
    <div class="main_app_section">
      <h2 class="ui center aligned icon header">
        <i class="connectdevelop icon"></i>
        Myanmar Dev-House
      </h2>
      <div class="tags_panel">${tags.join("")}</div>
      <div class="ui grid stackable">
        ${users.join("")}
      </div>
    </div>
  `;

  elements.app.innerHTML = markup
}
