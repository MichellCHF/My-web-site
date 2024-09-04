var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2>Biotechnologist | Junior Fronted Developer</h2>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('If you can dream it')
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('<strong>You can do it</strong>')
    .pauseFor(2500)
    .start();