const ham = document.querySelector('.ham');
const list = document.querySelector('.list_nav');
const head = document.querySelector('.head');
const btnMore = document.querySelector('.btn_more');
const lessBtn = document.querySelector('.less');
const speakers = document.getElementById('grid_speaker');

ham.addEventListener('click', () => {
  head.classList.toggle('active');
});

list.addEventListener('click', () => {
  head.classList.toggle('active');
});

// Adding the feature speakers dynamically

//   declaration of object

const speakerData = [
  {
    id: 'speaker1',
    Imagesrc: 'assets/images/speaker2.png',
    Name: 'Daniel S. Moore',
    Work: 'Securities, commodities',
    Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 'speaker2',
    Imagesrc: 'assets/images/speaker1.png',
    Name: 'Lucille B. Keane',
    Work: 'Securities, commodities',
    Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 'speaker3',
    Imagesrc: 'assets/images/speaker2.png',
    Name: 'Margaret J. Archibald',
    Work: 'Securities, commodities',
    Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 'speaker4',
    Imagesrc: 'assets/images/speaker1.png',
    Name: 'Bryan J. Davis',
    Work: 'Securities, commodities',
    Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 'speaker5',
    Imagesrc: 'assets/images/speaker2.png',
    Name: 'Derick J. Dillon',
    Work: 'Securities, commodities',
    Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 'speaker6',
    Imagesrc: 'assets/images/speaker1.png',
    Name: 'Thomas S. Ottley',
    Work: 'Securities, commodities',
    Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },

];

// declaring a div shorcut function
function iDiv(f = 'div') {
  if (!f) {
    f = 'div';
  }

  return document.createElement(f);
}

function featureSpeakers() {
  
  for (let i = 0; i <= speakerData.length; i++) {
    if (i < 2) {
    const speak = iDiv();
    speak.classList.add('speaker');

    // create and image tag
    const images = iDiv();
    images.classList.add('speaker-img');
    images.innerHTML = `<img class='speaker-img' src='${speakerData[i].Imagesrc}' alt='${speakerData[i].Name}'/>`;

    // create detail tag
    const detail = iDiv();
    detail.classList.add('details');

    // create name tag
    const name = iDiv('h2');
    name.classList.add('names');
    name.innerText = speakerData[i].Name;

    // create work tag
    const work = iDiv('h4');
    work.classList.add('work');
    work.innerText = speakerData[i].Work;

    // create quate tag
    const quote = iDiv('p');
    quote.classList.add('quote');
    quote.innerText = speakerData[i].Quote;

    detail.append(name, work, quote);
    speak.append(images, detail);
    speakers.appendChild(speak);
    }

  }
 
}
if (btnMore !== null) {
    btnMore.addEventListener('click', ()=> {        
        btnMore.style.display = 'none';
        for (let i = 2; i < speakerData.length; i++) {
            
            const speak = iDiv();
            speak.classList.add('speaker');
        
            // create and image tag
            const images = iDiv();
            images.classList.add('speaker-img');
            images.innerHTML = `<img class='speaker-img' src='${speakerData[i].Imagesrc}' alt='${speakerData[i].Name}'/>`;
        
            // create detail tag
            const detail = iDiv();
            detail.classList.add('details');
        
            // create name tag
            const name = iDiv('h2');
            name.classList.add('names');
            name.innerText = speakerData[i].Name;
        
            // create work tag
            const work = iDiv('h4');
            work.classList.add('work');
            work.innerText = speakerData[i].Work;
        
            // create quate tag
            const quote = iDiv('p');
            quote.classList.add('quote');
            quote.innerText = speakerData[i].Quote;
        
            detail.append(name, work, quote);
            speak.append(images, detail);
            speakers.appendChild(speak);        
        
          }
    });
}

window.onload = () => {
  featureSpeakers();
};