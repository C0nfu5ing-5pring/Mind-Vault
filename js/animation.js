let tl = gsap.timeline({
  defaults: {
    ease: "power2.out",
    duration: 0.6,
  },
});

tl.from("nav", { y: -50, opacity: 0 })
  .from(".heading", { y: -30, opacity: 0 })
  .from(".subheading", { y: -20, opacity: 0 })
  .from("textarea", { y: -20, opacity: 0 })
  .from(".buttons", { y: -20, opacity: 0 })
  .from(".showHistory", { y: -20, opacity: 0 })
  .from("#deleteAll", { y: -20, opacity: 0 });
