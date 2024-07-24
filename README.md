# Personal Webpage

Welcome to the repository for my personal webpage! This project includes everything needed to set up and run my website, including scripts for automation and server configuration.

You can visit the live website here: [joselopes.dev](https://joselopes.dev)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Introduction

This repository contains the source code and configuration files for my personal webpage. The site is built with HTML, CSS, and (just a sprinkle of) JavaScript. It includes Markdown files that are automatically converted to HTML using a Pandoc script. The server is configured with Nginx, and there's a script to launch the server easily.

## Features

- **Markdown to HTML Conversion**: Automatically convert Markdown files to HTML using Pandoc.
- **Nginx Configuration**: Pre-configured Nginx files for easy setup.
- **Customizable HTML/CSS/JS**: Modify the frontend with your own HTML, CSS, and JavaScript files.
- **Easy Server Launch**: Scripts included to start the server with a single command.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/MIBismuth/personal-webpage
    cd personal-webpage
    ```

2. **Install Dependencies**:
    - Ensure you have [Pandoc](https://pandoc.org/installing.html) installed.
    - Ensure you have Nginx installed and properly configured on your system.

3. **Configure Nginx**:
    - Modify the `server_start.sh` script to include the correct path to your cloned directory.
    - **WARNINIG**: this script will override your nginx.conf!

## Usage

1. **Convert Markdown to HTML**:
    If you want to write more posts in Markdown, run the Pandoc script to convert your Markdown files to HTML:
    ```sh
    .website/markdown/convert_markdown.sh
    ```

    You can include 

2. **Launch the Server**:
    Use the provided script to start the server:
    ```sh
    .start_server.sh
    ```

3. **Access Your Webpage**:
    Open your web browser and go to `http://localhost` (or the configured server address).

## Markdown headers

You can include the following headers in your Markdown files for additional metadata and configuration:

- title: The title of the document.
- sub-title: The subtitle of the document.
- author: The author of the document.
- date: The date of the document (you can use R code to generate the date dynamically).
- toc_on: Enable or disable the table of contents (set to true or false).
- numbering: Enable or disable section numbering (set to true or false).

## File Structure
- **nginx/**: Nginx configuration files.
- **html/**: HTML files for the website.
- **css/**: Stylesheets.
- **js/**: JavaScript files.
- **markdown/**: Source Markdown files.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
