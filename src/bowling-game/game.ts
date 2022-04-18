export function answer(input:string): number {
  
  if (input === "X") {
    return 10;
  }
    
    const regexp = new RegExp('[X\/\\d]', 'g');
    const test = regexp.test(input);
    
    if(!test) {
      return 0;
    }
    
    const totalBeforeMods = input.split("|").reduce((total, frame) => total + frameValue(frame), 0);
    
  return totalBeforeMods;  
}

function frameValue(frame: string): number {
  const total = frame.split("").map(char => {
    if (char === "-") { return 0;}
    else if (char === "/" || char === "X") { return 10;}
    return Number(char);
  }).reduce((total, ballValue) => total + ballValue);
  
  return Math.max(total, 10);
}

/*
characters = X, -, /, 1-9

array of frames (frame is a string, with 1 or 2 characters)
  -> calculate frame value as a whole
  -> sum
  -> handle spare/ strike mods
*/