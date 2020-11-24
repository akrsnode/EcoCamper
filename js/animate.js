const animatedItems = [...document.body.children];

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting)  entry.target.classList.add('animated-fadeInUp');
  })
}, { threshold: [0.1] });

for(const item of animatedItems) {
  for(const child of item.children) {
    child.classList.add('animate');
    observer.observe(child);
  };
};
