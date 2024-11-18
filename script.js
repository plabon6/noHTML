let khaliBody = document.getElementsByTagName('body')

for (const b of khaliBody) {
    b.innerHTML = "<h1>My First No HTML File</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, odio repudiandae aliquid, dolorum amet tempore eligendi ad, ipsum quam obcaecati fugit cumque consequatur laudantium similique dolore molestiae neque vero pariatur!</p><ul><li>List Number 1</li><li>List Number 2</li><li>List Number 3</li><li>List Number 4</li><li>List Number 5</li></ul>"; 
}

for (const h of document.getElementsByTagName('h1')) {
    h.style.margin = 0;
}
for (const p of document.getElementsByTagName('p')) {
    p.style.margin = 0;
}
for (const u of document.getElementsByTagName('ul')) {
    u.style.margin = 0;
    u.style.padding = 0;
    u.style.display = 'flex';
    u.style.justifyContent = 'space-between';
}

for (const l of document.getElementsByTagName('li')) {
    l.style.listStyleType = 'none';
}