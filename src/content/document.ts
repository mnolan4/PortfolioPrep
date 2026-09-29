export interface ProjectType {
  id: string;
  title: string;
  show: string;
  capture: string;
  explain: string;
  mistake: string;
  evidence: string;
}

export const projectTypes: ProjectType[] = [
  {
    id: "vr",
    title: "VR / XR",
    show: "A person in the headset, and a capture of what they see.",
    capture:
      "Headset point of view, a second camera on the player, and the physical space if they move through a room.",
    explain:
      "What the person can do, what you built, and what the engine or a template already provided.",
    mistake: "A still from the editor, or a photo of someone standing still in a headset.",
    evidence:
      "A short cut from the player’s view to a friend watching them reach, duck, or turn, plus one sentence on the interaction you wrote.",
  },
  {
    id: "games",
    title: "Games",
    show: "Play. The moment that makes it this game.",
    capture: "Thirty to sixty seconds of representative play, and the interface while someone is using it.",
    explain: "Your role, the rules you authored, and one change you made after someone played it.",
    mistake: "A title screen and a cinematic, with no play.",
    evidence: "A clip of the system you implemented, captioned with the rule a player is using.",
  },
  {
    id: "installations",
    title: "Interactive installations",
    show: "The room, the visitor, and the response.",
    capture:
      "A wide shot for scale, a close-up of the action that triggers the work, and a clip of the work changing because of a person.",
    explain: "What a visitor does in the first minute, and what the system does back.",
    mistake: "A beauty photograph of an empty room, or only the sensor taped to a truss.",
    evidence:
      "Someone crosses the space and the image, sound, or object responds. One extra shot can show the hardware.",
  },
  {
    id: "projection",
    title: "Projection mapping",
    show: "The image locked to the physical surface, from where the audience stood.",
    capture:
      "A photograph from the intended viewpoint, a short video of motion on that surface, and a setup shot if alignment was the hard part.",
    explain: "What you mapped onto, how you aligned it, and what is live rather than a rendered movie.",
    mistake: "A flat screenshot of the content, with no surface in the frame.",
    evidence: "The same motion seen on the object, plus one sentence on the mesh, mask, or lineup.",
  },
  {
    id: "mocap",
    title: "Motion capture",
    show: "The body and the result of the data, in one sequence if you can.",
    capture:
      "The performer in the volume or in front of the sensor, a skeleton or data view, and the driven character, graphic, or installation.",
    explain: "What was tracked, what you cleaned or retargeted, and what you chose to ignore.",
    mistake: "Only a viewport skeleton, or only a polished character with the capture hidden.",
    evidence:
      "Performer, then the driven result, with the pipeline named: optical stage, inertial suit, or a depth sensor.",
  },
  {
    id: "audio",
    title: "Spatial audio",
    show: "That the sound has a place, and what the listener does to it.",
    capture:
      "A stereo or binaural excerpt someone can play, a simple speaker or headphone diagram, and a listener if the body is part of the work.",
    explain: "The playback format, what you authored, and how interaction changes the mix.",
    mistake: "A waveform and no sound, or a stereo file described as if it were a speaker array.",
    evidence: "A short excerpt with a caption that says how to listen and what should move.",
  },
  {
    id: "physical",
    title: "Interactive physical systems",
    show: "The object, the hand, and the response.",
    capture: "A close-up of the interaction, a wider shot of the build, and a simple wiring or signal-flow diagram.",
    explain: "What the person does, what the system does back, and which parts you fabricated, wired, or coded.",
    mistake: "A wiring diagram with no object, or a closed box that never moves on camera.",
    evidence: "A hand presses, turns, or approaches, and the system answers. The diagram matches that clip.",
  },
  {
    id: "performance",
    title: "Performances",
    show: "Time. The performer, the system, and the relationship to the audience.",
    capture: "A continuous excerpt from a run, a wide shot, and a cue list or patch only as support.",
    explain: "What was live, what was fixed, and what you operated or programmed during the show.",
    mistake: "A rehearsal still and a patch, with no sense of sequence.",
    evidence: "Sixty to ninety seconds from a performance, and a sentence on your cueing, instrument, or visual system.",
  },
  {
    id: "hci",
    title: "HCI / research",
    show: "The question, the thing people used, and what you learned.",
    capture: "The prototype in use, the testing setup, and one concrete observation.",
    explain: "The question, the method in plain language, your role, and what you will not claim.",
    mistake: "A literature summary and a layout board, with no one using the prototype.",
    evidence: "A person using a test version, then the revision you made because of what you saw.",
  },
  {
    id: "generative",
    title: "Generative and computational work",
    show: "The system running, and more than one result. A single frame is not a generative project.",
    capture:
      "A clip of change over time, two or three outputs that show the range, and a short diagram or code excerpt if the rule is the point.",
    explain: "What varies, what you control, and what you decided not to randomize.",
    mistake: "One still that could have been drawn by hand, with the system unexplained.",
    evidence: "A short run that shows the rule, plus two outputs that make the rule visible.",
  },
];

export const documentPage = {
  lede: "Capture the experience a person had. Then keep one view of the software if it explains a decision you made.",
  outcomes: [
    "Choose the evidence that fits the kind of project, not a generic shot list.",
    "Spot the record that only shows the tool, and replace it.",
  ],
  tryThis:
    "Film the interaction before you strike the set. A later screenshot of the software will not replace the room, the player, or the sound.",
  ask: [
    "What evidence supports the claim that I know this tool?",
    "If the installation were struck tonight, what record would I still have?",
  ],
};
