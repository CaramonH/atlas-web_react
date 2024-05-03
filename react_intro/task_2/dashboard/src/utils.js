function getFullYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Atlas School';
  } else {
    return 'Atlas School main dashboard';
  }
}

export { getFullYear, getFooterCopy };