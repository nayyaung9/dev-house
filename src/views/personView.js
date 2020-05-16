// Components
import Header from '../components/Header';
import TagList from '../components/TagList';

const PersonView = {
  render: () => {
    return `
      <div>
        ${Header.render()}
        <div class="tags_panel">${TagList.render()}</div>
        <div class="ui grid stackable">
        </div>
      </div>
    `;
  }
}

export default PersonView;