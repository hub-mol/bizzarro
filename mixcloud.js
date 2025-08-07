export function setupMixcloud() {
  let widget;
  const iframe = document.getElementById('mixcloud-widget');
  const section = document.querySelector('#radio');
  if (!iframe || !section) return;

  widget = Mixcloud.PlayerWidget(iframe);
  widget.ready.then(() => {
    setupMixcloudLinks();
  });

  function setupMixcloudLinks() {
    const mixcloudLinks = section.querySelectorAll('a[data-cloudcast]');
    const artworkElement = document.getElementById('mixcloud-artwork');

    mixcloudLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        const cloudcastKey = this.getAttribute('data-cloudcast');
        const linkImg = this.querySelector('img');
        e.preventDefault();

        if (!cloudcastKey || cloudcastKey.trim() === '') return;

        if (linkImg && artworkElement) {
          artworkElement.src = linkImg.src;
          artworkElement.alt = linkImg.alt || 'Music artwork';
        }

        if (widget && cloudcastKey) {
          widget.load(cloudcastKey, true)
        }
      });
    });
  }
}