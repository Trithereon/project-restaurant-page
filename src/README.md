# project-restaurant-page
<div class="lesson-content__panel">

<ol>
  <li>Start the project the same way you began the webpack tutorial project, by creating the <code>package.json</code> file and setting up Webpack.
    <ul>
      <li>Remember, you only need to install and configure the things you need for your project. For example, if you do not plan to have local image files linked in your HTML template, you will not need to install and configure <code>html-loader</code>.</li>
    </ul>
  </li>
  <li>
  <p>Create a <code>.gitignore</code> file in the root of your project. It should contain the text <code>node_modules</code> and <code>dist</code> on separate lines.</p>

<div class="code-toolbar"><pre class="line-numbers language-text" tabindex="0"><code class="language-text">node_modules
dist
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code></pre></div>
  </li>
  <li>Set up an HTML skeleton inside of <code>src/template.html</code>. Inside the body, add a <code>&lt;header&gt;</code> element that contains a <code>&lt;nav&gt;</code> with buttons (not links!) for different “tabs” (for example buttons for “Home”, “Menu” or “About” etc). Below the <code>&lt;header&gt;</code>, add a single <code>&lt;div id="content"&gt;</code>.</li>
  <li>Inside of <code>src/index.js</code> write a <code>console.log</code> or <code>alert</code> statement and then run <code>npx webpack serve</code>. Open <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080</a> in your browser and check your JavaScript is running.</li>
  <li>Inside <code>div#content</code>, create a homepage for your restaurant. You might want to include an image, headline, and some text about how wonderful the restaurant is; you do not have to make this look too fancy. It’s okay to hard-code these into the HTML for now just to see how they look on the page.</li>
  <li>Now remove everything inside <code>div#content</code> from the HTML (so you still have the <code>&lt;header&gt;</code> and <code>&lt;nav&gt;</code> with an empty <code>&lt;div id="content"&gt;</code> below it) and instead create them by using JavaScript only, e.g. by appending each new element to <code>div#content</code> once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of <code>index.js</code>.</li>
  <li>Next, set up your restaurant site to use tabbed browsing to access the Menu and Contact pages. Look at the behavior of this <a href="https://web.archive.org/web/20221024060550/https://eckben.github.io/bearysBreakfastBar/" target="_blank" rel="noopener noreferrer">student’s live preview site</a> for visual inspiration.
    <ol>
      <li>Put the contents of each “tab” inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.</li>
      <li>Write the tab-switching logic inside of <code>index.js</code>. You should have event listeners for each button in the header navbar that wipes out the current contents of <code>div#content</code> and then runs the correct ‘tab module’ to populate it with the new contents again.</li>
    </ol>
  </li>
</ol>

<h4 id="deployment"><a href="#deployment" class="anchor-link">Deployment</a></h4>

<p>Let’s deploy your project to GitHub pages! This is a little more work than it has been for previous projects, because GitHub Pages tries to look for an <code>index.html</code> <em>in the root of your project</em>, but yours is inside <code>dist</code>! We will need to do a few steps to push <em>the contents</em> of your <code>dist</code> directory to its own branch on GitHub, which will then have a root-level <code>index.html</code> for GitHub pages to serve.</p>

<p>You don’t need to know exactly what all the commands do - as long as you follow the instructions below carefully you should be fine. You can use these instructions to deploy your project initially, and also redeploy it again if you make more changes to your project later.</p>

<ol>
  <li>Make a new branch to deploy from by running <code>git branch gh-pages</code>. You only need to do this the first time you deploy. The rest of the steps should be done every time you deploy or redeploy your project.</li>
  <li>Make sure you have all your work committed. You can use <code>git status</code> to see if there’s anything that needs committing.</li>
  <li>Run <code>git checkout gh-pages &amp;&amp; git merge main --no-edit</code> to change branch and sync your changes from <code>main</code> so that you’re ready to deploy.</li>
  <li>Now let’s bundle our application into <code>dist</code> with your build command. For now, that’s <code>npx webpack</code>.</li>
  <li>
    <p>Now there are a few more commands. Run each of these in order:</p>

<div class="code-toolbar"><pre class="line-numbers language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> <span class="token function">add</span> dist <span class="token parameter variable">-f</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Deployment commit"</span>
<span class="token function">git</span> subtree push <span class="token parameter variable">--prefix</span> dist origin gh-pages
<span class="token function">git</span> checkout main
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div></div></div>
  </li>
  <li>Recall that the <strong>source branch</strong> for GitHub Pages is set in your repository’s settings. Get this changed to the <code>gh-pages</code> branch. That should be everything!</li>
</ol>

</div>
