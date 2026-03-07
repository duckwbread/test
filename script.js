const petitionModal = document.getElementById('petitionModal');
const donateModal = document.getElementById('donateModal');
const toast = document.getElementById('toast');

const openPetitionButtons = [document.getElementById('openPetition'), document.getElementById('openPetition2')].filter(Boolean);
const openDonateButtons = [document.getElementById('openDonate'), document.getElementById('openDonate2')].filter(Boolean);

let activeModal = null;
let lastTrigger = null;
let toastTimer = null;

function showToast(message, type = 'success') {
  if (!toast) return;
  toast.classList.remove('success', 'warning', 'hidden');
  toast.classList.add(type);
  toast.textContent = message;

  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('success', 'warning');
  }, 2800);
}

function getFocusableElements(modal) {
  if (!modal) return [];
  return Array.from(
    modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
  ).filter((el) => !el.hasAttribute('disabled'));
}

function openModal(modal, trigger = null) {
  if (!modal) return;
  lastTrigger = trigger;
  modal.classList.remove('hidden');
  activeModal = modal;
  document.body.style.overflow = 'hidden';
  const focusables = getFocusableElements(modal);
  if (focusables.length) focusables[0].focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.add('hidden');
  activeModal = null;
  document.body.style.overflow = '';
  if (lastTrigger) lastTrigger.focus();
}

function markInvalid(field) {
  if (!field) return;
  field.classList.add('invalid');
  field.addEventListener('input', () => field.classList.remove('invalid'), { once: true });
}

function validatePetitionForm() {
  const name = document.getElementById('petitionName');
  const email = document.getElementById('petitionEmail');
  if (!name || !email) return false;

  let valid = true;
  if (name.value.trim().length < 2) {
    markInvalid(name);
    valid = false;
  }
  if (!email.validity.valid) {
    markInvalid(email);
    valid = false;
  }
  return valid;
}

function validateDonationForm() {
  const method = document.getElementById('method');
  const amount = document.getElementById('amount');
  const donorName = document.getElementById('donorName');
  const donorEmail = document.getElementById('donorEmail');
  if (!method || !amount || !donorName || !donorEmail) return false;

  let valid = true;
  if (!method.value) {
    markInvalid(method);
    valid = false;
  }
  if (Number(amount.value) < 1) {
    markInvalid(amount);
    valid = false;
  }
  if (donorName.value.trim().length < 2) {
    markInvalid(donorName);
    valid = false;
  }
  if (!donorEmail.validity.valid) {
    markInvalid(donorEmail);
    valid = false;
  }

  return valid;
}

function initImageHealthCheck() {
  const images = Array.from(document.querySelectorAll('img[data-required-image="true"]'));
  if (!images.length) return;

  let brokenCount = 0;
  images.forEach((img) => {
    img.addEventListener('error', () => {
      img.classList.add('image-error');
      brokenCount += 1;
      showToast(`Image failed to load: ${img.getAttribute('src')}`, 'warning');
    });
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const toast = $('#toast');
  let activeModal = null;

  const flash = (message, warning = false) => {
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast${warning ? ' warning' : ''}`;
    clearTimeout(flash.timer);
    flash.timer = setTimeout(() => (toast.className = 'toast hidden'), 3000);
  };

  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    activeModal = modal;
    modal.querySelector('input,select,button')?.focus();
  };

  const closeModal = (modal = activeModal) => {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    activeModal = null;
  };

  const blobToDataUrl = (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

  window.addEventListener('load', () => {
    const nonLazy = images.filter((img) => img.loading !== 'lazy');
    const unloaded = nonLazy.filter((img) => !img.complete || img.naturalWidth === 0);
    if (unloaded.length && brokenCount === 0) {
      unloaded.forEach((img) => img.classList.add('image-error'));
      showToast(`Detected ${unloaded.length} image loading issue(s).`, 'warning');
  const inlineImage = async (img) => {
    if (!img || img.src.startsWith('data:')) return;
    try {
      const res = await fetch(img.src);
      if (!res.ok) throw new Error('Image fetch failed');
      img.src = await blobToDataUrl(await res.blob());
    } catch {
      // leave source untouched if conversion fails
    }
  });
}
  };

openPetitionButtons.forEach((btn) => {
  btn.addEventListener('click', () => openModal(petitionModal, btn));
});
  const inlineImagesForExport = async () => {
    const images = $$('img[data-export-inline="true"]');
    await Promise.all(images.map(inlineImage));
  };

openDonateButtons.forEach((btn) => {
  btn.addEventListener('click', () => openModal(donateModal, btn));
});

document.querySelectorAll('[data-close]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-close');
    closeModal(document.getElementById(id));
  $$('[data-open-modal]').forEach((button) => {
    button.addEventListener('click', () => openModal(button.dataset.openModal));
  });
});

window.addEventListener('click', (event) => {
  if (event.target === petitionModal) closeModal(petitionModal);
  if (event.target === donateModal) closeModal(donateModal);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activeModal) {
    closeModal(activeModal);
    return;
  }

  if (event.key === 'Tab' && activeModal) {
    const focusables = getFocusableElements(activeModal);
    if (!focusables.length) return;
  $$('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => closeModal(button.closest('.modal')));
  });

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const current = document.activeElement;
  $$('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => event.target === modal && closeModal(modal));
  });

    if (event.shiftKey && current === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && current === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

const petitionForm = document.getElementById('petitionForm');
if (petitionForm) {
  petitionForm.addEventListener('submit', (event) => {
  $('#petitionForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validatePetitionForm()) {
      showToast('Please enter a valid full name and email for the petition.', 'warning');
    const name = $('#petitionName')?.value.trim() || '';
    const email = $('#petitionEmail');
    if (name.length < 2 || !email?.checkValidity()) {
      flash('Please enter a valid full name and email.', true);
      return;
    }
    const fullName = document.getElementById('petitionName').value.trim();
    petitionForm.reset();
    closeModal(petitionModal);
    showToast(`Thanks ${fullName}, your petition signup is recorded.`, 'success');
    event.target.reset();
    closeModal();
    flash(`Thanks ${name}, your petition signup is recorded.`);
  });
}

const donateForm = document.getElementById('donateForm');
if (donateForm) {
  donateForm.addEventListener('submit', (event) => {
  $('#donateForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validateDonationForm()) {
      showToast('Please complete payment method, amount, name, and email.', 'warning');
    const amount = Number($('#amount')?.value || 0);
    const method = $('#method')?.value;
    if (amount < 1 || !method) {
      flash('Please enter donation amount and method.', true);
      return;
    }
    const amount = document.getElementById('amount').value;
    donateForm.reset();
    closeModal(donateModal);
    showToast(`Thank you for your $${amount} donation to BSA.`, 'success');
    event.target.reset();
    closeModal();
    flash(`Thank you for your $${amount} donation.`);
  });
}

initImageHealthCheck();
  $('#downloadPage')?.addEventListener('click', async () => {
    await inlineImagesForExport();
    const html = '<!doctype html>\n' + document.documentElement.outerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = Object.assign(document.createElement('a'), {
      href: url,
      download: 'blueshield-offline.html'
    });
    link.click();
    URL.revokeObjectURL(url);
    flash('Downloaded offline HTML with embedded base64 images.');
  });
})();
