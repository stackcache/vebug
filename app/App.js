import React, { useCallback } from 'react';
import './App.css';

const getDomDepthLevel = (root = document.documentElement) => {
  let pathInfo = {
    route: [],
    level: 0,
  };

  for (let i = 0, j = root.children.length; i < j; i++) {
    const curNodePathInfo = getDomDepthLevel(root.children[i]);
    if (curNodePathInfo.level > pathInfo.level) {
      pathInfo = curNodePathInfo;
    }
  }
  pathInfo.route.unshift(root);
  pathInfo.level += 1;
  return pathInfo;
};

function App() {
  let parentEl = useCallback(node => {}, []);

  return (
    <div className="App" ref={parentEl}>
      <h1 style={{ marginTop: 0 }}>CSS Image Hover Effects</h1>
      <p>
        ←{' '}
        <a
          href="https://www.nxworld.net/tips/css-image-hover-effects.html"
          target="_blank"
        >
          View the article
        </a>
      </p>

      <h2>No Effect</h2>
      <div className="column">
        <div style={{ zIndex: 1 }}>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div style={{ zIndex: 1 }}>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div style={{ zIndex: 1 }}>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo01">1. Zoom In #1</h2>
      <div className="hover01 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo02">2. Zoom In #2</h2>
      <div className="hover02 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo03">3. Zoom Out #1</h2>
      <div className="hover03 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo04">4. Zoom Out #2</h2>
      <div className="hover04 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo05">5. Slide</h2>
      <div className="hover05 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo06">
        6. Rotate<span>(+Zoom Out)</span>
      </h2>
      <div className="hover06 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo07">7. Blur</h2>
      <div className="hover07 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo08">8. Gray Scale</h2>
      <div className="hover08 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo09">9. Sepia</h2>
      <div className="hover09 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo10">10. Blur + Gray Scale</h2>
      <div className="hover10 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo11">11. Opacity #1</h2>
      <div className="hover11 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo12">12. Opacity #2</h2>
      <div className="hover12 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo13">13. Flashing</h2>
      <div className="hover13 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo14">14. Shine</h2>
      <div className="hover14 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>

      <h2 id="demo15">15. Circle</h2>
      <div className="hover15 column">
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=244" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=1024" />
          </figure>
          <span>Hover</span>
        </div>
        <div>
          <figure>
            <img src="https://picsum.photos/300/200?image=611" />
          </figure>
          <span>Hover</span>
        </div>
      </div>
    </div>
  );
}

export default App;
