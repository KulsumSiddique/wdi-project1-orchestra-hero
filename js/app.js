$(() => {
  const $startBtn = $('.start');
  const $collisionLines = $('.barlines');
  const $bar = $('.bar');
  const $main = $('.notes');
  const $score = $('.score');
  let intervalId;

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
    key: 'M'.charCodeAt(0),
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

  const squeaks = [];

  const squeak1 = new Audio('sounds/squeak1.mp3');
  const squeak2 = new Audio('sounds/squeak2.mp3');
  const squeak3 = new Audio('sounds/squeak3.mp3');
  const squeak4 = new Audio('sounds/squeak4.mp3');

  squeaks.push(squeak1);
  squeaks.push(squeak2);
  squeaks.push(squeak3);
  squeaks.push(squeak4);

  const booing = new Audio('sounds/boo.mp3');
  console.log(booing);



  function getNoteByKeyCode(code) {
    for(let i = 0; i < notes.length; i++) {
      if(notes[i].key === code) {
        return notes[i];
      }
    }
    return null;
  }

  setInterval(() => {
    // Check for dead notes
    const $notes = $('.animate');
    if($notes) {
      for(let i = 0; i < $notes.length; i++) {
        const $note = $notes.eq(i);
        let right = $note.offset().left + $note.width();
        right = parseFloat(right);
        if (right <= $bar.offset().left) {
          $notes.eq(i).addClass('dead');
        }
      }
    }
  }, 100);

  $(document).on('keydown', function(e) {
    const note = getNoteByKeyCode(e.which);
    if(note) {
      note.audio.play();
      const noteLetter = String.fromCharCode(note.key).toLowerCase();
      $collisionLines.append(`<div class="user-target ${noteLetter}"></div>`);

      // Get dimensions of target area
      const barLeft = $bar.offset().left;
      const barRight = Number($bar.offset().left) + Number($bar.width());

      const letter = String.fromCharCode(e.which);
      const query = '.animate.' + letter.toLowerCase() + ':not(.dead)' + ':not(.miss)';
      const $notesToCheck = $(query);
      $notesToCheck.first().each((i, el) => {
        const noteLeft = $(el).offset().left;
        const noteRight = Number($(el).offset().left) + Number($(el).width());

        if (barRight > noteLeft && barLeft < noteRight) {
          $(el).addClass('hit');
          playerScore += 2;
          $score.html(`Score: ${playerScore}`);
        } else {
          $(el).addClass('miss');
          playerScore -= 1;
          $score.html(`Score: ${playerScore}`);
          const randomSqueak = squeaks[Math.floor(Math.random() * squeaks.length)];
          randomSqueak.play();
        }
      });
    }
    if (playerScore <= -10) {
      booing.play();
      booing.volume = 0.5;
    }
    if (playerScore <= -15) {
      booing.volume = 0.7;
    }
    if (playerScore <= -20) {
      booing.volume = 1;
      // End game
    }
    if (playerScore >= -9) {
      booing.pause();
      booing.currentTime = 0;
    }
  });


  $(document).on('keyup', function(e) {
    const note = getNoteByKeyCode(e.which);
    if(note) {
      note.audio.pause();
      note.audio.currentTime = 0;
      $('.user-target').remove();
    }
  });

  $('.notes').on('animationend webkitAnimationEnd oAnimationEnd', '.animate', function (e) {
    $(e.target).remove();
  });


  function toggleBacking() {
    const backing = new Audio('sounds/swan-lake-test-backing.mp3');
    backing.play();
  }

  let millisecs = 2856;
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
    intervalId = setTimeout(() => {
      toggleBacking();
    }, 0);

    // First subject
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim y">y</div>'));
    }, millisecs);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver f">f</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver z">z</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minimquaver a">a</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver f">f</div>'));
    }, millisecs += minimPlusQuaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
    }, millisecs += quaver);

    // First subject recap
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver f">f</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver z">z</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotminim a">a</div>'));
    }, millisecs += quaver);

    // Second subject
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet a">a</div>'));
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet e">e</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver y">y</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet j">j</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet k">k</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet h">h</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver k">k</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet p">p</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver k">k</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
    }, millisecs += quaver);

    // Second subject recap
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet e">e</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver y">y</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet j">j</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet k">k</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet h">h</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver j">j</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver k">k</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet l">l</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver h">h</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver l">l</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet p">p</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver u">u</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet p">p</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver y">y</div>'));
    }, millisecs += dotCrotchet);

    // Tutti first subject
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet k">k</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      // $box.html('');
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve d">d</div>'));
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotminim d">d</div>'));
    }, millisecs += semibreve);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
    }, millisecs += dotMinim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim d">d</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim f">f</div>'));
    }, millisecs += minim);

    // Tutti first subject recap
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim y">y</div>'));
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim h">h</div>'));
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate fivebeats y">y</div>'));
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      // $box.html('');
    }, millisecs += fiveBeats);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet f">f</div>'));
    }, millisecs += crotchet);

    // Triplets bar 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += crotchet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet u">u</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet i">i</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet i">i</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet i">i</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet d">d</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet f">f</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet g">g</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 12

    // Triplets bar 12
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet y">y</div>'));
    }, millisecs += triplet); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 8
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 9
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 10
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 11
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate triplet h">h</div>'));
    }, millisecs += triplet); // 12

    // Semibreves
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve h">h</div>'));
    }, millisecs += triplet); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve f">f</div>'));
    }, millisecs += semibreve); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve h">h</div>'));
    }, millisecs += semibreve); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve f">f</div>'));
    }, millisecs += semibreve); // 4
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve h">h</div>'));
    }, millisecs += semibreve); // 5
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve h">h</div>'));
    }, millisecs += semibreve); // 6
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve u">u</div>'));
    }, millisecs += semibreve); // 7
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate semibreve u">u</div>'));
    }, millisecs += semibreve); // 8

    // Stringendo
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim u">u</div>'));
    }, millisecs += semibreve); // 1
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim u">u</div>'));
    }, millisecs += minim); // 2
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim u">u</div>'));
    }, millisecs += minim); // 3
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim u">u</div>'));
    }, millisecs += minim); // 4

    // Bars of rest
    intervalId = setTimeout(() => {
    }, millisecs += minim); // 1
    intervalId = setTimeout(() => {
    }, millisecs += semibreve); // 2
    intervalId = setTimeout(() => {
    }, millisecs += semibreve); // 3
    intervalId = setTimeout(() => {
    }, millisecs += semibreve); // 4

    /// fff
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate fivebeats m">m</div>'));
    }, millisecs += semibreve);
    intervalId = setTimeout(() => {
    }, millisecs += minimPlusQuaver);
    intervalId = setTimeout(() => {
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
    }, millisecs += crotchet); // 1
    intervalId = setTimeout(() => {
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate crotchet d">d</div>'));
    }, millisecs += crotchet); // 2
    intervalId = setTimeout(() => {
    }, millisecs += crotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver); // 3
    intervalId = setTimeout(() => {
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver); // 4
    intervalId = setTimeout(() => {
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver); // 5
    intervalId = setTimeout(() => {
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver); // 6
    intervalId = setTimeout(() => {
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver); // 7
    intervalId = setTimeout(() => {
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver); // 8
    intervalId = setTimeout(() => {
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver); // 9
    intervalId = setTimeout(() => {
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver); // 10

    // Closing melody
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate minim y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver a">a</div>'));
    }, millisecs += minim);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver e">e</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver f">f</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate dotcrotchet y">y</div>'));
    }, millisecs += quaver);
    intervalId = setTimeout(() => {
      $main.append($('<div class="animate quaver d">d</div>'));
    }, millisecs += dotCrotchet);
    intervalId = setTimeout(() => {
    }, millisecs += quaver);
  });
});
