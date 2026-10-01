// =========================================
// ELEMENTS
// =========================================

const envelope = document.getElementById(
    "envelope-container"
);

const letter = document.getElementById(
    "letter-container"
);

const letterWindow = document.querySelector(
    ".letter-window"
);

const noBtn = document.querySelector(
    ".no-btn"
);

const firstYes = document.getElementById(
    "first-yes"
);

const secondYes = document.getElementById(
    "second-yes"
);

const loveSong = document.getElementById("love-song");
);


// =========================================
// SCREENS
// =========================================

const introScreen = document.getElementById(
    "intro-screen"
);

const stepOne = document.getElementById(
    "step-one"
);

const yippeeScreen = document.getElementById(
    "yippee-screen"
);

const stepTwo = document.getElementById(
    "step-two"
);

const letterIntro = document.getElementById(
    "letter-intro"
);

const loveLetter = document.getElementById(
    "love-letter"
);

const reasonsScreen = document.getElementById(
    "reasons-screen"
);

const hiddenMessagesScreen =
    document.getElementById(
        "hidden-messages-screen"
    );

const finalScreen = document.getElementById(
    "final-screen"
);


// =========================================
// SCREEN FUNCTION
// =========================================

function showScreen(screen) {

    const screens = document.querySelectorAll(
        ".screen"
    );

    screens.forEach((item) => {

        item.style.display = "none";

    });

    screen.style.display = "flex";
}


// =========================================
// CREATE FLOATING HEARTS
// =========================================

function createFloatingHeart() {

    const heart = document.createElement(
        "div"
    );

    heart.classList.add(
        "floating-heart"
    );

    const hearts = [
        "♡",
        "♥",
        "♡",
        "♥"
    ];

    heart.textContent =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    document
        .getElementById("floating-hearts")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);
}


// Create hearts continuously

setInterval(
    createFloatingHeart,
    1200
);


// =========================================
// ENVELOPE
// =========================================

envelope.addEventListener(
    "click",
    () => {

        envelope.style.display =
            "none";

        letter.style.display =
            "flex";

        setTimeout(() => {

            letterWindow.classList.add(
                "open"
            );

            showScreen(
                introScreen
            );

        }, 100);

    }
);


// =========================================
// INTRO BUTTON
// =========================================

document
    .getElementById("intro-button")
    .addEventListener(
        "click",
        () => {

            showScreen(
                stepOne
            );

        }
    );


// =========================================
// NO BUTTON
// =========================================

noBtn.addEventListener(
    "mouseover",
    () => {

        const distance = 180;

        const angle =
            Math.random() *
            Math.PI *
            2;

        const moveX =
            Math.cos(angle) *
            distance;

        const moveY =
            Math.sin(angle) *
            distance;

        noBtn.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    }
);


// =========================================
// FIRST YES
// =========================================

firstYes.addEventListener(
    "click",
    () => {

        showScreen(
            yippeeScreen
        );

        // Wait before showing next question

        setTimeout(() => {

            showScreen(
                stepTwo
            );

        }, 3000);

    }
);


// =========================================
// SECOND YES
// =========================================

secondYes.addEventListener("click", () => {

    // Start music at 0 volume
    loveSong.volume = 0;

    loveSong.play()
        .then(() => {

            fadeInMusic();

        })
        .catch((error) => {

            console.log("Audio could not start:", error);

        });


    // Show music intro
    showScreen(letterIntro);


    // Wait for music intro
    setTimeout(() => {

        showScreen(loveLetter);

    }, 3000);

});


// =========================================
// FADE IN MUSIC
// =========================================

function fadeInMusic() {

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if (volume >= 1) {

            volume = 1;
            clearInterval(fade);

        }

        loveSong.volume = volume;

    }, 100);

}
// =========================================
// LETTER PAGES
// =========================================

const pages =
    document.querySelectorAll(
        ".letter-page"
    );

const previousButton =
    document.getElementById(
        "previous-page"
    );

const nextButton =
    document.getElementById(
        "next-page"
    );

const pageNumber =
    document.getElementById(
        "page-number"
    );

let currentPage = 0;


function updatePage() {

    pages.forEach(
        (page, index) => {

            page.classList.toggle(
                "active",
                index === currentPage
            );

        }
    );


    pageNumber.textContent =
        `${currentPage + 1} / ${pages.length}`;


    // Disable back button
    if (currentPage === 0) {

        previousButton.style.opacity =
            "0.4";

        previousButton.style.pointerEvents =
            "none";

    } else {

        previousButton.style.opacity =
            "1";

        previousButton.style.pointerEvents =
            "auto";

    }


    // Change next button on final page

    if (
        currentPage ===
        pages.length - 1
    ) {

        nextButton.textContent =
            "Finish reading ♡";

    } else {

        nextButton.textContent =
            "Next →";

    }

}


nextButton.addEventListener(
    "click",
    () => {

        if (
            currentPage <
            pages.length - 1
        ) {

            currentPage++;

            updatePage();

        } else {

            showScreen(
                reasonsScreen
            );

        }

    }
);


previousButton.addEventListener(
    "click",
    () => {

        if (currentPage > 0) {

            currentPage--;

            updatePage();

        }

    }
);


// =========================================
// REASONS CARDS
// =========================================

const reasonCards =
    document.querySelectorAll(
        ".reason-card"
    );

reasonCards.forEach(
    (card) => {

        card.addEventListener(
            "click",
            () => {

                card.classList.toggle(
                    "revealed"
                );

            }
        );

    }
);


// =========================================
// REASONS → HIDDEN MESSAGES
// =========================================

document
    .getElementById("reasons-next")
    .addEventListener(
        "click",
        () => {

            showScreen(
                hiddenMessagesScreen
            );

        }
    );


// =========================================
// SECRET HEARTS
// =========================================

const secretHearts =
    document.querySelectorAll(
        ".secret-heart"
    );

secretHearts.forEach(
    (heart) => {

        heart.addEventListener(
            "click",
            () => {

                heart.classList.toggle(
                    "revealed"
                );

            }
        );

    }
);


// =========================================
// HIDDEN MESSAGES → FINAL
// =========================================

document
    .getElementById("hidden-next")
    .addEventListener(
        "click",
        () => {

            showScreen(
                finalScreen
            );

            // More hearts for final reveal

            for (
                let i = 0;
                i < 15;
                i++
            ) {

                setTimeout(
                    createFloatingHeart,
                    i * 150
                );

            }

        }
    );


// =========================================
// INITIAL PAGE
// =========================================

updatePage();
