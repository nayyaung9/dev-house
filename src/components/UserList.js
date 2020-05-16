import data from '../data';

const UserList = {
  render: () => {
    const users = data.map(({
      name,
      emoji,
      url,
      github,
      tags,
      description,
      computer,
      phone,
    }) => {
      const profile = `https://unavatar.now.sh/github/${github}`;
      const githubProfile = `https://github.com/${github}`;
      const userUrl = `<a href=${url} target="_blank" class="user_url">${url}</a>`;
      const renderTags = tags => {
        var i, text = "";
        for (i = 0; i < tags.length; i++) {
          text += `<a class="ui label" style="margin-top: 5px;">${tags[i]}</a>`;
        }
        return text;
      }

      const renderLaptop = (name) => {
        switch(name) {
          case 'windows':
            return `<img src='../../assets/windows.svg' class="devices"/>`;
          case 'linux':
            return `<img src='../../assets/linux.png' class="devices"/>`;
          case 'apple':
            return `<img src='../../assets/apple.svg' class="devices"/>`;
          default:
            return '-';
        }
      }

      const renderPhone = (name) => {
        switch(name) {
          case 'android':
            return `<img src='../../assets/android.png' class="devices"/>`;
          case 'iphone':
            return `<img src='../../assets/iphone.png' class="devices"/>`;
          default:
            return '-';
        }
      }

      return `
        <div class="four wide column">
          <div class="ui cards">
            <div class="card" style="width: 100% !important;">
              <div class="content">
                <img class="right floated mini ui image" src=${profile} style="width: 60px" />
                <div class="header">
                  <a href="/#/user" class="href"><u>${name}</u></a> ${emoji} <br />
                  <span>${userUrl}<span>
                </div>
                <div class="description" style="padding-bottom: 15px;">
                  <p>${description}</p>
                </div>
                <div class="meta">${renderTags(tags)}</div>
              </div>

              <div class="devices_row">
                <div class="device_column">${renderLaptop(computer)}</div>
                <div class="device_column">${renderPhone(phone)}</div>
                <div class="device_column">
                  <a href=${githubProfile} target="_blank">${github}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    return users.join('');
  }
}

export default UserList;