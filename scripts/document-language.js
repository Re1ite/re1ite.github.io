hexo.extend.filter.register('after_render:html', (html) => {
  const language = hexo.config.language;
  if (typeof language !== 'string' || !/^[a-z0-9-]+$/i.test(language)) return html;

  // Vivia does not set a language on the root element.
  return html.replace(/<html\b(?![^>]*\blang\s*=)/i, `<html lang="${language}"`);
});
