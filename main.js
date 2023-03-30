function redirectToRandomWebsite() {
    var websites = [
      "https://www.google.com",
      "https://www.reddit.com",
      "https://www.wikipedia.org",
      "https://www.nytimes.com",
      "https://apod.nasa.gov/apod/astropix.html",
      "https://www.papertoilet.com/",
      "https://hackertyper.net/",
      "https://radiooooo.com/",
      "https://quickdraw.withgoogle.com/",

    ];
    var randomIndex = Math.floor(Math.random() * websites.length);
    var randomWebsite = websites[randomIndex];
    window.location.href = randomWebsite;
  }