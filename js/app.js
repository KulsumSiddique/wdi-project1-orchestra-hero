$(() => {
  const audioLowG = new Audio();
  audioLowG.src = 'Glow.wav';

  const audioB = new Audio();
  audioB.src = 'Bwav.wav';

  const audioCs = new Audio();
  audioCs.src = 'Cswav.wav';

  const audioD = new Audio();
  audioD.src = 'Dwav.wav';

  const audioE = new Audio();
  audioE.src = 'Ewav.wav';

  const audioFn = new Audio();
  audioFn.src = 'Fnwav.wav';

  const audioFs = new Audio();
  audioFs.src = 'Fswav.wav';

  const audioG = new Audio();
  audioG.src = 'Gwav.wav';

  const audioGs = new Audio();
  audioGs.src = 'Gshighwav.wav';

  const audioA = new Audio();
  audioA.src = 'Awav.wav';

  const audioAs = new Audio();
  audioAs.src = 'Ashighwav.wav';

  const audioHighB = new Audio();
  audioHighB.src = 'Bhighwav.wav';

  const audioHighCn = new Audio();
  audioHighCn.src = 'Cnhighwav.wav';

  const audioHighCs = new Audio();
  audioHighCs.src = 'Cshighwav.wav';

  const audioHighD = new Audio();
  audioHighD.src = 'Dhighwav.wav';



  // $(document).on('keydown', function(e) {
  //   if (e.which === 77) {
  //     audioFs.pause();
  //   } else if (e.which === 76) {
  //     audioB.play();
  //   } else if (e.which === 84) {
  //     audioCs.play();
  //   } else if (e.which === 68) {
  //     audioD.play();
  //   } else if (e.which === 82) {
  //     audioE.play();
  //   } else if (e.which === 70) {
  //     audioG.play();
  //   } else {
  //     console.log('null');
  //   }
  // });

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

  $(document).on('keyup', function(e) {
    if (e.which === 77) {
      audioFs.pause();
      audioFs.currentTime = 0;
    } else if (e.which === 76) {
      audioB.pause();
      audioB.currentTime = 0;
    } else if (e.which === 84) {
      audioCs.pause();
      audioCs.currentTime = 0;
    } else if (e.which === 68) {
      audioD.pause();
      audioD.currentTime = 0;
    } else if (e.which === 82) {
      audioE.pause();
      audioE.currentTime = 0;
    } else if (e.which === 70) {
      audioG.pause();
      audioG.currentTime = 0;
    } else {
      console.log('null');
    }
  });


});
