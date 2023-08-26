<template>
    <section class="work-container">
        <h1 class="section-title">/ WORK</h1>
        <div class="section-content" v-for="project in projects" :key="project">
            <div class="project">
                <div class="left-container">
                    <!-- Il faudra bind une class pour savoir si image desktop ou mobile -->
                    <div class="project-image-desktop" :style="{ 'background': 'url(' + project.image + ') no-repeat center/contain' }"></div>
                </div>
                <div class="right-container">
                    <div class="project-title">
                        <h2>{{ project.title }}</h2>
                        <p>{{ project.description }}</p>
                    </div>
                    <div class="btn btn-primary">
                    <p>Discover</p>
                    <div class="difference-box btn-hover"></div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
// import projectImage from "@/assets/images/project-canal.png";

    export default {
        name: 'Work',
        data() {
            return {
                projects: [
                    {
                        title: "Canal+",
                        description: "Provide the download and web consumption of offline content for the users of the web platform",
                        image: "public/project-canal.png",
                        alt: "Mockup of a detail page from myCanal with an opened pop-in",
                        url: "https://www.behance.net/gallery/175709177/Matematch-Mobile-App-for-foreign-students-Le-Wagon"

                    },
                    {
                        title: "Matematch",
                        description: "10 days to help foreign students live a deeper exchange experience",
                        image: "public/project-matematch.png",
                        alt: "Home page mockup of the Matematch app",
                        url: "https://www.behance.net/gallery/175709177/Matematch-Mobile-App-for-foreign-students-Le-Wagon"

                    },
                    {
                        title: "LegID",
                        description: "48h to help families live an easier mourning",
                        image: "public/project-legid.png",
                        alt: "Mockup of the LegID landing page",
                        url: "https://www.behance.net/gallery/175709177/Matematch-Mobile-App-for-foreign-students-Le-Wagon"

                    }
                ]
            }
        }
    }
</script>


<style scoped>

.work-container {
    display: flex;
    flex-direction: column;
}

.project {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
}

.left-container {
    display: flex;
    align-items: center;
}

.right-container {
    display: flex;
    flex-direction: column;
}

.project-image-desktop {
    position: relative;
}

.section-content{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8rem;
    align-self: stretch;
}

/* ------------- Mobile -------------- */
@media screen and (max-width: 639px) {
    .work-container {
        padding: 3rem 1rem;
        gap: 8rem;
    }
    .section-title{
        font-size: 2rem;
        font-family: 'Bagnard';
    }

    .project{
        gap: 2.5rem;
        flex-direction: column;
    }

    .left-container {
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .right-container{
        align-items: center;
        gap: 2.5rem;
        align-self: stretch;
    }

    .project-image-desktop {
        height: 15.25rem;
        width: 100%;
    }

    .project-title{
        width: 100%;
        text-align: center;
    }

    .project-title h2{
        font-family: 'Bagnard';
        font-size: 2rem;
    }

    .project-title p {
        font-family: 'Quattrocento Sans';
        font-size: 1rem;
        text-align: center;
    }
}

/* ------------- Tablet -------------- */
@media screen and (min-width: 640px) and (max-width: 979px) {
    .work-container {
        padding: 2rem 0rem;
        gap: 2rem;
    }

    .section-content:nth-child(odd) .project{
        flex-direction: row-reverse;
    }

    .section-title{
        padding-left: 2rem;
        font-size: 2rem;
        font-family: 'Bagnard';
    }

    .project{
        gap: 2.8125rem;
        flex-direction: row;
        padding: 0rem 3rem 0rem 0rem;
    }

    .left-container {
        min-width: 22.125rem;
    }

    .right-container{
        width: 20.25rem;
        align-items: flex-start;
        gap: 4rem;
    }

    .project-image-desktop {
        width: 27.125rem;
        height: 18.3125rem;
        left: -3.75rem;
    }

    .project-title h2{
        font-family: 'Bagnard';
        font-size: 2.5rem;
    }

    .project-title p {
        font-family: 'Quattrocento Sans';
        font-size: 1rem;
    }
    
}

/* ------------- Desktop -------------- */
@media screen and (min-width: 980px) {
    .work-container {
        padding: 4rem 0rem;
        gap: 8rem;
    }

    .section-content:nth-child(odd) .project{
        flex-direction: row-reverse;
    }

    .section-title{
        padding-left: 4rem;
        font-size: 3rem;
        font-family: 'Bagnard';
    }

    .project{
        gap: 1.5rem;
        flex-direction: row;
        padding: 0rem 5rem;
    }

    .left-container {
        min-width: 37.5rem;
        max-width: 62.5rem;
    }

    .right-container{
        width: 33.25rem;
        align-items: flex-start;
        gap: 4rem;
    }

    .project-image-desktop {
        width: 49.75rem;
        height: 40.125rem;
        left: -19.401rem;
    }

    .project-title h2{
        font-family: 'Bagnard';
        font-size: 5rem;
    }

    .project-title p {
        font-family: 'Quattrocento Sans';
        font-size: 1.5rem;
    }

}
</style>