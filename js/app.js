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
  const dotMinim = 2142;
  const semibreve = 2856
  const fiveBeats = 3570;



  $startBtn.on('click', function() {
    toggleMetronome();
    intervalId = setTimeout(() => {
      $box.html('m');
      audioFs.play();
    });
    intervalId = setTimeout(() => {
      $box.html('l');
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $box.html('t');
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
      $box.html('r');
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('m');
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
      $box.html('m');
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
      $box.html('m');
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('l');
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
      $box.html('l');
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $box.html('f');
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
      $box.html('l');
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
  });



});
