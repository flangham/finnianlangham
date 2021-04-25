import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect } from 'react';
import gsap from 'gsap';
import Container from './Container';
import HeaderLogo from './HeaderLogo';

const HeaderStyles = styled.header`
  cursor: default;
  height: 100vh;
  min-height: 430px;
  background: var(--blue);
  /* background: transparent; */
  color: var(--white);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .background {
    background: red;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    z-index: -1;
  }

  .col {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .image-col {
    height: 180px;
  }

  .header-content {
    max-width: 1300px;
    margin: auto;
  }

  .header-words {
    opacity: 0;
    z-index: 3;
    position: relative;
  }

  .name {
    font-weight: bold;
    font-style: italic;
  }

  .orange {
    color: var(--orange);
  }

  .arrow {
    font-size: 4.2em;
    font-family: Space Mono, monospace;
    border: none;
    line-height: 0.8;
    display: flex;
    align-items: center;
    background: none;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
  }

  @media (min-width: 430px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 600px;
    .arrow {
      position: absolute;
      bottom: var(--pad);
    }
  }

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;

    .columns {
      display: flex;
      flex-direction: row-reverse;
    }

    .image-col {
      width: 30%;
      padding-left: 1rem;
      display: flex;
      align-items: center;
      height: 300px;
    }

    justify-content: center;

    .word-col {
      width: 70%;
      max-width: 750px;
    }
  }

  @media (min-width: 1000px) {
    min-height: 685px;
    .arrow {
      font-size: 126px;
    }
    .word-col {
      max-width: 930px;
    }
  }

  @media (min-width: 1400px) {
    min-height: 740px;
    .word-col {
      font-size: 40px;
      max-width: 1200px;
      width: 80%;
    }
  }
`;

export default function Header() {
  useEffect(() => {
    gsap.to('.header-words', {
      opacity: 1,
      duration: 2.4,
      ease: 'power4.out',
    });
  });

  useEffect(() => {
    // https://codepen.io/mladen___/pen/gbvqBo?editors=1010
    const c = document.getElementById('canvas');
    const ctx = c.getContext('2d');

    function resize() {
      const box = c.getBoundingClientRect();
      c.width = box.width;
      c.height = box.height;
    }

    const light = {
      x: 160,
      y: 200,
    };

    const colors = ['#f7f7f7', '#ff7f00', '#000000'];

    function Box() {
      this.half_size = Math.floor(Math.random() * 50 + 1);
      this.x = Math.floor(Math.random() * c.width + 1);
      this.y = Math.floor(Math.random() * c.height + 1);
      this.r = Math.random() * Math.PI;
      this.shadow_length = 2000;
      this.color = colors[Math.floor(Math.random() * colors.length)];

      this.getDots = function () {
        const full = (Math.PI * 2) / 4;

        const p1 = {
          x: this.x + this.half_size * Math.sin(this.r),
          y: this.y + this.half_size * Math.cos(this.r),
        };
        const p2 = {
          x: this.x + this.half_size * Math.sin(this.r + full),
          y: this.y + this.half_size * Math.cos(this.r + full),
        };
        const p3 = {
          x: this.x + this.half_size * Math.sin(this.r + full * 2),
          y: this.y + this.half_size * Math.cos(this.r + full * 2),
        };
        const p4 = {
          x: this.x + this.half_size * Math.sin(this.r + full * 3),
          y: this.y + this.half_size * Math.cos(this.r + full * 3),
        };

        return {
          p1,
          p2,
          p3,
          p4,
        };
      };
      this.rotate = function () {
        const speed = (60 - this.half_size) / 20;
        this.r += speed * 0.002;
        this.x += speed;
        this.y += speed;
      };
      this.draw = function () {
        const dots = this.getDots();
        ctx.beginPath();
        ctx.moveTo(dots.p1.x, dots.p1.y);
        ctx.lineTo(dots.p2.x, dots.p2.y);
        ctx.lineTo(dots.p3.x, dots.p3.y);
        ctx.lineTo(dots.p4.x, dots.p4.y);
        ctx.fillStyle = this.color;
        ctx.fill();

        if (this.y - this.half_size > c.height) {
          this.y -= c.height + 100;
        }
        if (this.x - this.half_size > c.width) {
          this.x -= c.width + 100;
        }
      };
      this.drawShadow = function () {
        const dots = this.getDots();
        const angles = [];
        const points = [];

        for (const dot in dots) {
          const angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
          const endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
          const endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
          angles.push(angle);
          points.push({
            endX,
            endY,
            startX: dots[dot].x,
            startY: dots[dot].y,
          });
        }

        for (let i = points.length - 1; i >= 0; i--) {
          const n = i == 3 ? 0 : i + 1;
          ctx.beginPath();
          ctx.moveTo(points[i].startX, points[i].startY);
          ctx.lineTo(points[n].startX, points[n].startY);
          ctx.lineTo(points[n].endX, points[n].endY);
          ctx.lineTo(points[i].endX, points[i].endY);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
          ctx.fill();
        }
      };
    }

    const boxes = [];

    function draw() {
      ctx.clearRect(0, 0, c.width, c.height);
      // drawLight();

      for (var i = 0; i < boxes.length; i++) {
        boxes[i].rotate();
        boxes[i].drawShadow();
      }
      for (var i = 0; i < boxes.length; i++) {
        collisionDetection(i);
        boxes[i].draw();
      }
      requestAnimationFrame(draw);
    }

    resize();
    draw();

    while (boxes.length < 7) {
      boxes.push(new Box());
    }

    window.onresize = resize;
    window.onmousemove = function (e) {
      console.log(e);
      light.x = e.clientX;
      light.y = e.clientY;
    };

    function collisionDetection(b) {
      for (let i = boxes.length - 1; i >= 0; i--) {
        if (i != b) {
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
  }, []);

  return (
    <HeaderStyles>
      <canvas id="canvas" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0' }} />
      <Container>
        <div className="header-content">
          <div className="columns">
            <div className="col image-col">
              <HeaderLogo />
            </div>
            <div className="col word-col">
              <div className="header-words">
                <h1>Finnian Langham</h1>
                <p>
                  is a front-end <span className="orange">developer</span> &amp;{' '}
                  <span className="orange">designer</span>. He primarily works with artists and creatives, helping to
                  make their digital visions a reality.
                </p>
              </div>
              <AnchorLink href="#work" className="arrow">
                ↓
              </AnchorLink>
            </div>
          </div>
        </div>
      </Container>
    </HeaderStyles>
  );
}
