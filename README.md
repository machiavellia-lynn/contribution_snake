# GitHub Contribution Snake Animation

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Saviru/contribution_snake/snake.yml) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/saviru/contribution_snake/remove_progressBar.yml?label=Post%20processing)

![GitHub forks](https://img.shields.io/github/forks/Saviru/contribution_snake) ![GitHub Repo stars](https://img.shields.io/github/stars/Saviru/contribution_snake)


## v1.9.25

A dynamic SVG animation that displays your GitHub contribution graph as a snake game! This project automatically generates and updates the snake animation based on your GitHub activity.
<a name="howto"><a><a name="howto"><a>
## Dark Theme

<img src="dist/github-contribution-grid-snake-dark.svg">

```markdown
![Snake animation](https://github.com/{your-username}/{repository-name}/blob/main/dist/github-contribution-grid-snake-dark.svg)
```



## Light Theme

<img src="dist/github-contribution-grid-snake.svg">

```markdown
![Snake animation](https://github.com/{your-username}/{repository-name}/blob/main/dist/github-contribution-grid-snake.svg)
   ```

## 📋 About

This project uses [Platane/snk](https://github.com/Platane/snk) to generate a snake animation that "eats" your GitHub contributions. It runs automatically at midnight via GitHub Actions and only updates when you've made new contributions.

## ✨ Features

- **Automatic Updates**: The snake animation updates daily at midnight (if you made contributions)
- **Multiple Themes**: Includes both light and dark mode versions
- **Customizable**: You can change the snake color and other visual elements
- **Contribution-Aware**: Only generates new animations when you've been active on GitHub

## 🚀 Setup Instructions

1. **Fork this repository**
2. **Enable GitHub Actions** in your repository settings
3. **Customize the workflow file** at `.github/workflows/snake.yml` if needed
4. **First run workflow manually** at `.github/workflows/snake.yml` (Otherwise it will start at midnight automatically.)
5. **Add the snake animation to your profile**:

   [See here](#howto)

   Replace `{your-username}` and `{repository-name}` with your GitHub username and the name of your repository.

## ⚙️ Customization

You can customize the snake animation by modifying the workflow file:

- **Change snake color**: Edit `color_snake=blue` to your preferred color
- **Change theme**: Edit `palette=github-dark` to another theme
- **Adjust check frequency**: Modify the cron schedule in the workflow file

## 🛠️ How It Works

1. GitHub Actions runs the workflow on a schedule (midnight daily)
2. The workflow checks if you've made any contributions
3. If contributions are found, it generates new snake animations
4. The updated SVG files are committed back to your repository
5. Display the SVG in your README or GitHub profile

## 📄 License

```Copyright (c) 2025 Saviru Kashmira Atapattu```

This project uses components from [Platane/snk](https://github.com/Platane/snk) which is licensed under the MIT License.

## 🙏 Credits

- [Platane/snk](https://github.com/Platane/snk) for the snake animation generator
- GitHub Actions for automation

## 📊 Recent Updates

Check the commit history for recent animation updates!


<hr>
<p align="center">Made with ❤️ for the GitHub community</p>
