const links = [
    {
      label: "Week 1",
      url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
      },
      {
        label: "Week 3",
        url: "week3/index.html"
      },
      {
        label: "Week 4",
        url: "week4/index.html"
      },
      {
        label: "Week 5",
        url: "week5/index.html"
      },
  ]

links.forEach((link) => { 
    let newListItem = document.createElement("li");
    let newLink = document.createElement("a");
    let newLinkText = document.createTextNode(link.label);
    newLink.appendChild(newLinkText);
    newLink.href = link.url;
    console.log(newLink);
    newListItem.appendChild(newLink);
    let orderedList = document.querySelector(".ordered-list");
    orderedList.appendChild(newListItem);
})