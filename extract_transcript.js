document.getElementById('expand').click();

const intervalId = setInterval(() => {
  const button = document.querySelector('button[aria-label="Show transcript"]');
  if (button) {
    button.click();
    clearInterval(intervalId);

    const segmentIntervalId = setInterval(() => {
      const segments = document.querySelectorAll('.segment-text');
      if (segments.length > 0) {
        clearInterval(segmentIntervalId);
        const textContent = Array.from(segments)
          .map((el) => el.innerText)
          .join(' ');

        // Use a temporary textarea to copy text
        const textarea = document.createElement('textarea');
        textarea.value = textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        alert('Text copied to clipboard!');
      }
    }, 500);
  }
}, 500);
