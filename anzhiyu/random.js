var posts=["undefined/midjourney-dragon-ball-avatar/","undefined/iphone17-pro-camera-upgrade/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };