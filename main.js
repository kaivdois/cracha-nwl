 // variaveis: let (variavel simples mutavel) ou const (n da pra mudar)

 const LinkSocialMedia = {
  github: 'kaivdois',
  youtube: '',
  facebook: 'kaivdois',
  instagram: 'caiodois',
  twitter: 'DarksideV5'
}

function changeSocialMediaLinks() {
  
  for (let li of social_links.children) {

  const social = li.getAttribute('class')
  
    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`

  }
}
 changeSocialMediaLinks()

 function getGitHubProfileInfos() {
   const url = `https://api.github.com/users/${LinkSocialMedia.github}`
  
 
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      userLink.href = data.html_url
    })
  }
  getGitHubProfileInfos()
  
  // ARROW FUNCTIONS
  //Function nomedafuncao(argumentos){
  //  code
  //}
  // argumento => {

  //}

// i++
// i= i + 1
// computdor 012345
// humano    123456