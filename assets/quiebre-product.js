(() => {
  const initialiseProduct = (root) => {
    const select = root.querySelector('[data-product-variant]');
    if (!select) return;

    const price = root.querySelector('[data-product-price]');
    const comparePrice = root.querySelector('[data-product-compare]');
    const availability = root.querySelector('[data-product-availability]');
    const addButton = root.querySelector('[data-product-add]');
    const addLabel = root.querySelector('[data-product-add-label]');

    const updateVariantState = () => {
      const option = select.options[select.selectedIndex];
      if (!option) return;

      const isAvailable = option.dataset.available === 'true';
      if (price) price.textContent = option.dataset.price || '';

      if (comparePrice) {
        const hasComparePrice = option.dataset.hasCompare === 'true';
        comparePrice.textContent = hasComparePrice ? option.dataset.comparePrice : '';
        comparePrice.hidden = !hasComparePrice;
      }

      if (addButton) addButton.disabled = !isAvailable;
      if (addLabel) addLabel.textContent = isAvailable ? 'Agregar a la bolsa' : 'Agotado';
      if (availability) {
        availability.textContent = isAvailable
          ? 'Esta variante aparece disponible.'
          : 'Esta variante está agotada.';
      }
    };

    select.addEventListener('change', updateVariantState);
    updateVariantState();
  };

  document.querySelectorAll('[data-product-root]').forEach(initialiseProduct);
})();
