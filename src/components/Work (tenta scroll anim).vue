<template>
    <section id="work" class="work-container">
      <div class="project"></div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Work',
    data() {
      return {};
    },
    mounted() {
      window.addEventListener('scroll', this.displayProject);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.displayProject);
    },
    methods: {
      displayProject() {
        const project = document.querySelector('.project');
        const rect = project.getBoundingClientRect();
        const distanceToTop = rect.top;
  
        const startPoint = 750;
        const endPoint = 300;

        let animationProgress = 0;

        if (distanceToTop >= startPoint) {
        animationProgress = 0;
        } else if (distanceToTop <= endPoint) {
        animationProgress = 1;
        } else {
        animationProgress = ((startPoint - distanceToTop) / (startPoint - endPoint)).toFixed(5);
        }

  
        console.log(distanceToTop);
        console.log(animationProgress);
  
        // Apply the animation based on the scroll position
        const animationKeyframe = {
          transform: `translateX(${(1 - animationProgress) * -40}%)`,
          filter: `grayscale(${animationProgress})`,
        };
  
        // Apply the animation keyframes to the element
        Object.assign(project.style, animationKeyframe);
      },
    },
  };
  </script>
  
  <style scoped>
  /* ------------- Desktop -------------- */
  @media screen and (min-width: 980px) {
    .work-container {
      padding: 4rem 0rem;
      gap: 4rem;
    }
  
    .project {
      background-color: blue;
      width: 50%;
      height: 10rem;
      transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
    }
  }
  </style>
  