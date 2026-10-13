(() => {
  const cards = [...document.querySelectorAll('[data-project-card]')];
  const groups = [...document.querySelectorAll('[data-filter-group]')];
  const count = document.querySelector('.results-count');
  const empty = document.querySelector('[data-empty]');
  if (!cards.length || !groups.length) return;

  const state = Object.fromEntries(groups.map((group) => [group.dataset.filterGroup, 'all']));

  const update = () => {
    let visible = 0;
    cards.forEach((card) => {
      const matches = Object.entries(state).every(
        ([key, value]) => value === 'all' || card.dataset[key].split(' ').includes(value)
      );
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'} shown`;
    empty.hidden = visible !== 0;
  };

  groups.forEach((group) => {
    const key = group.dataset.filterGroup;
    const chips = [...group.querySelectorAll('.chip')];
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((other) => other.classList.toggle('is-active', other === chip));
        state[key] = chip.dataset.value;
        update();
      });
    });
  });

  document.querySelector('[data-reset]').addEventListener('click', () => {
    groups.forEach((group) => {
      const chips = [...group.querySelectorAll('.chip')];
      chips.forEach((chip, index) => chip.classList.toggle('is-active', index === 0));
      state[group.dataset.filterGroup] = 'all';
    });
    update();
  });

  update();
})();
