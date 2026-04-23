import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Sujal Uprety",
  role: "Game Programmer",
  introduction: "I turn game ideas into solid, playable systems.",
  description:
    "I am a game programmer focused on gameplay programming and system-level development using Unreal Engine and Unity. My work includes implementing core mechanics, AI behavior, input systems, and overall game logic with a strong emphasis on clean architecture and performance. I enjoy solving technical problems, optimizing systems, and building gameplay features that are easy to extend as a project grows. I am currently completing my bachelor’s degree and preparing for a professional career in game development.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Sujal_Uprety_CV.pdf`,
  links: {
    github: "https://github.com/SujalUprety",
    itchIO: "https://sujalisdead.itch.io",
    linkedIn: "https://www.linkedin.com/in/SujalUprety",
  }
};


export const games: Game[] = [
  {
    name: "First Person Zombie Shooter - Under Development",
    description: "A first-person zombie shooter built in Unreal Engine 5 using C++. Implemented so far: simple zombie AI, basic first-person mechanics including weapon collision handling, a health and stamina system with visual effects, and a torch with on/off visual effects including mild flickering. The focus so far is on clean C++ code, functional gameplay mechanics, and basic player-enemy interactions.",
    genres: ["Horror", "Apocalpyse", "Survival"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
    ],
    media: [
      { source: "https://www.youtube.com/embed/x1j-C1JcaEk", type: MediaType.YouTube },
    ],
  },
  {
    name: "Input Action Keys Image",
    description: "An Unreal Engine plugin that allows developers to display input action keys visually in-game. Useful for tutorials, gameplay guides, and demonstrations, this plugin integrates seamlessly with the Input Action system and provides a clean, customizable visual representation of player controls.",
    genres: ["Plugin"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Fab, url: "https://www.fab.com/listings/cab44aef-b528-4bcd-a22d-20b01bf62476" },
    ],
    media: [
      { source: "/images/games/InputActionKeysImage/InputActionKeysImage.png", type: MediaType.Image},
      { source: "https://www.youtube.com/embed/5mSKDtxmfvg", type: MediaType.YouTube },
      { source: "/images/games/InputActionKeysImage/Screenshot1.png", type: MediaType.Image},
      { source: "/images/games/InputActionKeysImage/Screenshot2.png", type: MediaType.Image}
    ],
  }
];