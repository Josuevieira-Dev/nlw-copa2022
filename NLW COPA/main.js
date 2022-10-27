let isIgnite = true;
function toggle(event){
    const card = event.currentTarget;
    const bg = isIgnite ? "bg-Explore.svg" : "bg-Ignite.svg";
    isIgnite = !isIgnite;
    card.style.backgroundImage = `url(./assets/${bg}`;
}