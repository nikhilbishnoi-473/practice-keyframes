gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".circle1",{
        x: "0",
        duration: 3,
    },
    {
        x: "200",
        rotation: "360",
        duration: 3,
        repeat: -1,
    }
)