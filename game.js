<script>
const imageSources = [''
]

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}

// Change the background image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 5000);
</script>