import * as utils from '../utils/stats';

const TagList = {
  render: () => {
    const tags = utils.tags().map((resultTags) => {
      return `<a class="ui large label" style="margin-top: 5px;">${resultTags.name}</a>`;
    });
    return tags.join('');
  }
}

export default TagList;