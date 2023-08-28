<template>
    <section class="work-container">
        <h2 class="section-title">/ WORK</h2>
        <div class="section-content" >
            <div class="project" v-for="project in projects" :key="project">
                <div class="left-container" :class="{'container-desktop': project.device === 'desktop left'}">
                    <div class="project-image" :class="{ 'desktop-left hide-left': project.device === 'desktop left', 'hide-right':project.device === 'mobile' }" :style="{ 'background': 'url(' + project.image + ') no-repeat center/contain' }"></div>
                </div>
                <div class="right-container">
                    <div class="project-title">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                    </div>
                    <a :href="project.url" class="btn btn-primary" target="_blank">
                        <p>Discover</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

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
                        url: "https://www.behance.net/gallery/175709177/Matematch-Mobile-App-for-foreign-students-Le-Wagon",
                        device: "desktop left"

                    },
                    {
                        title: "Matematch",
                        description: "10 days to help foreign students live a deeper exchange experience",
                        image: "public/project-matematch.png",
                        alt: "Home page mockup of the Matematch app",
                        url: "https://www.behance.net/gallery/175709177/Matematch-Mobile-App-for-foreign-students-Le-Wagon",
                        device: "mobile"

                    },
                    {
                        title: "LegID",
                        description: "48h to help families live an easier mourning",
                        image: "public/project-legid.png",
                        alt: "Mockup of the LegID landing page",
                        url: "https://www.behance.net/gallery/176612077/LegID-Start-up-weekend-project",
                        device: "desktop left"

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
        gap: 4rem;
    }

    .section-content {
        gap: 8rem;
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

    .project-image {
        height: 15.25rem;
        width: 100%;
    }

    .project-title{
        width: 100%;
        text-align: center;
    }

    .project-title h3{
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
        padding: 2rem 3rem;
        gap: 4rem;
    }

    .project:nth-child(even) {
        flex-direction: row-reverse;
    }

    .project{
        flex-direction: row;
    }

    .left-container {
        min-width: 22.125rem;
    }

    .right-container{
        width: 20.25rem;
        align-items: flex-start;
        gap: 4rem;
    }

    .project-image {
        width: 27.125rem;
        /* height: 18.3125rem; */
        height: 33rem;
    }

    .desktop-left {
        left: -3.75rem;
        position: relative;
    }

    .project-title h3{
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

    .project:nth-child(even){
        flex-direction: row-reverse;
    }

    .project{
        gap: 1.5rem;
        flex-direction: row;
        padding: 0rem 5rem;
    }

    .left-container {
        width: 50%;
    }

    .container-desktop {
        max-width: 62.5rem;
    }

    .right-container{
        width: 50%;
        align-items: flex-start;
        gap: 4rem;
    }

    .project-image {
        width: 49.75rem;
        height: 40.125rem;
    }

    .desktop-left {
        left: -20%;
        position: relative;
    }

    .project-title h3{
        font-family: 'Bagnard';
        font-size: 5rem;
    }

    .project-title p {
        font-family: 'Quattrocento Sans';
        font-size: 1.5rem;
    }

    .hide-left {
        transform: translateX(-20%) scale(0.8);
        filter: grayscale(0.5);
    }

    .hide-right {
        transform: translateX(20%) scale(0.8);
        filter: grayscale(0.5);
    }

}
</style>