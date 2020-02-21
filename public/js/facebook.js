function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallBack(response);
  });
}

function statusChangeCallBack(response) {
  if (response.status == 'connected') {
    console.log('Successfuly logged in with Facebook');
    location.href = "home";
  }
}
