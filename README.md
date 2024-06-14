## <p align="center" style="text-decoration: none !important;padding:0;margin:0;"> <br>DV 200 Term 2</p>

<p align="center">[Logosmall](https://github.com/Sean-D-231121/Group_Project_DV200_Term_2/assets/125360666/763e8af6-1fe4-449d-9cab-496213b6338a)

</p>

## <p align="center" style="text-decoration: none !important;padding:0;margin:0;">Interactive Dashboard</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Product mockup](#product-mockup)
  * [Project description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
   * [Custon UI](#custom-ui)
* [Development Process](#development-process)
    * [Highlights](#highlights)
    * [Challenges](#challenges)
* [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
    * [Mockup Video](#mockup-video)
    * [Video Demonstration](#demonstration-video)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About the project:

### Product mockup:
![Mockup](./Wireframes/product_mockup.png)

### Project description:
As a data-driven developer, my mission was to harness the power of Big Data to create a web application that could analyze and visualize vast data sets in a meaningful way. I eagerly embraced the challenge and explored the world of APIs. Recognizing the overwhelming amount of available information, my goal was to develop an intelligent algorithm that could uncover hidden patterns and connections within the data.
I carefully selected an API created by GenshinDev, based on the content of the game Genshin Impact by Hoyoverse. With the API in hand, I delved into coding, focusing on efficiently handling large data volumes and creating user-friendly visualizations for data exploration and insights.

### Built with:
This project is built with React and Node.js, as well as advanced Javascript and Chart.js.

## Getting Started:

### Prerequisites:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en)
* [NPM](https://www.npmjs.com/)

### How to install:

* React Bootstrap <br> `npm install react-bootstrap bootstrap`
* React Chartjs 2 <br> `npm i react-chartjs-2 chart.js`
* React Router DOM <br> `npm i react-router-dom`
* Axios <br> `npm i axios`
* Chart.js <br> `npm i chart.js`
* Bootstrap <br> `npm i bootstrap`

## Features and Functionality:

The web application consists of three main pages. The home page displays all the characters from the game, allowing the user to select four of them to create a team. As the user clicks on each character, information about them is displayed in the bottom right corner, and a chart dynamically shows the rarity of the selected characters.

On the compare page, the user can select two characters from dropdown lists to display data about them, as well as three charts showing their hit damage in bar, pie, and polar chart formats.

The timeline page allows the user to select a character from a dropdown list, and then displays all the weapons with the same weapon type as the selected character. At the bottom of the page, a line chart displays the base attacks and rarity of those weapons.

## Concept Process:

### Ideation:

During the ideation phase of the project, I decided to use the GenshinDev API, which provides data for the game Genshin Impact by Hoyoverse. My initial plan was to create a team builder for the game's characters, using comparative data to show which characters work better together and which should be replaced. This data would be displayed using a bar chart to show the percentage of how well each character fits within the team, and a radar chart to show their skill strengths. I also planned to display a timeline showing when each character was the most popular in the game's most difficult combat arena, "the abyss." While some aspects of the project evolved during development, these core ideas remained the same.

### Wireframes:

![Home](./Wireframes/Homepage.png)
![Compare](./Wireframes/Comparison%20page.png)
![Timeline](./Wireframes/Timeline%20page.png)

### Custom UI:

<img src="https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Icon_Paimon_Menu.png/revision/latest?cb=20210605102449"  height="75">
<img src="https://static.wikia.nocookie.net/gensin-impact/images/3/3c/Achievement_Stone_Harbor%27s_Nostalgia_Series_I.png/revision/latest?cb=20210702105315" height="75">
<img src="https://static.wikia.nocookie.net/gensin-impact/images/0/00/Achievement_Meetings_in_Outrealm_Series_I.png/revision/latest?cb=20210702105309"  height="75">
<img src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Achievement_Sumeru_The_Gilded_Desert_Series_I.png/revision/latest?cb=20220928034653"  height="75">

## Development Process

### Highlights

Personally, I found the experience of working on this project to be immensely rewarding. One of the key highlights for me was the opportunity to learn a new programming language, React.

Another aspect of the project that I found particularly enjoyable was the chance to further improve my understanding of APIs. As someone who has worked with APIs in the past, I was already familiar with the basic concepts and principles involved. However, this project allowed me to delve deeper into the topic and gain a more nuanced understanding of how APIs work, how to use them effectively, and how to troubleshoot issues that might arise.

Overall, I feel that this project was an incredibly valuable learning experience for me. Not only did it allow me to expand my skill set and gain a deeper understanding of key concepts and techniques, but it also gave me the opportunity to work on a real-world project with practical applications. I look forward to building on what I've learned and continuing to grow and develop as a programmer and developer in the future.

### Challenges

Throughout the course of this project, I faced a number of challenges that tested my skills and pushed me out of my comfort zone. One of the most significant struggles I encountered was related to the API I was working with. Despite my previous experience working with APIs, I found that the structure of this particular API was quite different from what I was used to. This initially threw me off and made it difficult for me to get the API to work as intended.

Another significant challenge I faced during the project was related to the charts that I was working with. Specifically, I struggled with figuring out how to let the charts change dynamically in response to user input. This required a deep understanding of the underlying code that powered the charts, as well as an ability to think creatively about how to implement dynamic functionality.

Overall, while the project presented a number of significant challenges, I feel that it was an incredibly valuable learning experience for me. Through struggling with issues related to the API and the charts, I was able to push my boundaries as a developer and gain new insights into how to approach complex problems. Looking back on the project, I feel a sense of pride in what I was able to accomplish, and I'm excited to apply what I've learned to future projects and challenges.

## Future Implementation

Reflecting on my work on this project, there are several areas where I feel there is room for improvement and further development. One of the key areas where I would like to focus in the future is on stabilizing the code and improving consistency. While I was able to get the code working effectively for the purposes of this project, I feel that there is room for improvement in terms of streamlining the code, making it more efficient, and reducing redundancies. In addition, I would like to develop a more consistent coding style and documentation approach, to make the code more accessible to others and easier to maintain over time.

Another area where I would like to expand and enhance the project is in making it more interactive and engaging for users. While the website is functional and provides a useful service, I believe that there is room to add more interactivity and animation to the site, in order to make it more visually appealing and engaging for users. This might involve developing new features and functionalities, such as interactive maps or dynamic data visualizations, or adding subtle animations and effects to various elements of the site.

Finally, I would also like to explore the possibility of incorporating an official API from Hoyoverse, if and when one becomes available. This would allow me to expand the functionality of the site even further, providing users with access to a wider range of data and insights related to the Hoyoverse platform. By incorporating an official API, I would be able to further enhance the usefulness and relevance of the website, while also demonstrating my proficiency and versatility as a developer.

## Final Outcome

### Mockup Video


https://user-images.githubusercontent.com/109971278/230770574-3e270853-fc89-4135-88d1-3e389ddd4074.mp4


### Demonstration Video


https://user-images.githubusercontent.com/109971278/230775565-568ab52f-46fa-4170-a28f-cec0b8478b82.mp4


## Conclusion
This project has been an incredible learning experience for me, and I am truly grateful for the opportunity to work on it. Throughout the course of the project, I have learned so much, from technical skills to project management and collaboration.

Working on this project has allowed me to put into practice many of the concepts and techniques I have learned in my studies, and it has also challenged me to expand my knowledge and skills. From developing the initial idea to designing and implementing the project, I have gained a deeper understanding of the software development process and the importance of effective communication and teamwork.

I am particularly proud of the progress I have made in developing my programming skills. As someone who was relatively new to coding at the start of this project, I am thrilled with the progress I have made and the many new tools and techniques I have learned along the way. I have also gained a greater appreciation for the importance of testing and debugging, and how these skills are critical to developing high-quality software.

Overall, this project has been an incredibly fulfilling experience, and I am eager to continue working on it and implementing new features and improvements in the future. I believe that this project has not only helped me to develop my technical skills, but has also given me valuable experience working in a team environment and managing a project from start to finish. I am excited to take these skills and experiences with me as I move forward in my career, and I am confident that they will serve me well in whatever challenges lie ahead.


## Authors
Mareli Lourens - [Find me on Github](https://github.com/MareliLourens)

## Contact
Mareli Lourens - [Email](mailto:221119@virtualwindow.co.za)
<br>
Project Link - https://github.com/MareliLourens/dv_200_term_1.git

## Acknowledgements
* [Genshin Impact](https://genshin.hoyoverse.com/en/) <!-- OW reference: HoYoverse, Shanghai Miha Touring Film Technology Co., Ltd. 2020. Genshin Impact. 4.1. GeForce Now, PlayStation 5, PlayStation 4, Android, Microsoft Windows, iOS.mainland China: HoYoverse, worldwide:Cognosphere Pte. Ltd. -->
* [Genshin Impact Wiki](https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki) <!-- OW reference: Fandom. 2023. Genshin Impact Wiki. https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki (Accessed 7 November 2023) -->
* [Genshin Impact API](https://genshin.dev/) <!-- OW reference: Marvin "NurMarvin" Witt. 2020. Fan-Made Genshin Impact API. https://genshin.dev/ (Accessed 7 November 2023) -->
