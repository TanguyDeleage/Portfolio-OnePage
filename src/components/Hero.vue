<template>
    <section id="hero" class="hero-container">
        <div class="left-container">
            <div class="hero-title slideRight">
                <h1>TANGUY DELEAGE</h1>
                <h2>Product Designer Freelance</h2>
            </div>
            <p class="hero-description slideRight">I help agencies and start-up save time and money with design-led development. I build Interactive high-fidelity prototypes which allows faster iterations and a better communications with your users.</p>
            <div class="hero-cta slideRight">
                <a href="#work" class="btn btn-primary">
                    <p>View Portfolio</p>
                </a>
                <a href="#contact" class="btn btn-secondary">
                    <p>Contact</p>
                </a>
            </div>
        </div>
        <div class="right-container">
            <div class="hero-picture slideLeft"></div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'Hero',
        mounted() {
            this.slideInHero();
        },
        methods: {
            slideInHero() {
                const slideElements = [
                    { method: this.title, delay: 1 },
                    { method: this.description, delay: 100 },
                    { method: this.cta, delay: 350 },
                    { method: this.picture, delay: 450 },
                ];

                slideElements.forEach(({ method, delay }) => {
                    setTimeout(() => {
                    method();
                    }, delay);
                });
            },

            title() {
                const title = document.querySelector('.hero-title');
                title.classList.remove('slideRight')
            },
            description() {
                const description = document.querySelector('.hero-description');
                description.classList.remove('slideRight')
            },
            cta() {
                const cta = document.querySelector('.hero-cta');
                cta.classList.remove('slideRight')
            },
            picture() {
                const cta = document.querySelector('.hero-picture');
                cta.classList.remove('slideLeft')
            },
        }
    }
</script>

<style scoped>

.hero-container {
    display: flex;
    justify-content: center;
}

.left-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.right-container {
    display: flex;
}

.hero-title{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

h1, h2 {
    font-family: 'Bagnard';
}


.hero-description{
    font-size: 1.5rem;
}

.hero-cta {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
}

.hero-picture {
    background: url("../assets/images/hero-picture.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: grayscale(1);
}

/* ------------- Mobile -------------- */
@media screen and (max-width: 639px) {
    .hero-container {
        padding: 2rem 1rem 4rem 1rem;
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 1rem;
    }

    h1 {
        font-size: 1rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    .hero-description {
        font-size: 1rem;
    }

    .left-container{
        gap: 2.5rem;
    }

    .hero-picture {
        height: 22.375rem;
        width: 100%;
    }

    .right-container {
        width: 100%;
    }
}

/* ------------- Tablet -------------- */
@media screen and (min-width: 640px) and (max-width: 979px) {
    .hero-container {
        padding: 4rem 2rem;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
    }

    .left-container{
        gap: 2.5rem;
        width: calc(100% - 22.375rem);
    }

    .right-container {
        width: 22.375rem;
        min-height: 22.5rem;
    }

    .hero-picture { 
        width: 100%;
    }

    h1 {
        font-size: 1rem;
    }

    h2 {
        font-size: 2rem;
    }

    .hero-description {
        font-size: 1rem;
    }
}

/* ------------- Desktop -------------- */
@media screen and (min-width: 980px) {
    .hero-container {
        padding: 4rem;
        flex-direction: row;
        align-items: center;
        gap: 2.5rem;
    }

    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 3.5rem;
    }

    .hero-description {
        max-width: 50rem;
    }

    .left-container{
        gap: 4rem;
        width: calc(100% - 35.375rem);
        transition: 0.5s ease-out;
    }

    .right-container {
        width: 35.375rem;
        min-height: 22.5rem;
    }

    .hero-picture { 
        height: 35.1875rem;
        width: 100%;
    }

    /* ========== Animation ========== */
    .slideRight {
        transform: translateX(-2.5rem);
        opacity: 0%;
    }

    .slideLeft {
        transform: translateX(2.5rem);
        opacity: 0%;
    }

    .hero-title, .hero-description, .hero-cta, .hero-picture {
        transition: opacity 450ms ease-out, transform 450ms ease-out;
    }

}
</style>