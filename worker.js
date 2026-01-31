export default {
    async fetch(request, env, ctx) {
      // Serve the main splash page
      const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GlobalDots AI Redirect</title>
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          
          body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
              min-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 20px;
          }
          
          .container {
              background: white;
              border-radius: 16px;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
              padding: 60px 40px;
              max-width: 600px;
              width: 100%;
              text-align: center;
          }
          
          .logo {
              max-width: 200px;
              height: auto;
              margin-bottom: 30px;
              transition: opacity 0.3s ease, transform 0.3s ease;
          }
          
          a:has(.logo) {
              display: inline-block;
          }
          
          a:has(.logo):hover .logo {
              opacity: 0.8;
              transform: scale(1.05);
          }
          
          .title {
              font-size: 32px;
              font-weight: bold;
              color: #1a1a1a;
              margin-bottom: 20px;
              line-height: 1.3;
          }
          
          .subtitle {
              font-size: 18px;
              color: #000;
              margin-bottom: 10px;
              line-height: 1.5;
          }
          
          .redirect-text {
              font-size: 14px;
              color: #000;
              margin-bottom: 40px;
              line-height: 1.5;
          }
          
          .redirect-text .link {
              font-weight: bold;
              color: #2563eb;
          }
          
          .timer {
              font-size: 64px;
              font-weight: bold;
              color: #2563eb;
              margin-bottom: 30px;
              font-variant-numeric: tabular-nums;
          }
          
          .button {
              background-color: #2563eb;
              color: white;
              border: none;
              border-radius: 8px;
              padding: 16px 32px;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              transition: background-color 0.3s ease, transform 0.1s ease;
              margin-bottom: 30px;
              width: 100%;
              max-width: 300px;
          }
          
          .button:hover {
              background-color: #1d4ed8;
              transform: translateY(-2px);
          }
          
          .button:active {
              transform: translateY(0);
          }
          
          .contact {
              font-size: 14px;
              color: #666;
          }
          
          .contact a {
              color: #2563eb;
              text-decoration: none;
          }
          
          .contact a:hover {
              text-decoration: underline;
          }
          
          @media (max-width: 600px) {
              .container {
                  padding: 40px 24px;
              }
              
              .title {
                  font-size: 24px;
              }
              
              .subtitle {
                  font-size: 16px;
              }
              
              .timer {
                  font-size: 48px;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <a href="https://aws.amazon.com/marketplace/seller-profile?id=dd9a21d5-6ffb-4eaf-ad14-63ef0166e4a0" target="_blank" rel="noopener noreferrer">
              <img src="https://www.globaldotstest.com/Logo.png" alt="GlobalDots Logo" class="logo">
          </a>
          
          <h1 class="title">GlobalDots Comrade!</h1>
          
          <p class="subtitle">This AI tool is not sanctioned for use</p>

          <p class="subtitle">ChatGPT, Claude, Gemini and Perplexity are allowed</p>
          
          <p class="subtitle">You will be re-directed to <span class="link">chat.globaldots.com</span></p>
          
          <div class="timer" id="countdown">10</div>
          
          <button class="button" onclick="redirect()">Proceed to globaldots chat</button>
          
          <p class="contact">Contact <a href="mailto:service@globaldots.com">service@globaldots.com</a> for more information</p>
      </div>
      
      <script>
          let timeLeft = 10;
          const countdownElement = document.getElementById('countdown');
          const targetUrl = 'https://chat.globaldots.com/';
          
          function redirect() {
              window.location.href = targetUrl;
          }
          
          function updateCountdown() {
              countdownElement.textContent = timeLeft;
              
              if (timeLeft === 0) {
                  redirect();
              } else {
                  timeLeft--;
                  setTimeout(updateCountdown, 1000);
              }
          }
          
          // Start countdown after a brief delay
          setTimeout(updateCountdown, 1000);
      </script>
  </body>
  </html>
      `;
      
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
      });
    },
  };