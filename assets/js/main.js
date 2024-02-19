// Add notification bubble to nav items
function notification(navItem, hiddenText) {
    const notifTarget = document.getElementsByClassName('page__nav')[0].getElementsByTagName('UL')[0].children.item(navItem)
    const notif = document.createElement('span')
    notif.classList.add('notification')
    notif.innerHTML = hiddenText
    notifTarget.append(notif)
}

// ConsoleClub - message in console
function consoleClub() {
    let consoleClubTitle = '🧑‍💻 Welcome to Console Club, fellow code wizard!'
    let consoleClubDescription = 'How lovely to see a new face around here. Please, take a cookie. I extend an open invitation for you to freely use any code from this domain. However, I implore you to embrace your creativity and make it uniquely yours. Learn the runes and let your imagination soar, and with each line you borrow, infuse it with your own magic to craft something truly extraordinary! \n\nConsole Club membership cookie was added to your inventory'
    const consoleClubStyles = [
        'color: black',
        'background: deeppink',
        'font-size: 30px',
        'font-family: sans-serif',
        'padding: 0 14px',
    ].join(';');
    console.log('%c' + consoleClubTitle, consoleClubStyles);
    console.log('%c' + consoleClubDescription, 'color: white; background: black;font-size: 18px;');
}

// Dark mode toggle
// Modified from debtdeath.neocities.org
function colorScheme() {
    const colorSchemeButton = document.getElementById('colorSchemeButton');
    let colorScheme = localStorage.getItem('colorScheme') ?? 'system';
    if (colorScheme == 'system') {
        var prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
        if (prefersLightMode) {
            colorScheme = 'light';
        } else {
            colorScheme = 'dark';
        }
    }

    function setColorScheme(colorScheme) {
        document.documentElement.dataset.scheme = colorScheme;
        if (colorScheme == 'light') {
            colorSchemeButton.setAttribute('aria-pressed', false);
        } else {
            colorSchemeButton.setAttribute('aria-pressed', true);
        }
    }
    setColorScheme(colorScheme);
        colorSchemeButton.addEventListener('click', () => {
        if (colorScheme == 'light') {
            colorScheme = 'dark';
        } else {
            colorScheme = 'light';
        }
        localStorage.setItem('colorScheme', colorScheme);
        setColorScheme(colorScheme);
    });
}

function sparkles(pattern = "confetti1") {
    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
    var pause = false;
    if (!!isReduced) {
        pause = true;
    }
    cursorTrail({
        paused: pause,
        pattern: pattern,
        animationType: 'down',
        theme: 'light',
        step: 8
    });
}

// Load when everything has loaded
window.addEventListener('load', function () {
    // notification(4, 'New!');
    consoleClub();
    colorScheme();
    sparkles()
}, true);
