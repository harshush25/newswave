const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8081;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // Simple news items (hardcoded) — replace with JSON or DB later
  const news = [
    { id:1, title: "NewsWave Launched", content: "Welcome to NewsWave — your micro news portal!" },
    { id:2, title: "Dockerized App", content: "This app runs inside Docker and is deployed via Jenkins." }
  ];
  let html = `<h1>NewsWave</h1><ul>`;
  news.forEach(n => html += `<li><h3>${n.title}</h3><p>${n.content}</p></li>`);
  html += `</ul><p>Deployed at ${new Date().toLocaleString()}</p>`;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`NewsWave listening on port ${PORT}`);
});
