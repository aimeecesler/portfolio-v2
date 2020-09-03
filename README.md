# Homework Assignment 2: My Portfolio
This repository contains my first portfolio site, including About Me, Contact and Portfolio pages. My purpose for this project was to create a portfolio website matching the format of the provided examples while customizing it with my own personal information as well as creating a responsive layout.

-----

## Table of Contents
* [Installation](#installation)
* [Usage](#Usage)
* [Creating the Website](#creating-the-website)
* [ADA Compliance](#ada-compliance)
* [HTML Validation](#html-validation)
* [Minimum Requirements](#minimum-requirements)
* [Credits](#credits)
* [Badges](#badges)
* [Links](#Links)
* [License](#license)

-----

## Installation
1. Follow the GitHub Repository Link in the [Links](#Links) section below.
1. Clone the repository using an SSH key.
1. Open GitBash and use "git clone" to clone the repository.

-----

## Usage
Edit using VSCode after [installation](#installation). HTML and CSS files are provided.

#### HTML

![HTML](indexHTML.png)

#### CSS

![CSS](ALLCSS.png)

-----

## Creating the Website

During the process of creating this repository, I tried to utilize the Bootstrap CSS as much as possible, only utilizing my own CSS sheet for specific custom colors and layouts. At first I had a CSS sheet for each page as well as one for the communal elements (i.e. navbar, footer, etc.) but I found that I could use the Bootstrap CSS for so much that it became cumbersome to bounce back and forth between the different CSS sheets when there was only a few items on each of them. I chose to then consolidate all of the CSS sheets into a single master sheet and I found this to be a much simpler option for my custom style elements.  

One of the things that I found extremely useful while using the Bootstrap CSS is their grid system and it's responsive properties. This system takes the guess work out of what your code will look like in reality and really made it so much easier to bring my design to life.

You will find the following upon exploring this website:

* A navbar which includes links to each individual page, in addition my name is a link back to the home page.
    * At page widths smaller than 768px the navbar will collapse and create a dropdown navigation rather than the links being on a horizontal display.
    * The active page link will be highlighted in a slightly darker color.
* A main section over a background image, the main section has a white background and takes up approximately 1/3 of the page.
    * This main section will remain at 1/3 width of the page until page widths smaller than 400px at which point it will span the entire page (with small margins on each side).
* A footer which remains at the bottom of the page and displays the Copyright.
* On the About Me (index) page you will find a Bio section with a photo, the paragraph text wraps around this photo at all times.
* On the contact page you will find a form to enter your name, email and a message for submission.
* On the portfolio page you will find 5 portfolio images (these are placeholders for the time being since I have to portfolio images to share yet).
    * At page widths 992px and larger you will find these photos in rows of two.
    * At page widths smaller than 992px these images will be in rows of one.

Overall this project was very enlightening and a great way to familiarize myself with the Bootstrap CSS as well as will the grid layout system.

-----

## ADA Compliance
This webpage was run through the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) to ensure compliance. The only errors detected were contrast errors which I could not correct due to the requirement of utilizing the same color scheme as the original example.

-----

## HTML Validation
Each page of this webpage was run through the [W3C Markup Validation Service](https://validator.w3.org/) to ensure valid and correct HTML. There were no errors or issues found.

-----

## Minimum Requirements

* Functional, deployed application :heavy_check_mark:

* GitHub repository with README describing the project :heavy_check_mark:

* Navbar must be consistent on each page. :heavy_check_mark:

* Navbar on each page must contain links to Home/About, Contact, and Portfolio pages. :heavy_check_mark:

* All links must work. :heavy_check_mark:

* Must use semantic html. :heavy_check_mark:

* Each page must have valid and correct HTML. (use a validation service) :heavy_check_mark:

* Must contain your personalized information. (bio, name, images, links to social media, etc.) :heavy_check_mark:

* Must properly utilize Bootstrap components and grid system. :heavy_check_mark:

-----

## Credits
A huge thanks to our teaching staff, especially Jonathan and Leif, they make it easier to understand the chaos.

Reources:

* [Bootstrap](https://getbootstrap.com/)
* [w3schools](https://www.w3schools.com)
* [Tutorial Republic - Bootstrap Grid System](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php)

-----

## Badges
![badge](https://img.shields.io/github/issues-raw/aimeecesler/aimee-esler-portfolio-hw)

-----

## Links
[Repository Link](https://github.com/aimeecesler/aimee-esler-portfolio-hw)

[Deployed Application](https://aimeecesler.github.io/aimee-esler-portfolio-hw/)

-----

## License
Copyright &copy; [2020] [Aimee Corbin Esler]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.