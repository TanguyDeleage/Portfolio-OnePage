<template>
    <div class="header">
       <div class="brand">
            <img src="public/logo.png" alt="Tanguy Deléage Logo">
       </div>
       <nav class="nav-links">
            <div class="nav-link">
                <p class="nav-title">Home</p>
            </div>
            <div class="nav-link">
                <p class="nav-title">Work</p>
            </div>
            <div class="nav-link">
                <p class="nav-title">About</p>
                <div></div>
            </div>
            <div class="nav-link">
                <p class="nav-title">Contact</p>
            </div>
       </nav>
       <div class="burger">
            <div class="line">
                <div class="line1"></div>
            </div>
            <div class="line">
                <div class="line2"></div>
            </div>
            <div class="line">
                <div class="line3"></div>
            </div>
       </div>
    </div>
</template>


<script>
    export default {
        name: 'Header',
    }
</script>


<style scoped>


   

    .nav-title{
        font-family: 'Bagnard';
        font-size: 1.5rem;
    }


/* ------------- Mobile -------------- */
@media screen and (max-width: 639px) {
    
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 1rem 1rem 1rem;
        width: 100%;
    }

    .nav-links{
        display: none;
    }
    .burger {
        display: flex;
        width: 3rem;
        padding: 0.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 0.75rem;
    }

    .burger .line {
        display: flex;
        align-items: flex-start;
        align-self: stretch;
        position: relative;
    }
    .line1 {
        width: 2.5rem;
        height: 0.25rem;
        position: absolute;
        background: #000;
    }
    .line2 {
        width: 2.5rem;
        height: 0.25rem;
        position: absolute;
        left: -0.25rem;
        background: #000;
    }
    .line3 {
        width: 2.5rem;
        height: 0.25rem;
        position: absolute;
        left: -0.5rem;
        background: #000;
    }
}

/* ------------- Tablet -------------- */
@media screen and (min-width: 640px) and (max-width: 979px) {
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 2rem 1rem 2rem;
        width: 100%;
    }

    .nav-links{
        display: none;
    }
    .burger {
        display: flex;
        width: 3rem;
        padding: 0.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 0.75rem;
    }

    .burger .line {
        display: flex;
        align-items: flex-start;
        align-self: stretch;
        position: relative;
    }
    .line1 {
        width: 2.5rem;
        height: 0.25rem;
        position: absolute;
        background: #000;
    }
    .line2 {
        width: 2.5rem;
        height: 0.25rem;
        position: absolute;
        left: -0.25rem;
        background: #000;
    }
    .line3 {
        width: 2.5rem;
        height: 0.25rem;
        position: absolute;
        left: -0.5rem;
        background: #000;
    }
}

/* ------------- Desktop -------------- */
@media screen and (min-width: 980px) {
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 1.5rem 4rem 1rem 4rem;
    }
    
    .nav-link{
        position: relative;
        display: inline-block;
        /* margin: 0 10px; */
    }

    .nav-title {
        display: inline;
    }

    .nav-link::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--text);
        bottom: -5px;
        left: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.3s ease-in-out;
    }

    .nav-link:hover:after {
            transform: scaleX(1);
    }

    .nav-links{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 35.375rem;
    }

    .burger{
        display: none;
    }
        

}
</style>