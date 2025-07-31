<h2>📄 NextEvent</h2>

<p>
  NextEvent is a modern event management platform where organizers can create and manage events, and guests can browse, book, and cancel events. The app supports both free and paid events (via Stripe), filtered event browsing, and revenue sharing between guest and admin on cancellations.
</p>

<hr />

<h2>🔧 Tech Stack</h2>

<ul>
  <li>⚛️ Next.js (App Router)</li>
  <li>🎨 Tailwind CSS v4</li>
  <li>🎥 Framer Motion</li>
  <li>🦊 Lucide-react</li>
  <li>🧠 Redux Toolkit</li>
  <li>📦 React Query</li>
  <li>✅ Formik</li>
  <li>🔔 React Hot Toast</li>
  <li>💳 Stripe</li>
  <li>🐳 Docker</li>
</ul>

<hr />

<h2>📁 Folder Structure</h2>

<pre>
/nextevent
│
├── <b>.github/workflows/</b>       # GitHub Actions for CI/CD
├── <b>api/</b>                     # Route handlers for app API
├── <b>app/</b>                     # Next.js app router (pages, layout, routing)
├── <b>auth/</b>                    # Protected routes and auth logic
├── <b>components/</b>              # Reusable UI components
├── <b>helper/methods/</b>          # Reusable helper functions
├── <b>hooks/</b>                   # Custom React hooks (React Query, etc.)
├── <b>lib/</b>                     # Stripe logic, middlewares, constants
├── <b>public/</b>                  # Public assets like images
├── <b>redux/</b>                   # Redux slices and store setup
├── <b>toast/</b>                   # React Hot Toast messages
├── <b>types/</b>                   # TypeScript types/interfaces
├── <b>utils/</b>                   # Utility functions
│
├── <b>.dockerignore</b>            # Docker ignore config
├── <b>.gitignore</b>               # Git ignore config
├── <b>Dockerfile</b>               # Docker image config
├── <b>LICENCE</b>                  # Project license (MIT)
├── <b>README.md</b>                # Project documentation
├── <b>eslint.config.mjs</b>        # ESLint configuration
├── <b>next.config.ts</b>           # Next.js configuration
├── <b>package.json</b>             # NPM scripts and dependencies
├── <b>postcss.config.mjs</b>       # PostCSS configuration
├── <b>tsconfig.json</b>            # TypeScript configuration
├── <b>yarn.lock</b>                # Yarn lock file
</pre>


<hr />

<h2>🔑 Features</h2>

<ul>
  <li>🧑‍💼 Organizers can sign up, log in, edit profile and create, view events</li>
  <li>👤 Guests can register,edit profile,  browse, book, and cancel events</li>
  <li>💳 Stripe integration for paid events</li>
  <li>🎁 Free events supported</li>
  <li>📅 Filtered event views (nearby, free, paid)</li>
  <li>🔁 On cancellation, 50% refund goes to guest, 50% to admin</li>
  <li>🛡️ Role-based protected routing</li>
  <li>📱 Responsive UI with smooth transitions</li>
</ul>

<hr />

<h2>🚀 Getting Started</h2>

<h3>📋 Prerequisites</h3>

<ul>
  <li>Node.js (v18+)</li>
  <li>Yarn or npm</li>
  <li>MongoDB</li>
  <li>Stripe account</li>
  <li>Docker (optional)</li>
</ul>

<h3>📥 1. Clone the Repository</h3>

<pre><code>git clone https://github.com/syam-ts/nextevent.git
cd nextevent
</code></pre>

<h3>📦 2. Install Dependencies</h3>

<pre><code>yarn install
# or
npm install
</code></pre>

<h3>⚙️ 3. Create .env File</h3>

<pre><code>touch .env
</code></pre>

<p>Add the following:</p>

<pre><code>
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
NEXT_PUBLIC_CLOUDINARY_URL=your_cloudinary_rul
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
</code></pre>

<h3>▶️ 4. Run the Development Server</h3>

<pre><code>yarn dev
# or
npm run dev
</code></pre>

<p>Visit: <code>http://localhost:3000</code></p>

<hr />

<h2>🐳 Running with Docker</h2>

<h3>1. Build Docker Image</h3>

<pre><code>docker build -t nextevent .
</code></pre>

<h3>2. Run the Container</h3>

<pre><code>docker run -d -p 3000:80 nextevent
</code></pre>

<p>Visit: <code>http://localhost:3000</code></p>

<p><strong>Note:</strong> Ensure your backend API, MongoDB, and Stripe keys are accessible within Docker.</p>


## Licence

[MIT Licence](LICENCE)
