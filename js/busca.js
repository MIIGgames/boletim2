const newsData = [
    { title: "deep web", content: "ola mundo", url: "" },
    { title: "Notícia 2", content: "Conteúdo da notícia 2..." },
    { title: "Notícia 3", content: "Conteúdo da notícia 3..." },
    // ...mais notícias
  ];
  
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("results-container");
  
  searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredNews = newsData.filter(function(news) {
      return news.title.toLowerCase().includes(searchTerm) || news.content.toLowerCase().includes(searchTerm);
    });
  
    displayResults(filteredNews);
  });
  
  function displayResults(results) {
    resultsContainer.innerHTML = "";
  
    results.forEach(function(result) {
      const li = document.createElement("li");
      li.textContent = result.title;
      resultsContainer.appendChild(li);
    });
  }
  