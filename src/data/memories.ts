
export interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

export interface JarMemory {
  id: number;
  text: string;
}

// Timeline memories - the main events of your relationship
export const timelineMemories: Memory[] = [
  {
    id: 1,
    title: "Our First Meeting",
    date: "April 15, 2022",
    description: "The day our eyes met for the first time. You were wearing that blue dress that I still remember vividly.",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "First Date",
    date: "April 30, 2022",
    description: "That little Italian restaurant downtown. You laughed when I spilled wine on my shirt, but somehow still agreed to a second date.",
    imageUrl: "https://images.unsplash.com/photo-1551818176-60579e574b91?w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Our First Trip Together",
    date: "July 22, 2022",
    description: "That weekend getaway to the mountains. We got lost, found that amazing viewpoint, and decided getting lost together wasn't so bad.",
    imageUrl: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Moving In Together",
    date: "February 10, 2023",
    description: "The day we turned a house into our home. Remember how we argued about where to put the couch?",
    imageUrl: "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Our Second Anniversary",
    date: "April 15, 2024",
    description: "Two years of laughter, growth, and love. Looking forward to many more years of adventures with you.",
    imageUrl: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&auto=format&fit=crop"
  }
];

// Gallery photos
export const galleryPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&auto=format&fit=crop",
    alt: "Us at the beach",
    caption: "Summer vacation"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?w=600&auto=format&fit=crop",
    alt: "Dinner date night",
    caption: "Our favorite restaurant"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1508949623292-dda5e5f5cf91?w=600&auto=format&fit=crop",
    alt: "Hiking together",
    caption: "Weekend adventure"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop",
    alt: "Sunset walk",
    caption: "Beautiful evening"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop",
    alt: "Winter wonderland",
    caption: "First snowfall together"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop",
    alt: "Birthday celebration",
    caption: "Your special day"
  }
];

// Memory jar notes - these are the small, sweet memories
export const jarMemories: JarMemory[] = [
  { id: 1, text: "The way you scrunch your nose when you laugh" },
  { id: 2, text: "Our spontaneous midnight ice cream runs" },
  { id: 3, text: "How you always hold my hand during scary movies" },
  { id: 4, text: "The cute notes you leave in my lunch" },
  { id: 5, text: "Your incredible passion when you talk about your dreams" },
  { id: 6, text: "Our first kiss in the rain" },
  { id: 7, text: "The day we adopted our pet" },
  { id: 8, text: "How you're always the first to apologize after an argument" },
  { id: 9, text: "Dancing with you in the kitchen" },
  { id: 10, text: "How you remember everyone's birthdays" },
  { id: 11, text: "The time we got caught in that thunderstorm" },
  { id: 12, text: "Your patience when I'm stressed" }
];

// Playlist of romantic songs
export const playlist = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    url: "#" // In a real application, this would link to the audio file
  },
  {
    id: 2,
    title: "All of Me",
    artist: "John Legend",
    url: "#"
  },
  {
    id: 3,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    url: "#"
  },
  {
    id: 4,
    title: "At Last",
    artist: "Etta James",
    url: "#"
  },
  {
    id: 5,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    url: "#"
  }
];

// Love letter content
export const loveLetter = {
  title: "To My Everything",
  content: `
    My love,

    As we celebrate three beautiful years together, I find myself at a loss for words to fully express what you mean to me. You came into my life and painted it with colors I never knew existed. Your smile, your laugh, your kind heart - they all became my favorite parts of every day.

    These past three years have been the most incredible journey. We've grown together, faced challenges together, and created the most beautiful memories that I'll cherish forever. Your support and belief in me have made me a better person, and your love has given me a strength I never knew I had.

    Remember when we first met? I knew then that you were someone special, but I could never have imagined just how perfectly our lives would intertwine. Every moment with you feels like coming home - comfortable, safe, and exactly where I'm meant to be.

    Thank you for your patience on my bad days, for your excitement on my good days, and for your unwavering love through it all. You are not just my partner, but my best friend and favorite person in this world.

    Here's to three years of us, and to many more years of adventures, growth, and unconditional love. I fall more in love with you every day, and I can't wait to see what our future holds.

    Forever yours,
    [Your Name]
  `
};
