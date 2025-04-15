
export interface Song {
  title: string;
  artist: string;
  description?: string;
  audioFile?: string; // Path to the audio file in the public/music folder
}

export const playlist: Song[] = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    description: "Our first dance song",
    audioFile: "perfect.mp3"
  },
  {
    title: "All of Me",
    artist: "John Legend",
    description: "The song that was playing when we first met",
    audioFile: "all-of-me.mp3"
  },
  {
    title: "A Thousand Years",
    artist: "Christina Perri",
    description: "Our anniversary song",
    audioFile: "a-thousand-years.mp3"
  },
  {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    description: "Our road trip favorite",
    audioFile: "thinking-out-loud.mp3"
  }
];
