<template>
    <section class="hero-container">
        <div class="left-container">
            <div class="hero-title">
                <h1>TANGUY DELEAGE</h1>
                <h2>Product designer Fullstack</h2>
            </div>
            <p class="hero-description">Bridging Design and Development by designing high-fidelity, interactive 
                prototypes to improve Design team's research process.</p>
            <div class="hero-cta">
                <div class="btn btn-primary">
                    <p>View Portfolio</p>
                    <div class="difference-box btn-hover"></div>
                </div>
                <div class="btn btn-secondary">
                    <p>Contact</p>
                    <div class="difference-box btn-hover"></div>
                </div>
            </div>
        </div>
        <div class="right-container">
            <div class="hero-picture"></div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'Hero',
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
}

.hero-title{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

h1{
    font-size: 1.5rem;
    font-family: 'Bagnard';
}

h2{
    font-size: 3.5rem;
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
    background: url("../assets/images/hero-picture.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: grayscale(1);
    width: 35.375rem;
    height: 37.625rem;
}

/* ------------- Mobile -------------- */
@media screen and (max-width: 639px) {
    .hero-container {
        padding: 5rem 1rem 4rem 1rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .left-container{
        gap: 2.5rem;
    }

    .hero-picture {
        height: 22.375rem;
        width: 100%;
    }

    .right-container {
        width: calc(100vw - 2rem);
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
    }

    .hero-picture {
        width: 22.375rem;
        height: 22.5rem;
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

    .left-container{
        gap: 4rem;
    }

    .hero-picture {
        width: 35.375rem;
        height: 37.625rem;
    }
}
</style>