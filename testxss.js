(async () => {
  // Fetch the CSRF token
  const csrfResponse = await fetch('https://www.scribd.com/csrf_token', {
    method: 'GET',
    credentials: 'include',  // This ensures cookies are sent along with the request
  });
  
  const csrfData = await csrfResponse.json();
  const csrfToken = csrfData.csrf_token;

  // Prepare the POST data
  const postData = new URLSearchParams({
    utf8: '✓',
    authenticity_token: csrfToken,
    'email_address[email]': 'abctacve@test.com'
  });

  // Make the POST request
  const response = await fetch('https://www.scribd.com/payments/email', {
    method: 'POST',
    credentials: 'include',  // This ensures cookies are sent along with the request
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'Sec-Gpc': '1',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-User': '?1',
      'Sec-Fetch-Dest': 'document',
      'Referer': 'https://www.scribd.com/payments/email',
      'Accept-Encoding': 'gzip, deflate',
      'Cache-Control': 'max-age=0',
      'Origin': 'https://www.scribd.com',
    },
    body: postData.toString()
  });

  // Handle the response (optional)
  if (response.ok) {
    console.log('POST request was successful');
  } else {
    console.error('POST request failed');
  }
})();
