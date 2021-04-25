import { useRef, useEffect } from 'react';

export default function HeaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');

    const light = {
      x: 160,
      y: 200,
    };

    const colors = ['#f5c156', '#e6616b', '#5cd3ad'];

    function drawLight() {
      ctx.beginPath();
      ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
      let gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
      gradient.addColorStop(0, '#3b4654');
      gradient.addColorStop(1, '#2c343f');
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
      gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
      gradient.addColorStop(0, '#fff');
      gradient.addColorStop(1, '#3b4654');
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // function createBox() {
    //   const box = {};
    //   box.half_size = Math.floor(Math.random() * 50 + 1);
    //   box.x = Math.floor(Math.random() * c.width + 1);
    //   box.y = Math.floor(Math.random() * c.height + 1);
    //   box.r = Math.random() * Math.PI;
    //   box.shadow_length = 2000;
    //   box.color = colors[Math.floor(Math.random() * colors.length)];

    //   box.getDots = function () {
    //     const full = (Math.PI * 2) / 4;

    //     const p1 = {
    //       x: box.x + box.half_size * Math.sin(box.r),
    //       y: box.y + box.half_size * Math.cos(box.r),
    //     };
    //     const p2 = {
    //       x: box.x + box.half_size * Math.sin(box.r + full),
    //       y: box.y + box.half_size * Math.cos(box.r + full),
    //     };
    //     const p3 = {
    //       x: box.x + box.half_size * Math.sin(box.r + full * 2),
    //       y: box.y + box.half_size * Math.cos(box.r + full * 2),
    //     };
    //     const p4 = {
    //       x: box.x + box.half_size * Math.sin(box.r + full * 3),
    //       y: box.y + box.half_size * Math.cos(box.r + full * 3),
    //     };

    //     return {
    //       p1,
    //       p2,
    //       p3,
    //       p4,
    //     };
    //   };
    //   box.rotate = function () {
    //     const speed = (60 - box.half_size) / 20;
    //     box.r += speed * 0.002;
    //     box.x += speed;
    //     box.y += speed;
    //   };
    //   box.draw = function () {
    //     const dots = box.getDots();
    //     ctx.beginPath();
    //     ctx.moveTo(dots.p1.x, dots.p1.y);
    //     ctx.lineTo(dots.p2.x, dots.p2.y);
    //     ctx.lineTo(dots.p3.x, dots.p3.y);
    //     ctx.lineTo(dots.p4.x, dots.p4.y);
    //     ctx.fillStyle = box.color;
    //     ctx.fill();

    //     if (box.y - box.half_size > c.height) {
    //       box.y -= c.height + 100;
    //     }
    //     if (box.x - box.half_size > c.width) {
    //       box.x -= c.width + 100;
    //     }
    //   };
    //   box.drawShadow = function () {
    //     const dots = box.getDots();
    //     const angles = [];
    //     const points = [];

    //     for (const dot of dots) {
    //       const angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
    //       const endX = dots[dot].x + box.shadow_length * Math.sin(-angle - Math.PI / 2);
    //       const endY = dots[dot].y + box.shadow_length * Math.cos(-angle - Math.PI / 2);
    //       angles.push(angle);
    //       points.push({
    //         endX,
    //         endY,
    //         startX: dots[dot].x,
    //         startY: dots[dot].y,
    //       });
    //     }

    //     for (let i = points.length - 1; i >= 0; i--) {
    //       const n = i === 3 ? 0 : i + 1;
    //       ctx.beginPath();
    //       ctx.moveTo(points[i].startX, points[i].startY);
    //       ctx.lineTo(points[n].startX, points[n].startY);
    //       ctx.lineTo(points[n].endX, points[n].endY);
    //       ctx.lineTo(points[i].endX, points[i].endY);
    //       ctx.fillStyle = '#2c343f';
    //       ctx.fill();
    //     }
    //   };
    // }

    const boxes = [];

    function collisionDetection(b) {
      for (let i = boxes.length - 1; i >= 0; i--) {
        if (i !== b) {
          const dx = boxes[b].x + boxes[b].half_size - (boxes[i].x + boxes[i].half_size);
          const dy = boxes[b].y + boxes[b].half_size - (boxes[i].y + boxes[i].half_size);
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < boxes[b].half_size + boxes[i].half_size) {
            boxes[b].half_size = boxes[b].half_size > 1 ? (boxes[b].half_size -= 1) : 1;
            boxes[i].half_size = boxes[i].half_size > 1 ? (boxes[i].half_size -= 1) : 1;
          }
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, c.width, c.height);
      drawLight();

      for (let z = 0; z < boxes.length; z++) {
        boxes[z].rotate();
        boxes[z].drawShadow();
      }
      for (let y = 0; y < boxes.length; y++) {
        collisionDetection(y);
        boxes[y].draw();
      }
      requestAnimationFrame(draw);
    }

    draw();

    while (boxes.length < 14) {
      boxes.push(new Box());
    }

    // window.onresize = resize;
    c.onmousemove = function (e) {
      light.x = e.offsetX === undefined ? e.layerX : e.offsetX;
      light.y = e.offsetY === undefined ? e.layerY : e.offsetY;
    };
  }, []);

  return (
    <div style={{ height: '100%', width: '100%', background: 'red', top: '0', left: '0', position: 'absolute' }}>
      <canvas style={{ height: '100%', width: '100%' }} ref={canvasRef} />
    </div>
  );
}
