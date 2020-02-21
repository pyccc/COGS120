function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallBack(response);
  });
}

function statusChangeCallBack(response) {

    console.log('Successfuly logged in with Facebook');
    location.href = "home";

}
