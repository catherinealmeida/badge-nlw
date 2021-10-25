const linksSocialMedia = {
  /*sample demostration*/ github: 'catherinealmeida',
  youtube: 'catherine',
  facebook: 'catherine',
  instagram: 'catherinesdalmeida',
  twitter: 'cathsdalmeida'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  /*template string - to change all users*/

  fetch(url)
    .then(response => response.json()) //arrow function
    .then(data => {
      userName.textContent = data.name
      userLogin.textContent = data.login
      userLink.href = data.html_url
      /*
      
    })
}
getGitHubProfileInfos()
