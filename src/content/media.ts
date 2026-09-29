export const mediaPage = {
  lede: "Captions, framing, and length do more for a portfolio than another filter. The picture has to carry a meaning.",
  outcomes: [
    "Choose a hero image and a caption that tell a stranger what they are seeing.",
    "Plan video, sound, and diagrams so the experience survives after the build comes down.",
  ],
  sections: [
    {
      id: "hero",
      title: "Hero images and thumbnails",
      paragraphs: [
        "The hero is the image or still that explains the project before the paragraph. It should show the experience, not a logo and not the editor.",
        "The thumbnail is how people choose what to open. If it is muddy, dark, or a software icon, they will not open the project. Crop to the action, and check it at the small size.",
      ],
    },
    {
      id: "captions",
      title: "Captions",
      paragraphs: [
        "A caption says what the reader is looking at and why it matters. “Final installation” names a phase. It does not name the interaction.",
      ],
    },
    {
      id: "video",
      title: "Video length and screen capture",
      paragraphs: [
        "Thirty to ninety seconds of the experience is usually enough. Cut the long walk up to the room and the menu where nothing happens.",
        "For games and XR, record the picture a player or headset wearer sees. Keep the cursor, hands, or controller in frame when that is the interaction. An external camera of the person belongs beside it, not instead of it, when the body is part of the work.",
      ],
    },
    {
      id: "photo",
      title: "Installation photography, light, and scale",
      paragraphs: [
        "Photograph the light the audience actually saw. A work light left on for “safety” will make a dark piece look like a classroom.",
        "Put a person, a door, or the floor in the wide shot so the scale is obvious. Then a close-up of the action that triggers the work.",
        "Show participants when you can. Get permission for faces. Hands and bodies are enough when you cannot. If the room is empty, say so in the caption rather than pretending the photograph is the experience.",
      ],
    },
    {
      id: "compare",
      title: "Before and after, prototype and final",
      paragraphs: [
        "Two frames with the same angle are easier to read than a pile of unlike stills. Label which is the test and which is the finished showing.",
      ],
    },
    {
      id: "audio",
      title: "Audio excerpts",
      paragraphs: [
        "Give people something to play. Say headphones or speakers, and say what should move or change. A waveform screenshot is not the excerpt.",
        "If the clip is speech, a short transcript helps. A music cue does not need one.",
      ],
    },
    {
      id: "diagrams",
      title: "Diagrams",
      paragraphs: [
        "A floor plan, a signal-flow sketch, or a simple architecture diagram helps when the system is hard to see in a photo. Label the parts in the same words you use in the paragraph.",
        "One diagram that matches a clip is better than five diagrams that match the software.",
      ],
    },
  ],
  captions: [
    {
      caption: "Installation",
      weak: "Final installation.",
      better:
        "Visitor movement controls the projected particle system through Kinect skeletal tracking.",
    },
    {
      caption: "XR",
      weak: "Screenshot.",
      better:
        "Headset view during the grab. I wrote the hand-tracking interaction. My teammate built the room model.",
    },
    {
      caption: "Sound",
      weak: "Audio.",
      better:
        "Stereo excerpt. The voice moves from the left wall to the center when someone steps forward. Listen on headphones.",
    },
    {
      caption: "Research",
      weak: "User testing.",
      better:
        "Second playtest. Three of five people missed the small target, so I enlarged it before the next round.",
    },
  ],
  ask: ["Does the caption say what is happening, or only that the image is final?"],
};
