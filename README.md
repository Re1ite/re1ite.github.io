# Re1ite's Study Journal

The journal is built with [Hexo](https://hexo.io/) and the [Vivia theme](https://github.com/saicaca/hexo-theme-vivia). Visit [re1ite.github.io](https://re1ite.github.io/).

## Write a post

Run the following command from the project folder, then open the new Markdown file in `source/_posts/`. You can also copy an existing post and edit its filename, title, date, and body.

```powershell
npm run new -- "What I Learned Today"
```

You can replace or remove the example post in `start-here.md`. The text before `<!-- more -->` appears as the excerpt on the homepage.

## Preview locally

```powershell
npm ci
npm start
```

Open [localhost:4000](http://localhost:4000/). The banner is in `source/images/banner.jpg`. Navigation and theme settings are in `_config.vivia.yml`.

## Publish an update

Commit and push your changes to `main`. GitHub Actions builds the static pages and deploys them. **Settings → Pages → Source** is set to **GitHub Actions**.
