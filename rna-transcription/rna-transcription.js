//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let result = "";

  const split = dna.split("");
  for (const dna of split) {
    if (dna === "C") {
      result += "G";
    } else if (dna === "G") {
      result += "C";
    } else if (dna === "T") {
      result += "A";
    } else if (dna === "A") {
      result += "U";
    }
  }

  return result;
};
