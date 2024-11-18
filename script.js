let khaliBody = document.getElementsByTagName('body')

for (const b of khaliBody) {
    b.innerHTML = "<h1>My First No HTML File</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, odio repudiandae aliquid, dolorum amet tempore eligendi ad, ipsum quam obcaecati fugit cumque consequatur laudantium similique dolore molestiae neque vero pariatur!</p><ul><li>List Number 1</li><li>List Number 2</li><li>List Number 3</li><li>List Number 4</li><li>List Number 5</li></ul>";
    
    b.style.fontFamily = "DM Sans, serif";
    b.style.textAlign = "Center";
}

for (const h of document.getElementsByTagName('h1')) {
    h.style.margin = 0;
    h.style.fontWeight = 900;
    h.style.fontSize = "100px";
}
for (const p of document.getElementsByTagName('p')) {
    p.style.margin = 0;
}
for (const u of document.getElementsByTagName('ul')) {
    u.style.margin = 0;
    u.style.padding = 0;
}

for (const l of document.getElementsByTagName('li')) {
    l.style.listStyleType = 'none';
}

let fontChange = document.getElementsByTagName('head')

for (const myFont of fontChange) {
myFont.innerHTML = "<link><link><link>";
}

let myLink = document.getElementsByTagName('link');
myLink[0].setAttribute("rel", "preconnect");
myLink[0].setAttribute("href", "https://fonts.googleapis.com");
myLink[1].setAttribute("rel", "preconnect");
myLink[1].setAttribute("href", "https://fonts.gstatic.com");
myLink[1].setAttribute("crossorigin", "");
myLink[2].setAttribute("href", "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap");
myLink[2].setAttribute("rel", "stylesheet");

