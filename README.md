# GitHub Contribution Snake 🐍

<div align="center">

## Current Theme: Light

<div>
  <!-- Button that links to the theme toggle workflow -->
  <a href="https://github.com/Saviru/contribution_snake/actions/workflows/toggle-theme.yml?query=is%3Acompleted" title="Go to workflow">
    <img alt="Theme Toggle Status" src="https://github.com/Saviru/contribution_snake/actions/workflows/toggle-theme.yml/badge.svg">
  </a>
</div>

<div>
  <a href="https://github.com/Saviru/contribution_snake/actions/workflows/toggle-theme.yml/trigger?workflow_dispatch?theme=dark" title="Toggle Theme">
    <img alt="Switch to Dark Mode" src="https://img.shields.io/badge/Switch%20to%20Dark%20Mode-black?style=for-the-badge&logo=github&logoColor=white">
  </a>
</div>

<!-- Snake Animation -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Saviru/contribution_snake/main/dist/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Saviru/contribution_snake/main/dist/github-contribution-grid-snake.svg">
  <img alt="GitHub Contribution Snake Animation" src="https://raw.githubusercontent.com/Saviru/contribution_snake/main/dist/github-contribution-grid-snake.svg">
</picture>

</div>

## How it works

This animation is generated using a GitHub Actions workflow that runs daily. The snake's path is algorithmically generated to move through my GitHub contribution graph.

- 🌞 **Light theme**: Default visualization with a green snake on a light background
- 🌙 **Dark theme**: Dark mode visualization with custom colors

To change the theme, click on the button above to trigger the theme toggle workflow. After the workflow completes (usually within a minute), refresh this page to see the updated theme.

### Manual Theme Toggling

1. Click the button above to go to the workflow page
2. Click "Run workflow" button in the GitHub Actions interface
3. Select your desired theme from the dropdown
4. Click "Run workflow" to execute
5. Wait for the workflow to complete
6. Return to this page and refresh to see the changes
