// helper inside the component
// utils/pathUtils.js
export function buildLanguageHref(pathname = '', PERoute) {
  // Ensure pathname is always a string
  if (typeof pathname !== 'string') pathname = '';

  // Remove query or hash temporarily (if you want to preserve them)
  const [base, suffix] = pathname.split(/(?=[?#])/); // splits at first ? or #
  const cleanBase = base.replace(/^\/+/, ''); // remove leading slash(es)
  const isPersianPath = /^Pe(\/|$)/i.test(cleanBase);

  if (PERoute && isPersianPath) {
    // currently Persian → go English
    const englishPath = cleanBase.replace(/^Pe(\/)?/i, '');
    return '/' + (englishPath || ''); // "/" if empty
  } else {
    // currently English → go Persian
    return cleanBase ? `/Pe/${cleanBase}` : '/Pe';
  }
}

