var posts=["undefined/midjourney-dragon-ball-avatar/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };