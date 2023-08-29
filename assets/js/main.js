// Add notification bunotife to nav items
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
    console.log('%c'+consoleClubTitle, consoleClubStyles);
    console.log('%c'+consoleClubDescription, 'color: white; background: black;font-size: 18px;');
}

// Dark mode
function colorScheme() {
    const body = document.body;
    const colorSchemeToggle = document.getElementById('colorSchemeButton');
    let colorScheme = sessionStorage.getItem('color-scheme');

    const pressButton = () => {
        colorSchemeToggle.setAttribute('aria-pressed', true);
    }
    const unpressButton = () => {
        colorSchemeToggle.setAttribute('aria-pressed', false);
    }
    const storeSchemeDark = () => {
        sessionStorage.setItem('color-scheme', 'dark');
    };
    const overrideSchemeDark = () => {
        body.setAttribute('data-color-scheme', 'dark');
    };
    const storeSchemeLight = () => {
        sessionStorage.setItem('color-scheme', 'light');
    };
    const overrideSchemeLight = () => {
        body.setAttribute('data-color-scheme', 'light');
    };

    if (colorScheme === 'dark') {
        pressButton();
        storeSchemeDark();
    } else if (colorScheme === 'light') {
        unpressButton();
        storeSchemeLight();
    }

    colorSchemeToggle.addEventListener('click', (e) => {
        colorScheme = sessionStorage.getItem('color-scheme');
        if (colorScheme === 'dark') {
            pressButton();
            storeSchemeLight();
            overrideSchemeLight();
        } else if (colorScheme === 'light') {
            unpressButton();
            storeSchemeDark();
            overrideSchemeDark();
        }
    });
}

window.addEventListener('load', function () {
    // notification(3, 'New!');
    consoleClub();
    colorScheme();
}, true);