<template>
    <section class="contact-container">
        <h2 class="section-title">/ Contact</h2>
        <div class="main">
            <h3 class="title">Magic Starts Here</h3>
            <div class="content">
                <h4 class="subtitle">Have A Project In Mind ?</h4>
                <div class="btn btn-primary">
                    <p>contact@tanguydeleage.com</p>
                    <div class="difference-box btn-hover"></div>
                </div>
            </div>
            <div class="divider"></div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'Contact',
    }
</script>

<style scoped>

    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
    }

    .title{
        color: var(--text);
        font-family: Bagnard;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
    }

    .subtitle {
        color: var(--text);
        font-family: 'Bagnard';
    }

/* ------------- Mobile -------------- */
@media screen and (max-width: 639px) {

    .contact-container {
        padding: 3rem 1rem;
        gap: 4rem;
    }

    .main {
        gap: 1rem;
    }

    .title {
        font-size: 2rem;
    }

    .content {
        gap: 0.5rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .divider {
        height: 1px;
        background-color: var(--primary);
        width: 100%;
    }
}

/* ------------- Tablet -------------- */
@media screen and (min-width: 640px) and (max-width: 979px) {

    .contact-container {
        padding: 4rem 2rem;
        gap: 5rem;
    }

    .main {
        gap: 2rem;
    }

    .title {
        font-size: 3rem;
    }

    .content {
        gap: 0.5rem;
    }

    .subtitle {
        font-size: 2rem;
    }

    .divider {
        height: 1px;
        background-color: var(--primary);
        width: 100%;
    }
}

/* ------------- Desktop -------------- */
@media screen and (min-width: 980px) {
    .contact-container {
        padding: 4rem 4rem 2rem 4rem;
        gap: 8rem;
    }

    .main {
        gap: 3rem;
    }

    .title {
        font-size: 5rem;
    }

    .content {
        gap: 0.5rem;
    }

    .subtitle {
        font-size: 2rem;
    }

    .divider {
        height: 1px;
        background-color: var(--primary);
        width: 100%;
    }
}
</style>