<template>
    <section id="contact" class="contact-container">
        <h2 class="section-title">/ CONTACT</h2>
        <div class="main">
            <h3 class="title">Get In Touch</h3>
            <div class="content">
                <p class="subtitle">Available to work full-remote, or punctually around Nantes, Bordeaux or Paris. You have a project you’d like to discuss ? </p>
                <p class="subtitle"> Email : <a class="underline hover-bold" href="mailto:contact@tanguydeleage.com">contact@tanguydeleage.com</a> </p>
            </div>
            <a href="mailto:contact@tanguydeleage.com" class="btn btn-primary">
                <p>Send an email</p>
            </a>

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
        font-family: 'QuattroCento Sans';
    }

    .underline {
        text-decoration: underline;
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
        max-width: 40rem;
    }

    .title {
        font-size: 3rem;
    }

    .content {
        gap: 0.5rem;
    }

    .subtitle {
        font-size: 1.5rem;
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
        padding: 4rem 4rem 2rem 0rem;
        gap: 8rem;
    }

    .main {
        gap: 2rem;
        padding-left: 4rem;
        max-width: 48rem;
    }

    .title {
        font-size: 5rem;
    }

    .content {
        gap: 0.5rem;
    }

    .subtitle {
        font-size: 1.5rem;
    }

    .hover-bold:hover {
        font-weight: bold;
    }
}
</style>