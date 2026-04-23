
# Game Development Portfolio Template

This is a simple and customizable portfolio template for game developers. It allows you to showcase your personal information, CV, and game projects in a structured way.
You can check out [my portfolio](https://solilius.github.io/portfolio) for example

## Prerequisites

- Have a GitHub account.
- Fork or clone this repository to your account (if not already done).

## 🚀 Getting Started

Follow these steps to set up and customize your portfolio.

### 1️⃣ Add Your CV
Place a **PDF file** of your CV in the following directory:

`public/files/my_cv.pdf`


### 2️⃣ Add Game Images
For each game you want to showcase, create a folder inside:

`public/images/games/my-awesome-game`

Each folder should contain the images related to that game.<br />
`public/images/games/my-awesome-game/Game_Screenshot_1.jpg`<br />
`public/images/games/my-awesome-game/Game_Screenshot_2.jpg`<br />
`public/images/games/my-awesome-game/Game_Screenshot_3.jpg`

### 3️⃣ Set Your Profile Picture
Replace the default profile image with your own:

`public/images/Profile.jpg`


### 4️⃣ Set the Favicon
Replace the default favicon with your custom icon:

`public/images/favicon.ico`

### 5️⃣ Update Your Personal Information
Edit the following file to add your personal details:

`src/data.ts`

Inside this file, update the `personalInfo` object with details such as:

~~~js
const PersonalInfo: AboutMeData = {
  name: "YOUR_NAME",
  role: "YOUR_ROLE",
  introduction: "SHORT_INTRODUCTION",
  description: "TELL_ABOUT_YOURSELF",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/NAME",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/NAME",
  }
};
~~~

### 6️⃣ Add Your Games
In the same `src/data.ts` file, update the `games` array to include your projects.
~~~js
const games: Game[] = [
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    source: { name: "COURSE_NAME"; url: "https://www.udemy.com/course/SOME_COURSE" } // Optional
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];
~~~

### 7️⃣ Add Your Number to .env file
1. Create `.env` file on the root 
2. Add your WhatsApp number (including country code)

~~~
REACT_APP_WA_NUMBER=+000000000000
~~~

## 🌍 Hosting Your Portfolio

Once your portfolio is ready, follow these steps to deploy it online.

###  Deploy with GitHub Pages
Go to **Settings > Pages** in your repository and configure the deployment:

1. Set Source to **Deploy from Branch**.
2. Choose the branch you want to deploy.
3. Deply from your terminal 

~~~sh
npm run deploy
~~~

Your portfolio will be live at:

~~~
https://your-github-username.github.io/your-repo-name/
~~~

---

Your portfolio should now be set up and live. Enjoy!


