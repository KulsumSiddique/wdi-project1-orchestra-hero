$(() => {
  const $startBtn = $('.start');
  const $collisionLines = $('.barlines');
  const $bar = $('.bar');
  const $main = $('.notes');
  const $score = $('.score');
  let intervalId;
  const notesInPlay = [];

  let playerScore = 0;
  $score.html(`Score: ${playerScore}`);


  const notes = [];
  const lowG = {
    name: 'low G',
    audio: new Audio('sounds/Glow.wav'),
    key: 'Z'.charCodeAt(0),
    yPosition: 490
  };
  const midB = {
    name: 'mid B',
    audio: new Audio('sounds/Bwav.wav'),
    key: 'A'.charCodeAt(0),
    yPosition: 405
  };
  const midCs = {
    name: 'mid C sharp',
    audio: new Audio('sounds/Cswav.wav'),
    key: 'E'.charCodeAt(0),
    yPosition: 355
  };
  const midD = {
    name: 'mid D',
    audio: new Audio('sounds/Dwav.wav'),
    key: 'D'.charCodeAt(0),
    yPosition: 330
  };
  const midE = {
    name: 'mid E',
    audio: new Audio('sounds/Ewav.wav'),
    key: 'F'.charCodeAt(0),
    yPosition: 280
  };
  const midFn = {
    name: 'mid F natural',
    audio: new Audio('sounds/Fnwav.wav'),
    key: 'G'.charCodeAt(0),
    yPosition: 255
  };
  const midFs = {
    name: 'mid F sharp',
    audio: new Audio('sounds/Fswav.wav'),
    key: 'Y'.charCodeAt(0),
    yPosition: 230
  };
  const midG = {
    name: 'mid G',
    audio: new Audio('sounds/Gwav.wav'),
    key: 'H'.charCodeAt(0),
    yPosition: 205
  };
  const midGs = {
    name: 'mid G sharp',
    audio: new Audio('sounds/Gshighwav.wav'),
    key: 'U'.charCodeAt(0),
    yPosition: 180
  };
  const midA = {
    name: 'mid A',
    audio: new Audio('sounds/Awav.wav'),
    key: 'J'.charCodeAt(0),
    yPosition: 155
  };
  const midAs = {
    name: 'mid A sharp',
    audio: new Audio('sounds/Ashighwav.wav'),
    key: 'I'.charCodeAt(0),
    yPosition: 130
  };
  const highB = {
    name: 'high B',
    audio: new Audio('sounds/Bhighwav.wav'),
    key: 'K'.charCodeAt(0),
    yPosition: 105
  };
  const highCN = {
    name: 'high C natural',
    audio: new Audio('sounds/Cnhighwav.wav'),
    key: 'L'.charCodeAt(0),
    yPosition: 80
  };
  const highCS = {
    name: 'high C sharp',
    audio: new Audio('sounds/Cshighwav.wav'),
    key: 'P'.charCodeAt(0),
    yPosition: 55
  };
  const highD = {
    name: 'high D',
    audio: new Audio('sounds/Dhighwav.wav'),
    key: 186,
    yPosition: 30
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

  function createDivFromNote(note) {
    const id = `key${note.key}`;
    const style = `top: ${note.yPosition}px;`;
    const letter = String.fromCharCode(note.key);
    return `<div id="${id}" class="user-target" style="${style}">${letter}</div>`;
  }

  notes.forEach(note => {
    $('#player-area').append(createDivFromNote(note));
  });

  const metronome = new Audio();
  metronome.src = 'sounds/metronome.mp3';

  function getNoteByKeyCode(code) {
    for(let i = 0; i < notes.length; i++) {
      if(notes[i].key === code) {
        return notes[i];
      }
    }
    return null;
  }

  function getDivByCode(code) {
    return $('#key' + code);
  }

  $(document).on('keydown', function(e) {
    const note = getNoteByKeyCode(e.which);
    // console.log(note);
    if(note) {
      note.audio.play();
      // $collisionLines.append('<div class="keypress"></div>');
      // $('.keypress').css({position: 'absolute', top: note.yPosition});

      // Get dimensions of target area
      const barLeft = $bar.offset().left;
      const barRight = Number($bar.offset().left) + Number($bar.width());
      console.log(`Finding key${e.which}`);

      // Which key has the user pressed?
      const $keyDiv = getDivByCode(e.which);
      $keyDiv.addClass('selected')

      // Find all the notes associated with that key
      // NOTE: Not the dead notes!
      const $notesToCheck = $(`.${e.key}`);

      // TODO: Find the non-dead note which is furthest left

      // For every note associated with the current key:
      $notesToCheck.each((i, el) => {
        const noteLeft = $(el).offset().left;
        console.log('Left:' + noteLeft);
        const noteRight = Number($(el).offset().left) + Number($(el).width());
        console.log('Right:' + noteRight);

        if (barRight > noteLeft && barLeft < noteRight) {
          $(el).addClass('hit');
          playerScore += 2;
          $score.html(`Score: ${playerScore}`);
        } else {
          $(el).addClass('miss');
          playerScore -= 1;
        }
      });
    }
  });


  $(document).on('keyup', function(e) {
    const note = getNoteByKeyCode(e.which);
    if(note) {
      note.audio.pause();
      note.audio.currentTime = 0;
      // $('.keypress').css({display: 'none'});
    }
    const targetDiv = getDivByCode(e.which);
    targetDiv.removeClass('selected');
  });

  // Get dimensions of miss check

  // Every frame of animation, do this
  setInterval(() => {
    // Check for dead notes
    const notes = document.querySelectorAll('.animate');
    if(notes) {
      for(let i = 0; i < notes.length; i++) {
        let left = window.getComputedStyle(notes[i]).left;
        left = parseInt(left);
        if (left < 500) {
          console.log('left is', left);
          notes[i].classList.add('dead');
        }
      }
    }
  }, 100);

  $main.on('animationend webkitAnimationEnd oAnimationEnd', '.animate', function (e) {
    $(e.target).remove();
  });


  function toggleMetronome() {
    const metronomeTest = new Audio('sounds/metronometest.wav');
    metronomeTest.play();
  }

  const noteLengths = {
    triplet: 238,
    quaver: 357,
    crotchet: 714,
    dotcrotchet: 1071,
    minim: 1428,
    minimquaver: 1785,
    dotminim: 2142,
    semibreve: 2856,
    fivebeats: 3570
  };


  $startBtn.on('click', function() {
    intervalId = setTimeout(() => {
      toggleMetronome();
    }, 0);

    function createNote(noteLength, noteLetter) {
      const html = `<div class="animate ${noteLength} ${noteLetter}">${noteLetter}</div>`;
      return {
        html: html, length: noteLength, letter: noteLetter
      };
    }

    const melody = [
      createNote('minim', 'y'),
      createNote('quaver', 'a'),
      createNote('quaver', 'e'),
      createNote('quaver', 'd'),
      createNote('quaver', 'f'),
      createNote('dotcrotchet', 'y'),
      createNote('quaver', 'd'),
      createNote('dotcrotchet', 'y'),
      createNote('quaver', 'd'),
      createNote('dotcrotchet', 'y'),
      createNote('quaver', 'a'),
      createNote('quaver', 'd'),
      createNote('quaver', 'a'),
      createNote('quaver', 'z'),
      createNote('quaver', 'd'),
      createNote('minimquaver', 'a'),
      createNote('quaver', 'f'),
      createNote('quaver', 'd'),
      createNote('quaver', 'e'),
      createNote('minim', 'y'),
      createNote('quaver', 'a'),
      createNote('quaver', 'e'),
      createNote('quaver', 'd'),
      createNote('quaver', 'f'),
      createNote('dotcrotchet', 'y'),
      createNote('quaver', 'd'),
      createNote('dotcrotchet', 'y'),
      createNote('quaver', 'd'),
      createNote('dotcrotchet', 'y'),
      createNote('quaver', 'a'),
      createNote('quaver', 'd'),
      createNote('quaver', 'a'),
      createNote('quaver', 'z'),
      createNote('quaver', 'd'),
      createNote('dotminim', 'a'),
      createNote('crotchet', 'a'),
      createNote('crotchet', 'e'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'f'),
      createNote('quaver', 'y'),
      createNote('quaver', 'h'),
      createNote('dotcrotchet', 'j'),
      createNote('quaver', 'h'),
      createNote('crotchet', 'y'),
      createNote('quaver', 'h'),
      createNote('quaver', 'j'),
      createNote('dotcrotchet', 'k'),
      createNote('quaver', 'j'),
      createNote('crotchet', 'h'),
      createNote('quaver', 'j'),
      createNote('quaver', 'k'),
      createNote('dotcrotchet', 'p'),
      createNote('quaver', 'k'),
      createNote('quaver', 'y'),
      createNote('quaver', 'd'),
      createNote('quaver', 'e'),
      createNote('quaver', 'a'),
      createNote('crotchet', 'e'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'f'),
      createNote('quaver', 'y'),
      createNote('quaver', 'h'),
      createNote('dotcrotchet', 'j'),
      createNote('quaver', 'h'),
      createNote('crotchet', 'y'),
      createNote('quaver', 'h'),
      createNote('quaver', 'j'),
      createNote('dotcrotchet', 'k'),
      createNote('quaver', 'j'),
      createNote('crotchet', 'h'),
      createNote('quaver', 'j'),
      createNote('quaver', 'k'),
      createNote('dotcrotchet', 'l'),
      createNote('quaver', 'h'),
      createNote('crotchet', 'f'),
      createNote('quaver', 'h'),
      createNote('quaver', 'l'),
      createNote('dotcrotchet', 'p'),
      createNote('quaver', 'u'),
      createNote('dotcrotchet', 'p'),
      createNote('quaver', 'y'),
      createNote('crotchet', 'k'),
      createNote('semibreve', 'd'),
      createNote('dotminim', 'd'),
      createNote('crotchet', 'f'),
      createNote('minim', 'd'),
      createNote('minim', 'f'),
      createNote('minim', 'y'),
      createNote('minim', 'h'),
      createNote('fivebeats', 'y'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'f'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'd'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'u'),
      createNote('triplet', 'u'),
      createNote('triplet', 'u'),
      createNote('triplet', 'u'),
      createNote('triplet', 'u'),
      createNote('triplet', 'u'),
      createNote('triplet', 'i'),
      createNote('triplet', 'i'),
      createNote('triplet', 'i'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'd'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'f'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'g'),
      createNote('triplet', 'g'),
      createNote('triplet', 'g'),
      createNote('triplet', 'g'),
      createNote('triplet', 'g'),
      createNote('triplet', 'g'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'y'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('triplet', 'h'),
      createNote('semibreve', 'h'),
      createNote('semibreve', 'f'),
      createNote('semibreve', 'h'),
      createNote('semibreve', 'f'),
      createNote('semibreve', 'h'),
      createNote('semibreve', 'h'),
      createNote('semibreve', 'u'),
      createNote('semibreve', 'u'),
      createNote('minim', 'u'),
      createNote('minim', 'u'),
      createNote('minim', 'u'),
      createNote('minim', 'u'),
      createNote('fivebeats', 'sc'),
      createNote('minim', 'd'),
      createNote('minim', 'd'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'd'),
      createNote('crotchet', 'd'),
      createNote('minim', 'y'),
      createNote('quaver', 'a'),
      createNote('quaver', 'e'),
      createNote('quaver', 'd'),
      createNote('quaver', 'f'),
      createNote('dotcrotchet', 'y'),
      createNote('quaver', 'd'),
      createNote('dotcrotchet', 'y'),
      createNote('quaver', 'd')
    ];
    const intervalIds = [];

    let millisecs = 0;
    for(let i = 0; i < melody.length; i++){
      const note = melody[i];
      const intervalId = setTimeout(() => {
        $main.append(note.html);
      }, millisecs += noteLengths[note.length]);
      intervalIds.push(intervalId);
    }
  });
});
