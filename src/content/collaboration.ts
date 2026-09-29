export const collaboration = {
  lede: "Readers can enjoy a team project and still have no idea what you did. Authorship is a set of plain sentences.",
  outcomes: [
    "Separate your role from the roles of collaborators and from material you did not make.",
    "Rewrite one vague contribution line into a sentence someone could check.",
  ],
  nameThese: [
    "Team size, and the role you actually held.",
    "What collaborators designed or built.",
    "What you personally designed or built.",
    "External assets, libraries, templates, tutorials, starter code, or generated material.",
  ],
  notes: [
    "“We” is fine for a decision the team made. It is not a substitute for your part.",
    "If you used generated code, images, text, or sound, say so, and say what you changed. A reader should be able to tell what you authored.",
    "Credit the pack, the sample, the scan, the tutorial, and the classmate who built the rig. If you cannot say what you added, the project is not ready for the front of the portfolio.",
  ],
  pairs: [
    {
      caption: "A game",
      weak: "I helped make the game.",
      better:
        "I designed the enemy state system and implemented enemy movement, attack behavior, and health logic in Unity C#.",
    },
    {
      caption: "Programming, more specific",
      weak: "I helped with the programming.",
      better:
        "I implemented the enemy behavior system in Unity C#, including movement, attack states, damage, and respawning.",
    },
    {
      caption: "Visuals",
      weak: "I worked on the visuals.",
      better:
        "I created the real-time particle system, the projection layout, and the TouchDesigner visual pipeline.",
    },
    {
      caption: "A team XR project",
      weak: "We built the VR scene.",
      better:
        "I implemented the hand-tracking for grab and placement. My teammate built the environment art and lighting in Unity.",
    },
  ],
  ask: [
    "Can someone tell what I personally contributed?",
    "Did I credit the template, pack, tutorial, or generated material I started from?",
  ],
};
