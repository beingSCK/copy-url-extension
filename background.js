chrome.commands.onCommand.addListener(async (command) => {
  if (command === "copy-url") {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.url) {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (url) => {
          // Copy URL to clipboard
          navigator.clipboard.writeText(url);

          // Show toast notification
          const toast = document.createElement('div');
          toast.textContent = 'URL copied';
          toast.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: #323232;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 14px;
            z-index: 2147483647;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            opacity: 0;
            transform: translateY(8px);
            transition: opacity 0.2s, transform 0.2s;
          `;
          document.body.appendChild(toast);

          // Animate in
          requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
          });

          // Remove after 1.5s
          setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(8px)';
            setTimeout(() => toast.remove(), 200);
          }, 1500);
        },
        args: [tab.url]
      });
    }
  }
});
