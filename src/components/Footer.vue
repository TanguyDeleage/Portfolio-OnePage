<template>
    <div class="footer-container">
        <div class="divider"></div>
        <div class="footer">
            <div class="socials">
                <h4 class="title">Follow Me</h4>
                <div class="social-links">
                    <a v-for="link in links" :key="link" class="social-link btn" :href="link.url">
                        <img :src="link.image" :alt="link.title">
                    </a>
                </div>
            </div>
            <a href="#hero" class="brand">
                <svg class="moving-icon" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path v-for="path in paths" :key="path" :id="path.name" :d="path.path" :class="path.class" fill="black" :fill-rule="path.fillRule" :clip-rule="path.fillRule"/>
                </svg>
            </a>
            <div class="text">
                <p class="mail">contact@tanguydeleage.com</p>
                <div class="copyright">
                    <p>Design and Developped by Tanguy DELEAGE.</p>
                    <p>2023. All rights reserved</p>
                </div>
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

                ],
                paths: [
                    {
                        name: "left",
                        path: "M0 14.766H24V63.7753H16C10.6061 58.6913 7.63636 56.1493 0 47.6184V14.766Z",
                        class:'move-left'
                    },
                    {
                        name: "top",
                        path: "M-2.71508e-05 5.41091C-2.71508e-05 2.54666 -6.10352e-05 0.224735 -6.10352e-05 0.224735H50.6666C53.6122 0.224735 56 0.224731 56 0.224731V7.22607H-2.71508e-05V5.41091Z",
                        class:'move-top',
                    },
                    {
                        name: "right",
                        path: "M40 20.9595H38.1333V57.5818H40C43.6969 54.4546 45.3939 53.1836 49.8667 47.6184V30.9229C46.2424 26.0687 43.6969 23.9503 40 20.9595ZM32 14.766V63.7753H40C45.8181 58.6913 48.7878 56.1493 56 47.6184V30.9229C49.6363 23.103 45.3939 18.4426 40 14.766H32Z",
                        class:'move-right',
                        fillRule: "evenodd",
                    }
                ]
            }
        },
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

    .divider {
        height: 1px;
        background-color: var(--primary);
        width: 100%;
    }

    .footer-container {
        display: flex;
    }

    .moving-icon {
        width: 57px;
        height: 65px;
    }

/* ------------- Mobile -------------- */
@media screen and (max-width: 639px) {
    
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        gap: 1.5rem;
    }

    .footer-container {
        flex-direction: column;
        gap: 2rem;
        padding: 4rem 1rem 3rem 1rem;
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

    .moving-icon {
        overflow: initial;
    }
}

/* ------------- Tablet -------------- */
@media screen and (min-width: 640px) and (max-width: 979px) {
    
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        gap: 2rem;
    }

    .footer-container {
        flex-direction: column;
        gap: 2rem;
        padding: 5rem 2rem 4rem 2rem;
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

    .moving-icon {
        overflow: initial;
    }
}

/* ------------- Desktop -------------- */
@media screen and (min-width: 980px) {
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }

    .footer-container {
        flex-direction: column;
        gap: 2rem;
        padding: 8rem 4rem 2rem 4rem;
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

    .text {
        padding-left: 1rem;
    }

    .mail {
        font-size: 1.5rem;
    }

    .copyright p {
        font-size: 1.5rem;
    }

   .moving-icon {
        overflow: initial;
        cursor: pointer;
    }

    .move-left {
        animation: moveArrowLeft 2s ease-in-out infinite alternate;
    }

    .move-right {
        animation: moveArrowRight 2s ease-in-out infinite alternate;
    }

    .move-top {
        animation: moveArrowTop 2s ease-in-out infinite alternate;
    }

    @keyframes moveArrowLeft {
        0% {
            transform: translateY(0) translateX(0) rotate(0);
        }

        70% {
            transform: translateY(-0.7rem) translateX(2.3rem) rotate(45deg);
        }
        100% {
            transform: translateY(-0.7rem) translateX(2.3rem) rotate(45deg);
        }
    }

    @keyframes moveArrowRight {
        0% {
            transform: translateY(0) translateX(0) rotate(0);
        }

        70% {
            transform: translateY(1.9rem) translateX(-1.3rem) rotate(-45deg);
        }

        100% {
            transform: translateY(1.9rem) translateX(-1.3rem) rotate(-45deg);
        }
    }

    @keyframes moveArrowTop {
        0% {
            transform: translateY(0) translateX(0) rotate(0);
        }

        70% {
            transform: rotate(90deg) translateY(-2rem) translateX(1.5rem);
        }

        100% {
            transform: rotate(90deg) translateY(-2rem) translateX(1.5rem);
        }
    }
}
</style>