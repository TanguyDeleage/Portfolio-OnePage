<template>
    <section class="work-container">
        <h1 class="section-title">/ WORK</h1>
        <div class="section-content" v-for="project in projects">
            <div class="project">
                <div class="left-container">
                    <!-- Il faudra bind une class pour savoir si image desktop ou mobile -->
                    <div class="project-image-desktop"></div>
                </div>
                <div class="right-container">
                    <div class="project-title">
                        <h2>{{ project-title }}</h2>
                        <p>{{ project-description }}</p>
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
    export default {
        name: 'Work',
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
}

.left-container {
    display: flex;
    align-items: center;
}

.right-container {
    display: flex;
    flex-direction: column;
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
    }

    .right-container{
        align-items: center;
        gap: 2.5rem;
        /* useful ?  */
        align-self: stretch;
    }
}

/* ------------- Tablet -------------- */
@media screen and (min-width: 640px) and (max-width: 979px) {
    .work-container {
        padding: 2rem 0rem;
        gap: 2rem;
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
    
}

/* ------------- Desktop -------------- */
@media screen and (min-width: 980px) {
    .work-container {
        padding: 4rem 0rem;
        gap: 8rem;
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

}
</style>