document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header style="border:none;">

        <div class="header-content" style="padding:0; border:none;">
      <div class="window" style="width:100%">
  <div class="title-bar">
    <div class="title-bar-text">the voice of williams college   ☆*:.｡.o(≧▽≦)o.｡.:*☆ </div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body">
    <img src="text.gif" alt="Computer man" style="width: 50; ">
  </div>
</div>
	        <title>WCFM 91.9</title>
  
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar" style="padding:0; border:none;">
	  
        <div class="window" style="width:100%;">
  <div class="title-bar">
    <div class="title-bar-text">navigation (≧◡≦) ♡</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body">

   <nav>
          <ul>
            <li><a href="/Users/lauren/Desktop/wcfm91.9/wcfm91.9/website/index.html">Home</a></li>
            <li><a href="/Users/lauren/Desktop/wcfm91.9/wcfm91.9/website/stream.html">Listen Here</a></li>
            <li><a href="/Users/lauren/Desktop/wcfm91.9/wcfm91.9/website/about.html">About</a></li>
            <li><a href="/Users/lauren/Desktop/wcfm91.9/wcfm91.9/website/calender.html">Calender</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
  </div>
</div>
        
        <div class="sidebar-section" style="margin-bottom:0;">
          <img src="blinkiesCafe-Fs.gif" alt="Computer man" style="width: 100%;">
        </div>
        <div class="sidebar-section" style="margin-bottom:0;">
           <div class="window" style="width:100%;">
  <div class="title-bar">
    <div class="title-bar-text">dj resources  (•⩊•)</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body">
    <a href="https://docs.google.com/document/d/129pfCZKuTD8kbCVBcM3dUa6nx7DYiV7CZyq_uUDlktk/edit?tab=t.0" target="_blank"><button class="default">Station Manuel</button></a>
    <p>The Station Manual is a general-purpose guide to everything WCFM. It contains instructions on how to become a certified DJ, work the transmitter, log your show, and more! </p>
    <a href="https://drive.google.com/file/d/1X7sm0Z-YaEpZTaj5jN1KMkc200N0oxiQ/view" target="_blank"><button class="default">Honor Code</button></a>
     <p>If you’re a DJ, you signed the honor code. It’s here for you if you ever need to refer back to it.</p>
  </div>
</div>
        </div>

    <div class="sidebar-section" style="margin-bottom:0;padding:0;">
    <div class="window" style="width:100%;">
  <div class="title-bar">
    <div class="title-bar-text">call in (✯◡✯)</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body">
    <img src="call_in_gif.gif" alt="Computer man" style="width: 100%;">
  </div>
</div>
          
    </div>
        
      <div class="sidebar-section">
      <div class="window" style="width: 100%;">
  <div class="title-bar">
    <div class="title-bar-text">First FM antenna.jpg</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>

  <div class="window-body">
    <img style="width:100%;" src="/Users/lauren/Desktop/wcfm91.9/wcfm91.9/website/wcfm_photos/First FM antenna, January 1957.jpeg" alt="Computer man">

  </div>
</div>
      
        </div>
        
  
      </aside>
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar" style="border:none; padding:0;margin:0;">

    <div class="window" style="width: 100%;height:400px;">
  <div class="title-bar">
    <div class="title-bar-text">chat  (ノ*°▽°*)</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body" style="height:100%; overflow: hidden;">
     <iframe src="https://www3.cbox.ws/box/?boxid=3548226&boxtag=dQQ0Bz" width="100%" height=350px" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe> 
  </div>
</div>

<div class="sidebar-section" style="margin-bottom:0;">
          <img src="blinkiesCafe-3J.gif" alt="Computer man" style="width: 100%;">
        </div>

<div class="sidebar-section" style="margin-bottom:0;">
      <div class="window" style="width: 100%;">
  <div class="title-bar">
    <div class="title-bar-text">KIC Doc 0007.png</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>

  <div class="window-body">
    <img style="width:100%;" src="wcfm_photos/KIC Document 0007.png" alt="Computer man">

  </div>
</div>
      
</div>

	 

        <div class="sidebar-section" style="margin-bottom:0;">
      <div class="window" style="width: 100%;">
  <div class="title-bar">
    <div class="title-bar-text">music dir's office.jpg</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>

  <div class="window-body">
    <img style="width:100%;" src="wcfm_photos/music director's office.jpg" alt="Computer man">

  </div>
</div>
      
        </div>
  
  <div class="sidebar-section" style="margin-bottom:0;height:100%;">
      <div class="window" style="width: 100%; height:100%;">
  <div class="title-bar">
    <div class="title-bar-text">questions?  ♡(>ᴗ•)</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>

  <div class="window-body" style="height:100%;">
    <p>Contact the managers linked on the "About" page.</p>

  </div>
</div>
      
        </div>

   

      </aside>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer style="border:none;padding:0;margin:0;">
    <div class="window" style="width:100%">
  <div class="title-bar">
    <div class="title-bar-text">creds & info  ♡＼(￣▽￣)／♡</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body">
    Created by Lauren Hall '27. Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div>
  </div>
</div>

      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
