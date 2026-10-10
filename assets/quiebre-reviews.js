(() => {
  const widgets = document.querySelectorAll('[data-giscus-widget]');

  widgets.forEach((widget) => {
    if (widget.dataset.loaded === 'true') return;

    const { repo, repoId, category, categoryId, lang } = widget.dataset;
    const validRepo = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo || '');
    if (!validRepo || !repoId || !category || !categoryId) {
      const status = widget.querySelector('[data-giscus-status]');
      if (status) status.textContent = 'Los comentarios aún no están configurados.';
      return;
    }

    const status = widget.querySelector('[data-giscus-status]');
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.repo = repo;
    script.dataset.repoId = repoId;
    script.dataset.category = category;
    script.dataset.categoryId = categoryId;
    script.dataset.mapping = 'pathname';
    script.dataset.strict = '0';
    script.dataset.reactionsEnabled = '0';
    script.dataset.emitMetadata = '0';
    script.dataset.inputPosition = 'top';
    script.dataset.theme = 'light';
    script.dataset.lang = lang || 'es';

    script.addEventListener('load', () => {
      widget.dataset.loaded = 'true';
      if (status) status.remove();
    }, { once: true });
    script.addEventListener('error', () => {
      if (status) status.textContent = 'No se pudieron cargar los comentarios. Intenta más tarde.';
    }, { once: true });

    widget.appendChild(script);
  });
})();
