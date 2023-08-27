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
                </div>
                <div class="btn btn-secondary">
                    <p>Contact</p>
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
}

/* ------------- Mobile -------------- */
@media screen and (max-width: 639px) {
    .hero-container {
        padding: 5rem 1rem 4rem 1rem;
        flex-direction: column-reverse;
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

    .hero-title h1 {
        font-size: 1rem;
    }

    .hero-title h2 {
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

    .left-container{
        gap: 4rem;
        width: calc(100% - 35.375rem);
    }

    .right-container {
        width: 35.375rem;
        min-height: 22.5rem;
    }

    .hero-picture { 
        height: 35.1875rem;
        width: 100%;
    }
}
</style>