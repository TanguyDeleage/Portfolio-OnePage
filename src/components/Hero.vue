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
    padding: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
}

.left-container {
    display: flex;
    flex-direction: column;

    gap: 4rem;
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
p{
    font-size: 1.5rem;
}

.hero-cta {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
}

.hero-picture {
    background: url("../assets/images/hero-picture.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(1);
    width: 35.375rem;
    height: 37.625rem;
}
</style>