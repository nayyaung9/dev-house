import data from "../data";

const UserList = {
  render: () => {
    const users = data.map(
      ({ name, emoji, url, github, tags, description, computer, phone }) => {
        const profile = `https://unavatar.now.sh/github/${github}`;
        const githubProfile = `https://github.com/${github}`;
        const userUrl = `<a href=${url} target="_blank" class="user_url">${url}</a>`;
        const renderTags = tags => {
          var i,
            text = "";
          for (i = 0; i < tags.length; i++) {
            text += `<a class="ui label" style="margin-top: 5px;">${tags[i]}</a>`;
          }
          return text;
        };

        const renderLaptop = name => {
          switch (name) {
            case "windows":
              return `<img src='../../assets/windows.svg' class="devices"/>`;
            case "linux":
              return `<img src='../../assets/linux.png' class="devices"/>`;
            case "apple":
              return `<img src='../../assets/apple.svg' class="devices"/>`;
            default:
              return "-";
          }
        };

        const renderPhone = name => {
          switch (name) {
            case "android":
              return `<img src='../../assets/android.png' class="devices"/>`;
            case "iphone":
              return `<img src='../../assets/iphone.png' class="devices"/>`;
            default:
              return "-";
          }
        };

        return `
        <div class="col-md-3 col-sm-6" style="margin-bottom: 20px;">
            <div class="card" style="width: 100% !important; height: 100%;">
              <div class="content" style="height: 35vh;">
                <img class="right floated mini ui image" src=${profile} style="width: 60px; border-radius: 100%; background: linear-gradient(145deg, #252c4b, #20253f) !important;
                  box-shadow: 5px 5px 10px #1b1f35, -5px -5px 10px #2b3357 !important;" />
                <div class="header">
                  <h4>${name} &nbsp; ${emoji}</h4>
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
                  <a href=${githubProfile} target="_blank" style="font-size: 20px; color: #b8c1ec;"><u>@${github}</u></a>
                </div>
              </div>
            </div>

        </div>
      `;
      }
    );
    return users.join("");
  }
};

export default UserList;
