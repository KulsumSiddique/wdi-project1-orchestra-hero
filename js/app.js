$(() => {
  const $startBtn = $('.start');
  const $box = $('div');
  let intervalId;

  const audioLowG = new Audio();
  audioLowG.src = 'sounds/Glow.wav';

  const audioB = new Audio();
  audioB.src = 'sounds/Bwav.wav';

  const audioCs = new Audio();
  audioCs.src = 'sounds/Cswav.wav';

  const audioD = new Audio();
  audioD.src = 'sounds/Dwav.wav';

  const audioE = new Audio();
  audioE.src = 'sounds/Ewav.wav';

  const audioFn = new Audio();
  audioFn.src = 'sounds/Fnwav.wav';

  const audioFs = new Audio();
  audioFs.src = 'sounds/Fswav.wav';

  const audioG = new Audio();
  audioG.src = 'sounds/Gwav.wav';

  const audioGs = new Audio();
  audioGs.src = 'sounds/Gshighwav.wav';

  const audioA = new Audio();
  audioA.src = 'sounds/Awav.wav';

  const audioAs = new Audio();
  audioAs.src = 'sounds/Ashighwav.wav';

  const audioHighB = new Audio();
  audioHighB.src = 'sounds/Bhighwav.wav';

  const audioHighCn = new Audio();
  audioHighCn.src = 'sounds/Cnhighwav.wav';

  const audioHighCs = new Audio();
  audioHighCs.src = 'sounds/Cshighwav.wav';

  const audioHighD = new Audio();
  audioHighD.src = 'sounds/Dhighwav.wav';

  const metronome = new Audio();
  metronome.src = 'sounds/metronome.mp3';

  $(document).on('keydown', function(e) {
    if (e.which === 90) {
      audioLowG.play();
    } else if (e.which === 65) {
      audioB.play();
    } else if (e.which === 69) {
      audioCs.play();
    } else if (e.which === 68) {
      audioD.play();
    } else if (e.which === 70) {
      audioE.play();
    } else if (e.which === 71) {
      audioFn.play();
    } else if (e.which === 89) {
      audioFs.play();
    } else if (e.which === 72) {
      audioG.play();
    } else if (e.which === 85) {
      audioGs.play();
    } else if (e.which === 74) {
      audioA.play();
    } else if (e.which === 73) {
      audioAs.play();
    } else if (e.which === 75) {
      audioHighB.play();
    } else if (e.which === 76) {
      audioHighCn.play();
    } else if (e.which === 80) {
      audioHighCs.play();
    } else if (e.which === 186) {
      audioHighD.play();
    } else {
      console.log('null');
    }

  });
  $(document).on('keyup', function(e) {
    if (e.which === 90) {
      audioLowG.pause();
      audioLowG.currentTime = 0;
    } else if (e.which === 65) {
      audioB.pause();
      audioB.currentTime = 0;
    } else if (e.which === 69) {
      audioCs.pause();
      audioCs.currentTime = 0;
    } else if (e.which === 68) {
      audioD.pause();
      audioD.currentTime = 0;
    } else if (e.which === 70) {
      audioE.pause();
      audioE.currentTime = 0;
    } else if (e.which === 71) {
      audioFn.pause();
      audioFn.currentTime = 0;
    } else if (e.which === 89) {
      audioFs.pause();
      audioFs.currentTime = 0;
    } else if (e.which === 72) {
      audioG.pause();
      audioG.currentTime = 0;
    } else if (e.which === 85) {
      audioGs.pause();
      audioGs.currentTime = 0;
    } else if (e.which === 74) {
      audioA.pause();
      audioA.currentTime = 0;
    } else if (e.which === 73) {
      audioAs.pause();
      audioAs.currentTime = 0;
    } else if (e.which === 75) {
      audioHighB.pause();
      audioHighB.currentTime = 0;
    } else if (e.which === 76) {
      audioHighCn.pause();
      audioHighCn.currentTime = 0;
    } else if (e.which === 80) {
      audioHighCs.pause();
      audioHighCs.currentTime = 0;
    } else if (e.which === 186) {
      audioHighD.pause();
      audioHighD.currentTime = 0;
    } else {
      console.log('null');
    }
  });

  function toggleMetronome() {
    const metronomeTest = new Audio();
    metronomeTest.src = 'sounds/metronometest.wav';
    metronomeTest.play();
  }

  let millisecs = 0;
  const triplet = 238;
  const quaver = 357;
  const crotchet = 714;
  const dotCrotchet = 1071;
  const minim = 1428;
  const minimPlusQuaver = 1785;
  const dotMinim = 2142;
  const semibreve = 2856
  const fiveBeats = 3570;



  $startBtn.on('click', function() {
    toggleMetronome();
    // First subject
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.play();
    });
    intervalId = setTimeout(() => {
      $box.html('a');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $box.html('e');
      audioB.pause();
      audioB.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioCs.pause();
      audioCs.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('f');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('a');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioB.pause();
      audioB.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('a');
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('z');
      audioB.pause();
      audioB.currentTime = 0;
      audioLowG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioLowG.pause();
      audioLowG.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('a');
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('f');
      audioB.pause();
      audioB.currentTime = 0;
      audioE.play();
    }, millisecs += minimPlusQuaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioE.pause();
      audioE.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('e');
      audioD.pause();
      audioD.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    // First subject recap
    intervalId = setTimeout(() => {
      $box.html('y');
      audioCs.pause();
      audioCs.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('a');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $box.html('e');
      audioB.pause();
      audioB.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioCs.pause();
      audioCs.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('f');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('a');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioB.pause();
      audioB.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('a');
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('z');
      audioB.pause();
      audioB.currentTime = 0;
      audioLowG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioLowG.pause();
      audioLowG.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('a');
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
    // Second subject
    intervalId = setTimeout(() => {
      $box.html('a');
      audioB.pause();
      audioB.currentTime = 0;
      audioB.play();
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $box.html('e');
      audioB.pause();
      audioB.currentTime = 0;
      audioCs.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioCs.pause();
      audioCs.currentTime = 0;
      audioD.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('f');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('j');
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioA.pause();
      audioA.currentTime = 0;
      audioG.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('j');
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('k');
      audioA.pause();
      audioA.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('j');
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioA.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioA.pause();
      audioA.currentTime = 0;
      audioG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('j');
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('k');
      audioA.pause();
      audioA.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('p');
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioHighCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('k');
      audioHighCs.pause();
      audioHighCs.currentTime = 0;
      audioHighB.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('s');
      audioD.pause();
      audioD.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('a');
      audioCs.pause();
      audioCs.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
    // Second theme recap
    intervalId = setTimeout(() => {
      $box.html('e');
      audioB.pause();
      audioB.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioCs.pause();
      audioCs.currentTime = 0;
      audioD.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('f');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('j');
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioA.pause();
      audioA.currentTime = 0;
      audioG.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('j');
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('k');
      audioA.pause();
      audioA.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('j');
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioA.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioA.pause();
      audioA.currentTime = 0;
      audioG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('j');
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('k');
      audioA.pause();
      audioA.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('l');
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioHighCn.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioHighCn.pause();
      audioHighCn.currentTime = 0;
      audioG.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('f');
      audioG.pause();
      audioG.currentTime = 0;
      audioE.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioE.pause();
      audioE.currentTime = 0;
      audioG.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('l');
      audioG.pause();
      audioG.currentTime = 0;
      audioHighCn.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('p');
      audioHighCn.pause();
      audioHighCn.currentTime = 0;
      audioHighCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('u');
      audioHighCs.pause();
      audioHighCs.currentTime = 0;
      audioGs.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $box.html('p');
      audioGs.pause();
      audioGs.currentTime = 0;
      audioHighCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioHighCs.pause();
      audioHighCs.currentTime = 0;
      audioFs.play();
    }, millisecs += dotCrotchet);
    // Tutti first subject
    intervalId = setTimeout(() => {
      $box.html('k');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('');
      audioHighB.pause();
      audioHighB.currentTime = 0;
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.play();
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += semibreve);
    intervalId = setTimeout(() => {
      $box.html('f');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioE.pause();
      audioE.currentTime = 0;
      audioD.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('f');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += minim);
    // Tutti first subject recap
    intervalId = setTimeout(() => {
      $box.html('y');
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $box.html('y');
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $box.html('');
      audioFs.pause();
      audioFs.currentTime = 0;
    }, millisecs += fiveBeats);
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $box.html('f');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += crotchet);
    //Triplets bar 1
    intervalId = setTimeout(() => {
      $box.html('d');
      audioE.pause();
      audioE.currentTime = 0;
      audioD.play();
    }, millisecs += crotchet); // 1
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('d');
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 12

    // Triplets bar 2
    intervalId = setTimeout(() => {
      $box.html('f');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 12

    // Triplets bar 3
    intervalId = setTimeout(() => {
      $box.html('y');
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 12

    // Triplets bar 4
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12

    // Triplets bar 5
    intervalId = setTimeout(() => {
      $box.html('u');
      audioG.pause();
      audioG.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('u');
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('u');
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('u');
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('u');
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('u');
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('i');
      audioGs.pause();
      audioGs.currentTime = 0;
      audioAs.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('i');
      audioAs.pause();
      audioAs.currentTime = 0;
      audioAs.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('i');
      audioAs.pause();
      audioAs.currentTime = 0;
      audioAs.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('y');
      audioAs.pause();
      audioAs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('d');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 12

    // Triplets bar 6
    intervalId = setTimeout(() => {
      $box.html('f');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 12

    // Triplets bar 7
    intervalId = setTimeout(() => {
      $box.html('y');
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 12

    // Triplets bar 8
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('f');
      audioG.pause();
      audioG.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('f');
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('g');
      audioE.pause();
      audioE.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('g');
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('g');
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('g');
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('g');
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('g');
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 12

    // Triplets bar 9
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFn.pause();
      audioFn.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12

    // Triplets bar 10
    intervalId = setTimeout(() => {
      $box.html('y');
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12

    // Triplets bar 11
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12

    // Triplets bar 12
    intervalId = setTimeout(() => {
      $box.html('y');
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $box.html('y');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $box.html('h');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $box.html('h');
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12





  });



});
