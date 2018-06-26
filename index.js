function getIssues() {
  fetch(
    "https://api.github.com/repos/jojojoleeleelee/javascript-fetch-lab/issues",
    {
      method: 'get',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let html = '<ul>'
  for (const issue of json) {
    html += `<li>${issue.title}<br><p>${issue.body}</p></li>`
  }
  html += '</ul>'
  $('#issues').html(html)
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value

  const data = {
    title: title,
    body: body
  }

  fetch('https://api.github.com/repos/jojojoleeleelee/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(data),
    header: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues())
}

function showResults(json) {
  const link = `<a href='${json.html_url}'>${json.html_url}</a>`
  $('#result').html(link)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch("https://api.github.com/repos/" + repo + "/forks", {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResult(json))
}

function getToken() {
  //change to your token to run in browser, but set
  const token = ''

  //back to '' before committing so all tests pass
  return ''
}

// const postData = {
//   body: 'Great Stuff!'
// };
//
// fetch('https://api.github.com/repos/:your_ghname/:your_repo/commits/:sha/comments', {
//   method: 'POST',
//   body: JSON.stringify(postData),
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => console.log(res));
//
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json))
