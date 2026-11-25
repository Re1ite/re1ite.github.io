# Re1ite 的学习日志

本站使用 [Hexo](https://hexo.io/) 与 [Vivia](https://github.com/saicaca/hexo-theme-vivia)，站点地址为 [re1ite.github.io](https://re1ite.github.io/)。

## 写一篇笔记

在项目目录下运行以下命令，再打开 `source/_posts/` 中生成的 Markdown 文件。也可以复制现有文章，修改文件名、标题、日期和正文。

```powershell
npm run new -- "今天的学习标题"
```

自带的 `start-here.md` 是写作示例，可以替换或删除。文章里 `<!-- more -->` 之前的字会用在首页摘要中。

## 本地预览

```powershell
npm ci
npm start
```

打开 [localhost:4000](http://localhost:4000/)。横幅图片在 `source/images/banner.jpg`，导航和主题设置在 `_config.vivia.yml`。

## 更新网站

向 `main` 分支提交并推送笔记后，GitHub Actions 会生成静态页面并部署。仓库的 **Settings → Pages → Source** 使用 **GitHub Actions**。
