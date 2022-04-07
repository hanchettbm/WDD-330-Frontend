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
      {
        label: "Week 6",
        url: "week6/index.html"
      },
      {
        label: "Week 7",
        url: "week7/index.html"
      },
      {
        label: "Week 8",
        url: "week8/index.html"
      },
      {
        label: "Week 9",
        url: "week9/index.html"
      },
      {
        label: "Week 10",
        url: "week10/index.html"
      },
      {
        label: "Week 11",
        url: "week11/index.html"
      },
      {
        label: "Week 12",
        url: "week12/index.html"
      },
      {
        label: "Week 13",
        url: "week13/index.html"
      },
      {
        label: "Final Project",
        url: "final/index.html"
      },
      {
        label: "Final Project Video",
        url: "https://youtu.be/iku3rhmqxyY"
      }
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