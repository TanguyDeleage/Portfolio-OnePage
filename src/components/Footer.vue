<template>
    <div class="footer">
        <div class="socials">
            <h4 class="title">Follow Me</h4>
            <div class="social-links">
                <a v-for="link in links" :key="link" class="social-link btn" :href="link.url">
                    <img :src="link.image" :alt="link.title">
                </a>
            </div>
        </div>
        <img src="public/logo-footer.svg" alt="Tanguy DELEAGE logo">
        <div class="text">
            <p class="mail">contact@tanguydeleage.com</p>
            <div class="copyright">
                <p>Design and Developped by Tanguy DELEAGE.</p>
                <p>2023. All rights reserved</p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Footer',
        data() {
            return {
                links: [
                    {
                        title: "Linkedin",
                        url: "https://www.linkedin.com/in/tanguy-deleage/",
                        image: "public/icon-linkedin.svg",
                    },
                    {
                        title: "Behance",
                        url: "https://www.behance.net/tanguy-delage",
                        image: "public/icon-behance.svg",
                    },
                    {
                        title: "Github",
                        url: "https://github.com/TanguyDeleage",
                        image: "public/icon-github.svg",
                    }

                ]
            }
        }
    }
</script>

<style scoped>

    .socials {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .title {
        color: #000;
        font-family: 'Bagnard';
    }

    .social-links {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .social-link {
        display: flex;
        width: 4rem;
        height: 4rem;
        padding: 1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 2px solid var(--primary);
        background: var(--secondary);
        text-decoration: none;
    }

    .text {
        display: flex;
        max-width: 30.1875rem;
        padding-left: 1rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .mail {
        color: var(--text);
        font-family: 'Quattrocento Sans';
        font-style: italic;
    }

    .copyright {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
    }

    .copyright p {
        color: var(--text);
        font-family: 'Quattrocento Sans';
    }

/* ------------- Mobile -------------- */
@media screen and (max-width: 639px) {
    
    .footer {
        margin: 4rem 1rem 3rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        gap: 1.5rem;
    }

    .socials {
        gap: 0.5rem;
    }
    .title{
        font-size: 1rem;
        width: 100%;
        text-align: center;
    }
    .mail {
        font-size: 1rem;
        width: 100%;
        text-align: center;
    }

    .copyright p {
        font-size: 1rem;
        width: 100%;
        text-align: center;
    }
}

/* ------------- Tablet -------------- */
@media screen and (min-width: 640px) and (max-width: 979px) {
    
    .footer {
        margin: 5rem 2rem 4rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        gap: 2rem;
    }

    .socials {
        gap: 0.5rem;
    }
    .title{
        font-size: 2rem;
    }
    .mail {
        font-size: 1rem;
        width: 100%;
        text-align: center;
    }

    .copyright p {
        font-size: 1rem;
        width: 100%;
        text-align: center;
    }
}

/* ------------- Desktop -------------- */
@media screen and (min-width: 980px) {
    .footer {
        margin: 8rem 4rem 2rem 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }

    .socials {
        gap: 0.5rem;
        min-width: 30.1875rem;
    }
    .title{
        font-size: 2rem;
    }

    .social-links {
        padding-right: 1rem;
    }

    .mail {
        font-size: 1.5rem;
    }

    .copyright p {
        font-size: 1.5rem;
    }
}
</style>