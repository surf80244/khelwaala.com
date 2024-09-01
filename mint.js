            const scriptURL = 'https://script.google.com/macros/s/AKfycbyS7f6jeAY_0ZeKNJQMQ4EeRcoaPN6wLS3Gqf0vv9UKiIkjDGpOo41kaQlXpbJlLI7q/exec'
            const form = document.forms['signupform']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(window.location.href="thank-you.html")
                .catch(error => console.error('Error!', error.message))
            })