document.addEventListener('DOMContentLoaded', () => {
    let preloader = document.querySelector('.preloader')

    window.onload = () => {
        preloader.classList.add('loaded')
        document.body.classList.remove('overflow-hidden')
    }
})