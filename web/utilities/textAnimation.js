const animationIn = {
  opacity: 1,
  transform: 'translateY(0)',
  duration: 0.6,
  rotation: 0.00001,
  stagger: {
    amount: 0.25,
  },
};

const animationOut = {
  opacity: 0,
  transform: 'translateY(1em)',
  rotation: 0.00001,
};

export { animationIn, animationOut };
