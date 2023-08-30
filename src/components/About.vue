<template>
    <section id="about" class="about-container">
        <h2 class="section-title">/ ABOUT</h2>
        <div class="presentation">
            <div class="text slide-in">
                <div class="header">
                    <h3 class="title">Bridging Design And Development</h3>
                    <h4 class="subtitle">With A Lot Of Passion</h4>
                </div>
                <div class="intro-paragraph">
                    <p>I've always been curious, wanted to know how things work, and I always had ideas I wanted to exploit.</p>
                    <p>Business School helped me structure those ideas through strategy but it also made me realize I was lacking operational skills.</p>
                    <p>I self-learned code until I joined Le Wagon Web Developer's Bootcamp. There I understood strategy and operational are very useful but they must be user oriented.</p>
                    <p>Fascinated by Front-end development and Products, I became a Product Designer. I now found my place between strategy/operational/user.</p>
                </div>
            </div>
            <div class="image">
                <h4 class="subtitle">My Professional Path</h4>
                <img :src="getImageSrc" alt="My professional path">
            </div>
        </div>
        <!-- <div class="hobbies">
            <div class="header">
                <h3 class="title">I'm An Eternal Curious</h3>
                <h4 class="subtitle">With A Lot Of Hobbies</h4>
            </div>
            <img src="public/hobbies.jpg" alt="Different pictures of my hobbies : photography, bouldering, music...">
        </div> -->
        <div class="testimonials">
            <h4 class="subtitle">Latest Reference</h4>
            <div class="lower-part">
                <div class="outro-paragraph">
                    <div class="beginning">"</div>
                    <div class="reference">All his personal and professional initiatives make Tanguy a hybrid and versatile profile. During his work-study period at Canal+, he naturally acquired the fundamentals of product design. But Tanguy didn't stop there: on his own initiative, he acquired in-depth knowledge of the newly available Figma variables and brilliantly led his very first team workshop, applying these variables to prototypes projecting the full potential of this new feature on our product.</div>
                    <div class="ending">"</div>
                </div>
                <div class="author">
                    <p class="name">Vanessa.G</p>
                    <p class="job-title">Head Of Product Design</p>
                </div>
            </div>
            
        </div>
    </section>
</template>


<script>
    export default {
        name: 'About',
        data() {
            return {
                imagePaths: {
                    small: 'about-path-sm.svg',
                    medium: 'about-path-md.svg',
                    large: 'about-path-lg.svg',
                }
            };
        },
        computed: {
            getImageSrc() {
                const windowWidth = window.innerWidth;

                if (windowWidth < 639) {
                    return this.imagePaths.small;
                } else if (windowWidth < 980) {
                    return this.imagePaths.medium;
                } else {
                    return this.imagePaths.large;
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.slideIn);
        },
        methods: {
            slideIn() {
                const text = document.querySelector('.text')
                const rect = text.getBoundingClientRect();
                const distanceToTop = rect.top;
                
                if (distanceToTop < 660) {
                    text.classList.remove('slide-in')
                }
            }
        }
    };
</script>


<style scoped>

    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .presentation {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .title  {
        color: var(--text);
        font-family: Bagnard;
    }

    .subtitle {
        color: var(--text);
        font-family: 'Bagnard';
    }

    .intro-paragraph {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .intro-paragraph p {
        color: var(--text);
        font-family: 'Quattrocento Sans';
    }

    .image {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        margin: 0 auto;
    }

    .image h4 {
        width: 100%;
        text-align: center;
    }

    .testimonials {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        margin: 0 auto;
    }

    .lower-part {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .outro-paragraph {
        display: flex;
        align-items: flex-start;
    }

    .beginning, .ending {
        color: var(--text);
        font-family: 'Bagnard';
    }

    .reference {
        color: var(--text);
        text-align: justify;
        font-family: 'Quattrocento Sans';
    }

    .author {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
    }

    .name {
        color: var(--text);
        font-family: 'Quattrocento Sans';
        font-weight: bold;
    }

    .job-title {
        color: var(--text);
        text-align: center;
        font-family: 'Quattrocento Sans';
    }

/* ------------- Mobile -------------- */
@media screen and (max-width: 639px) {

    .about-container {
        padding: 3rem 1rem;
        gap: 4rem;
    }

    .presentation {
        gap: 4rem;
    }

    .text {
        gap: 2rem;
    }

    .header {
        gap: 1rem;
    }

    .title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .intro-paragraph {
        gap: 0.5rem;
    }

    .intro-paragraph p {
        font-size: 1rem;
    }

    .image {
        padding: 4rem 1rem;
        gap: 4rem;
        width: 100%;
    }

    .image img {
        width: 100%;
    }

    .testimonials {
        gap: 2rem;
    }

    .lower-part{
        gap: 1rem;
    }

    .outro-paragraph {
        gap: 1rem;
    }

    .beginning, .ending {
        font-size: 4rem;
    }

    .name {
        font-size: 1rem;
    }

    .job-title{
        font-size: 1rem;
    }

    .reference {
        font-size: 1rem;
        font-style: italic;
    }
}

/* ------------- Tablet -------------- */
@media screen and (min-width: 640px) and (max-width: 979px) {
    .about-container {
        padding: 2rem 3rem;
        gap: 4rem;
    }

    .presentation {
        gap: 4rem;
    }

    .text {
        gap: 4rem;
        width: 36rem;
    }

    .header {
        gap: 1rem;
    }

    .title {
        font-size: 5rem;
    }

    .subtitle {
        font-size: 2rem;
    }

    .intro-paragraph {
        gap: 1.5rem;
    }

    .intro-paragraph p {
        font-size: 1.5rem;
    }

    .image {
        padding: 4rem 2rem;
        gap: 4rem;
    }

    .hobbies {
        width: 36rem;
    }

    .testimonials {
        gap: 4rem;
    }

    .lower-part{
        gap: 2rem;
    }

    .outro-paragraph {
        gap: 1rem;
    }

    .beginning, .ending {
        font-size: 5rem;
    }

    .name {
        font-size: 1.5rem;
    }

    .job-title{
        font-size: 1.5rem;
    }

    .reference {
        font-size: 1.5rem;
        font-style: italic;
    }
          
}

/* ------------- Desktop -------------- */
@media screen and (min-width: 980px) {

    .about-container {
        padding: 4rem 0rem;
        gap: 8rem;
    }

    .presentation {
        gap: 4rem;
    }

    .text {
        gap: 4rem;
        width: 52.25rem;
        transition: 0.7s;
    }

    .header {
        gap: 1rem;
        width: 100%;
        /* margin: 0 auto; */
    }

    .hobbies {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 52.25rem;
    }

    .title {
        font-size: 4rem;
        /* width: 100%; */
    }

    .subtitle {
        font-size: 2rem;
    }

    .intro-paragraph {
        gap: 0.5rem;
    }

    .intro-paragraph p {
        font-size: 1.5rem;
    }

    .image {
        padding: 4rem;
        gap: 4rem;
        width: 100%;
    }

    .image img {
        width: 100%
    }

    .testimonials {
        gap: 4rem;
        width: 57.4375rem;
    }

    .lower-part{
        gap: 2rem;
    }

    .outro-paragraph {
        gap: 1rem;
    }

    .beginning, .ending {
        font-size: 6rem;
    }

    .name {
        font-size: 1.5rem;
    }

    .job-title{
        font-size: 1.5rem;
    }

    .reference {
        font-size: 1.5rem;
        font-style: italic;
    }

    .slide-in {
        opacity: 0;
        transform: translateX(-2rem);
    }

}
</style>