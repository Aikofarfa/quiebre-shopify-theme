(() => {
  const initialiseProduct = (root) => {
    const dataNode = root.querySelector('[data-product-variants]');
    const optionSelects = [...root.querySelectorAll('[data-product-option]')];
    const variantInput = root.querySelector('[data-product-variant-id]');
    const price = root.querySelector('[data-product-price]');
    const comparePrice = root.querySelector('[data-product-compare]');
    const availability = root.querySelector('[data-product-availability]');
    const addButton = root.querySelector('[data-product-add]');
    const addLabel = root.querySelector('[data-product-add-label]');
    const form = root.querySelector('[data-product-form]');

    if (!dataNode || !variantInput || !addButton) return;

    let variants;
    try {
      variants = JSON.parse(dataNode.textContent);
    } catch (error) {
      console.error('No se pudo leer la lista de variantes del producto.', error);
      return;
    }

    const getSelectedOptions = () => optionSelects.map((select) => select.value);
    const updateVariantState = () => {
      const selectedOptions = getSelectedOptions();
      const variant = variants.find((candidate) =>
        candidate.options.length === selectedOptions.length &&
        candidate.options.every((value, index) => value === selectedOptions[index])
      );

      if (!variant) {
        variantInput.disabled = true;
        addButton.disabled = true;
        if (addLabel) addLabel.textContent = 'Combinación no disponible';
        if (availability) availability.textContent = 'Esta combinación de opciones no está disponible.';
        if (comparePrice) {
          comparePrice.textContent = '';
          comparePrice.hidden = true;
        }
        return;
      }

      variantInput.disabled = false;
      variantInput.value = variant.id;
      if (price) price.textContent = variant.price;
      if (comparePrice) {
        comparePrice.textContent = variant.has_compare ? variant.compare_price : '';
        comparePrice.hidden = !variant.has_compare;
      }

      addButton.disabled = !variant.available;
      if (addLabel) addLabel.textContent = variant.available ? 'Añadir a la bolsa' : 'Agotado';
      if (availability) {
        availability.textContent = variant.available
          ? 'Esta combinación aparece disponible.'
          : 'Esta combinación está agotada.';
      }

      if (window.history && window.history.replaceState) {
        const url = new URL(window.location.href);
        url.searchParams.set('variant', variant.id);
        window.history.replaceState({}, '', url);
      }
    };

    optionSelects.forEach((select) => select.addEventListener('change', updateVariantState));
    if (form) {
      form.addEventListener('submit', (event) => {
        if (variantInput.disabled || !variantInput.value) {
          event.preventDefault();
          addButton.focus();
        }
      });
    }
    updateVariantState();
  };

  document.querySelectorAll('[data-product-root]').forEach(initialiseProduct);
})();
