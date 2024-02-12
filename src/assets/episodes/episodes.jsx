import streampicture1 from "./stream-picture1.jpg";
import streampicture2 from "./stream-picture2.jpg";
import streampicture3 from "./stream-picture3.jpeg";
import streampicture4 from "./stream-picture5.jpg";
import streampicture5 from "./stream-picture6.jpg";
import streampicture6 from "./stream-picture7.jpg";

export const episodes = [
  {
    image: streampicture1,
    episode: "EPISODE 02",
    title: "Unveiling Entrepreneurial Insights",
    description:
      "Delve into the world of entrepreneurship as we uncover valuable insights, strategies, and stories from seasoned business.",
  },

  {
    image: streampicture2,
    episode: "EPISODE 03",
    title: "Navigating Through Challenges",
    description:
      "Join us on a journey through challenges and triumphs as we explore how successful individuals navigate obstacles.",
  },

  {
    image: streampicture3,
    episode: "EPISODE 04",
    title: "Conversations with Trailblazers",
    description:
      "Engage in enlightening conversations with trailblazers who have left an indelible mark in their fields.",
  },

  {
    image: streampicture4,
    episode: "EPISODE 05",
    title: "Leadership Unleashed",
    description:
      "Uncover the keys to impactful leadership as we delve into strategies, stories, and insights that unleash your leadership potential.",
  },

  {
    image: streampicture5,
    episode: "EPISODE 06",
    title: "Minds at Work",
    description:
      "Join us in exploring the dynamic world of productivity, creativity, and innovation. Discover how leading minds make work both meaningful and effective.",
  },

  {
    image: streampicture6,
    episode: "EPISODE 07",
    title: "The Art of Resilience",
    description:
      "Dive into the art and science of resilience. Learn practical tips and inspiring stories that empower you to bounce back stronger in the face of challenges.",
  },
];

export const episodeDetails = {
  episode_id: "12345",
  title: "The Mystery Unveiled",
  season_number: 2,
  episode_number: 8,
  duration: "45 minutes",
  release_date: "2024-02-20",
  summary:
    "In this thrilling episode, the main characters uncover a long-held secret, leading to unexpected alliances and betrayals.",
  genres: ["Drama", "Mystery"],
  cast: [
    {
      actor_id: "5678",
      name: "John Doe",
      character: "Detective James Smith",
    },
    {
      actor_id: "91011",
      name: "Jane Smith",
      character: "Dr. Emily Williams",
    },
    {
      actor_id: "121314",
      name: "Chris Johnson",
      character: "Antagonist",
    },
  ],
  crew: {
    director: {
      id: "1516",
      name: "Alice Director",
    },
    writers: [
      {
        id: "1718",
        name: "Bob Writer",
      },
      {
        id: "1920",
        name: "Catherine Screenwriter",
      },
    ],
    producers: [
      {
        id: "2122",
        name: "David Producer",
      },
      {
        id: "2324",
        name: "Eva Executive Producer",
      },
    ],
    cinematographer: {
      id: "2526",
      name: "Frank Cinematographer",
    },
    editor: {
      id: "2728",
      name: "Grace Editor",
    },
  },
  locations: [
    {
      id: "2930",
      name: "City Police Station",
    },
    {
      id: "3132",
      name: "Abandoned Warehouse",
    },
  ],
  ratings: {
    IMDb: 8.9,
    "Rotten Tomatoes": 85,
  },
};
