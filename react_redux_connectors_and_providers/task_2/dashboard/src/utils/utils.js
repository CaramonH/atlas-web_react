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

function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

export { getFullYear, getFooterCopy, getLatestNotification };