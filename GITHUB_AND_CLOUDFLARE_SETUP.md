# Link Cursor to GitHub and Auto-Update Your Cloudflare Worker

Follow these steps in order. No coding required—just clicking and copying.

---

## Part 1: Connect Cursor to GitHub

### Step 1.1 – Sign in to GitHub in Cursor

1. In Cursor, open the **Command Palette**: press **`Cmd + Shift + P`** (Mac) or **Ctrl + Shift + P** (Windows).
2. Type **`Git: Clone`** and choose **Git: Clone**.
3. When it asks for a repository URL, you don’t have one yet—that’s fine. **Cancel** or close that.
4. Open the **Source Control** view: click the branch icon in the left sidebar, or press **`Cmd + Shift + G`**.
5. If you see **“Sign in to GitHub”** or **“Publish to GitHub”**, click it. Cursor will open your browser and ask you to sign in to GitHub and approve Cursor. Do that.
6. When you’re back in Cursor, GitHub is linked.

---

### Step 1.2 – Create a new repo on GitHub (in the browser)

1. Go to **https://github.com** and sign in.
2. Click the **+** in the top-right → **New repository**.
3. **Repository name:** e.g. `ganesh-ai-redirector` (or any name you like).
4. Choose **Private** or **Public**.
5. **Do not** check “Add a README” or “Add .gitignore”—your folder already has files.
6. Click **Create repository**.
7. On the new repo page you’ll see a URL like:  
   `https://github.com/YOUR_USERNAME/ganesh-ai-redirector.git`  
   Copy that URL; you’ll use it in the next part.

---

### Step 1.3 – Turn your folder into a Git repo and push to GitHub

1. In Cursor, make sure your project folder **ganesh-ai-redirector** is open (File → Open Folder).
2. Open the **Terminal** in Cursor: **`Ctrl + \`** (backtick) or **Terminal → New Terminal**.
3. Run these commands **one at a time** (replace the URL with the one you copied from GitHub):

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/YOUR_USERNAME/ganesh-ai-redirector.git
```

*(Change `YOUR_USERNAME` and `ganesh-ai-redirector` to match your repo URL.)*

```bash
git push -u origin main
```

4. If it asks for GitHub login, use **Sign in with browser** or your GitHub username + a **Personal Access Token** (not your normal password).  
   - To create a token: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**. Give it “repo” scope, copy it, and paste it when Git asks for a password.

After this, your code is on GitHub and Cursor is linked. You can also use the Source Control panel (branch icon) to **Commit** and **Push** instead of typing commands.

---

## Part 2: Make repo changes update your existing Worker

So that every time you push to GitHub, Cloudflare redeploys your **existing** Worker.

### Step 2.1 – Install Cloudflare’s GitHub app

1. Open: **https://github.com/apps/cloudflare-workers-and-pages**
2. Click **Install** (or **Configure** if already installed).
3. Choose **All repositories** or **Only select repositories** and pick `ganesh-ai-redirector`.
4. Click **Install** / **Save**. This lets Cloudflare read your repo and run builds.

---

### Step 2.2 – Match your Worker name in the config

1. In the Cloudflare dashboard go to **Workers & Pages** and open your **existing** Worker.
2. Note the **exact name** of the Worker (e.g. `ganesh-ai-redirector` or whatever you see at the top).
3. In your project, open **`wrangler.toml`**.
4. Set the **`name = "..."`** line to that **exact** name. For example:
   - If your Worker is named `my-ai-redirect`, use:  
     `name = "my-ai-redirect"`
5. Save the file. Commit and push to GitHub (Source Control → type a message → Commit → Push).

---

### Step 2.3 – Connect the repo to your Worker in Cloudflare

1. In Cloudflare dashboard: **Workers & Pages** → click your **existing Worker** (the one you want to update).
2. Go to the **Settings** tab.
3. Find the **Builds** section.
4. Click **Connect** (or **Connect to Git** / **Link repository**—wording may vary).
5. Choose **GitHub** and pick the repo you created (e.g. `ganesh-ai-redirector`).
6. Choose the branch (usually **main**).
7. Cloudflare will detect `wrangler.toml` and use it. Confirm / save.

From now on, when you **push to that branch** on GitHub, Cloudflare will build and deploy that code to this Worker automatically.

---

## Quick recap

| Goal | What you did |
|------|-------------------------------|
| Link Cursor to GitHub | Signed in via Source Control / Git in Cursor; created a repo on GitHub; ran `git init`, `add`, `commit`, `remote`, `push`. |
| Push local files to GitHub | Same push; you can keep using **Source Control** in Cursor to commit and push. |
| Repo changes update the Worker | Installed Cloudflare Workers & Pages GitHub App; set `name` in `wrangler.toml` to match the Worker; in the Worker’s **Settings → Builds** you connected the GitHub repo. |

---

## After setup: your normal workflow

1. Edit your code (e.g. `worker.js`) in Cursor.
2. Open **Source Control** (branch icon).
3. Stage your changes (check the files you want).
4. Type a short message (e.g. “Update redirect page”) and click **Commit**.
5. Click **Push** (or **Sync**).
6. Cloudflare will pick up the push and update your Worker in a minute or two. You can check the **Deployments** tab on your Worker in the Cloudflare dashboard.

If anything in these steps doesn’t match what you see (e.g. different menu names), tell me what screen you’re on and I’ll adapt the steps.
