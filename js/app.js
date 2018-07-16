$(() => {
  const $startBtn = $('.start');
  const $collisionLines = $('.barlines');
  const $main = $('.notes');
  let intervalId;

  const notes = [];
  const lowG = {
    name: 'low G',
    audio: new Audio('sounds/Glow.wav'),
    key: 'Z'.charCodeAt(0),
    yPosition: 0
  };
  const midB = {
    name: 'mid B',
    audio: new Audio('sounds/Bwav.wav'),
    key: 'A'.charCodeAt(0),
    yPosition: 10
  };
  const midCs = {
    name: 'mid C sharp',
    audio: new Audio('sounds/Cswav.wav'),
    key: 'E'.charCodeAt(0),
    yPosition: 20
  };
  const midD = {
    name: 'mid D',
    audio: new Audio('sounds/Dwav.wav'),
    key: 'D'.charCodeAt(0),
    yPosition: 30
  };
  const midE = {
    name: 'mid E',
    audio: new Audio('sounds/Ewav.wav'),
    key: 'F'.charCodeAt(0),
    yPosition: 40
  };
  const midFn = {
    name: 'mid F natural',
    audio: new Audio('sounds/Fnwav.wav'),
    key: 'G'.charCodeAt(0),
    yPosition: 50
  };
  const midFs = {
    name: 'mid F sharp',
    audio: new Audio('sounds/Fswav.wav'),
    key: 'Y'.charCodeAt(0),
    yPosition: 60
  };
  const midG = {
    name: 'mid G',
    audio: new Audio('sounds/Gwav.wav'),
    key: 'H'.charCodeAt(0),
    yPosition: 70
  };
  const midGs = {
    name: 'mid G sharp',
    audio: new Audio('sounds/Gshighwav.wav'),
    key: 'U'.charCodeAt(0),
    yPosition: 80
  };
  const midA = {
    name: 'mid A',
    audio: new Audio('sounds/Awav.wav'),
    key: 'J'.charCodeAt(0),
    yPosition: 90
  };
  const midAs = {
    name: 'mid A sharp',
    audio: new Audio('sounds/Ashighwav.wav'),
    key: 'I'.charCodeAt(0),
    yPosition: 100
  };
  const highB = {
    name: 'high B',
    audio: new Audio('sounds/Bhighwav.wav'),
    key: 'K'.charCodeAt(0),
    yPosition: 110
  };
  const highCN = {
    name: 'high C natural',
    audio: new Audio('sounds/Cnhighwav.wav'),
    key: 'L'.charCodeAt(0),
    yPosition: 120
  };
  const highCS = {
    name: 'high C sharp',
    audio: new Audio('sounds/Cshighwav.wav'),
    key: 'P'.charCodeAt(0),
    yPosition: 130
  };
  const highD = {
    name: 'high D',
    audio: new Audio('sounds/Dhighwav.wav'),
    key: 186,
    yPosition: 140
  };
  notes.push(lowG);
  notes.push(midB);
  notes.push(midCs);
  notes.push(midD);
  notes.push(midE);
  notes.push(midFn);
  notes.push(midFs);
  notes.push(midG);
  notes.push(midGs);
  notes.push(midA);
  notes.push(midAs);
  notes.push(highB);
  notes.push(highCN);
  notes.push(highCS);
  notes.push(highD);


  const metronome = new Audio();
  metronome.src = 'sounds/metronome.mp3';

  function getNoteByKeyCode(code) {
    for(let i = 0; i < notes.length; i++) {
      console.log(notes[i].key, code);
      if(notes[i].key === code) {
        return notes[i];
      }
    }
    return null;
  }

  $(document).on('keydown', function(e) {
    const note = getNoteByKeyCode(e.which);
    console.log(note);
    if(note) {
      note.audio.play();
      $collisionLines.append('<div class="keypress"></div>');
      $('.keypress').css({position: 'absolute', top: note.yPosition});
    }
  });

  $(document).on('keyup', function(e) {
    const note = getNoteByKeyCode(e.which);
    if(note) {
      note.audio.pause();
      note.audio.currentTime = 0;
      $('.keypress').css({display: 'none'});
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
  const semibreve = 2856;
  const fiveBeats = 3570;



  $startBtn.on('click', function() {
    toggleMetronome();
    // First subject
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim y">y</div>'));
      audioFs.play();
    }, millisecs);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioCs.pause();
      audioCs.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver z">z</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioLowG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioLowG.pause();
      audioLowG.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minimquaver a">a</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver f">f</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioE.play();
    }, millisecs += minimPlusQuaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);

    // First subject recap
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim y">y</div>'));
      audioCs.pause();
      audioCs.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioCs.pause();
      audioCs.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver z">z</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioLowG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioLowG.pause();
      audioLowG.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotminim a">a</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);

    // Second subject
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet a">a</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioB.play();
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet e">e</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioCs.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioCs.pause();
      audioCs.currentTime = 0;
      audioD.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver y">y</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet j">j</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
      audioA.pause();
      audioA.currentTime = 0;
      audioG.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet y">y</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet k">k</div>'));
      audioA.pause();
      audioA.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioA.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet h">h</div>'));
      audioA.pause();
      audioA.currentTime = 0;
      audioG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver k">k</div>'));
      audioA.pause();
      audioA.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet p">p</div>'));
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioHighCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver k">k</div>'));
      audioHighCs.pause();
      audioHighCs.currentTime = 0;
      audioHighB.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver y">y</div>'));
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
      audioCs.pause();
      audioCs.currentTime = 0;
      audioB.play();
    }, millisecs += quaver);

    // Second theme recap
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet e">e</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioCs.pause();
      audioCs.currentTime = 0;
      audioD.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver y">y</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet j">j</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
      audioA.pause();
      audioA.currentTime = 0;
      audioG.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet y">y</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet k">k</div>'));
      audioA.pause();
      audioA.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioA.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet h">h</div>'));
      audioA.pause();
      audioA.currentTime = 0;
      audioG.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioA.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver k">k</div>'));
      audioA.pause();
      audioA.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet l">l</div>'));
      audioHighB.pause();
      audioHighB.currentTime = 0;
      audioHighCn.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
      audioHighCn.pause();
      audioHighCn.currentTime = 0;
      audioG.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioE.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioG.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver l">l</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioHighCn.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet p">p</div>'));
      audioHighCn.pause();
      audioHighCn.currentTime = 0;
      audioHighCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver u">u</div>'));
      audioHighCs.pause();
      audioHighCs.currentTime = 0;
      audioGs.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet p">p</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioHighCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver y">y</div>'));
      audioHighCs.pause();
      audioHighCs.currentTime = 0;
      audioFs.play();
    }, millisecs += dotCrotchet);

    // Tutti first subject
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet k">k</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioHighB.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      // $box.html('');
      audioHighB.pause();
      audioHighB.currentTime = 0;
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve d">d</div>'));
      audioD.play();
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotminim d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += semibreve);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim d">d</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioD.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += minim);

    // Tutti first subject recap
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim y">y</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim h">h</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate fivebeats y">y</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      // $box.html('');
      audioFs.pause();
      audioFs.currentTime = 0;
    }, millisecs += fiveBeats);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioD.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += crotchet);

    // Triplets bar 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));

      audioE.pause();
      audioE.currentTime = 0;
      audioD.play();
    }, millisecs += crotchet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 12

    // Triplets bar 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 12

    // Triplets bar 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 12

    // Triplets bar 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12

    // Triplets bar 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet i">i</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioAs.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet i">i</div>'));
      audioAs.pause();
      audioAs.currentTime = 0;
      audioAs.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet i">i</div>'));
      audioAs.pause();
      audioAs.currentTime = 0;
      audioAs.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioAs.pause();
      audioAs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += triplet); // 12

    // Triplets bar 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 12

    // Triplets bar 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 12

    // Triplets bar 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioE.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
      audioFn.pause();
      audioFn.currentTime = 0;
      audioFn.play();
    }, millisecs += triplet); // 12

    // Triplets bar 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioFn.pause();
      audioFn.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12

    // Triplets bar 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12

    // Triplets bar 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12

    // Triplets bar 12
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioFs.play();
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 12

    // Semibreves
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve f">f</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioE.play();
    }, millisecs += semibreve); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve h">h</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioG.play();
    }, millisecs += semibreve); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve f">f</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioE.play();
    }, millisecs += semibreve); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve h">h</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioG.play();
    }, millisecs += semibreve); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve h">h</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioG.play();
    }, millisecs += semibreve); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve u">u</div>'));
      audioG.pause();
      audioG.currentTime = 0;
      audioGs.play();
    }, millisecs += semibreve); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += semibreve); // 8

    // Stringendo
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += semibreve); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += minim); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += minim); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim u">u</div>'));
      audioGs.pause();
      audioGs.currentTime = 0;
      audioGs.play();
    }, millisecs += minim); // 4

    // Bars of rest
    intervalId = setTimeout(() => {
      // $box.html('');
      audioGs.pause();
      audioGs.currentTime = 0;
    }, millisecs += minim); // 1
    intervalId = setTimeout(() => {
      // $box.html('');
    }, millisecs += semibreve); // 2
    intervalId = setTimeout(() => {
      // $box.html('');
    }, millisecs += semibreve); // 3
    intervalId = setTimeout(() => {
      audioGs.currentTime = 0;
    }, millisecs += semibreve); // 4

    /// fff
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate fivebeats sc">;</div>'));
      audioHighD.play();
    }, millisecs += semibreve);
    intervalId = setTimeout(() => {
      // $box.html('');
      audioHighD.pause();
      audioHighD.currentTime = 0;
    }, millisecs += fiveBeats);
    intervalId = setTimeout(() => {
      // $box.html('');
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim d">d</div>'));
      audioD.play();
    }, millisecs += minim); // 1
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim d">d</div>'));
      audioD.play();
    }, millisecs += minim); // 2
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioD.play();
    }, millisecs += crotchet); // 3
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioD.play();
    }, millisecs += crotchet); // 4
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioD.play();
    }, millisecs += crotchet); // 5
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioD.play();
    }, millisecs += crotchet); // 6
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioD.play();
    }, millisecs += crotchet); // 7
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioD.play();
    }, millisecs += crotchet); // 8
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioD.play();
    }, millisecs += crotchet); // 9
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
      audioD.play();
    }, millisecs += crotchet); // 10

    // Closing melody
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim y">y</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioB.play();
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
      audioB.pause();
      audioB.currentTime = 0;
      audioCs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioCs.pause();
      audioCs.currentTime = 0;
      audioD.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver f">f</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioE.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
      audioE.pause();
      audioE.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
      audioD.pause();
      audioD.currentTime = 0;
      audioFs.play();
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
      audioFs.pause();
      audioFs.currentTime = 0;
      audioD.play();
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      // $box.html('');
      audioD.pause();
      audioD.currentTime = 0;
    }, millisecs += quaver);





  });



});
